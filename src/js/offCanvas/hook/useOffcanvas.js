const initializeOffCanvas = () => {
    document.addEventListener('DOMContentLoaded',  () => {
        const toggleOffCanvasButton = document.getElementById('toggleOffCanvas');
        const offCanvasContainer = document.getElementById('offCanvasStatus');
        const toggleWindowsBtn = document.getElementById('windowsIcon');
        const offCanvasInicioContainer = document.getElementById('offCanvasInicio');
        const offCanvasWeatherContainer= document.getElementById('weather-container');
        const toggleWeatherBtn= document.getElementById('weather');

        toggleOffCanvasButton.addEventListener('click', () => {
            offCanvasContainer.style.bottom = (offCanvasContainer.style.bottom === '0px') ? '-800px' : '0';
        });


        toggleWindowsBtn.addEventListener('click', ()=> {
            offCanvasInicioContainer.style.bottom = (offCanvasInicioContainer.style.bottom === '0px')? '-600px': '0';
        })

        toggleWeatherBtn.addEventListener('click',()=>{
            offCanvasWeatherContainer.style.left = (offCanvasWeatherContainer.style.left === '0px')? '-600px': '0';
        })

        toggleWeatherBtn.addEventListener('mouseenter', () => {
            offCanvasWeatherContainer.style.left = '0';
        });

        offCanvasWeatherContainer.addEventListener('mouseleave', () => {
            offCanvasWeatherContainer.style.left = '-600px';
        });
    });
   
}

export { initializeOffCanvas};