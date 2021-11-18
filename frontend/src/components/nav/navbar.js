import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import NavLogo from '../../assets/quitter-nav-logo.svg';

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
            <Link className="nav-bar-link" to={'/signup'}>Sign up</Link>
          </div>
        )
      } else if (this.props.location.pathname === '/signup') {
        return (
          <div className='nav-bar-session'>
            <Link className="nav-bar-link" to={'/login'}>Login</Link>
          </div>
        )
      }
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar-session'>
                <Link to={`/users/${this.props.user.id}`}>Profile</Link>
                <Link to={'/groups'}>Groups</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className='nav-bar-session'>
                <Link className="nav-bar-link" to={'/signup'}>Sign up</Link>
                <Link className="nav-bar-link login" to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div id="nav-bar-container">
            <img id="nav-bar-logo" src={NavLogo}/>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;