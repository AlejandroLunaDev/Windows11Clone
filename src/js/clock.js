function updateClock() {
  // Variables y captura de elementos

  const DateTime = luxon.DateTime;
  const dt = DateTime.now();

  document.getElementById("clock").textContent = dt.toLocaleString(
    DateTime.TIME_SIMPLE
  );
  document.getElementById("fecha").textContent = dt
    .toFormat("dd/MM/yyyy")
    .toLocaleString(DateTime.DATE_SHORT);
  document.getElementById("tooltipdate").textContent = dt.toLocaleString(
    DateTime.DATE_HUGE
  );
}

export { updateClock };
