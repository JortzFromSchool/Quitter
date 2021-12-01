import React from 'react';
import { withRouter } from 'react-router-dom';
import './habit_form.css'

class HabitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
        let newHabit = {
            name: this.state.name
        }

        const habit = Object.assign({}, newHabit);
        this.props.processForm(this.props.currentUser.id, habit)
        .then((createdHabit) => (
            this.props.fetchUserLogsByHabit(this.props.currentUser.id, createdHabit.habit.data._id)
            ))
        .then(this.props.closeModal);
    }

    render() {
        return (
            <div className="habit-form-container">
                <div className="habit-form-header-container">
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="habit-name-container">
                        <label className="habit-name-label">Name:
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="habit-name-input"
                            />
                        </label>
                    </div>
                    <div className="habit-form-middle-container">
                      <p className="enter-habit">Enter a habit above</p>
                      <i class="fas fa-hand-point-up finger"></i>
                    </div>
                    <div className="habit-btn-container">
                        <input className="habit-submit"
                            type="submit"
                            value={this.props.formType}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default HabitForm;

