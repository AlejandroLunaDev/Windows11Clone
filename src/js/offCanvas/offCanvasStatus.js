const offCanvasStatus = () => {

    // Brightness Input
    
    document.addEventListener ('DOMContentLoaded',()=>{
        const brightnessControl = document.getElementById('brightnessControl');
    
        brightnessControl.addEventListener('input',()=>{
            const brightnessValue = brightnessControl.value;
            document.body.style.filter = 'brightness(' + brightnessValue + '%)';
    
    
            document.body.classList.contains('night-mode')
                ? document.body.classList.remove('night-mode')
                : null;
        })
    })
    
    
    document.addEventListener ('DOMContentLoaded', () => {
    const nightModeBtn = document.getElementById('nightmodeToggle');
    const wifiBtn = document.getElementById('wifi-card');
    const wifiImage = document.getElementById('wifi');
    
    
    // Wifi disconect
    
    const upadateWifiImage = ()=> {
        const wifiIsActive = wifiBtn.classList.contains('wifi-active');
        const wifiImageSource = wifiIsActive ?'../../public/wifi.svg' : '../../public/wifidisconnect.svg';
        wifiImage.src = wifiImageSource;
    }
    
    wifiBtn.addEventListener('click', ()=>{
       wifiBtn.classList.toggle('wifi-active')
       upadateWifiImage();
    })
    
    // Night Mode
    nightModeBtn.addEventListener('click', ()=>{
        document.body.classList.toggle('night-mode')
        document.body.style.filter = document.body.classList.contains('night-mode') ? '' : 'brightness(' + brightnessValue + '%)';
        nightModeBtn.style.backgroundColor = document.body.classList.contains('night-mode')
        ? 'hsla(311, 89%, 63%, 0.888)'   
        : 'rgba(255, 255, 255, 0.055)';
         
    })
    
    })
}

export {offCanvasStatus};