import React from 'react';

// https://developers.google.com/identity/sign-in/web/reference

class GoogleAuth extends React.Component {
  state = {isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        // console.developers.google.com
        clientId: 
          '817214004978-meobnlk133cun3shgasg8rvnfp2o2fnj.apps.googleusercontent.com',
        scope: 'email'

      }).then(() => {
        //the arrow function is going to be invoqued after 
        //the client library has initialised itself
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div> I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn){
      return <div> I am signed in</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  }
  
  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;