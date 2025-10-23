const initBtnRates = () => {
  // ANIMATIONS DES BOUTONS DESTKOP
  element.rateButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.cursor = "pointer";
      button.style.backgroundColor = "hsl(217, 12%, 63%)";
      button.style.color = "hsl(0, 0%, 100%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "hsl(213, 19%, 21%)";
      button.style.color = "hsl(217, 12%, 63%)";
    });
    button.addEventListener("click", () => {
      button.style.backgroundColor = "hsl(25, 97%, 53%)";
      element.rating = button.textContent;   
    });
  });
};

export { initBtnRates };
