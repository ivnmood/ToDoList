import TodayReducer from "./todayReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import TomorrowReducer from "./tomorrowReducer";
import YesterdayReducer from "./yesterdayReducer";



let reducers = combineReducers({
    TodayPage: TodayReducer,
    TomorrowPage: TomorrowReducer,
    YesterdayPage: YesterdayReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;


export default store;