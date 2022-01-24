const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const link1=document.getElementsByClassName('link')[0]
const link2=document.getElementsByClassName('link')[1]
const link3=document.getElementsByClassName('link')[2]
const link4=document.getElementsByClassName('link')[3]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})
link1.addEventListener("click",()=>{
  navbarLinks.classList.remove("active");
})
link2.addEventListener("click",()=>{
  navbarLinks.classList.remove("active");
})
link3.addEventListener("click",()=>{
  navbarLinks.classList.remove("active");
})
link4.addEventListener("click",()=>{
  navbarLinks.classList.remove("active");
})

