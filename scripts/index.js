var a=document.querySelector(".main-nav-toggle"),e=document.querySelector(".main-nav");a.classList.remove("main-nav-toggle--nojs");e.classList.remove("main-nav--nojs");a.addEventListener("click",()=>{e.classList.contains("main-nav--closed")?(e.classList.remove("main-nav--closed"),e.classList.add("main-nav--opened"),a.classList.remove("main-nav-toggle--closed"),a.classList.add("main-nav-toggle--opened")):(e.classList.remove("main-nav--opened"),e.classList.add("main-nav--closed"),a.classList.remove("main-nav-toggle--opened"),a.classList.add("main-nav-toggle--closed"))});
