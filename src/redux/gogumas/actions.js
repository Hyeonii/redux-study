import { BUY_GOGUMA, REFUND_GOGUMA } from "./type"

export const buyGoguma = () => {
    return {
        type: BUY_GOGUMA
    }
}

export const refundGoguma = () => {
    return {
        type: REFUND_GOGUMA
    }
}