import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import { formatDate } from "../utilities/formatter";
import DateSelector from "./shared/DateSelector/DateSelector";
import Dropdown from "./shared/Dropdown/Dropdown";
import InputField from "./shared/InputField/InputField";
import Textarea from "./shared/Textarea/Textarea";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddExpense = (props) => {
  const { modalIsOpen, toggleModal, addExpense, peopleList } = props;
  // Initializing field values for popup
  const [popupData, updatePopupData] = useState({
    description: "",
    transDate: new Date(),
    amount: 0,
    personPaid: "",
  });

  // Updating the popup field data based on id and value
  const updateFieldData = useCallback(
    (fieldData) => {
      const { id, value } = fieldData;
      updatePopupData({ ...popupData, [id]: value });
    },
    [popupData]
  );

  // Adding the new expense, resetting the field values and hiding the modal since data has been added to table
  const addNewExpense = useCallback(() => {
    const { description, amount, personPaid, transDate } = popupData;
    if (description && amount && personPaid && transDate) {
      addExpense({
        transDate: formatDate(transDate),
        type: description,
        amountPaid: parseInt(amount),
        paidBy: personPaid,
      });
      updatePopupData({
        description: "",
        transDate: new Date(),
        amount: 0,
        personPaid: "",
      });
      toggleModal();
    }
  }, [addExpense, popupData, toggleModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={toggleModal}
      style={customStyles}
    >
      <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
        <p className="font-semibold text-gray-800 text-xl w-full text-center">
          Add Expense
        </p>
      </div>
      <div className="flex flex-col px-6 py-5 ">
        <Textarea
          title="Expense Description"
          selectedValue={popupData.description}
          id="description"
          onChange={updateFieldData}
        />
        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
          <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
            <DateSelector
              title="Paid By"
              id="transDate"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
              onDateChange={updateFieldData}
              selectedValue={popupData.transDate}
            />
          </div>
          <div className="w-full sm:w-1/3">
            <InputField
              title="Amount ($)"
              id="amount"
              selectedValue={popupData.amount}
              onChange={updateFieldData}
              type="number"
            />
          </div>
          <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
            <Dropdown
              options={peopleList}
              title="Paid By"
              selectedValue={popupData.personPaid}
              onChange={updateFieldData}
              id="personPaid"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
        <button className="font-semibold text-gray-600" onClick={toggleModal}>
          Cancel
        </button>
        <button
          className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          onClick={addNewExpense}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddExpense;
