import React from 'react';
import Recaptcha from 'react-recaptcha';

const SITE_KEY = "6LdSia8UAAAAAA9GBh_JSD26vOin_8A88-xSAMF-";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false
    };
  }

  handleSubcribe = () => {
    if (this.state.isVerified) {
      alert("Captcha is correct");
    } else {
      alert('Wrong captcha');
    }
  }

  recaptchaLoaded = () => {
    console.log('Captcha loaded');
  }

  verifyRecaptcha = (response) => {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Recaptcha Example</h1>

        <input type="text" placeholder="email@example.com" />

        <Recaptcha
          sitekey={SITE_KEY}
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          verifyCallback={this.verifyRecaptcha}
        />

        <button onClick={this.handleSubcribe}>Submit</button>
      </div>
    );
  }
}

export default App;
