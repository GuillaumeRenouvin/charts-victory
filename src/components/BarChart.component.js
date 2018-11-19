import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTooltip } from 'victory';


export default class BarChart extends Component {
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
            domainPadding={{ x: 50, y: [0, 40] }}
            scale={{ x: "time", y: "total" }}
        >
            <VictoryBar
                labelComponent={<VictoryTooltip/>}
                style={{ data: { fill: "#026AB5" } }}
                data={[
                    { x: 'Jan', y: 15, label: '15' },
                    { x: 'Feb', y: 18, label: '18' },
                    { x: 'Mar', y: 24, label: '24' },
                    { x: 'Apr', y: 27, label: '27' },
                    { x: 'May', y: 32, label: '32' },
                    { x: 'Jun', y: 24, label: '24' },
                    { x: 'Jul', y: 16, label: '16' },
                    { x: 'Aug', y: 19, label: '19' },
                    { x: 'Sep', y: 28, label: '28' },
                    { x: 'Oct', y: 30, label: '30' },
                    { x: 'Nov', y: 32, label: '32' },
                    { x: 'Dec', y: 26, label: '26' },
                ]}
            />
            <VictoryAxis style={{ axis: {strokeWidth: "none"} }} />
        </VictoryChart>
      );
    }
}