import { useState, useEffect } from 'react';
import '../../assets/styles/WeighingsChart.css';
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
      <h2 style={{ marginBottom: '0' }}>Time Graph</h2>

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
            style={{ width: '100%', height: '275px' }}
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
            style={{ width: '100%', height: '90px' }}
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