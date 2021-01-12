var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 6,
          slideShadows : false,
      }
    });
    
    
  var galleryTop = new Swiper('.swiper-container.testimonial', {
    speed: 400,
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    direction: 'vertical',
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets',
    },
    thumbs: {
      swiper: galleryThumbs
    }
    });
    

  const navbar=document.getElementById("navbar");
  let scrolled=false;
  window.onscroll=function(){
      if(window.pageYOffset>100)
      {
          navbar.classList.remove("top");
          if(!scrolled)
          {
              navbar.style.transform="translateY(-70px)";
          }
          setTimeout(function(){
           navbar.style.transform = 'translateY(0)';
           scrolled = true;
          },200);
      }
      else{
          navbar.classList.add("top");
          scrolled=false;
      }
  };
