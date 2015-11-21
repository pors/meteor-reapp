Meteor.startup(function () {
  Router = ReactRouter.Router;
  Route = ReactRouter.Route;
  IndexRoute = ReactRouter.IndexRoute;
  Link = ReactRouter.Link;
  
  let history = createHistory();
  
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
