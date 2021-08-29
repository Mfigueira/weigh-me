import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
  VictoryScatter,
  VictoryLabel,
} from 'victory';
import ZeroStateChart from './ZeroStateChart';
import classes from './WeighingsChart.module.scss';

const WeighingsChart: React.FC = () => {
  const weighings = useTypedSelector((state) => state.weighings);

  const [selectedDomain, setSelectedDomain] = useState({});
  const [zoomDomain, setZoomDomain] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = (e: any) => setWidth(e.target.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const data = weighings.map((weighing) => ({
    x: new Date(weighing.datetime),
    y: weighing.weight,
  }));

  const handleZoom = (domain: any) => setSelectedDomain(domain);
  const handleBrush = (domain: any) => setZoomDomain(domain);

  return (
    <>
      <h2 className={classes.h2}>Time Graph</h2>

      {weighings.length < 2 ? (
        <ZeroStateChart />
      ) : (
        <>
          <VictoryChart
            width={width}
            theme={VictoryTheme.material}
            height={300}
            scale={{ x: 'time' }}
            domainPadding={{ y: 20, x: 20 }}
            containerComponent={
              <VictoryZoomContainer
                responsive={true}
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={handleZoom}
                className={classes.zoomContainer}
              />
            }
          >
            <VictoryLabel x={13} y={25} text={'Weight (kg)'} />
            <VictoryLine
              data={data}
              animate={{ onLoad: { duration: 1200 } }}
              style={{ data: { stroke: 'tomato' } }}
            />
            <VictoryScatter
              data={data}
              size={4}
              animate={{ onLoad: { duration: 1200 } }}
              style={{ data: { fill: 'tomato' } }}
            />
          </VictoryChart>

          <VictoryChart
            width={width}
            height={90}
            scale={{ x: 'time' }}
            domainPadding={{ y: 5, x: 19 }}
            padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
            containerComponent={
              <VictoryBrushContainer
                responsive={true}
                brushDimension="x"
                brushDomain={selectedDomain}
                onBrushDomainChange={handleBrush}
                className={classes.brushContainer}
              />
            }
          >
            <VictoryAxis />
            <VictoryLine
              data={data}
              animate={{ onLoad: { duration: 1200 } }}
              style={{ data: { stroke: 'tomato' } }}
            />
          </VictoryChart>
        </>
      )}
    </>
  );
};

export default WeighingsChart;
