import { peopleList } from "../../static/peopleList";
import { calculateOverallExpense } from "../../utilities/calculateExpense";
import { calculateAmountSpent } from "../../utilities/calculatePerHeadExpense";
import { formatPeopleList } from "../../utilities/formatter";
import { CALCULATE_EXPENSE } from "./overallDetails.types";

const INITIAL_STATE = {
  overallDetails: [],
  peopleList: formatPeopleList(peopleList),
};

const overallExpenseReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    // Reducer used for calculating the overall expense and each's share
    case CALCULATE_EXPENSE:
      const updatePerHeadShare = calculateAmountSpent(
        payload,
        state.peopleList
      );
      return {
        ...state,
        overallDetails: calculateOverallExpense(updatePerHeadShare),
      };
    default:
      return state;
  }
};

export default overallExpenseReducer;
