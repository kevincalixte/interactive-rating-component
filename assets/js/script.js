import { initBtnSubmit } from "./lib/btnSubmit.js";
import { initHtml } from "./lib/createHtml.js";
import { initBtnRates } from "./lib/btnRates.js";
import { initRateDone } from "./lib/rateDone.js";

globalThis.element = initHtml();
initBtnRates();
initBtnSubmit();

// LOCAL STORAGE
if (localStorage.getItem("ratingSaved") != null) {
  element.rating = localStorage.getItem("ratingSaved");
  initRateDFone();
}
