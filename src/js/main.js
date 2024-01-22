import { updateClock } from "../js/clock.js";
import { initializeOffCanvas } from './offCanvas/hook/useOffcanvas.js';
import { iconosInicio } from "./offCanvas/offCanvasInicio.js";
import { offCanvasStatus } from "./offCanvas/offCanvasStatus.js";

initializeOffCanvas();
offCanvasStatus();
updateClock();
iconosInicio();



