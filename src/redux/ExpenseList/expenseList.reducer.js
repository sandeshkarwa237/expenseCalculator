import { groupList } from "../../static/GroupWithName";
import {
  generateTabDetails,
  generateDefaultAmount,
} from "../../utilities/generator";
import { calculateOverallExpense } from "../../utilities/calculateExpense";
import { calculateAmountSpent } from "../../utilities/calculatePerHeadExpense";
import {
  UPDATE_EXPENSE_LIST,
  UPDATE_TAB,
  CALCULATE_EXPENSE,
} from "./expenseList.types";

const INITIAL_STATE = {
  selectedTab: 0,
  groupListWithExpense: generateTabDetails(groupList),
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { selectedTab, groupListWithExpense } = state;
  switch (type) {
    // Reducer used for updating the existing expense list
    case UPDATE_EXPENSE_LIST:
      groupListWithExpense[selectedTab].expenseList.push(payload);
      return {
        ...state,
        groupListWithExpense,
      };
    // Reducer used when tab is changed
    case UPDATE_TAB:
      return {
        ...state,
        selectedTab: payload,
      };
    // Reducer used for calculating the overall expense and each's share
    case CALCULATE_EXPENSE:
      const peopleListWithAmount = generateDefaultAmount(
        groupListWithExpense[selectedTab].peopleList
      );
      const updatePerHeadShare = calculateAmountSpent(
        payload,
        peopleListWithAmount
      );
      groupListWithExpense[selectedTab].overallDetails =
        calculateOverallExpense(updatePerHeadShare);
      return {
        ...state,
        groupListWithExpense,
      };
    default:
      return state;
  }
};

export default expenseReducer;
