import React from 'react';
import GroupIndexItem from './group_index_item';
import GroupFormContainer from './group_form_container';

class GroupsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchGroups();
  };

  render() {
    const { groups, groupForm, destroyGroup } = this.props
    if (!groups) return null; 
    return (
      <div className="groups-index">
        {
          groups.map(group => <GroupIndexItem 
                                key={`group-index-${group._id}`}
                                group={group}
                                destroyGroup={destroyGroup}
                              />
                    )
        }
        <div>
          { groupForm } 
          {/* <GroupFormContainer /> */}
        </div>
      </div>
    )
  }
}

export default GroupsIndex;