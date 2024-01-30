const papelera = ()=>{


    const trashIcon = document.getElementById('papelera');
    const windows = document.getElementById('draggable-window-trash');

    console.log (trashIcon)
    const toggleDisplay = () => {
        windows.style.display = (windows.style.display === 'none') ? 'block' : 'none';
    };

    const handleClick = () => {
        toggleDisplay();
    };

    trashIcon.addEventListener('click', handleClick);
}

export {papelera}