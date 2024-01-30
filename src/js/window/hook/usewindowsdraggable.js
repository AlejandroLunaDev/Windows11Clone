    const draggable = () => {
    const window = document.getElementById("draggable-window");
    const windowHeader = document.getElementById("window-header");

    let offsetX, offsetY;

    windowHeader.addEventListener("mousedown", (e) => {
        e.preventDefault();
        offsetX = e.clientX - window.getBoundingClientRect().left;
        offsetY = e.clientY - window.getBoundingClientRect().top;
        window.style.zIndex = 1000;

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

        window.style.left = newLeft + "px";
        window.style.top = newTop + "px";
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    }
    };

    export { draggable };
