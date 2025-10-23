import { initBtnSubmit } from "./lib/btnSubmit.js";
import { initHtml } from "./lib/createHtml.js";
import { initBtnRates} from "./lib/btnRates.js";

globalThis.element = initHtml();
initBtnRates();
initBtnSubmit();
