const show = document.getElementById("show");
const nav = document.getElementById("nav_hide");
const header = document.getElementById("header");
const main = document.getElementById("main");

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


Products.map((item, index)=>{

    let product = document.querySelector("#clone .conteiner").cloneNode(true);

    document.getElementById("layout").append(product);

    product.querySelector(".center .responsive_food").innerHTML = item.food_name;
   product.querySelector(".center .ingredients").innerHTML = item.description;
   product.querySelector(".center .responsive_price").innerHTML = "R$ " + item.price;
   product.querySelector(".product .food").src = item.image;
})