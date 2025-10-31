  const featuredItems = [
  {
    name: "Web Fudamentals",
    subject: "wdd",
    number: "130",
    credits: "2"
   },
  {
    name: "Introduction to Programming",
    subject:  "cse",
    number: "110",
    credits:"2",  

  },
  {
    name: "Dynamic Web fundamentals",
    subject:  "cse",
    number: "131",
    credits: "images/dadcake2.webp",

  },
  {
    name: "Programing with clases",
    subject: "cse",
    number: "210",
    credits: "images/vanilla-slice.webp",
  },
  {
    name: "Web Fronted Development I",
    subject:  " wdd",
    number: "231",
    credits: "images/chocoflan5.webp",
  },
  {
    name: "Proraming whith functions",
    subject:  "cse",
    number: "111",
    credits: "images/semita2.webp",
  },

  ];

function filterMenu(subject) {
  let itemsToShow = subject === "all"
    ? featuredItems
    : featuredItems.filter(item => item.subject === subject);

  displayMenuItems(itemsToShow);
}

function displayMenuItems(items) {
  const container = document.getElementById("menu-items");
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>No items found.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Subject:</strong> ${item.subject.toUpperCase()}</p>
      <p><strong>Course #:</strong> ${item.number}</p>
      <p><strong>Credits:</strong> ${item.credits}</p>
    `;
    container.appendChild(card);
  });
}

function saveVisitCount() {
  const key = "visitCount";
  let count = localStorage.getItem(key);
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem(key, count);

  if (count === 1) {
    console.log("Welcome! This is your first visit.");
  } else {
    console.log(`Welcome back! You've visited ${count} times.`);
  }
}

// Inicializar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  saveVisitCount();
  displayMenuItems(featuredItems);
});