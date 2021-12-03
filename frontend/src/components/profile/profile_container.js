import { connect } from 'react-redux';
import { fetchUserLogs, fetchUserLogsByHabit, wipeLogsByHabit } from '../../actions/log_actions';
import { fetchHabit, fetchHabits, wipeHabits } from '../../actions/habit_actions';
import {fetchUser, wipeUsers, removeHabitFromLoggedInUser} from '../../actions/user_actions';
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
        wipeHabits: () => dispatch(wipeHabits()),
        wipeLogsByHabit: () => dispatch(wipeLogsByHabit()),
        removeHabitButton: (habitId) => (
            <button className="remove-habit-btn"
                onClick={() => dispatch(removeHabitFromLoggedInUser(habitId))}>
                Remove Habit
            </button>),
        logForm: (habitId) => (
            <button onClick={() => dispatch(openModal('log', habitId))}>
                Log Session
            </button>
          ),
        habitForm: () => (
            <button 
              className="create-habit" 
              onClick={() => dispatch(openModal('habit'))}
            >
                Create Habit
            </button>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);