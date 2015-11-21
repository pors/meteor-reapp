App = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/preferences">Preferences</Link></li>
          <li><Link to="/">Meteor Reapp</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
});
