import { connect } from 'react-redux';
import { fetchUserLogs, fetchUserLogsByHabit, wipeLogsByHabit } from '../../actions/log_actions';
import { fetchHabit, fetchHabits } from '../../actions/habit_actions';
import {fetchUser, wipeUsers} from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveAdmin } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        logsByHabit: state.entities.logs.all,
        currentUser: state.session.user,
        habits: state.entities.habits,
        users: state.entities.users.all
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveAdmin: (admin) => dispatch(receiveAdmin(admin)),
        fetchUserLogsByHabit: (userId, habitId) => dispatch(fetchUserLogsByHabit(userId, habitId)),
        fetchUserLogs: id => dispatch(fetchUserLogs(id)),
        fetchHabits: () => dispatch(fetchHabits()),
        fetchHabit: (habitId) => dispatch(fetchHabit(habitId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        wipeUsers: () => dispatch(wipeUsers()),
        wipeLogsByHabit: () => dispatch(wipeLogsByHabit()),
        logForm: (habitId) => (
            <button onClick={() => dispatch(openModal('log', habitId))}>
                Log Session
            </button>
          ),
        habitForm: () => (
            <button onClick={() => dispatch(openModal('habit'))}>
                Create Habit
            </button>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);