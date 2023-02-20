import { ADD_LIKES, CANCEL_LIKES } from "./type"

export const addLikes = () => {
    return {
        type: ADD_LIKES
    }
}

export const cancelLikes = () => {
    return {
        type: CANCEL_LIKES
    }
}