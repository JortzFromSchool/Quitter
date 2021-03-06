import React from 'react'
import './group_form.css'
import MainLogo from '../../assets/quitter-main-logo.svg';

class GroupForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.group
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
    .then(() => {
      this.props.users[this.props.currentUser.id].habits.forEach(habit => (
        this.props.fetchHabit(habit._id)
      ))
    })
    // this.props.fetchHabits();
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
      .then(() => (this.props.fetchGroups()))
      .then(this.props.closeModal);
  }

  render() {
    const { formType, closeModal, habits } = this.props;
    return (
      <div className="create-group-modal">
        <div className="create-group-header">
          <div className="form-type">{formType}</div>
          <div onClick={closeModal} className='x'>X</div>
        </div>
          <div className='form-container'>
            <form className="create-group-form" onSubmit={this.handleSubmit}>
            <div className='input-select'>
                <input
                  className="create-group-input" 
                  type="text" 
                  onChange={this.update('name')} 
                  value={this.state.name}
                  placeholder="Group Name"
                />
                    
                <select className="create-group-select" name="habit" onChange={this.updateHabitId()}>
                  <option selected disabled>
                    Please Select a Habit 
                  </option>
                  {
                    habits.map(habit => {
                                        return(
                                          <option 
                                            key={`habit-option-${habit._id}`} 
                                            value={habit._id}
                                          >
                                            {habit.name}
                                          </option>
                                          )
                                        }
                            )
                  }
                </select>
            </div>
            <div className="group-form-text">
              <p>Set up a group around a habit, 
              creating accountability towards<br/> 
              <span className="quitting">Quitting</span></p>

              <img className="logo-group-form" src={MainLogo} />
            </div>
            <input
              className="create-group-submit" 
              type="submit" 
              onClick={this.handleSubmit} 
              value={formType}
            />
          </form>
        </div>
      </div>
    )
  }
};

export default GroupForm;