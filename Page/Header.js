const path = window.location.pathname;

const navLinks = document.querySelectorAll('nav a')


navLinks.forEach(link => {
    if (link.href.includes({path})){
        link.classList.add("current")
    };
});

// for navbar to close and open
const navBar = document.getElementById("desktopNav");

const openBtn = document.getElementById("menu-btn");

const closeBtn = document.getElementById("close-btn");

function openAndClose(){
    if(navBar.style.display==="flex"){
        navBar.style.display="none"
    }
    else{
        navBar.style.display="flex"
    }
};
openBtn.addEventListener("click",openAndClose)
closeBtn.addEventListener("click",openAndClose)