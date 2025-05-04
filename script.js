
const frases = [
    "Estoy orgulloso de ti, mi mar",
    "Te amo con todas mis almas",
    "Milochomil besos y abrazos",
    "Tú puedes con todo, confía en ti",
    "Eres el amor de mi vida",
    "Confía en ti como yo confío en ti 🫶",
    "El IPN no sabe la suerte que tiene de tenerte ✨",
    "Te veo esforzarte y te admiro cada día más",
    "Estoy contigo aunque no esté cerca físicamente"
];

let indexFrase = 0;
const fraseElement = document.getElementById("frase");

function mostrarFrase() {
    fraseElement.textContent = frases[indexFrase];
    indexFrase = (indexFrase + 1) % frases.length;
}
setInterval(mostrarFrase, 3000);
mostrarFrase();

const fotos = document.querySelectorAll(".carrusel-contenedor img");
let indexFoto = 0;
setInterval(() => {
    fotos.forEach(img => img.classList.remove("foto-activa"));
    fotos[indexFoto].classList.add("foto-activa");
    indexFoto = (indexFoto + 1) % fotos.length;
}, 4000);
