import { BUY_GOGUMA, REFUND_GOGUMA } from "./type";

export const buyGoguma = (number) => {
    return {
        type: BUY_GOGUMA,
        payload: Number(number), // 통상적으로 state값은 pyload라는 이름으로 보내줍니다.
    };
};

export const refundGoguma = () => {
    return {
        type: REFUND_GOGUMA,
    };
};
