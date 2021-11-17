import React from 'react';

class GroupShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId)
            .then(() => (this.props.fetchAdmin(this.props.group.admin)));
        this.props.fetchHabits();
    }
    render() {
        const {group, admin, habits} = this.props;
        if(group && admin && habits) {
            return(<div>
                <div className="group-show-name">{group.name}</div>
            </div>);
        }
        else {
            return(<div>Loading Data...</div>)
        }
        
    }
}
export default GroupShow;