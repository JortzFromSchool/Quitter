import React from 'react';
import GroupIndexItem from './group_index_item';
import GroupFormContainer from './group_form_container';

class GroupsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchGroups();
  };

  render() {
    const { groups, groupForm } = this.props
    if (!groups) return null; 
    return (
      <div className="groups-index">
        {
          groups.map(group => <GroupIndexItem 
                                key={group.id}
                                group={group}
                              />
                    )
        }
        <div>
          {/* { groupForm }  */}
          <GroupFormContainer />
        </div>
      </div>
    )
  }
}

export default GroupsIndex;