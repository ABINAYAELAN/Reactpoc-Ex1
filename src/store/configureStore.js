import { createStore } from 'redux';
import rootReducer from '../reducer/combineReducer';

export default function configureStore(initialState) {
    return createStore(rootReducer,initialState);
}