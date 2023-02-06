
// sidebar
burger_menu = document.querySelector(".burger_menu");
sidebar = document.querySelector("#mysidebar");
shadow = document.querySelector(".shadow")
body = document.querySelector("body")

burger_menu.addEventListener("click", ()=>{
    if(sidebar.className === "sidebar"){
        sidebar.className += " responsive";
        shadow.className += " responsive";
        body.className += "body";
    }else{
        sidebar.className = "sidebar";
        shadow.className = "shadow";
        body.className = "";
}})

shadow.addEventListener("click",()=>{
    sidebar.className = "sidebar";
    shadow.className = "shadow";
    body.className = "";
})

menu_1 = document.querySelector(".menu_1");
menu_2 = document.querySelector(".menu_2");
menu_3 = document.querySelector(".menu_3");
list_sub_menu_1 = document.querySelector("#mylistsubmenu1");
list_sub_menu_2 = document.querySelector("#mylistsubmenu2");
list_sub_menu_3 = document.querySelector("#mylistsubmenu3");

// menu sidebar
menu_1.addEventListener("click",()=>{
    if(list_sub_menu_1.className === "list_sub_menu_1"){
        list_sub_menu_1.className += " responsive";
    }else{
        list_sub_menu_1.className = "list_sub_menu_1";
    }
})

menu_2.addEventListener("click",()=>{
    if(list_sub_menu_2.className === "list_sub_menu_2"){
        list_sub_menu_2.className += " responsive";
    }else{
        list_sub_menu_2.className = "list_sub_menu_2";
    }
})

menu_3.addEventListener("click",()=>{
    if(list_sub_menu_3.className === "list_sub_menu_3"){
        list_sub_menu_3.className += " responsive";
    }else{
        list_sub_menu_3.className = "list_sub_menu_3";
    }
})