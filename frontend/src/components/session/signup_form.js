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
    };
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {

    // if (this.props.currentUser) {
    //   this.props.history.push(`/users/${this.props.currentUser.id}`);
    // }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

    handleDemo(e) {
    this.setState({
      email: 'demo@demo.com',
      handle: 'hello',
      password: 'demomode',
      password2: 'demomode'
    }, () => {let demo = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(demo)})
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
    .then((res) => {
      if (res.type === 'RECEIVE_USER_SIGN_IN') {
        this.props.login({
          email: user.email,
          password: user.password
        })
      }
    });
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
          <form className='form-container' onSubmit={this.handleSubmit}>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className="signup-form-input"
            />
            <input type="text"
              value={this.state.handle}
              onChange={this.update('handle')}
              placeholder="Handle"
              className="signup-form-input"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="signup-form-input"
            />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              className="signup-form-input last"
            />
          <div className="login-demo">
            <input type="submit" value="Sign up" className="signup-form-submit-btn"/>
            <button 
              className="demo" 
              onClick={this.handleDemo}
            >
              Demo mode
            </button>
          </div>
          {this.renderErrors()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);