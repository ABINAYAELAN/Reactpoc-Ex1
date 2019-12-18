import { combineReducers } from 'redux';
import details from './detailsReducer';


export default combineReducers({
    details: details
});