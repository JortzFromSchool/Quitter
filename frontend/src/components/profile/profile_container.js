import { connect } from 'react-redux';
import { fetchUserLogs } from '../../actions/log_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
    return {
        logs: Object.values(state.entities.logs.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserLogs: id => dispatch(fetchUserLogs(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);