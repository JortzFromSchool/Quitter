import React from 'react';
import { withRouter } from 'react-router-dom';

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user.id,
        habitId: this.props.habitId,
        description: '',
        logTime: '',
        date: '',
        time: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateDateOrTime(field){
    switch (field) {
      case 'date':
        return e => this.updateLogtime(e.currentTarget.value, this.state.time);
      case 'time':
        return e => this.updateLogtime(this.state.date, e.currentTarget.value);
      default:
        return null;
    }
  }

  updateLogtime(date, time) {
    let newDateTime = date + "T" + time + ":00.000";
    this.setState({logTime: newDateTime});
    this.setState({time: time});
    this.setState({date: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newLog = {
      user: this.state.user,
      habitId: this.state.habitId,
      description: this.state.description,
      logTime: this.state.logTime
    }
    const log = Object.assign({}, newLog);
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
              <input type="time"
                value={this.state.time}
                onChange={this.updateDateOrTime('time')}
                className="log-input"
              />
            </label>
            <label>Date:
              <input type="date"
                value={this.state.date}
                onChange={this.updateDateOrTime('date')}
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