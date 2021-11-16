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

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
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
          <label>Habit:
            <select name="habit" onChange={this.update('habitId')}>
              {
               habits.map(habit => {
                return(<option value={habit._id}>{habit.name}</option>)})
              }
            </select>
          </label>
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