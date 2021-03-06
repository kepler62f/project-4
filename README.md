# "Create Portfolio" 

--- Feature enhancement of ETFallocator Beta

This project is about creating a portfolio optimization tool for deployment under [ETFallocator (Beta)](https://github.com/kepler62f/project-2), a portfolio management tool for exchange-traded funds investors.

## Live Version

* Access the deployment directly [here](https://kepler62f.github.io/project-4/) 
* Indirect access through ETFallocator by "Create Portfolio" link after sign in [here](https://etfallocator.herokuapp.com)
* Portfolio optimizer API can be viewed as browsable API through an example [query](https://sheltered-coast-96154.herokuapp.com/create_portfolio/get_optimal_weights?addedCash=true&addedSP500=false&addedEurope=true&addedEM=false&addedBonds=true&addedGold=false)

## Built With

Based on prior project experience with backend frameworks like Node.js and Ruby on Rails, I taught myself Python/Django to build this project.

**Backend**
* [Python](https://www.python.org/)
* [Django](https://www.djangoproject.com/)
* [Django Rest Framework](http://www.django-rest-framework.org/) - Toolkit for building Web APIs.
* [Django Cors Header](https://github.com/ottoyiu/django-cors-headers) - An app that adds CORS (Cross-Origin Resource Sharing) headers to responses
* [sslserver](https://github.com/teddziuba/django-sslserver) - Test development site over HTTPS

**Frontend**
* [React.js](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [immutability-helper](https://github.com/kolodny/immutability-helper) - A helper tool for targeting states in deeply nested state structures and changing their values
* [Foundaton](http://foundation.zurb.com/) - A responsive front-end framework
* [Recharts](http://recharts.org/#/en-US) - A charting library built with React.js and D3

**Data Analysis**
* [NumPy](http://www.numpy.org/) - Package for scientific computing with Python
* [Pandas](http://pandas.pydata.org/) -  A Python library providing data structures and data analysis tools.
* [portfolioopt](https://github.com/czielinski/portfolioopt) - This module provides a set of functions for financial portfolio optimization, such as construction of Markowitz portfolios, minimum variance portfolios and tangency portfolios (i.e. maximum Sharpe ratio portfolios) in Python.

**Deployment**
* [Heroku](https://www.heroku.com/)

## User Story / System Flow

A [school of thought](https://blogs.cfainstitute.org/investor/2012/02/16/setting-the-record-straight-on-asset-allocation/) suggests that asset allocation explains significantly the variability of investment returns. The Modern Portfolio Theory (MPT) pioneered by Harry Markowitz is a classic framework used as a guide for portfolio allocation. 

In the "Create Portfolio" feature, the user selects from a menu of given asset classes and requests an analysis of the optimized portfolio allocation according to the MPT framework. The user can add or remove asset classes according to personal investment policy. 

## Future Improvements

* Implement authenticated and permission based API calls and page access
* Research feature: Enrich background information on each asset class e.g. time series chart
* Improve asset classes discovery process: To scale up universe of asset classes available, asset class search feature based on past returns/volatility/geography etc.  
* Portfolio implementation: Simulate ETF trade execution to turn portfolio plan in actual portfolio
* Reduce repetition in React code
* Investigate slow performance of PortfolioOptimizer. 

## Pending Bug Fixes

* To reset all optimal weight values to zero when user send new Portfolio Analysis request

## Acknowledgments

* General Assembly instructor [Prima](https://github.com/primaulia) for project guidance.



