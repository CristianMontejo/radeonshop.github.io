
const navIconContainer = document.querySelector(".iconContainer")
const aContainer = document.querySelector(".aContainer")
const navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})
