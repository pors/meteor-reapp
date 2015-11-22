import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from '../components/app';
import Home from '../components/home';
import Preferences from '../components/preferences';
import Favorites from '../components/favorites';
import NoMatch from '../components/notfound';

Meteor.startup(function () {

  const history = createBrowserHistory();
  
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="preferences" component={Preferences} />
      <Route path="favorites" component={Favorites} />
      <Route path="*" component={NoMatch}/>
    </Route>
  );
  
  ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app')) ;
});
