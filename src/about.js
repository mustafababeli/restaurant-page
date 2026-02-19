export default loadAbout;

function loadAbout() {
  const content = document.getElementById("content");
  content.textContent = "";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutDiv");

  const title = document.createElement("p");
  title.classList.add("catchPhrase");
  title.textContent = "ABOUT.";

  const subtitle = document.createElement("p");
  subtitle.classList.add("secondaryCatchPhrase");
  subtitle.textContent =
    "A small place built around one idea: do the simple things like they matter.";

  const aboutGrid = document.createElement("div");
  aboutGrid.classList.add("about-grid");

  aboutGrid.appendChild(
    makeCard(
      "The Start",
      "One grill, one plan",
      "Make a burger worth remembering",
    ),
  );

  aboutGrid.appendChild(
    makeCard(
      "The Rule",
      "No shortcuts",
      "If it doesn't add flavor, it doesn't belong",
    ),
  );

  aboutGrid.appendChild(
    makeCard(
      "The Ingredients",
      "Chosen, not random",
      "Better beef, warmer buns, honest toppings",
    ),
  );

  aboutGrid.appendChild(
    makeCard(
      "The Goal",
      "Consistency",
      "Same bite today, same bite next month",
    ),
  );

  const note = document.createElement("p");
  note.classList.add("philosophyParagraph");
  note.textContent =
    "We're not trying to be loud. We're trying to be right — heat, salt, balance, and that moment where the first bite makes you pause. That's the whole point.";

  aboutDiv.appendChild(title);
  aboutDiv.appendChild(subtitle);
  aboutDiv.appendChild(aboutGrid);
  aboutDiv.appendChild(note);

  content.appendChild(aboutDiv);
}

function makeCard(label, value, hint) {
  const card = document.createElement("div");
  card.classList.add("about-card");

  const key = document.createElement("p");
  key.classList.add("about-key");
  key.textContent = label;

  const val = document.createElement("p");
  val.classList.add("about-value");
  val.textContent = value;

  const small = document.createElement("p");
  small.classList.add("about-hint");
  small.textContent = hint;

  card.appendChild(key);
  card.appendChild(val);
  card.appendChild(small);

  return card;
}
