import { createStore,applyMiddleware } from 'redux';
import rootReducer from "./reducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
const middlewareEnhancer = applyMiddleware(logger, thunk)
const store = createStore(rootReducer,undefined,composeWithDevTools(middlewareEnhancer))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store 