import { updateClock } from "../js/clock.js";
import { initializeOffCanvas } from './offCanvas/hook/useOffcanvas.js';
import { iconosInicio } from "./offCanvas/offCanvasInicio.js";
import { offCanvasStatus } from "./offCanvas/offCanvasStatus.js";
import { papelera } from "./window/Papelera.js";
import { minMaxWindows } from "./window/hook/useminmaxwindows.js";
import { draggable } from "./window/hook/usewindowsdraggable.js";
import { terminal } from "./window/terminal.js";




initializeOffCanvas();
offCanvasStatus();
updateClock();
iconosInicio();
draggable();
minMaxWindows();
terminal()
papelera()

