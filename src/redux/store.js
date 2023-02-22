import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// redux-toolkit을 사용하면 아래 모듈들을 따로 설치해주지 않아도 된다
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
