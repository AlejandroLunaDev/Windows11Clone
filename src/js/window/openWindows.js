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
    papelera()
    roadmap()
}

export { openWindows};