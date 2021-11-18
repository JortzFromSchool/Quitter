import React from 'react'
import './group_form.css'

class GroupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.group
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchHabits();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  updateHabitId(){
    return e => (this.setState({
      habitId: e.target[e.target.selectedIndex].value
    }))
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => (this.props.fetchGroups())).then(this.props.closeModal);
  }

  render() {
    const { formType, closeModal, habits } = this.props;
    return (
      <div className="create-group-modal">
        <div className="create-group-header">
          <div>{formType}</div>
          <div onClick={closeModal}>X</div>
        </div>
        <form className="create-group-form" onSubmit={this.handleSubmit}>
          <input
            className="create-group-input" 
            type="text" 
            onChange={this.update('name')} 
            value={this.state.name}
            placeholder="Group Name Here!"
          />
              
          <select className="create-group-select"name="habit" onChange={this.updateHabitId()}>
            <option selected disabled>
              -- Please Select a Habit --
            </option>
            {
              habits.map(habit => {
                                  return(
                                    <option 
                                      key={`habit-option-${habit._id}`} 
                                      value={habit._id}>{habit.name}
                                    </option>
                                    )
                                  }
                      )
            }
          </select>
          <input
            className="create-group-submit" 
            type="submit" 
            onClick={this.handleSubmit} 
            value={formType}
          />
        </form>
      </div>
    )
  }
};

export default GroupForm;