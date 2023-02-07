navbar = document.querySelector("#mynavbar");
burger_menu = document.querySelector(".burger_menu");
main = document.querySelector(".main");
login = document.querySelector(".login");
shadow = document.querySelector("#myshadow");
login_box = document.querySelector("#myloginbox");
login_exit = document.querySelector("#login_exit");

burger_menu.addEventListener("click",()=>{
    if(navbar.className === "navbar"){
        navbar.className += " responsive";
        main.className += " responsive";
    }else{
        navbar.className = "navbar";
        main.className = "main";
    }
})


login.addEventListener("click",()=>{
        login_box.className += " responsive";
        shadow.className += " responsive";
})

login_exit.addEventListener("click",()=>{
    login_box.className = "login_box";
    shadow.className = "shadow";
})