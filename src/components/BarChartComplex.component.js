import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip, VictoryLine, VictoryZoomContainer } from 'victory';


export default class BarChartComplex extends Component {
    constructor() {
      super();
      this.state = {
        clicked: false,
        style: {
          data: { fill: "tomato" }
        }
      };
    }
  
    render() {
      return (
        <VictoryChart
          width={1000}
          domainPadding={{ x: 100, y: [0, 100] }}
          scale={{ x: "time", y: "total" }}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              zoomDomain={{x: [0, 10]}}
            />
          }
        >
          <VictoryBar
            labelComponent={<VictoryTooltip/>}
            
            style={{ data: { fill: "#A1DAF7" } }}
            data={[
              { x: 'Jan-22', y: 15, label: '15' },
              { x: 'Feb-22', y: 18, label: '18' },
              { x: 'Mar-22', y: 24, label: '24' },
              { x: 'Apr-22', y: 27, label: '27' },
              { x: 'May-22', y: 32, label: '32' },
              { x: 'Jun-22', y: 24, label: '24' },
              { x: 'Jul-22', y: 16, label: '16' },
              { x: 'Aug-22', y: 19, label: '19' },
              { x: 'Sep-22', y: 28, label: '28' },
              { x: 'Oct-22', y: 30, label: '30' },
              { x: 'Nov-22', y: 32, label: '32' },
              { x: 'Dec-22', y: 26, label: '26' },
            ]}
            x='x'
            y='y'
          />
          <VictoryLine
            style={{
              data: { stroke: "#002677" }
            }}
            data={[
              { x2: 'Jan-22', z2: 2 },
              { x2: 'Feb-22', z2: 9 },
              { x2: 'Mar-22', z2: 6 },
              { x2: 'Apr-22', z2: 18 },
              { x2: 'May-22', z2: 14 },
              { x2: 'Jun-22', z2: 19 },
              { x2: 'Jul-22', z2: 8 },
              { x2: 'Aug-22', z2: 24  },
              { x2: 'Sep-22', z2: 16 },
              { x2: 'Oct-22', z2: 0 },
              { x2: 'Nov-22', z2: 4 },
              { x2: 'Dec-22', z2: 8 },
            ]}
            x='x2'
            y='z2'
          />
          <VictoryLine
            style={{
              data: { stroke: "#65A124" }
            }}
            data={[
              { x: 'Jan-22', z: 2 },
              { x: 'Feb-22', z: 8 },
              { x: 'Mar-22', z: 4 },
              { x: 'Apr-22', z: 16 },
              { x: 'May-22', z: 24 },
              { x: 'Jun-22', z: 18 },
              { x: 'Jul-22', z: 12 },
              { x: 'Aug-22', z: 19 },
              { x: 'Sep-22', z: 10 },
              { x: 'Oct-22', z: 7 },
              { x: 'Nov-22', z: 26 },
              { x: 'Dec-22', z: 14 },
            ]}
            x='x'
            y='z'
          />
          <VictoryAxis style={{ axis: {strokeWidth: "none"} }} />
        </VictoryChart>
      );
    }
}