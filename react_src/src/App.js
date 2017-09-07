import React, { Component } from 'react';
import update from 'immutability-helper'
import './foundation.css';
import { 
  Button, Colors, Sizes, 
  GridContainer, Grid, Cell 
} from 'react-foundation';

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
    this.getSummaryStats = this.getSummaryStats.bind(this)
  }

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

        //const url = 'https://localhost:8000/create_portfolio/get_optimal_weights?'
        const url = 'https://sheltered-coast-96154.herokuapp.com/create_portfolio/get_optimal_weights?'
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
          .then((response) => {
            return response.json()
          }).then((data) => {
            
            console.log('Parsed data', data) // try opening windows and render
            console.log('optimal weights: ', data.optimal_weights)

            let weights = JSON.parse(data.optimal_weights)

            Object.keys(weights).map((weight) => {
              console.log(weight)
              console.log(weights[weight])

              if (weight === "Cash") {

                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[0].Cash) 

                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          0: {
                            "Cash": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[0])
                )
              } // if cash


              if (weight === "S&P 500") {
                console.log("yes it's S&P 500")
                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[1]["S&P 500"]) 
                
                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          1: {
                            "S&P 500": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[1])
                )
              } // if S&P 500

              if (weight === "MSCI Europe") {
                console.log("yes it's MSCI Europe")
                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[2]) 
                
                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          2: {
                            "MSCI Europe": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[2])
                )
              } // if MSCI Europe

              if (weight === "MSCI Emerging Markets") {
                console.log("yes it's MSCI Emerging Markets")
                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[3]) 
                
                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          3: {
                            "MSCI Emerging Markets": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[3])
                )
              } // if MSCI Emerging Markets

              if (weight === "ICE US Core Bond") {
                console.log("yes it's ICE US Core Bond")
                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[4]) 
                
                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          4: {
                            "ICE US Core Bond": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[4])
                )
              } // if ICE US Core Bond

              if (weight === "Gold") {
                console.log("yes it's Gold")
                console.log("before, weight is: ", this.state.portfolioAnalysis[0].optimal_weights[5]) 
                
                  let newState = update(this.state, {
                      portfolioAnalysis: { 
                        0: {
                        optimal_weights: { 
                          5: {
                            "Gold": {
                              $set: (weights[weight]*100).toFixed(4)
                          }
                        } 
                      }
                    }}}
                  )

                this.setState(newState,
                  () => console.log('after change this.state', this.state.portfolioAnalysis[0].optimal_weights[5])
                )
              } // if ICE US Core Bond
            })

          }).catch((ex) => {
            console.error('Getting data failed', ex)
          })

  } // getSummaryStats


  render() {
    return (
      <div>

        <div className="grid-x grid-padding-x">
          <h1>Create new portfolio</h1>
        </div>
        
        <div className="grid-x grid-padding-x">
          
            <div className="medium-6 large-4 cell">
                
                <div className="primary callout">

                  <AssetMenu updateAssetSelection={this.updateAssetSelection} />
                  
                  <div className="primary callout">
                    <AssetSelected selectedAssets={this.state.selectedAssets} />
                  </div>
                                    
                  <div className="button-basics-example">                  
                    <Button color={Colors.PRIMARY} size={Sizes.SMALL} type="submit" id="analyzePortfolio" onClick={() => this.getSummaryStats(this.updateOptimalWeights)}>Analyze Portfolio</Button>
                  </div>
          
                </div>

            </div>

            <div className="medium-6 large-8 cell">
                                
                  <div className="primary callout">
                    <ResearchPanel chart={<Chart />} />
                  </div>
                

                  <div className="primary callout">
                    <PortfolioAnalysis portfolioAnalysis={this.state.portfolioAnalysis} />
                  </div>
                
            </div>

        </div>

      </div>
    );
  }
} 

////////////////
// Future enhancements
// <TimeHorizonSelection />
// <RiskToleranceSelection />
// <TargetReturnSelection />  
// <Button color={Colors.PRIMARY} size={Sizes.SMALL} type="submit" id="implementPortfolio">Implement Portfolio</Button>
////////////////


// Component: Select asset classes
class AssetMenu extends Component { //createReactClass

  handleClick(e, action_asset) {
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
              <td><Button size={Sizes.SMALL} type="submit" id="explore_cash">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_cash" onClick={(e) => this.handleClick(e, "add_cash")}>Add</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_cash" onClick={(e) => this.handleClick(e, "remove_cash")}>Remove</Button></td>
            </tr>
            <tr>
              <td>S&P 500 </td>
              <td><Button size={Sizes.SMALL} type="submit" id="explore_sp500">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_sp500" onClick={(e) => this.handleClick(e, "add_sp500")}>Add</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_sp500" onClick={(e) => this.handleClick(e, "remove_sp500")}>Remove</Button></td>
            </tr>
            <tr>
              <td>MSCI Europe</td>
              <td><Button size={Sizes.SMALL} type="submit" id="explore_europe">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_europe" onClick={(e) => this.handleClick(e, "add_europe")}>Add</Button> </td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_europe" onClick={(e) => this.handleClick(e, "remove_europe")}>Remove</Button></td>
            </tr>
            <tr>
              <td>MSCI Emerging Market </td>
              <td><Button size={Sizes.SMALL} type="submit" id="explore_EM">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_EM" onClick={(e) => this.handleClick(e, "add_EM")}>Add</Button> </td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_EM" onClick={(e) => this.handleClick(e, "remove_EM")}>Remove</Button></td>
            </tr>
            <tr>
              <td>ICE U.S. Treasury Core Bond Index</td>
              <td><Button size={Sizes.SMALL} type="submit" id="explore_bonds">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_bonds" onClick={(e) => this.handleClick(e, "add_bonds")}>Add</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_bonds" onClick={(e) => this.handleClick(e, "remove_bonds")}>Remove</Button></td>
            </tr>
            <tr>
              <td>Gold</td>
              <td><Button size={Sizes.SMALL} type="submit" id="explore_gold">Research</Button></td>
              <td><Button size={Sizes.SMALL} color={Colors.SUCCESS} type="submit" id="add_gold" onClick={(e) => this.handleClick(e, "add_gold")}>Add</Button> </td>
              <td><Button size={Sizes.SMALL} color={Colors.ALERT} type="submit" id="remove_gold" onClick={(e) => this.handleClick(e, "remove_gold")}>Remove</Button></td>
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
   
    let portfolioAnalysisComponent = this.props.portfolioAnalysis.map(function(dataField) {

        let optimal_weights = dataField.optimal_weights.map(function(obj, index) {

          let asset = Object.keys(obj)[0]
          let value = obj[asset]

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
