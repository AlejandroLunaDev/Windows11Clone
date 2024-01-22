const initializeOffCanvas = () => {
    document.addEventListener('DOMContentLoaded',  () => {
        const toggleOffCanvasButton = document.getElementById('toggleOffCanvas');
        const offCanvasContainer = document.getElementById('offCanvasStatus');
        const toggleWindowsBtn = document.getElementById('windowsIcon');
        const offCanvasInicioContainer = document.getElementById('offCanvasInicio');

        toggleOffCanvasButton.addEventListener('click', () => {
            offCanvasContainer.style.bottom = (offCanvasContainer.style.bottom === '0px') ? '-600px' : '0';
        });


        toggleWindowsBtn.addEventListener('click', ()=> {
            offCanvasInicioContainer.style.bottom = (offCanvasInicioContainer.style.bottom === '0px')? '-600px': '0';
        })
    });
   
}

export { initializeOffCanvas};