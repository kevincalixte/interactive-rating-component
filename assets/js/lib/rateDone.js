const initRateDone = () => {
  // CENTRAGE DE TOUT LES ELEMENTS
  element.component.style.alignItems = "center";
  // AFFICHAGE DU THANK
  element.componentThank.style.display = "flex";
  element.componentThank.style.padding = ".5rem";
  element.componentThank.style.justifyContent = "center";
  element.componentThank.style.width = "70%";
  element.componentThank.style.marginBottom = "1rem";
  element.componentThank.textContent =
    "You selected " + element.rating + " out of 5";
  // GESTION DE L'IMAGE
  element.componentImg.src = "./assets/img/illustration-thank-you.svg";
  element.componentImg.style.borderRadius = 0;
  element.componentImg.style.backgroundColor = "transparent";
  element.componentImgContainer.style.justifyContent = "center";
  // SUPPRESSION DES ELEMENTS
  element.componentBtn.style.display = "none";
  element.componentRates.style.display = "none";
  // CHANGEMENT DES TEXTES e
  element.componentTitle.textContent = "Thank you!";
  element.componentText.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  element.componentText.style.textAlign = "center";
};

export { initRateDone };
