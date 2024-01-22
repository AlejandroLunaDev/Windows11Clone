class Icono {
  constructor(nombre, ruta) {
    this.nombre = nombre;
    this.ruta = ruta;
  }
}

const iconoGitHub = new Icono(
  "GitHub",
  "/src/assets/svgs/inicio/gitHub.svg"
);
const iconoFigma = new Icono(
  "Figma",
  "/src/assets/svgs/inicio/figma.svg"
);
const iconoGitBash = new Icono(
  "Terminal",
  "/src/assets/svgs/inicio/gitBash.svg"
);
const iconoChome = new Icono(
  "Chrome",
  "/src/assets/svgs/inicio/gChrome.svg"
);
const iconoExel = new Icono(
  "Exel",
  "/src/assets/svgs/inicio/mExel.svg"
);
const iconoWord = new Icono(
  "Figma",
  "/src/assets/svgs/inicio/mWord.svg"
);
const iconoVSCode = new Icono(
  "VSCode",
  "/src/assets/svgs/inicio/vscode.svg"
);
const iconoDiscord = new Icono(
  "Discord",
  "/src/assets/svgs/inicio/discord.svg"
);
const iconolinkedIn = new Icono(
  "LinkedIn",
  "/src/assets/svgs/inicio/likeding.svg"
);
const iconoSteam = new Icono(
  "Steam",
  "/src/assets/svgs/inicio/steam.svg"
);
const iconoWhatsAap = new Icono(
  "WhatsApp",
  "/src/assets/svgs/inicio/whatssap.svg"
);
const iconoEdge = new Icono(
  "Edge",
  "/src/assets/svgs/inicio/edge.svg"
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


