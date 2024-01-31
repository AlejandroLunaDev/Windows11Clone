import { updateClock } from "../js/clock.js";
import { initializeOffCanvas } from './offCanvas/hook/useOffcanvas.js';
import { iconsearch } from "./offCanvas/iconsearch.js";
import { iconosInicio } from "./offCanvas/offCanvasInicio.js";
import { offCanvasStatus } from "./offCanvas/offCanvasStatus.js";
import { papelera } from "./window/Papelera.js";
import { minMaxWindows } from "./window/hook/useminmaxwindows.js";
import { draggable } from "./window/hook/usewindowsdraggable.js";





initializeOffCanvas();
offCanvasStatus();
updateClock();
iconosInicio();
draggable();
minMaxWindows();
papelera();
iconsearch();

