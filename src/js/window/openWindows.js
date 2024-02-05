const openWindows = ()=>{

    const papelera = ()=>{
        const trashIcon = document.getElementById('papelera');
        const windows = document.getElementById('draggable-window-trash');
    
        const toggleDisplay = () => {
            windows.style.display = (windows.style.display === 'none') ? 'block' : 'none';
        };
    
        const handleClick = () => {
            toggleDisplay();
        };
    
        trashIcon.addEventListener('click', handleClick);

    }


    const roadmap = ()=>{
        const roadIcon = document.getElementById('Roadmap');
        const windows = document.getElementById('draggable-window-roadmap');
    
        const toggleDisplay = () => {
            windows.style.display = (windows.style.display === 'none') ? 'block' : 'none';
        };
    
        const handleClick = () => {
            toggleDisplay();
        };
    
        roadIcon.addEventListener('click', handleClick);
    }


    const chrome = ()=>{
        const chromeIcon = document.getElementById('Chrome');
        const crhomeIconInicio = document.querySelector('.open-windows-chrome')
        const windows = document.getElementById('draggable-window-chrome');
    
        const toggleDisplay = () => {
            windows.style.display = (windows.style.display === 'none') ? 'block' : 'none';
        };
    
        const handleClick = () => {
            toggleDisplay();
        };
    
        chromeIcon.addEventListener('click', handleClick);
        crhomeIconInicio.addEventListener('click', handleClick);
    }

    chrome()
    papelera()
    roadmap()
}

export { openWindows};