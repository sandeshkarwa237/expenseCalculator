const calculateOverallExpense = (peopleList) => {
  // Calculate total expense
  const totalValue = peopleList.reduce((sum, person) => sum + person.amount, 0);
  let costPerPerson = 0;
  let transactions = [];

  if (peopleList.length === 0) return transactions;

  //Per head share = totalValue sum / people count
  costPerPerson = totalValue / peopleList.length;

  let payer = []; //array of payer
  let receiver = []; //array of receiver

  //group people into payer and receiver
  peopleList.forEach((i) => {
    let diff = i.amount - costPerPerson; //Difference amount each person has paid

    //if amount is 0, do nothing

    if (diff > 0) {
      //if greater than 0, person is creditor
      receiver.push({ person: i, amount: diff });
    } else if (diff < 0) {
      //if less than 0, person is debtor
      payer.push({ person: i, amount: Math.abs(diff) });
    }
  });

  //we need find payer for each creditor
  for (let c = 0; c < receiver.length; c++) {
    let creditor = receiver[c];
    if (creditor.amount <= 0) continue; //if creditor is already done, go to next

    //find payer for current creditor
    for (let d = 0; d < payer.length; d++) {
      let debtor = payer[d];
      if (debtor.amount <= 0) continue; //if debtor has no amount, leave him and find next one

      //debtor's amount fully covers creditor's credit
      //he pays amount of creditor's credit
      if (debtor.amount >= creditor.amount) {
        transactions.push({
          sender: debtor.person.name,
          receiver: creditor.person.name,
          amount: creditor.amount,
        });
        //debtor's amount is lowered by amount of creditor's credit
        debtor["amount"] = debtor["amount"] - creditor["amount"];
        creditor["amount"] = 0;

        break; //creditor is done, go to the next one
      } //when debtor's amount isn't enough to cover creditor's credit
      else {
        //he pays all of his amount
        transactions.push({
          sender: debtor.person.name,
          receiver: creditor.person.name,
          amount: debtor.amount,
        });
        //so creditor's has lowered his credit by amount of debtor's amount
        debtor["amount"] = 0;
        //amount fully paid, done
      }
    }
  }

  return transactions;
};

export { calculateOverallExpense };
