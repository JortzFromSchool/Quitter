import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.location.pathname === '/login') {
        return (
          <div className='nav-bar-session'>
            <Link to={'/signup'}>Signup</Link>
          </div>
        )
      } else if (this.props.location.pathname === '/signup') {
        return (
          
        )
      }
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar-session'>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='nav-bar-session'>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
    debugger
      return (
        <div id='nav-bar-container'>
            <h1>Quitter</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;