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
      },
      proposed_allocation: [0,0,0,0,0,0],
      portfolioAnalysis: [{
        average_returns: [
          {"Cash":0}, 
          {"S&P 500":0}
        ],
        covariance_matrix: [0,0],
        target_return: [0,0],
        optimal_weights: [
          {"Cash": 0},
          {"S&P 500": 0},
          {"MSCI Europe": 0},
          {"MSCI Emerging Markets": 0},
          {"ICE US Core Bond": 0},
          {"Gold": 0}
        ],
        expected_return: 0,
        expected_variance: 0,
        sharpe_ratio: 0
      }]
    }
    this.updateAssetSelection = this.updateAssetSelection.bind(this)
    this.updateOptimalWeights = this.updateOptimalWeights.bind(this)
  }


  updateOptimalWeights(weights) {

    Object.keys(weights).map(function(weight) {
              console.log(weight)
              console.log(weights[weight])

              if (weight === "Cash") {
                console.log("yes it's cash")


                // let newState = update(this.state, {
                //         portfolioAnalysis: {
                //           optimal_weights: {
                //             Cash: {
                //               $set: weights[weight]  
                //             }
                //           }
                //         }
                //   })

                // this.setState(newState,
                //   () => console.log('after change this.state', this.state.portfolioAnalysis.optimal_weights)
                // )

                // this.setState(() => {
                //   let newState = update(this.state, {
                //     0: {
                //       portfolioAnalysis: {
                //         optimal_weights: {
                //           Cash: {
                //             $set: weights[weight]  
                //           }
                //         }
                //       }
                //     }
                //   })
                //   return newState 
                // },
                //   () => console.log('after change this.state', this.state.portfolioAnalysis.optimal_weights)
                // )


              } // if cash
              
    })
  
  } // updateOptimalWeights

  updateAssetSelection(action_asset) {

    if (action_asset === "add_cash") {
      console.log('b4 change this.state ', this.state.selectedAssets)
      console.log('state is ', this.state.selectedAssets.addedCash)
      console.log('!state is ', !this.state.selectedAssets.addedCash)
      console.log('allocation is ', this.state.proposed_allocation)

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
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
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

    if (action_asset === "add_sp500") {

      if (!this.state.selectedAssets.addedSP500) {

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedSP500: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_sp500") {
      if (this.state.selectedAssets.addedSP500) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedSP500: {
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

    if (action_asset === "add_europe") {

      if (!this.state.selectedAssets.addedEurope) {

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedEurope: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_europe") {
      if (this.state.selectedAssets.addedEurope) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedEurope: {
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

    if (action_asset === "add_EM") {

      if (!this.state.selectedAssets.addedEM) {

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedEM: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_EM") {
      if (this.state.selectedAssets.addedEM) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedEM: {
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

    if (action_asset === "add_bonds") {

      if (!this.state.selectedAssets.addedBonds) {

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedBonds: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_bonds") {
      if (this.state.selectedAssets.addedBonds) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedBonds: {
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

    if (action_asset === "add_gold") {

      if (!this.state.selectedAssets.addedGold) {

        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedGold: {
                    $apply: (prev) =>
                      {return !prev}
                    }
                  }
                })
          return newState        
        },
          () => console.log('after change this.state', this.state.selectedAssets)
          // setState is async so use callback; see: https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
        )
      } else {
        console.log('already added')
      }         
    } else if (action_asset === "remove_gold") {
      if (this.state.selectedAssets.addedGold) {
        this.setState((prevState) => {
          let newState = update(prevState, {
                selectedAssets: {
                  addedGold: {
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

  } // method: updateAssetSelection()

  getSummaryStats(updateOptimalWeights) {

        const url = 'http://localhost:8000/create_portfolio/get_optimal_weights?'
        //const url = 'https://immense-refuge-34734.herokuapp.com/create_portfolio/get_optimal_weights?'
        var query = ''

        if (this.state.selectedAssets.addedCash) 
          {query += 'addedCash=true&'}
        else
          {query += 'addedCash=false&'}
        if (this.state.selectedAssets.addedSP500) 
          {query += 'addedSP500=true&'}
        else
          {query += 'addedSP500=false&'}
        if (this.state.selectedAssets.addedEurope) 
          {query += 'addedEurope=true&'}
        else
          {query += 'addedEurope=false&'}
        if (this.state.selectedAssets.addedEM) 
          {query += 'addedEM=true&'}
        else
          {query += 'addedEM=false&'}
        if (this.state.selectedAssets.addedBonds) 
          {query += 'addedBonds=true&'}
        else
          {query += 'addedBonds=false&'}
        if (this.state.selectedAssets.addedGold) 
          {query += 'addedGold=true'}
        else
          {query += 'addedGold=false'}

        const APIstring = url + query
        console.log(APIstring)

        fetch(APIstring)
          .then(function (response) {
            return response.json()
          }).then(function (data) {
            

            console.log('Parsed data', data) // try opening windows and render

            // let wind = window.open(data, "popupWindow", "width=600,height=600,scrollbars=yes");
            // wind.document.write(JSON.stringify(data));

            console.log('optimal weights: ', data.optimal_weights)

            //console.log(typeof(data.optimal_weights)) //
            //console.log(JSON.parse(data.optimal_weights))

            let objects = JSON.parse(data.optimal_weights)
            // console.log("type: ", typeof(objects))

            // Object.keys(objects).map(function(object) {
            //   console.log(object)
            // })

            updateOptimalWeights(objects)

            // object.map(function(obj, index) {  
            //   let asset = Object.keys(obj)[0]
            //   let weight = obj[asset]
            //   console.log('asset: ', asset, '  ', 'weight: ', weight)
            //   //return 
            // })

      //       if (this.state.selectedAssets.addedBonds) {
      //   this.setState((prevState) => {
      //     let newState = update(prevState, {
      //           selectedAssets: {
      //             addedBonds: {
      //               $apply: (prev) =>
      //                 {return !prev}
      //               }
      //             }
      //           })
      //     return newState 
      //   },
      //     () => console.log('after change this.state', this.state.selectedAssets)
      //   )
      // } else {
      //   console.log('already removed')
      // }




          }).catch(function (ex) {
            console.error('Getting data failed', ex)
          })

      } // getSummaryStats


  componentDidMount() {

      // get optimal weights for selected asset classes
      

      
  } // componentDidMount 
  


  render() {
    return (
      <div>
        <h1>Create new portfolio</h1>

        <AssetMenu updateAssetSelection={this.updateAssetSelection} />
        <AssetSelected selectedAssets={this.state.selectedAssets} />
        
        <TargetReturnSelection />
        
        <p><button type="submit" id="analyzePortfolio" onClick={() => this.getSummaryStats(this.updateOptimalWeights)}>Analyze Portfolio</button></p>
        <p><button type="submit" id="implementPortfolio">Implement Portfolio</button></p>
        <ResearchPanel chart={<Chart />} />
        <PortfolioAnalysis portfolioAnalysis={this.state.portfolioAnalysis} />
      </div>
    );
  }
} 

////////////////
// KIV
// <TimeHorizonSelection />
// <RiskToleranceSelection />
////////////////


// class APIdata extends Component {
//   render(props) {
//     return (
//       <div className="APIdata">
//        <p>API data:</p>
//        {this.props.api_resp}
//       </div>
//     );
//   }
// };



// Component: Select asset classes
class AssetMenu extends Component { //createReactClass

  handleClick(e, action_asset) {
    //console.log(action_asset)
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
              <td><button type="submit" id="add_sp500" onClick={(e) => this.handleClick(e, "add_sp500")}>Add</button></td>
              <td><button type="submit" id="remove_sp500" onClick={(e) => this.handleClick(e, "remove_sp500")}>Remove</button></td>
            </tr>
            <tr>
              <td>MSCI Europe</td>
              <td><button type="submit" id="explore_europe">Research</button></td>
              <td><button type="submit" id="add_europe" onClick={(e) => this.handleClick(e, "add_europe")}>Add</button> </td>
              <td><button type="submit" id="remove_europe" onClick={(e) => this.handleClick(e, "remove_europe")}>Remove</button></td>
            </tr>
            <tr>
              <td>MSCI Emerging Market </td>
              <td><button type="submit" id="explore_EM">Research</button></td>
              <td><button type="submit" id="add_EM" onClick={(e) => this.handleClick(e, "add_EM")}>Add</button> </td>
              <td><button type="submit" id="remove_EM" onClick={(e) => this.handleClick(e, "remove_EM")}>Remove</button></td>
            </tr>
            <tr>
              <td>ICE U.S. Treasury Core Bond Index</td>
              <td><button type="submit" id="explore_bonds">Research</button></td>
              <td><button type="submit" id="add_bonds" onClick={(e) => this.handleClick(e, "add_bonds")}>Add</button></td>
              <td><button type="submit" id="remove_bonds" onClick={(e) => this.handleClick(e, "remove_bonds")}>Remove</button></td>
            </tr>
            <tr>
              <td>Gold</td>
              <td><button type="submit" id="explore_gold">Research</button></td>
              <td><button type="submit" id="add_gold" onClick={(e) => this.handleClick(e, "add_gold")}>Add</button> </td>
              <td><button type="submit" id="remove_gold" onClick={(e) => this.handleClick(e, "remove_gold")}>Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

// https://react-cn.github.io/react/tips/if-else-in-JSX.html
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression

// try dynamic table
// https://stackoverflow.com/questions/30281143/react-js-creating-a-table-with-a-dynamic-amount-of-rows-with-an-editable-column


class AssetSelected extends Component {
  render(props) {
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

              {(() => {
                if (this.props.selectedAssets.addedCash) 
                  return (
                    <tr> 
                      <td>Cash</td>
                      <td><input type="text" id="allocation1" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }

              {(() => {
                if (this.props.selectedAssets.addedSP500) 
                  return (
                    <tr> 
                      <td>S&P 500</td>
                      <td><input type="text" id="allocation2" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }

              {(() => {
                if (this.props.selectedAssets.addedEurope) 
                  return (
                    <tr> 
                      <td>MSCI Europe</td>
                      <td><input type="text" id="allocation3" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }

              {(() => {             
                if (this.props.selectedAssets.addedEM) 
                  return (
                    <tr> 
                      <td>MSCI Emerging Markets</td>
                      <td><input type="text" id="allocation4" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }

              {(() => {
                if (this.props.selectedAssets.addedBonds) 
                  return (
                    <tr> 
                      <td>ICE U.S. Treasury Core Bond Index</td>
                      <td><input type="text" id="allocation5" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }

              {(() => {
                if (this.props.selectedAssets.addedGold) 
                  return (
                    <tr> 
                      <td>Gold</td>
                      <td><input type="text" id="allocation6" placeholder="0" ref="" /></td>
                    </tr>
                    )
                })()
              }
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
       <p>(Static info of individual asset class will appear here) </p>
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


// Renderings object (of objects) first wrapped in array:
// https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects

// Iterate object's properties
// https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript

class PortfolioAnalysis extends Component {
  render(props) {

    // let portfolioAnalysisComponent = this.props.portfolioAnalysis.map(function(dataField) {


    //           //Object.keys(dataField.average_returns).forEach(function(key) {}

    //           let average_returns = dataField.average_returns.map(function(obj) {
    //             let asset = Object.keys(obj)[0]
    //             let value = obj[asset]
    //             return (<div>
    //                       {asset} 
    //                       {value}
    //                     </div>)
    //           })

    //           return (
    //                <div>Average Returns: {average_returns}</div>
    //             )
    //         })
    
    let portfolioAnalysisComponent = this.props.portfolioAnalysis.map(function(dataField) {

        let optimal_weights = dataField.optimal_weights.map(function(obj, index) {
          //console.log("kkkk ", Object.keys(obj))
          //console.log("mmmm ", obj)
          let asset = Object.keys(obj)[0]
          let value = obj[asset]
          //console.log("xxxx ", index)
          //console.log("yyyy ", asset)
          //console.log("zzzz ", value)
          return (
                    <tr>
                      <td>{asset}</td>
                      <td>{value}</td>
                    </tr>
                  )
        })

        return (
             <div>
                <table id="optimizedWeights">
                  <thead>
                    <tr>
                      <th>Asset Class</th>
                      <th>Markowitz Optimized Weights (%)</th>
                    </tr>
                  </thead>
                  <tbody id="optimizedWeightsTableBody">
                    {optimal_weights}
                  </tbody>
                </table>
             </div>
          )
    })


    return (
      <div className="PortfolioAnalysis">
        <h3>Portfolio Analysis</h3>
          {portfolioAnalysisComponent}                      
      </div>
    );
  }
};

export default App;


// {this.props.portfolioAnalysis.average_returns}
// {this.props.portfolioAnalysis.covariance_matrix}
          
          // {this.props.portfolioAnalysis.target_return}
          // {this.props.portfolioAnalysis.optimal_weights}
          // {this.props.portfolioAnalysis.expected_return}
          // {this.props.portfolioAnalysis.expected_variance}
          // {this.props.portfolioAnalysis.sharpe_ratio}