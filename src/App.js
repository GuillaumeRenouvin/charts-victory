import React, { Component } from 'react';
import styled from 'styled-components';
import BarChart from './components/BarChart.component';
import BarChartComplex from './components/BarChartComplex.component';
import CandleStickChart from './components/CandleStickChart.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <RowContainer>
          <GraphContainer>
            <BarChart />
          </GraphContainer>
          <GraphContainer>
            <BarChart />
          </GraphContainer>
        </RowContainer>
        <ComplexContainer>
          <BarChartComplex />
        </ComplexContainer>
        <ComplexContainer>
          <CandleStickChart />
        </ComplexContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 25%;
  padding-right: 25%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ComplexContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;

const GraphContainer = styled.div`
  width: 49%;
  height: 45%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;

export default App;
