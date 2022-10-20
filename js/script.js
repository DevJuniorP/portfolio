let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

menu.onclick = () => {
   menu.classList.toggle('uil-times');
   navBar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('uil-times');
   navBar.classList.remove('active');
}

