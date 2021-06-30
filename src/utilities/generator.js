// Generate dynamic expense list and over details section based on groups
const generateTabDetails = (list) => {
  return list.map((content) => {
    return { ...content, expenseList: [], overallDetails: [] };
  });
};

// Initialize default amount to 0 for all the peoples
const generateDefaultAmount = (list) => {
  return list.map((content) => {
    return { name: content, amount: 0 };
  });
};

export { generateTabDetails, generateDefaultAmount };
