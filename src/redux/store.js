import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Adding the root reducer(which has all the reducer's attached) and initializing the store
const store = createStore(rootReducer);
export default store;
