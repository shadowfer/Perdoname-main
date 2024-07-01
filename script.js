"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    resizeNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      noButton.classList.add("unreachable");
    }
  } else if (noCount === 13) noButton.style.display = "none";
});

function handleYesClick() {
  titleElement.innerHTML = "Siiiiii!!!! 😍😍😍";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  window.navigator.vibrate(2000);
  catImg.addEventListener(
    "dblclick",
    () => (titleElement.innerHTML = "Te quiero Mucho Mirma<3")
  );
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function resizeNoButton() {
  const computedStyle = window.getComputedStyle(noButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));

  noButton.style.fontSize = `${fontSize * 0.9}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Estás segura?",
    "Por favor Mirma :(",
    "Perdóname mi amor",
    "No seas mala",
    "Yo no lo vuelvo a hacer...",
    "Discúlpame pls",
    "Anda mi amor perdóname",
    "No me hagas esto :(",
    "Me rompes el corazón",
    "Quiero llorar...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

noButton.addEventListener("mouseover", function () {
  if (noButton.classList.contains("unreachable")) {
    const x = Math.random() * 200 - 10;
    const y = Math.random() * 200 - 10;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }
  function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
    if (noCount === MAX_IMAGES) {
      // Agrega un listener de eventos de touchstart al botón "No"
      noButton.addEventListener('touchstart', function(event) {
        // Llama a la función moveButton() cuando el usuario toca la pantalla
        moveButton();
        // Evita que el navegador realice la acción predeterminada
        event.preventDefault();
      });
      // Agrega un listener de eventos de click al botón "No"
      noButton.addEventListener('click', function(event) {
        // Llama a la función moveButton() cuando el usuario hace clic en el botón
        moveButton();
        // Evita que el navegador realice la acción predeterminada
        event.preventDefault();
      });
    }
  }
  
  // Función que mueve el botón "No" a una posición aleatoria
  function moveButton() {
    const x = Math.random() * 200 - 10;
    const y = Math.random() * 200 - 10;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }
});