import { combineReducers } from "redux";
import expenseReducer from "./ExpenseList/expenseList.reducer";

// Clubbing all the reducer using combineReducer
const rootReducer = combineReducers({
  expense: expenseReducer,
});

export default rootReducer;
