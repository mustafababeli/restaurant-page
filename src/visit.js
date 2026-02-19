export default loadVisit;

function loadVisit() {
  const content = document.getElementById("content");
  content.textContent = "";

  const visitDiv = document.createElement("div");
  visitDiv.classList.add("visitDiv");

  const title = document.createElement("p");
  title.classList.add("catchPhrase");
  title.textContent = "VISIT US.";

  const subtitle = document.createElement("p");
  subtitle.classList.add("secondaryCatchPhrase");
  subtitle.textContent = "Walk in hungry. Leave slower than you came in.";

  const visitGrid = document.createElement("div");
  visitGrid.classList.add("visit-grid");

  visitGrid.appendChild(
    makeCard("Address", "Mosul — City Center", "Near the main square"),
  );

  visitGrid.appendChild(
    makeCard("Parking", "Street parking available", "Evenings fill up fast"),
  );

  visitGrid.appendChild(
    makeCard(
      "Atmosphere",
      "Open kitchen, real fire",
      "You'll smell it before you see it",
    ),
  );

  visitGrid.appendChild(
    makeCard("Best Time", "Before sunset", "Golden light + fresh batches"),
  );

  const note = document.createElement("p");
  note.classList.add("philosophyParagraph");
  note.textContent =
    "We don't rush tables. Come with time, bring friends, and let the grill do its work.";

  visitDiv.appendChild(title);
  visitDiv.appendChild(subtitle);
  visitDiv.appendChild(visitGrid);
  visitDiv.appendChild(note);

  content.appendChild(visitDiv);
}

function makeCard(label, value, hint) {
  const card = document.createElement("div");
  card.classList.add("visit-card");

  const key = document.createElement("p");
  key.classList.add("visit-key");
  key.textContent = label;

  const val = document.createElement("p");
  val.classList.add("visit-value");
  val.textContent = value;

  const small = document.createElement("p");
  small.classList.add("visit-hint");
  small.textContent = hint;

  card.appendChild(key);
  card.appendChild(val);
  card.appendChild(small);

  return card;
}
