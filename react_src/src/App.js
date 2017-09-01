import React, { Component } from 'react';
import update from 'immutability-helper'
//import createReactClass from 'create-react-class';
//import logo from './logo.svg';
import './App.css';


// structuring location of state and props ; local/global
// https://stackoverflow.com/questions/21285923/reactjs-two-components-communicating

class App extends Component {

  constructor() {
    super()
    this.state = {
      selectedAssets: {
        addedCash: false,
        addedSP500: false,
        addedEurope: false,
        addedEM: false,
        addedBonds: false,
        addedGold: false
      }
    }
    this.updateAssetSelection = this.updateAssetSelection.bind(this);
  }

  updateAssetSelection(action_asset) {


    if (action_asset === "add_cash") {
      console.log('b4 change this.state ', this.state.selectedAssets)
      console.log('state is ', this.state.selectedAssets.addedCash)
      console.log('!state is ', !this.state.selectedAssets.addedCash)
      if (!this.state.selectedAssets.addedCash) {

        // Info on immutability and its helpers
        // https://github.com/kolodny/immutability-helper
        //https://medium.com/pro-react/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedCash: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_cash") {
      if (this.state.selectedAssets.addedCash) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedCash: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState 
        },
          () => console.log('after change this.state', this.state.selectedAssets)
        )
      } else {
        console.log('already removed')
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Create new portfolio</h1>
        <AssetMenu updateAssetSelection={this.updateAssetSelection} />
        <AssetSelected />
        <TimeHorizonSelection />
        <TargetReturnSelection />
        <RiskToleranceSelection />
        <p><button type="submit" id="summaryStats">Summary Statistics</button></p>
        <p><button type="submit" id="implementPortfolio">Implement Portfolio</button></p>
        <ResearchPanel chart={<Chart />} />
      </div>
    );
  }
} 

// Component: Select asset classes
class AssetMenu extends Component { //createReactClass

  //constructor(props) { // props
    //per(props);
   
  //  super(props)


    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  //}

  // handleClick(e, action_asset) {
  //   console.log(action_asset)
  //   if (action_asset === "add_cash") {
  //       console.log('b4 change this.state', this.state)
  //       if (!this.state.addedCash) {
  //         this.setState(prevState => ({
  //           addedCash: !prevState.addedCash
  //         }),
  //           () => console.log('after change this.state', this.state)
  //         )
  //       } else {
  //         console.log('already added')
  //       }
  //       // setState is async; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
  //   } else if (action_asset === "remove_cash") {
  //     if (this.state.addedCash) {
  //         this.setState(prevState => ({
  //           addedCash: !prevState.addedCash
  //         }),
  //           () => console.log('after change this.state', this.state)
  //         )
  //       } else {
  //         console.log('already removed')
  //       }
  //   }
  // }

  handleClick(e, action_asset) {
    console.log(action_asset)
    this.props.updateAssetSelection(action_asset)
  }

  render() {
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
              <td><button type="submit" id="add_cash" onClick={(e) => this.handleClick(e, "add_cash")}>Add</button></td>
              <td><button type="submit" id="remove_cash" onClick={(e) => this.handleClick(e, "remove_cash")}>Remove</button></td>
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
};

class AssetSelected extends Component {
  render() {
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
};

class TimeHorizonSelection extends Component {
  render() {
    return (
      <div className="timeHorizonSelection">
        <h3>Enter time horizon:</h3>
        <input type="text" id="timeHorizon" placeholder="" ref="" />
      </div>
    );
  }
};

class TargetReturnSelection extends Component {
  render() {
    return (
      <div className="targetReturnSelection">
        <h3>Enter target return:</h3>
        <input type="text" id="targetReturn" placeholder="" ref="" />
      </div>
    );
  }
};

class RiskToleranceSelection extends Component {
  render() {
    return (
      <div className="riskToleranceSelection">
        <h3>Enter risk tolerance:</h3>
        <input type="text" id="riskTolerance" placeholder="" ref="" />
      </div>
    );
  }
};

///////////////////////
// Research Panel
//////////////////////

class Chart extends Component {
  render() {
    return (
      <div className="chart">
       <p>Chart</p>
      </div>
    );
  }
};

class ResearchPanel extends Component {
  render(props) {
    return (
      <div className="ResearchPanel">
        <h3>Research</h3>
          <div className="ResearchPanel-chart">
            {this.props.chart}
          </div>
      </div>
    );
  }
};

export default App;
