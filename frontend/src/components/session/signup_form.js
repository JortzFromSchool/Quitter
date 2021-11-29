import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {},
      demo_user: {
        email: 'demo@demo.com',
        password: 'demomode'
      }
    };
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.currentUser) {
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

   handleDemo() {
    this.props.login(this.state.demo_user)
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user)
    .then(() => this.props.login({
      email: this.state.email,
      password: this.state.password
    }))
  }

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
    return (
      <div className="signup-page-container">
        <div className="signup-form-container">
          <h1 className="signup-form-header">Be a Quitter.</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
              <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                  className="signup-form-input"
                />
              <br/>
                <input type="text"
                  value={this.state.handle}
                  onChange={this.update('handle')}
                  placeholder="Handle"
                  className="signup-form-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className="signup-form-input"
                />
              <br/>
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                  className="signup-form-input last"
                />
              <br/>
              <input type="submit" value="Sign up" className="signup-form-submit-btn"/>
              <button 
                onClick={this.handleDemo}
              >
                Demo mode
              </button>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);