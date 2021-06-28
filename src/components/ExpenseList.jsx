import React from "react";
import { ExpenseListHeader, ExpenseListKey } from "../static/tableRow";
import Table from "./shared/Table/Table";

const ExpenseList = (props) => {
  // Passing the static header, expense list and content keys to Table component
  return (
    <div className="py-8">
      <Table
        title="Expenses List"
        tableHeader={ExpenseListHeader}
        tableContent={props.list}
        tableContentKeys={ExpenseListKey}
        emptyTableMessage="No Expenses added"
      />
    </div>
  );
};

export default ExpenseList;
