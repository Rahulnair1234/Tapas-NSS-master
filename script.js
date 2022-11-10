const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  function maxWidthFunction(width) {
    if (width.matches) { 
      return true
    } else {
     return false
    }
  }
  
  var width = window.matchMedia("(max-width: 850px)")
  let forMobile = maxWidthFunction(width) 
  width.addListener(maxWidthFunction)
  
  let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) && forMobile==true) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

