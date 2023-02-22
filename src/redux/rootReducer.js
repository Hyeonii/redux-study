import { combineReducers } from "redux";
import gogumaReducer from "./gogumas/reducer";
import likeReducer from "./likes/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    goguma: gogumaReducer,
    like: likeReducer,
    comment: commentsReducer,
});

export default rootReducer;
