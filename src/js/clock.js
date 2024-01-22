 function updateClock() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const day = now.getDate();
    const daysName = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"]
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = daysName[now.getDay()-1];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    
    const formattedDate = `${days} ${day}, de ${month} de ${year}`;
    const formattedDateNavbar = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${day}/${year}`;
    
    document.getElementById('hour').textContent = hour;
    document.getElementById('minutes').textContent = minutes;
    
    const clockElement = document.getElementById('clock');
    const clockElementFormat = document.getElementById('fecha');
    const tooltipdate = document.getElementById('tooltipdate')
    tooltipdate.innerHTML = formattedDate;
    clockElementFormat.innerHTML = formattedDateNavbar;
    
    setTimeout(updateClock, 1000);
  }
  
export {updateClock};