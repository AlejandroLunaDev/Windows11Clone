import { updateClock } from "../js/clock.js";
import { initializeOffCanvas } from './offCanvas/hook/useOffcanvas.js';
import { iconsearch } from "./offCanvas/iconsearch.js";
import { iconosInicio } from "./offCanvas/offCanvasInicio.js";
import { offCanvasStatus } from "./offCanvas/offCanvasStatus.js";
import { tiempo } from "./wheather.js";
import { openWindows } from "./window/openWindows.js";
import { draggable } from "./window/hook/usedraggable.js";
import { minMaxWindows } from './window/hook/useMaxMinClose.js';





initializeOffCanvas();
offCanvasStatus();
updateClock();
iconosInicio();
/* minMaxWindows(); */
openWindows();
iconsearch();
tiempo()





const windows = document.querySelectorAll(".draggable-window");

windows.forEach(window => {
    draggable(window);
});



const windowsBtn = document.querySelectorAll('.draggable-window');

windowsBtn.forEach(window => {
    minMaxWindows(window);
});
