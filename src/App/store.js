import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    counter: counterReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;