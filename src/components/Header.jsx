import React, { useState, useCallback } from "react";
import AddExpense from "./AddExpense";

const Header = (props) => {
  // Initializing the state for modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // Toggling the modal
  const toggleModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  return (
    <div className="w-5/6 mb-10 divide-y divide-fuchsia-300 flex flex-col sm:flex-row sm:items-center mx-auto ">
      <h1 className="flex-grow sm:text-3xl text-2xl text-gray-900">
        Expense Tracker
      </h1>
      <button
        onClick={toggleModal}
        className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
      >
        Add Expense
      </button>
      <AddExpense
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        addExpense={props.addExpense}
      />
    </div>
  );
};

export default Header;
