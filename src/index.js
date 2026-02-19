import "./styles.css";

import loadHome from "./home.js";
import loadContact from "./contact.js";
import loadVisit from "./visit.js";
import loadAbout from "./about.js";

loadHome();

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  loadHome();
});

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  loadContact();
});

const visitBtn = document.getElementById("visit-btn");
visitBtn.addEventListener("click", () => {
  loadVisit();
});

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => {
  loadAbout();
});
