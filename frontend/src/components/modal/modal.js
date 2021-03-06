import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import  GroupFormContainer from '../groups/group_form_container';
import HabitFormContainer from '../habits/habit_form_container';
import CreateLogFormContainer from "../logs/create_log_form_container";
import './modal.css'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'log':
      component = <CreateLogFormContainer habitId={modal.habitId} />
      break;
    case 'group':
      component = <GroupFormContainer /> 
      break;
    case 'habit':
      component = <HabitFormContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);