import React from 'react';
import { withRouter } from 'react-router-dom';

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user.id,
        habitId: this.props.habitId,
        description: '',
        logTime: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const log = Object.assign({}, this.state);
    this.props.processForm(log).then(() => (this.props.fetchUserLogsByHabit(this.state.user, this.state.habitId))).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="log-form-container">
        <form onSubmit={this.handleSubmit} className="log-form-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Description:
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="log-input"
              />
            </label>
            <br/>
            <label>Time:
              <input type="datetime"
                value={this.state.logTime}
                onChange={this.update('logTime')}
                className="log-input"
              />
            </label>
            <br/>
            <input className="log-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LogForm);