import { createStore } from "redux";
import pagesReducer from "./reducers/pageReducer";

let store = createStore(pagesReducer);

export default store;
