import React, { useCallback, useMemo } from "react";

const Table = (props) => {
  const {
    title,
    tableHeader,
    tableContent,
    tableContentKeys,
    emptyTableMessage,
  } = props;
  // Checking whether table has content or it is empty
  const isEmptyData = useMemo(
    () => tableContent.length === 0,
    [tableContent.length]
  );

  // Dynamic rendering of table header text
  const getTableHeader = useCallback(() => {
    return tableHeader.map((headerContent, index) => {
      return (
        <th key={headerContent + index} className="px-4 py-3">
          {headerContent}
        </th>
      );
    });
  }, [tableHeader]);

  // Dynamic rendering of table content based on keys
  const getTableContent = useCallback(() => {
    return tableContent.map((data, parentIndex) => {
      return (
        <tbody>
          <tr key={parentIndex} className="border bg-gray-200">
            {tableContentKeys.map((tableKey, keyIndex) => {
              return (
                <td key={tableKey[keyIndex] + keyIndex} className="px-4 py-3">
                  {data[tableKey]}
                </td>
              );
            })}
          </tr>
        </tbody>
      );
    });
  }, [tableContent, tableContentKeys]);

  return (
    <div className="py-8">
      <h1 className="flex-grow text-2xl text-gray-900">{title}</h1>
      <table className="mt-5 w-5/6 mx-auto border">
        <thead className="text-gray-100 bg-gradient-to-l from-indigo-500 to-indigo-800">
          {getTableHeader()}
        </thead>
        {!isEmptyData && getTableContent()}
      </table>
      {/* Displaying message when no content is available in table */}
      {isEmptyData && (
        <div className="w-5/6 mx-auto p-4 bg-gray-200">{emptyTableMessage}</div>
      )}
    </div>
  );
};

export default Table;
