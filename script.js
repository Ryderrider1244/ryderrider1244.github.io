function sayHello(name){
    console.log("Hello " + name)
}

const offScreenMenu = document.querySelector(".off-screen-menu");
const hamIcon = document.querySelector(".ham-icon");

hamIcon.addEventListener("click", function() {
    offScreenMenu.classList.toggle("active")
});




