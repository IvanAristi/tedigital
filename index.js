

const menu = document.querySelector(".menu")

const nav = document.querySelector(".menu_desplegable")

const iconWasa = document.querySelector(".fixed-span")

menu.addEventListener("click", (event) => {
event.preventDefault()

if (window.innerWidth <= 893) {
if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
    menu.style.backgroundImage = 'url("./img/cerrar.png")';
    iconWasa.style.opacity = "0.5";
  } else {
    nav.style.display = "none";
    menu.style.backgroundImage = 'url("./img/menu.svg")';
    iconWasa.style.opacity = "100%";
  }
}
});

nav.addEventListener ("click", () =>{
  if (window.innerWidth <= 893) {
  nav.style.display = "none";
  menu.style.backgroundImage = 'url("./img/menu.svg")';
  iconWasa.style.opacity = "100%";
  }
})

