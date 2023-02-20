import { BUY_GOGUMA, REFUND_GOGUMA } from "./type"

const gogumaState = {
    count: 200
}

const gogumaReducer = (state = gogumaState,  action) => {

    switch (action.type) {
        case BUY_GOGUMA:
            return {
                ...state,
                count: state.count + 1
            }
        case REFUND_GOGUMA:
            return {
                ...state,
                count: state.count - 1
            }
        default: 
            return state;
    }
}

export default gogumaReducer;