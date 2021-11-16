import { connect } from 'react-redux';
import { fetchUserLogs, fetchUserLogsByHabit } from '../../actions/log_actions';
import { fetchHabits } from '../../actions/habit_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        logsByHabit: state.entities.logs.all,
        currentUser: state.session.user,
        habits: state.entities.habits
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
        fetchUserLogs: id => dispatch(fetchUserLogs(id)),
        fetchHabits: () => dispatch(fetchHabits()),
        logForm: (
            <button onClick={() => dispatch(openModal('log'))}>
              Create Log
            </button>
          )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);