document.addEventListener('DOMContentLoaded', () => {
    // Get references to the input elements and the remainingAmount div
    const income1Input = document.getElementById('income1');
    const income2Input = document.getElementById('income2');
    const rentInput = document.getElementById('rentInput');
    const powerInput = document.getElementById('powerInput');
    const remainingAmountDiv = document.getElementById('remainingAmount');
    const calculateBtn = document.getElementById('calculateBtn');
    const budgetForm = document.getElementById('budgetForm'); // Get the form element

    // Add event listeners
    income1Input.addEventListener('input', updateRemainingAmount);
    income2Input.addEventListener('input', updateRemainingAmount);
    rentInput.addEventListener('input', updateRemainingAmount);
    powerInput.addEventListener('input', updateRemainingAmount);
    calculateBtn.addEventListener('click', updateRemainingAmount);

    // Function to calculate and update the remaining amount
    function updateRemainingAmount() {
      // Get the income amounts from the input elements
      const income1 = parseFloat(income1Input.value) || 0;
      const income2 = parseFloat(income2Input.value) || 0;

      // Calculate the total income
      const totalIncome = income1 + income2;

      // Get the bill amounts from the input elements
      const rentAmount = parseFloat(rentInput.value) || 0;
      const powerAmount = parseFloat(powerInput.value) || 0;

      // Calculate the total bills
      const totalBills = rentAmount + powerAmount;

      // Calculate the remaining amount
      const remainingAmount = totalIncome - totalBills;

      // Update the remainingAmountDiv with the calculated remaining amount
      remainingAmountDiv.textContent = `Remaining Amount: $${remainingAmount.toFixed(2)}`;
    }
  });