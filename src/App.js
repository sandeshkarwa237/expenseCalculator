import React, { useEffect, useCallback, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  updateExpenseList,
  updateTab,
  calculateExpense,
} from "./redux/ExpenseList/expenseList.actions";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import OverallDetails from "./components/OverallDetails";

// Main Container Component
const App = (props) => {
  const [expenseAdded, updateExpenseAdded] = useState(false);
  const {
    groupDetails,
    addExpense,
    calculateOverallExpense,
    selectedTab,
    changeTab,
  } = props;

  // Trigger action to calculate per head share and find the optimized transaction details
  useEffect(() => {
    calculateOverallExpense(groupDetails[selectedTab].expenseList);
    setTimeout(() => {
      updateExpenseAdded(!expenseAdded);
    }, 1);
  }, [calculateOverallExpense, expenseAdded, groupDetails, selectedTab]);

  // Triiger action when user switches between tabs
  const switchTab = (event, index) => {
    event.preventDefault();
    changeTab(index);
  };

  // Rendering dynamic tab headers
  const getTabDetails = () => {
    return groupDetails.map((listDetails, index) => {
      return (
        <li
          key={listDetails.groupName + index}
          className="-mb-px mr-2 last:mr-0 flex-auto text-center"
        >
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-gradient-to-l " +
              (selectedTab === index
                ? "text-white from-indigo-500 to-indigo-800"
                : "text-indigo-500 border")
            }
            onClick={(e) => switchTab(e, index)}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            {listDetails.groupName}
          </a>
        </li>
      );
    });
  };

  // Rendering dynamic tab content
  const getTabContent = () => {
    return groupDetails.map((listDetails, index) => {
      const { groupName, peopleList, expenseList, overallDetails } =
        listDetails;
      return (
        <div
          key={groupName}
          className={selectedTab === index ? "block" : "hidden"}
        >
          <Header
            peopleList={peopleList}
            headerText={groupName}
            addExpense={(list) => addNewExpense(list)}
          />
          <hr />
          <OverallDetails overallDetails={overallDetails} />
          <hr />
          <ExpenseList list={expenseList} />
        </div>
      );
    });
  };

  // Trigger actions to add new expense
  const addNewExpense = useCallback(
    (list) => {
      addExpense(list);
      updateExpenseAdded(!expenseAdded);
    },
    [addExpense, expenseAdded]
  );

  return (
    <div className="App container px-1 py-24 mx-auto w-full">
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {getTabDetails()}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">{getTabContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Getting the values from Redux state and passing it to props
const mapStateToProps = (state) => {
  return {
    selectedTab: state.expense.selectedTab,
    groupDetails: state.expense.groupListWithExpense,
  };
};

// Dispatching the action to modify/set data in Redux state
const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (index) => dispatch(updateTab(index)),
    addExpense: (list) => dispatch(updateExpenseList(list)),
    calculateOverallExpense: (overallExpenseList) =>
      dispatch(calculateExpense(overallExpenseList)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
