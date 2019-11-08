import React, { Component, PropTypes } from 'react';
import Button from '@material-ui/core/Button';

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  logoutOnclick() {
    fetch('http://3.15.20.155:5000/signout', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => sessionStorage.clear());
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.logoutOnclick}
        >
          LOGOUT
        </Button>
      </div>
    );
  }
}
export default Logout;
