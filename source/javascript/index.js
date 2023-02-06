body = document.querySelector("body");
navbar = document.querySelector("#mynavbar");
burger_menu = document.querySelector(".burger_menu");
main = document.querySelector(".main");

burger_menu.addEventListener("click",()=>{
    if(navbar.className === "navbar"){
        navbar.className += " responsive";
        main.className += " responsive";
        body.className += " responsive";
    }else{
        navbar.className = "navbar";
        main.className = "main";
        body.className = "body";
    }
})