import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
// @ts-ignore
import { getNavigations } from '@ijl/cli';

import { GlobalStyle } from '@/assests/global-styles';
import { reducers } from '@/store';
import { CatProfile, Landing, Order } from '@/pages';


const history = createBrowserHistory();

export default () => (
  <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))}>
    <GlobalStyle/>
    <Router history={history}>
      <Switch>
        <Route path={getNavigations()['cat-seasons']} component={Landing} exact/>
        <Route path={getNavigations()['cat-seasons/cats'] + '/:id'} component={CatProfile}/>
        <Route path={getNavigations()['cat-seasons/order']} component={Order}/>
      </Switch>
    </Router>
  </Provider>
)
