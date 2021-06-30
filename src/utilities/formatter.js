// Format the date in DD/MM/YYYY format
const formatDate = (dateSelected) => {
  var dd = dateSelected.getDate();
  var mm = dateSelected.getMonth() + 1;
  var yyyy = dateSelected.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  dateSelected = dd + "/" + mm + "/" + yyyy;
  return dateSelected;
};

const formatPeopleList = (list) => {
  return list.map((peopleName) => {
    return { name: peopleName, amount: 0 };
  });
};

export { formatDate, formatPeopleList };
