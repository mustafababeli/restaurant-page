import logoUrl from "./assets/logo.png";
import burgerUrl from "./assets/burger.png";
import spriteUrl from "./assets/burger-sprite.png";
import colaUrl from "./assets/burger-cola.png";
import beerUrl from "./assets/burger-beer.png";

export default function loadHome() {
  loadLogo();
  loadHero();
  loadPhilosophy();
}

function loadLogo() {
  const logoContainer = document.getElementById("logo-container");
  logoContainer.textContent = "";

  const img = document.createElement("img");
  img.src = logoUrl;
  img.classList.add("logo");
  logoContainer.prepend(img);

  const logoText = document.createElement("p");
  logoText.textContent = "TOP LEVEL BURGER";
  logoText.classList.add("logo-text");
  logoContainer.appendChild(logoText);
}

function loadHero() {
  const content = document.getElementById("content");
  content.textContent = "";

  const heroSection = document.createElement("div");
  heroSection.classList.add("hero");

  const img = document.createElement("img");
  img.src = burgerUrl;
  img.classList.add("burger");
  heroSection.appendChild(img);

  const phraseDiv = document.createElement("div");
  phraseDiv.classList.add("phraseDiv");

  const catchPhrase = document.createElement("p");
  catchPhrase.classList.add("catchPhrase");
  catchPhrase.textContent = "CRAFTED FLAVOR, PERFECTLY STACKED.";

  const secondaryCatchPhrase = document.createElement("p");
  secondaryCatchPhrase.classList.add("secondaryCatchPhrase");
  secondaryCatchPhrase.textContent =
    "Hand-smashed patties, toasted brioche, and ingredients chosen with obsession.";

  phraseDiv.appendChild(catchPhrase);
  phraseDiv.appendChild(secondaryCatchPhrase);

  heroSection.appendChild(phraseDiv);
  content.appendChild(heroSection);
}

function loadPhilosophy() {
  const content = document.getElementById("content");

  const philosophyDiv = document.createElement("div");
  philosophyDiv.classList.add("philosophyDiv");

  const philosophyParagraph = document.createElement("p");
  philosophyParagraph.classList.add("philosophyParagraph");
  philosophyParagraph.textContent =
    "Not every burger is just food — some are built like a promise. Ours begin with fire, not shortcuts; with beef that meets heat the way it's meant to, sealing in flavor, holding nothing back. The bun is warm, the edges are crisp, the center stays honest and juicy. No tricks, no noise — just balance, smoke, and that first bite that makes everything else fade for a second. This isn't fast food. It's slow intention served hot.";

  const menuShowcase = document.createElement("div");
  menuShowcase.classList.add("menu-showcase");

  const burgerSprite = document.createElement("img");
  burgerSprite.src = spriteUrl;
  burgerSprite.classList.add("burger-sprite");

  const burgerCola = document.createElement("img");
  burgerCola.src = colaUrl;
  burgerCola.classList.add("burger-cola");

  const burgerBeer = document.createElement("img");
  burgerBeer.src = beerUrl;
  burgerBeer.classList.add("burger-beer");

  menuShowcase.appendChild(burgerSprite);
  menuShowcase.appendChild(burgerCola);
  menuShowcase.appendChild(burgerBeer);

  philosophyDiv.appendChild(philosophyParagraph);
  philosophyDiv.appendChild(menuShowcase);

  content.appendChild(philosophyDiv);
}
