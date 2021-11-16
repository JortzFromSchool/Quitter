import React from 'react'

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
    console.log(this.state);
    this.props.processForm(this.state)
      .then(() => (this.props.fetchGroups()));
  }

  render() {
    const { formType, closeModal, habits } = this.props;
    return (
      <div className="create-group-modal">
        <div className="create-group-header">
          <div>{formType}</div>
          <div onClick={closeModal}>X</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input 
              type="text" 
              onChange={this.update('name')} 
              value={this.state.name}
            />
          </label>
          <select name="habit" onChange={this.updateHabitId()}>
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