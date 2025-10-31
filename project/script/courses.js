  const featuredItems = [
  {
    name: "Web Fudamentals",
    category: "WDD",
    number: "130",
    image: "images/3djelly.webp",
   },
  {
    name: "Strawberry Mousse",
    category: "cake",
    price: "",
    image: "images/coldcake.webp",  

  },
  {
    name: "Special dad cake",
    category: "cake",
    price: "",
    image: "images/dadcake2.webp",

  },
  {
    name: "Vanilla cake",
    category: "cake",
    price: "",
    image: "images/vanilla-slice.webp",
  },
  {
    name: "Chocolate and flan Cake",
    category: "cake",
    price: "",
    image: "images/chocoflan5.webp",
  },
  {
    name: "Classic Semita Cookies",
    category: "cookie",
    price: "",
    image: "images/semita2.webp",
  },

  ];

function filterMenu(category) {
  let itemsToShow = [];

  if (category === "all") {
    itemsToShow = featuredItems;
  } else {
    itemsToShow = featuredItems.filter(item => item.category === category);
  }

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
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.description || item.price || ''}</p>
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
    console.log(`Welcome! This is your first visit.`);
  } else {
    console.log(`Welcome back! You've visited ${count} times.`);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(featuredItems);
  saveVisitCount();

const nav = document.querySelector("#mobileMenu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => nav.classList.add("visible"));

cerrar.addEventListener("click", () => nav.classList.remove("visible"));
});

