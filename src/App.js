import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login"
import Write from "./pages/write";
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
              <Header />
              <Route path='/' exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/write' exact component={Write} />
              {/*动态路由*/}
              <Route path='/detail/:id' exact component={Detail} />
          </BrowserRouter>
        </Provider>
    )
  }
}

export default App;


