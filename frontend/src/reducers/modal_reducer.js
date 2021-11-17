import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action.habitId);
      return {type: action.modal, habitId: action.habitId};
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  };
};