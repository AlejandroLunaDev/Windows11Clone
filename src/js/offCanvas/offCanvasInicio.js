class Icono {
  constructor(nombre, ruta) {
    this.nombre = nombre;
    this.ruta = ruta;
  }
}

const iconosData = [
  { nombre: "GitHub", ruta: "./src/assets/svgs/inicio/github.svg" },
  { nombre: "Figma", ruta: "./src/assets/svgs/inicio/figma.svg" },
  { nombre: "Chrome", ruta: "./src/assets/svgs/inicio/chrome.svg" },
  { nombre: "Git Bash", ruta: "./src/assets/svgs/inicio/gitbash.svg" },
  { nombre: "Exel", ruta: "./src/assets/svgs/inicio/exel.svg" },
  { nombre: "Word", ruta: "./src/assets/svgs/inicio/word.svg" },
  { nombre: "VsCode", ruta: "./src/assets/svgs/inicio/vscode.svg" },
  { nombre: "Discord", ruta: "./src/assets/svgs/inicio/discord.svg" },
  { nombre: "LinkedIn", ruta: "./src/assets/svgs/inicio/linkedin.svg" },
  { nombre: "Steam", ruta: "./src/assets/svgs/inicio/steam.svg" },
  { nombre: "WhatsApp", ruta: "./src/assets/svgs/inicio/whatsaap.svg" },
  { nombre: "Edge", ruta: "./src/assets/svgs/inicio/edge.svg" },
  { nombre: "IntellieJ", ruta: "./src/assets/svgs/inicio/intelliej.svg" },
  { nombre: "Postman", ruta: "./src/assets/svgs/inicio/postman.svg" },
  { nombre: "Skype", ruta: "./src/assets/svgs/inicio/skype.svg" },
  { nombre: "Zoom", ruta: "./src/assets/svgs/inicio/zoom.svg" },
  { nombre: "Microsoft Store", ruta: "./src/assets/img/mstoreicon.png" },
  { nombre: "Spotify", ruta: "./src/assets/svgs/inicio/spotify.svg" },
];

const iconosInicio = () => {
  const iconsContainer = document.getElementById("icons");
  const input = document.getElementById('inputSearch');

  const renderizarIconos = (filtro = '') => {
    iconsContainer.innerHTML = ''; 

    iconosData.forEach((icono) => {
      if (icono.nombre.toLowerCase().includes(filtro)) {
        const nuevoA = document.createElement("a");
        const nuevaImagen = document.createElement("img");
        const nuevoP = document.createElement("p");
        nuevaImagen.src = icono.ruta;
        nuevoP.textContent = icono.nombre;

        nuevoA.appendChild(nuevaImagen);
        nuevoA.appendChild(nuevoP);
        iconsContainer.appendChild(nuevoA);
      }
    });
  };

  
  renderizarIconos();

  
  input.addEventListener('input', () => {
    const inputValue = input.value.trim().toLowerCase();
    renderizarIconos(inputValue);
  });
};

export { iconosInicio };


