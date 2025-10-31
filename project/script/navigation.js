const navButton = document.querySelector('#ham-btn');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;

