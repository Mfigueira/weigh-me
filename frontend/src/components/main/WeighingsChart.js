import './WeighingsChart.scss';
import graph from '../../assets/img/graph.svg';
import { useState, useEffect, useContext } from 'react';
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
import AppContext from '../../store/app-context';

export const WeighingsChart = () => {
  const ctx = useContext(AppContext);
  const [selectedDomain, setSelectedDomain] = useState({});
  const [zoomDomain, setZoomDomain] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = e => setWidth(e.target.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    // Removes listener on unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const data = ctx.weighings.map(weighing => ({
    x: new Date(weighing.datetime),
    y: weighing.weight,
  }));

  const handleZoom = domain => setSelectedDomain(domain);

  const handleBrush = domain => setZoomDomain(domain);

  return (
    <>
      <h2 style={{ marginBottom: '1rem' }}>Time Graph</h2>

      {ctx.weighings.length < 2 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={graph}
            alt="graph"
            style={{ margin: '30px', width: '180px' }}
          />
          <i style={{ lineHeight: '1.5rem' }}>
            Add at least 2 Weighings to see the Chart
          </i>
        </div>
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
                style={{ width: '100%', height: '275px' }}
              />
            }
          >
            <VictoryLabel
              x={13}
              y={25}
              style={{ fill: 'rgb(69, 90, 100)', fontStyle: 'italic' }}
              text={'Weight (kg)'}
            />
            <VictoryLine
              data={data}
              animate={{
                onLoad: { duration: 1200 },
              }}
              style={{
                data: { stroke: 'tomato' },
              }}
            />
            <VictoryScatter
              data={data}
              size={4}
              animate={{
                onLoad: { duration: 1200 },
              }}
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
                style={{ width: '100%', height: '90px' }}
              />
            }
          >
            <VictoryAxis />
            <VictoryLine
              data={data}
              animate={{
                onLoad: { duration: 1200 },
              }}
              style={{
                data: { stroke: 'tomato' },
              }}
            />
          </VictoryChart>
        </>
      )}
    </>
  );
};
