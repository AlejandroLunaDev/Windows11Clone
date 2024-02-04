const draggable = (windowElement) => {
    const windowHeader = windowElement.querySelector(".window-header");

    let offsetX, offsetY;

    windowHeader.addEventListener("mousedown", (e) => {
        e.preventDefault();
        offsetX = e.clientX - windowElement.getBoundingClientRect().left;
        offsetY = e.clientY - windowElement.getBoundingClientRect().top;

        windowElement.style.zIndex = 1000;

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        if (e.clientX < 0 || e.clientX > window.innerWidth) {
            return;
        }

        if (e.clientY < 0 || e.clientY > window.innerHeight) {
            return;
        }

        windowElement.style.left = newLeft + "px";
        windowElement.style.top = newTop + "px";
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }
};

export { draggable };
