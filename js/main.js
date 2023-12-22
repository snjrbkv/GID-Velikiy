let elFirstBurger = document.querySelector(".first-burger")
let elSidebar = document.querySelector(".sidebar")
let elBurger = document.querySelector(".burger-btn")
let eldarLig = document.querySelector(".dar-lig")

eldarLig.addEventListener("click", ()=>{
  document.body.classList.toggle("action")
})
elFirstBurger.addEventListener("click", ()=>{
  elSidebar.classList.add("active")
})
elBurger.addEventListener("click", ()=>{
  elSidebar.classList.remove("active")
})
