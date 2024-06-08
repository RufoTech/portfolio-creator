var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
   autoplay:true,
   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  });




  var swipers = new Swiper(".projects-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".afterbtn-button",
      prevEl: ".prevbtn-button",
     
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".worker-swiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".next-duyme",
      prevEl: ".evvel-duyme",
    },
  
  });
  

  window.addEventListener("DOMContentLoaded",getMelumatlariGetir)

  async function getMelumatlariGetir(){
    const unvan ="https://jsonplaceholder.typicode.com/posts"

    



    try{
     await fetch(unvan)
     const gelenCavab= await fetch(unvan) 
     const melumatlar=await gelenCavab.json()
    
     for(let i=0;i<melumatlar.length;i++)
    blogDivi.innerHTML+=`  <div class="blog py-3">
                    <span><span id="date">16 April,2021</span> <span id="time"> 6 mins</span></span>
                    <h2>${melumatlar[i].title}</h2>
                    <a href="" class="roboto-bold">Read the article <img src="./images/white-arrow.svg" alt="" class="px-3"></a> `
    }
  
    catch(err){
      
    }
  }

  const navbarBtn=document.querySelector("#navbariacbtn")
const closeBtn=document.querySelector(".fa-xmark")
console.log(closeBtn)
navbarBtn.addEventListener("click",function(){
   document.querySelector(".mobile-menu").classList.add("aktiv")
})

closeBtn.addEventListener("click", function(){
   document.querySelector(".mobile-menu").classList.remove("aktiv")
})

  