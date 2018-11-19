/*global window:false */
/*eslint-disable no-magic-numbers */
import React, { Component } from "react";
import { VictoryChart, VictoryCandlestick, VictoryTooltip } from 'victory';

const data = [
  { x: `Sep cycle 2018\nTTL IL Offtake`, open: 59, close: 63, high: 63, low: 59 },
  { x: 'ANZ IL Offtake', open: 64, close: 63, high: 64, low: 63 },
  { x: 'DE IL Offtake', open: 62.5, close: 64, high: 64, low: 62.5 },
  { x: 'NL IL Offtake', open: 63, close: 62, high: 63, low: 62 },
  { x: 'UK IL Offtake', open: 60, close: 62, high: 62, low: 60 },
  { x: `Oct cycle 2019\nTTL IL Offtake`, open: 60, close: 59, high: 60, low: 59 },
];


export default class CandleStickChart extends Component {

  render() {
    return (
        <VictoryChart
            width={1000}
            scale={{ x: "time" }}
        >
          <VictoryCandlestick
            candleRatio={1.33}
            domain={{ x: [0, 0], y: [59, 65] }}
            candleColors={{ positive: "#8BC34A", negative: "#C62828" }}
            data={data}
            style={{ data: { stroke: "none" } }}
          />
        </VictoryChart>
    );
  }
}