import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push(`/users/${nextProps.currentUser.id}`);
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      // .then(() => {this.props.history.push(`/users/${this.props.currentUser.id}`)}); 
    
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className="session-errors">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props.history)
    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <h1 className="login-form-header">Welcome back, Quitter.</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="login-form-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="login-form-input last"
                />
              <br/>
              <input type="submit" value="Login" className="login-form-submit-btn" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);