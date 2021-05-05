import { useState, useEffect } from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
  VictoryScatter
} from 'victory';

export const WeighingsChart = ({ weighings }) => {
  const [selectedDomain, setSelectedDomain] = useState({});
  const [zoomDomain, setZoomDomain] = useState({});
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = e => setWidth(e.target.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    // Removes listener on unmount
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const data = weighings.map(weighing => ({ x: new Date(weighing.datetime), y: weighing.weight }));

  const handleZoom = domain => setSelectedDomain(domain);

  const handleBrush = domain => setZoomDomain(domain);

  return (
    <>
      <VictoryChart
        width={width}
        theme={VictoryTheme.material}
        height={300}
        scale={{ x: "time" }}
        domainPadding={{ y: 20, x: 20 }}
        containerComponent={
          <VictoryZoomContainer
            responsive={true}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
            style={{ margin: 'auto', width: '90%', height: '300px' }}
          />
        }
      >
        <VictoryLine
          data={data}
          animate={{
            onLoad: { duration: 1200 }
          }}
          style={{
            data: { stroke: "tomato" }
          }}
        />
        <VictoryScatter
          data={data}
          animate={{
            onLoad: { duration: 1200 }
          }}
          style={{ data: { fill: "tomato" } }}
        />
      </VictoryChart>

      <VictoryChart
        width={width}
        height={90}
        scale={{ x: "time" }}
        domainPadding={{ y: 5, x: 19 }}
        padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            responsive={true}
            brushDimension="x"
            brushDomain={selectedDomain}
            onBrushDomainChange={handleBrush}
            style={{ margin: '0 auto 3rem auto', width: '90%', height: '90px' }}
          />
        }
      >
        <VictoryAxis />
        <VictoryLine
          data={data}
          animate={{
            onLoad: { duration: 1200 }
          }}
          style={{
            data: { stroke: "tomato" }
          }}
        />
      </VictoryChart>
    </>
  );
}