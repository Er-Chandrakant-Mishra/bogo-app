document.addEventListener("DOMContentLoaded", () => {
  const unitInputs = document.querySelectorAll('input[name="unit"]');
  const totalDisplay = document.getElementById("total");

  unitInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selectedValue = input.value;
      totalDisplay.textContent =` Total: $${selectedValue}.00 USD`;
    });
  });
});
