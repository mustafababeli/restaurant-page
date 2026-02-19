export default loadContact;

function loadContact() {
  const content = document.getElementById("content");
  content.textContent = "";

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactDiv");

  const title = document.createElement("p");
  title.classList.add("catchPhrase");
  title.textContent = "GET IN TOUCH.";

  const subtitle = document.createElement("p");
  subtitle.classList.add("secondaryCatchPhrase");
  subtitle.textContent =
    "For reservations, catering, or questions — send a message and we'll respond quickly.";

  const contactGrid = document.createElement("div");
  contactGrid.classList.add("contact-grid");

  contactGrid.appendChild(
    makeCard("Phone", "0770 000 0000", "Daily 12:00-12:00"),
  );
  contactGrid.appendChild(
    makeCard("Email", "hello@toplevelburger.com", "Usually within 24 hours"),
  );
  contactGrid.appendChild(
    makeCard("Location", "Mosul — City Center", "Walk-ins always welcome"),
  );
  contactGrid.appendChild(
    makeCard("Hours", "Sun-Thu: 12:00-12:00", "Fri-Sat: 2:00-2:00"),
  );

  const note = document.createElement("p");
  note.classList.add("philosophyParagraph");
  note.textContent =
    "If it's a big order, tell us the date, number of people, and what sides + drinks you want. We'll handle the rest.";

  contactDiv.appendChild(title);
  contactDiv.appendChild(subtitle);
  contactDiv.appendChild(contactGrid);
  contactDiv.appendChild(note);

  content.appendChild(contactDiv);
}

function makeCard(label, value, hint) {
  const card = document.createElement("div");
  card.classList.add("contact-card");

  const key = document.createElement("p");
  key.classList.add("contact-key");
  key.textContent = label;

  const val = document.createElement("p");
  val.classList.add("contact-value");
  val.textContent = value;

  const small = document.createElement("p");
  small.classList.add("contact-hint");
  small.textContent = hint;

  card.appendChild(key);
  card.appendChild(val);
  card.appendChild(small);

  return card;
}
