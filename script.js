// Updated JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the input elements and the remainingAmount div
  const income1Input = document.getElementById('income1');
  const income2Input = document.getElementById('income2');
  const remainingAmountDiv = document.getElementById('remainingAmount');

  // Get all bill amount input elements
  const billAmountInputs = document.querySelectorAll('.bill-amount-input');

  // Add event listeners to income inputs
  income1Input.addEventListener('input', updateRemainingAmount);
  income2Input.addEventListener('input', updateRemainingAmount);

  // Add event listeners to bill amount inputs
  billAmountInputs.forEach((input) => {
    input.addEventListener('input', updateRemainingAmount);
  });

  // Function to calculate and update the remaining amount
  function updateRemainingAmount() {
    // Get the income amounts from the input elements
    const income1 = parseFloat(income1Input.value) || 0;
    const income2 = parseFloat(income2Input.value) || 0;

    // Calculate the total income
    const totalIncome = income1 + income2;

    // Get all bill amounts and calculate the total bills
    let totalBills = 0;
    billAmountInputs.forEach((input) => {
      totalBills += parseFloat(input.value) || 0;
    });

    // Calculate the remaining amount
    const remainingAmount = totalIncome - totalBills;

    // Update the remainingAmountDiv with the calculated remaining amount
    remainingAmountDiv.textContent = `Remaining Amount: $${remainingAmount.toFixed(2)}`;
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetOffset = targetElement.getBoundingClientRect().top;
        window.scroll({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  });
});


const budgetButton = document.getElementById('budgetButton');

budgetButton.addEventListener('click', (event) => {
  event.preventDefault(); // 

  const targetElement = document.getElementById('budget');
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 300; //

  const startTime = performance.now();

  const smoothScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easing = (progress) => progress; 
    const newPosition = startPosition + distance * easing(progress);

    window.scrollTo(0, newPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(smoothScroll);
    }
  };

  requestAnimationFrame(smoothScroll);
});