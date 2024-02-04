function minMaxWindows(windowElement) {
    const min = windowElement.querySelector('.minimize');
    const max = windowElement.querySelector('.maximize');
    const maxImg = max.querySelector('img');
    const close = windowElement.querySelector('.close');

    const maximize = () => {
        windowElement.style.width = '100%';
        windowElement.style.height = '100%';
        windowElement.style.left = '0';
        windowElement.style.top = '0';
        maxImg.src = './src/assets/svgs/window/minimizemax.svg';
        max.removeEventListener('click', maximize);
        max.addEventListener('click', minimize);
    };

    const minimize = () => {
        windowElement.style.width = '700px';
        windowElement.style.height = '350px';
        windowElement.style.left = '30%';
        windowElement.style.top = '15%';
        maxImg.src = './src/assets/svgs/window/maximize.svg';
        max.removeEventListener('click', minimize);
        max.addEventListener('click', maximize);
    };

    const closeWindow = () => {
        windowElement.classList.add('fade-out');
        setTimeout(() => {
            windowElement.style.display = 'none';
            windowElement.classList.remove('fade-out');
        }, 200);
    };

    max.addEventListener('click', maximize);
    min.addEventListener('click', closeWindow);
    close.addEventListener('click', closeWindow);
}

export { minMaxWindows };
