class Icono {
  constructor(nombre, ruta) {
    this.nombre = nombre;
    this.ruta = ruta;
  }
}


const iconoGitHub = new Icono(
  "GitHub",
  "./src/assets/svgs/inicio/github.svg"
);
const iconoFigma = new Icono(
  "Figma",
  "./src/assets/svgs/inicio/figma.svg"
);
const iconoGitBash = new Icono(
  "Terminal",
  "./src/assets/svgs/inicio/gitbash.svg"
);
const iconoChome = new Icono(
  "Chrome",
  "./src/assets/svgs/inicio/chrome.svg"
);
const iconoExel = new Icono(
  "Exel",
  "./src/assets/svgs/inicio/exel.svg"
);
const iconoWord = new Icono(
  "Word",
  "./src/assets/svgs/inicio/word.svg"
);
const iconoVSCode = new Icono(
  "VSCode",
  "./src/assets/svgs/inicio/vscode.svg"
);
const iconoDiscord = new Icono(
  "Discord",
  "./src/assets/svgs/inicio/discord.svg"
);
const iconolinkedIn = new Icono(
  "LinkedIn",
  "./src/assets/svgs/inicio/linkedin.svg"
);
const iconoSteam = new Icono(
  "Steam",
  "./src/assets/svgs/inicio/steam.svg"
);
const iconoWhatsAap = new Icono(
  "WhatsApp",
  "./src/assets/svgs/inicio/whatsaap.svg"
);
const iconoEdge = new Icono(
  "Edge",
  "./src/assets/svgs/inicio/edge.svg"
);


const iconosInicio = () => {
  const arrayIconos = [iconoGitHub, iconoFigma,iconoChome,iconoExel,iconoWord,iconoGitBash,iconoVSCode,iconolinkedIn,iconoDiscord,iconoSteam,iconoWhatsAap, iconoEdge];
  const iconsContainer = document.getElementById("icons");

  arrayIconos.forEach((icono) => {
    const nuevoA = document.createElement("a");
    const nuevaImagen = document.createElement("img");
    const nuevoP = document.createElement("p");
    nuevaImagen.src = icono.ruta;
    nuevoP.textContent = icono.nombre;

    nuevoA.appendChild(nuevaImagen);
    nuevoA.appendChild(nuevoP);
    iconsContainer.appendChild(nuevoA);
  });
};





export { iconosInicio};


