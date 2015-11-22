import iOSTheme from 'reapp-ui/themes/ios/theme'
import Theme from 'reapp-ui/helpers/Theme';
import Button from 'reapp-ui/components/Button';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <Theme {...iOSTheme}>
          <Button color="red" />
        </Theme>
      </div>
    );
  }
};
