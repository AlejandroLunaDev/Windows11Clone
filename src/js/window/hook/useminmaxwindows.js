function minMaxWindows () {
    const min = document.getElementById('minimize');
    const max = document.getElementById('maximize');
    const maxImg = document.getElementById('max-img');
    const close = document.getElementById('close');
    const windows = document.getElementById('draggable-window');

   
    const maximize = () => {
        windows.style.width = '100%';
        windows.style.height = '100%';
        windows.style.left = '0';
        windows.style.top = '0';
        maxImg.src = '/src/assets/svgs/window/minimizemax.svg';
        max.removeEventListener('click', maximize);
        max.addEventListener('click', minimize);
    };


    const minimize = () => {
        windows.style.width = '800px';
        windows.style.height = '450px';
        windows.style.left = '30%';
        windows.style.top = '15%';
        maxImg.src = '/src/assets/svgs/window/maximize.svg';
        max.removeEventListener('click', minimize);
        max.addEventListener('click', maximize);
    };

    const closeMax = () => {
        windows.classList.add('fade-out'); 
        setTimeout(() => {
            windows.style.display = 'none';
            windows.classList.remove('fade-out'); 
        }, 200); 
    };

    max.addEventListener('click', maximize);


    min.addEventListener('click', closeMax);


    close.addEventListener('click', closeMax);
}

export { minMaxWindows };
