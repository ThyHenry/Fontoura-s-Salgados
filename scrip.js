const show = document.getElementById("show");
const nav = document.getElementById("nav_hide");

show.addEventListener("click", ()=>{
    if(show.getAttribute("src") == "img/icons8-menu-arredondado-50.png") {
        show.setAttribute("src", "img/icons8-excluir-50.png");
    } else {
        show.setAttribute("src", "img/icons8-menu-arredondado-50.png");
    }
})

show.addEventListener("click", ()=>{
    if(nav.style.display === "none" || !nav.style.display) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
})