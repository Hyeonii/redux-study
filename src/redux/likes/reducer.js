import { ADD_LIKES, CANCEL_LIKES } from "./type"

const likeState = {
    count: 0
}

const likeReducer = (state = likeState,  action) => {

    switch (action.type) {
        case ADD_LIKES:
            return {
                ...state,
                count: state.count + 1
            }
        case CANCEL_LIKES:
            return {
                ...state,
                count: state.count - 1
            }
        default: 
            return state;
    }
}

export default likeReducer;