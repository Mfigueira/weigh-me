import { useState } from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis, VictoryTheme } from 'victory';

export const WeighingChart = ({ weighings }) => {
  const [selectedDomain, setSelectedDomain] = useState({});
  const [zoomDomain, setZoomDomain] = useState({});

  const data = weighings.map(weighing => ({ x: new Date(weighing.datetime), y: weighing.weight }));

  const handleZoom = domain => setSelectedDomain(domain);

  const handleBrush = domain => setZoomDomain(domain);

  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        height={300}
        scale={{ x: "time" }}
        domainPadding={{ y: 20 }}
        containerComponent={
          <VictoryZoomContainer
            responsive={true}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
            style={{ margin: 'auto', width: '95%', height: '300px' }}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" }
          }}
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
      </VictoryChart>

      <VictoryChart
        height={90}
        scale={{ x: "time" }}
        padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
        containerComponent={
          <VictoryBrushContainer
            responsive={true}
            brushDimension="x"
            brushDomain={selectedDomain}
            onBrushDomainChange={handleBrush}
            style={{ margin: '0 auto 3rem auto', width: '95%', height: '90px' }}
          />
        }
      >
        <VictoryAxis />
        <VictoryLine
          style={{
            data: { stroke: "tomato" }
          }}
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />
      </VictoryChart>
    </>
  );
}