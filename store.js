// * createStore를 사용하는 경우에 필요한 코드입니다.
// * createStore의 코드는 들어가지만 현재 사용을 권고하지 않습니다.
// const redux = require('redux');
// const createStore = redux.createStore;
// const getDefaultMiddleware = reduxToolkit.getDefaultMiddleware;
// const applyMiddleware = redux.applyMiddleware;

// @reduxjs/toolkit을 사용하는 Redux 코드입니다.
// 기존에 하나하나 설치해줘야 했던 redux devtool, immer, thunk와 같은 라이브러리들을 자동 세팅해준다.
// 여기서 모듈을 import 하는 require 문은 node 명령어입니다.
const reduxToolkit = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const configureStore = reduxToolkit.configureStore;
const logger = reduxLogger.createLogger();

// asction-types
const ADD_GOGUMA = 'ADD_GOGUMA';
// actions
const addGoguma = () => {
    return {
        type: ADD_GOGUMA
    }
}

// initialState 
const gogumaState = {
    gogumas: 200
}
// reducer - action을 핸들링 한다.
// * 인자 부분의 'state = gogumaState: state'는 값이 없으면 아래 gogumaState 값을 넣어주라는 의미입니다.
const gogumaReducer = (state = gogumaState,  action) => {
    switch (action.type) {
        case ADD_GOGUMA:
            return {
                ...state,
                gogumas: state.gogumas + 1
            }
        default: return state;
    }
}

// const store = createStore(gogumaReducer, applyMiddleware(logger));  // *현재 사용을 권고하지 않음
const store = configureStore({
    reducer: gogumaReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

store.dispatch(addGoguma());