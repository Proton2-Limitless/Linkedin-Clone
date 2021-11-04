import { createStore, applyMiddleware } from "redux";
import thunkmiddleWare from "redux-thunk";

import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunkmiddleWare));

export default store;
