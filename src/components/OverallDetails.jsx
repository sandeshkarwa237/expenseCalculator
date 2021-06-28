import React from "react";
import { OverallDetailsHeader, OverallDetailsKey } from "../static/tableRow";
import Table from "./shared/Table/Table";

const OverallDetails = (props) => {
  // Fetching the overdetails table details
  const { overallDetails } = props;

  // Passing the static header, overall details and content keys to Table component
  return (
    <div className="py-8">
      <Table
        title="Overall Details"
        tableHeader={OverallDetailsHeader}
        tableContent={overallDetails}
        tableContentKeys={OverallDetailsKey}
        emptyTableMessage="No Pending Dues"
      />
    </div>
  );
};

export default OverallDetails;
