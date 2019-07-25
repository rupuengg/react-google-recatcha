import React from 'react';
import Recaptcha from 'react-recaptcha';

const SITE_KEY = "6LfQiK8UAAAAALa-XcFRrBS7GZUv3xem_DC5OKWZ";

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

  verifyRecaptcha = () => {
    console.log('Verified Captcha');
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
