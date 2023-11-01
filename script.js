document.addEventListener("DOMContentLoaded", function () {
    const buyingPriceInput = document.getElementById("buyingPrice");
    const sellingPriceInput = document.getElementById("sellingPrice");
    const amountInput = document.getElementById("amount");
    const calculateButton = document.getElementById("calculateButton");
    const resultDiv = document.getElementById("result");
    const quantityInDollarSpan = document.getElementById("quantityInDollar");
    const profitInPkrSpan = document.getElementById("profitInPkr");
    const percentageSpan = document.getElementById("percentage");
  
    calculateButton.addEventListener("click", function () {
      const buyingPrice = parseFloat(buyingPriceInput.value);
      const sellingPrice = parseFloat(sellingPriceInput.value);
      const amount = parseInt(amountInput.value);
  
      const quantityInDollar = (amount / buyingPrice).toFixed(2);
      const profitInPkr = ((sellingPrice - buyingPrice) * amount / buyingPrice).toFixed(2);
      const percentage = (profitInPkr * 100 / amount).toFixed(2);
  
      quantityInDollarSpan.textContent = quantityInDollar;
      profitInPkrSpan.textContent = profitInPkr;
      percentageSpan.textContent = percentage + "%";
  
      resultDiv.style.display = "block";
    });
  });
  