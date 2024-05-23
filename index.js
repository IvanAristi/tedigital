

const menu = document.querySelector(".menu")

const nav = document.querySelector(".menu_desplegable")

menu.addEventListener("click", (event) => {
event.preventDefault()

if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
    menu.style.backgroundImage = 'url("./img/cerrar.png")';
  
  } else {
    nav.style.display = "none";
    menu.style.backgroundImage = 'url("./img/menu.svg")';
  
  }
});

nav.addEventListener ("click", () =>{
  nav.style.display = "none";
  menu.style.backgroundImage = 'url("./img/menu.svg")';

})

