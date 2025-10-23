const initHtml = () => {
  // CREATION DES ELEMENTS HTML ET ATTRIBUTION DES ID
  const body = document.querySelector("body");
  const component = document.createElement("div");
  component.id = "component";
  const componentImgContainer = document.createElement("div");
  componentImgContainer.id = "componentImgContainer";
  const componentImg = document.createElement("img");
  componentImg.id = "componentImg";
  const componentTitle = document.createElement("h1");
  componentTitle.id = "componentTitle";
  const componentText = document.createElement("p");
  componentText.id = "componentText";
  const componentRates = document.createElement("div");
  componentRates.id = "componentRates";
  for (let i = 1; i < 6; i++) {
    const componentRatesBtn = document.createElement("button");
    componentRatesBtn.id = "componentRatesBtn";
    componentRatesBtn.textContent = i;
    componentRates.append(componentRatesBtn);
  }
  const componentBtn = document.createElement("button");
  componentBtn.id = "componentBtn";
  const componentThank = document.createElement("p");
  componentThank.id = "componentThank";
  // REMPLISSAGE DES ELEMENTS
  let componentImgUrl = "./assets/img/icon-star.svg";
  componentImg.src = componentImgUrl;
  componentTitle.textContent = "How did we do?";
  componentText.textContent =
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  componentBtn.textContent = "Submit";
  componentThank.textContent = "You selected <!-- Add rating here --> out of 5";
  // PLACEMENT DES ELEMENTS
  body.append(component);
  componentImgContainer.append(componentImg);
  component.append(componentImgContainer);
  component.append(componentTitle);
  component.append(componentText);
  component.append(componentRates);
  component.append(componentBtn);
  component.append(componentThank);
  // RETOURNE LES ELEMENTS
  return {
    component,
    componentImgContainer,
    componentImg,
    componentTitle,
    componentText,
    componentRates,
    componentBtn,
    componentThank,
    rateButtons: componentRates.querySelectorAll("button")
  };
};

export { initHtml };
