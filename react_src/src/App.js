import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Create new portfolio</h1>
        <AssetMenu />
        <AssetSelection />
        <TimeHorizonSelection />
        <TargetReturnSelection />
        <RiskToleranceSelection />
        <p><button type="submit" id="summaryStats">Summary Statistics</button></p>
        <p><button type="submit" id="implementPortfolio">Implement Portfolio</button></p>
        <ResearchPanel />
      </div>
    );
  }
}

// Component: Select asset classes
const AssetMenu = React.createClass({
  render: function() {
    return (
      <div className="assetMenu">
        <h3>Select asset classes:</h3>

        <table id="assetListTable">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash</td>
              <td><button type="submit" id="explore_cash">Research</button></td>
              <td><button type="submit" id="add_cash">Add</button></td>
              <td><button type="submit" id="remove_cash">Remove</button></td>
            </tr>
            <tr>
              <td>S&P 500 </td>
              <td><button type="submit" id="explore_sp500">Research</button></td>
              <td><button type="submit" id="add_sp500">Add</button></td>
              <td><button type="submit" id="remove_sps500">Remove</button></td>
            </tr>
            <tr>
              <td>MSCI Europe</td>
              <td><button type="submit" id="explore_europe">Research</button></td>
              <td><button type="submit" id="add_europe">Add</button> </td>
              <td><button type="submit" id="remove_europe">Remove</button></td>
            </tr>
            <tr>
              <td>MSCI Emerging Market </td>
              <td><button type="submit" id="explore_EM">Research</button></td>
              <td><button type="submit" id="add_EM">Add</button> </td>
              <td><button type="submit" id="remove_EM">Remove</button></td>
            </tr>
            <tr>
              <td>ICE U.S. Treasury Core Bond Index</td>
              <td><button type="submit" id="explore_bonds">Research</button></td>
              <td><button type="submit" id="add_bonds">Add</button></td>
              <td><button type="submit" id="remove_bonds">Remove</button></td>
            </tr>
            <tr>
              <td>Gold</td>
              <td><button type="submit" id="explore_gold">Research</button></td>
              <td><button type="submit" id="add_gold">Add</button> </td>
              <td><button type="submit" id="remove_gold">Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

const AssetSelection = React.createClass({
  render: function() {
    return (
      <div className="assetSelection">
        <h3>Selection:</h3>

        <table id="assetSelectionTable">
          <thead>
            <tr>
              <th>Asset Class</th>
              <th>Allocation (%)</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            <tr>
              <td>None</td>
              <td><input type="text" id="allocation1" placeholder="0" ref="" /></td>
            </tr>
          </tbody>
        </table>        
      </div>
    );
  }
});

const TimeHorizonSelection = React.createClass({
  render: function() {
    return (
      <div className="timeHorizonSelection">
        <h3>Enter time horizon:</h3>
        <input type="text" id="timeHorizon" placeholder="" ref="" />
      </div>
    );
  }
});

const TargetReturnSelection = React.createClass({
  render: function() {
    return (
      <div className="targetReturnSelection">
        <h3>Enter target return:</h3>
        <input type="text" id="targetReturn" placeholder="" ref="" />
      </div>
    );
  }
});

const RiskToleranceSelection = React.createClass({
  render: function() {
    return (
      <div className="riskToleranceSelection">
        <h3>Enter risk tolerance:</h3>
        <input type="text" id="riskTolerance" placeholder="" ref="" />
      </div>
    );
  }
});

const ResearchPanel = React.createClass({
  render: function() {
    return (
      <div className="research">
        <h3>Research</h3>
        <chart />
      </div>
    );
  }
});

const chart = React.createClass({
  render: function() {
    return (
      <div className="chart">
        <p>Chart</p>
      </div>
    );
  }
});


export default App;
