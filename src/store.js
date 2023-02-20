const reduxToolkit = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger');
const gogumaReducer = require('./redux/gogumas/reducer');
const configureStore = reduxToolkit.configureStore;
const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: gogumaReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;