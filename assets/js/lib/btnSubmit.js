import { initRateDone } from "./rateDone.js";
// ANIMATION DU BOUTON SUBMIT
const initBtnSubmit = () => {
  element.componentBtn.addEventListener("mouseover", () => {
    element.componentBtn.style.cursor = "pointer";
    element.componentBtn.style.backgroundColor = "hsl(0, 0%, 100%)";
    element.componentBtn.style.color = "hsl(25, 97%, 53%)";
  });
  
  element.componentBtn.addEventListener("mouseout", () => {
    element.componentBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    element.componentBtn.style.color = "hsl(0, 0%, 100%)";
  });

  element.componentBtn.addEventListener("click", () => {  
    initRateDone();
  });
};

export { initBtnSubmit };
