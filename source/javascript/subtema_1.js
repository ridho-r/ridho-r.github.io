
// sidebar
burger_menu = document.querySelector(".burger_menu");
sidebar = document.querySelector("#mysidebar");
shadow = document.querySelector(".shadow")

burger_menu.addEventListener("click", ()=>{
    if(sidebar.className === "sidebar"){
        sidebar.className += " responsive";
        shadow.className += " responsive";
    }else{
        sidebar.className = "sidebar";
        shadow.className = "shadow";
}})

shadow.addEventListener("click",()=>{
    sidebar.className = "sidebar";
    shadow.className = "shadow";
})

// sidebar dropdown
menu1 = document.querySelector(".menu1");
menu2 = document.querySelector(".menu2");
menu3 = document.querySelector(".menu3");
submenu1 = document.querySelector("#mysubmenu1");
submenu2 = document.querySelector("#mysubmenu2");
submenu3 = document.querySelector("#mysubmenu3");
    
menu1.addEventListener("click",()=>{
    if(submenu1.className === "submenu1"){
        submenu1.className += " active";
        submenu2.className = "submenu2";
        submenu3.className = "submenu3";
    }else{
        submenu1.className = "submenu1";
    }
})

menu2.addEventListener("click",()=>{
    if(submenu2.className === "submenu2"){
        submenu2.className += " active";
        submenu1.className = "submenu1";
        submenu3.className = "submenu3";
    }else{
        submenu2.className = "submenu2";
    }
})

menu3.addEventListener("click",()=>{
    if(submenu3.className === "submenu3"){
        submenu3.className += " active";
        submenu2.className = "submenu2";
        submenu1.className = "submenu1";
    }else{
        submenu3.className = "submenu3";
    }
})

// drag and drop

drop_menu = document.querySelectorAll(".drop");
drag_menu = document.querySelectorAll(".drag");
cek_jawaban = document.querySelector(".button_cek");
isi1 = document.querySelector("#isi1");
isi2 = document.querySelector("#isi2");
isi3 = document.querySelector("#isi3");

for (i = 0; i <drag_menu.length; i++) {
    drag_menu[i].addEventListener("dragstart", (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    })

    drop_menu[i].addEventListener("dragover", (ev) => {
        ev.preventDefault();
    })

    drop_menu[i].addEventListener("drop", (ev) => {
        ev.preventDefault();
        data = ev.dataTransfer.getData("text")
        ev.target.appendChild(document.getElementById(data));

        if(ev.target.childNodes[0].className){
            ev.target.childNodes[0].style.width = "100%";
            ev.target.childNodes[0].style.height = "100%";
        }
    })


cek_jawaban.addEventListener("click",()=>{
    if(isi1.childNodes[0].id === "satu"){
        isi1.style.border = "green 4px solid"
    }else{
        isi1.style.border = "red 4px solid"
    }

    if(isi2.childNodes[0].id === "tiga"){
        isi2.style.border = "green 4px solid"
    }else{
        isi2.style.border = "red 4px solid"
    }

    if(isi3.childNodes[0].id === "lima"){
        isi3.style.border = "green 4px solid"
    }else{
        isi3.style.border = "red 4px solid"
    }
})
}