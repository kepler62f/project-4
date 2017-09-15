import React, { Component } from 'react';
import update from 'immutability-helper'
import $ from 'jquery'
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import './App.css'
import './foundation-icons/foundation-icons.css'
//import Foundation from 'react-foundation';
import { 
  Button, Colors, Sizes, 
  GridContainer, Grid, Cell,
  Breadcrumbs, BreadcrumbItem, 
  Inline, Menu, MenuItem, MenuText, Icon
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
      assetInfoBackground: "",
      portfolioAnalysis: [{
        loading: false,
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
    this.displayAssetInfo = this.displayAssetInfo.bind(this)
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

        let newRet = update(this.state, {
                  portfolioAnalysis: { 
                    0: {
                    loading: { 
                          $set: true
                      }
                    } 
                  }
                }
              )

        this.setState(newRet,
          () => console.log('after change this.state loading:', this.state.portfolioAnalysis[0].loading)
        )

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
            
            let loadStatus = update(this.state, {
                  portfolioAnalysis: { 
                    0: {
                    loading: { 
                          $set: false
                      }
                    } 
                  }
                }
              )

            this.setState(loadStatus,
              () => console.log('after fetch return this.state loading:', this.state.portfolioAnalysis[0].loading)
            )

            console.log('Parsed data', data) // try opening windows and render
            console.log('optimal weights: ', data.optimal_weights)
            console.log('expected_return: ', data.expected_return)
            console.log('expected_variance: ', data.expected_variance)

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

            }) // map

          console.log("before, expected_return is: ", this.state.portfolioAnalysis[0].expected_return) 
                
              let newRet = update(this.state, {
                  portfolioAnalysis: { 
                    0: {
                    expected_return: { 
                          $set: (data.expected_return*100).toFixed(4)
                      }
                    } 
                  }
                }
              )

            this.setState(newRet,
              () => console.log('after change this.state exp ret:', this.state.portfolioAnalysis[0].expected_return)
            )

            console.log("before, expected_return is: ", this.state.portfolioAnalysis[0].expected_variance) 
            
              let newVariance = update(this.state, {
                  portfolioAnalysis: { 
                    0: {
                    expected_variance: { 
                          $set: (data.expected_variance*100).toFixed(4)
                      }
                    } 
                  }
                }
              )

            this.setState(newVariance,
              () => console.log('after change this.state exp ret:', this.state.portfolioAnalysis[0].expected_variance)
            )

          }).catch((ex) => {
            console.error('Getting data failed', ex)
          })

  } // getSummaryStats


  displayAssetInfo(asset) {

    // pull out research info
    if (asset === "explore_cash") {
      this.setState({assetInfoBackground : "Cash could serve as a benchmark for all investments. Investments that don’t outperform cash have failed. Cash also provides a safe haven for funds when financial markets are volatile or appear overvalued. Cash gives a return from the interest earned when left in a bank. However cash is not risk free since its value can be eroded over time by inflation."})
    } else if (asset === "explore_sp500") {
      this.setState({assetInfoBackground : "The S&P 500 is widely regarded as the gauge of large-cap U.S. equities. There is over USD 7.8 trillion benchmarked to the index, with index assets comprising approximately USD 2.2 trillion of this total. The index includes 500 leading companies and captures approximately 80% coverage of available market capitalization."})
    } else if (asset === "explore_europe") {
      this.setState({assetInfoBackground : "The MSCI Europe Index captures large and mid cap representation across 15 Developed Markets (DM) countries in Europe. With over 400 constituents, the index covers approximately 85% of the free float-adjusted market capitalization across the European Developed Markets equity universe."})
    } else if (asset === "explore_EM") {
      this.setState({assetInfoBackground : "The MSCI Emerging Markets Index captures large and mid cap representation across 24 Emerging Markets (EM) countries. With 842 constituents, the index covers approximately 85% of the free float-adjusted market capitalization in each country."})
    } else if (asset === "explore_bonds") {
      this.setState({assetInfoBackground : "The ICE U.S. Treasury Core Bond Index is an index composing of U.S. Treasuries ranging from 1-30 year maturities"})
    } else if (asset === "explore_gold") {
      this.setState({assetInfoBackground : "Gold, the yellow metal, is seen traditionally seen as a safe haven asset that performs well during periods of political or economic distress. Some have considered gold as an inflation hedge or portfolio diversifier."})
    }

  } // displayAssetInfo


  componentDidMount() {
      document.title = "ETFallocator - PortfolioOptimizer";
        //$(document).foundation();
    
  }

  render() {
    return (
      <div>

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text"><h2>ETFallocator</h2></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <a href="">Welcome</a>
              </li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Sign Out</a></li>
            </ul>
          </div>        
        </div>

        <nav aria-label="You are here:" role="navigation">
          <Breadcrumbs>
            <BreadcrumbItem><a>Home</a></BreadcrumbItem>
            <BreadcrumbItem><a>Portfolio</a></BreadcrumbItem>
            <BreadcrumbItem><a>Create New</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Inline showForSr>Current: </Inline> Markowitz Optimized
            </BreadcrumbItem>
          </Breadcrumbs>
        </nav>
      
        <div className="grid-x grid-padding-x">
          
            <div className="medium-6 large-4 cell">
                
                <div className="primary callout">

                  <AssetMenu updateAssetSelection={this.updateAssetSelection} displayAssetInfo={this.displayAssetInfo} />
                  
                  <div className="primary callout">
                    <AssetSelected selectedAssets={this.state.selectedAssets} />
                  </div>
                  
                  <div className="grid-x">

                    <div className="small-4 cell">
                      <div className="button-basics-example">                  
                        <Button color={Colors.PRIMARY} size={Sizes.SMALL} type="submit" id="analyzePortfolio" onClick={() => this.getSummaryStats(this.updateOptimalWeights)}>Analyze Portfolio</Button>
                      </div>
                    </div>

                    <div className="small-8 cell">
                      {(() => {
                          if (this.state.portfolioAnalysis[0].loading) {
                            return (<img src={require("./loading.gif")} height="30px" width="30px" />)
                          }
                        })()}
                    </div>

                  </div>

                </div>

            </div>

            <div className="medium-6 large-8 cell">
                                
                  <div className="primary callout">
                    <ResearchPanel chart={<Chart />} assetInfo={this.state.assetInfoBackground} />
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

//<ul className="dropdown menu" data-dropdown-menu>
//  </ul>

// <div className="Banner">
//   <h1>ETFallocator</h1>
// </div>

// style="width:20px;height:20px;"

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

  handleResearchClick(e, asset) {
    this.props.displayAssetInfo(asset)
  }

  render() {
    return (
      <div className="assetMenu">
        <h4>Select asset classes:</h4>

        <table id="assetListTable">
          
          <tbody>
            <tr>
              <td>Cash</td> 
              <td><Button className="infoButton" size={Sizes.SMALL} isHollow type="submit" id="explore_cash" onClick={(e) => this.handleResearchClick(e, "explore_cash")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_cash" onClick={(e) => this.handleClick(e, "add_cash")}><Icon name="fi-plus"/></Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_cash" onClick={(e) => this.handleClick(e, "remove_cash")}><Icon name="fi-minus"/></Button></td>
            </tr>
            <tr>
              <td>S&P 500</td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="explore_sp500" onClick={(e) => this.handleResearchClick(e, "explore_sp500")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_sp500" onClick={(e) => this.handleClick(e, "add_sp500")}><Icon name="fi-plus"/></Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_sp500" onClick={(e) => this.handleClick(e, "remove_sp500")}><Icon name="fi-minus"/></Button></td>
            </tr>
            <tr>
              <td>MSCI Europe</td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="explore_europe" onClick={(e) => this.handleResearchClick(e, "explore_europe")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_europe" onClick={(e) => this.handleClick(e, "add_europe")}><Icon name="fi-plus"/></Button> </td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_europe" onClick={(e) => this.handleClick(e, "remove_europe")}><Icon name="fi-minus"/></Button></td>
            </tr>
            <tr>
              <td>MSCI Emerging Market</td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="explore_EM" onClick={(e) => this.handleResearchClick(e, "explore_EM")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_EM" onClick={(e) => this.handleClick(e, "add_EM")}><Icon name="fi-plus"/></Button> </td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_EM" onClick={(e) => this.handleClick(e, "remove_EM")}><Icon name="fi-minus"/></Button></td>
            </tr>
            <tr>
              <td>ICE U.S. Treasury Core Bond Index</td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="explore_bonds" onClick={(e) => this.handleResearchClick(e, "explore_bonds")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_bonds" onClick={(e) => this.handleClick(e, "add_bonds")}><Icon name="fi-plus"/></Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_bonds" onClick={(e) => this.handleClick(e, "remove_bonds")}><Icon name="fi-minus"/></Button></td>
            </tr>
            <tr>
              <td>Gold</td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="explore_gold" onClick={(e) => this.handleResearchClick(e, "explore_gold")}>Research</Button></td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="add_gold" onClick={(e) => this.handleClick(e, "add_gold")}><Icon name="fi-plus"/></Button> </td>
              <td><Button size={Sizes.SMALL} isHollow type="submit" id="remove_gold" onClick={(e) => this.handleClick(e, "remove_gold")}><Icon name="fi-minus"/></Button></td>
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
        <h5>Selection:</h5>

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
       <p></p>
      </div>
    );
  }
};

//(Relevant chart of individual asset class will appear here)

class ResearchPanel extends Component {
  render(props) {
    return (
      <div className="ResearchPanel">
        <h4>Research</h4>
          <div>
            {this.props.assetInfo}
          </div>
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
        <h4>Portfolio Analysis</h4>
          <p>Based on historical monthly returns from July 2012 to Jun 2017 for the selected asset classes, with portfolio target return pegged at 70th percentile of average monthly returns, the following allocation would have produced the best risk adjusted returns on a portfolio basis.</p>
          {portfolioAnalysisComponent}
          <p></p>
          <p><b>Expected Return:</b> {this.props.portfolioAnalysis[0].expected_return} %</p>
          <p><b>Expected Variance:</b> {this.props.portfolioAnalysis[0].expected_variance} %</p>
      </div>
    );
  }
};

export default App;
