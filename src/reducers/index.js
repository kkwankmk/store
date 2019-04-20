import { combineReducers } from 'redux';
import item from './itemReducer';
import detail from './itemDetailReducer';
import counters from './counterReducer';

export default combineReducers({
    item,
    detail,
    counters
});
