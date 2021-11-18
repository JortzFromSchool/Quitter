import React from 'react';
import './main_page.css';
import MainLogo from '../../assets/quitter-main-logo.svg';

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div className="inner-splash-container">
          <p className="splash-para">The app to help you quit your bad habits.</p>.
          <p className="splash-para">Be a Quitter.</p>
          <img id="q-main" src={MainLogo} />
        </div>
          <footer>
            Copyright &copy; 2021 Quitter
          </footer>
      </div>
    );
  }
}

export default MainPage;