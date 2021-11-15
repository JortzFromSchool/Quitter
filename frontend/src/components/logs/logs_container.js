import { connect } from 'react-redux';
import { fetchLogs } from '../../actions/log_actions';
import Logs from './logs';

const mapStateToProps = (state) => {
    return {
        logs: Object.values(state.entities.logs.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLogs: () => dispatch(fetchLogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);