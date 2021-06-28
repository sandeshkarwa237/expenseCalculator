const calculateAmountSpent = (overallExpenseList, peopleList) => {
  // Sum the total amount under each's name in expense list table
  const addedExpenseList = Array.from(
    overallExpenseList.reduce(
      (m, { paidBy, amountPaid }) =>
        m.set(paidBy, (m.get(paidBy) || 0) + amountPaid),
      new Map()
    ),
    ([paidBy, amountPaid]) => ({ paidBy, amountPaid })
  );

  // Sum the total amount and add the amount for all the people
  const data = peopleList.map((peopleData) => {
    const idx = addedExpenseList.findIndex((p) => p.paidBy === peopleData.name);
    if (idx > -1) {
      peopleData.amount = addedExpenseList[idx].amountPaid;
    }
    return peopleData;
  });
  return data;
};

export { calculateAmountSpent };
