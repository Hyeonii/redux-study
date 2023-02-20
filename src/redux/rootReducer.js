import { combineReducers } from 'redux';
import gogumaReducer from './gogumas/reducer';
import likeReducer from './likes/reducer';

const rootReducer = combineReducers({
    goguma: gogumaReducer,
    like: likeReducer
});

export default rootReducer;
