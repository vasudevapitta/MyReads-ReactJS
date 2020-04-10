import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './views/Home/';
import Search from './views/Search/';
import { Switch, Route } from 'react-router-dom';
import Provider, { myContext } from './provider/index';

class App extends React.Component {
  render() {
    return(
      <div className="app">
      <Provider>
          <Switch>
            <Route
            exact
            path={'/'}
            render={() => (
              <myContext.Consumer>
                  {context => <Home {...context} />}
              </myContext.Consumer>
            )}/>
            <Route
            exact
            path={'/Search'}
            render={() => (
              <myContext.Consumer>
                  {context => <Search {...context} />}
              </myContext.Consumer>
            )}/>
          </Switch>
      </Provider>
      </div>
    );
  }
}

export default App
