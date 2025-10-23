import { initHtml } from "./lib/createHtml.js";
import { initRatesBtnAnimation } from "./lib/rateAnimation.js";

globalThis.element = initHtml();
initRatesBtnAnimation();