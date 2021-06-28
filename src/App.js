import React, { useEffect, useCallback } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  getExpenseList,
  updateExpenseList,
} from "./redux/ExpenseList/expenseList.actions";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import OverallDetails from "./components/OverallDetails";
import { calculateExpense } from "./redux/OverallDetails/overallDetails.actions";

// Main Container Component
const App = (props) => {
  const { expenseList, addExpense, calculateOverallExpense, overallDetails } =
    props;

  // Trigger action to calculate per head share and find the optimized transaction details
  useEffect(() => {
    calculateOverallExpense(expenseList);
  }, [calculateOverallExpense, expenseList]);

  // Trigger actions to add new expense
  const addNewExpense = useCallback(
    (list) => {
      addExpense(list);
    },
    [addExpense]
  );

  return (
    <div className="App container px-1 py-24 mx-auto w-full">
      <Header addExpense={(list) => addNewExpense(list)} />
      <hr />
      <OverallDetails overallDetails={overallDetails} />
      <hr />
      <ExpenseList list={expenseList} />
    </div>
  );
};

// Getting the values from Redux state and passing it to props
const mapStateToProps = (state) => {
  return {
    expenseList: state.expense.expenseList,
    overallDetails: state.overallDetails.overallDetails,
  };
};

// Dispatching the action to modify/set data in Redux state
const mapDispatchToProps = (dispatch) => {
  return {
    getExpenseDetails: () => dispatch(getExpenseList()),
    addExpense: (list) => dispatch(updateExpenseList(list)),
    calculateOverallExpense: (overallExpenseList) =>
      dispatch(calculateExpense(overallExpenseList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
