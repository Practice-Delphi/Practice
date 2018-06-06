import { combineReducers } from 'redux';

// import test reducer
import { isTestPass } from './testreducer';
import { tokenData } from './tokenreducer';
import { userData } from './userreducer';
import { historyData } from './historyreducer';

// Here be all reducers combine
export default combineReducers({
    isTestPass,
    tokenData,
    userData,
    historyData,
});