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
    

    $(window).scroll(function(){
      var scrl = $(window).scrollTop();
      if(scrl < 60)
          {
              $('.header-1').removeClass('fixedbar');
          }
      else{
          $('.header-1').addClass('fixedbar');
      }
  });
  
  function openNav() {
  
      if(document.getElementById('mobile__menu').className=="overlay"){
        document.getElementById("mobile__menu").classList.add('overlay_clicked');
           document.getElementById('menu').innerText='close';
           document.getElementById('menu').style.backgroundColor='#17a2b8';
           document.getElementById('menu').style.opacity='.7';
           document.getElementById('menu').style.color='white';
           document.getElementById('menu').style.borderColor='#17a2b8';
    
    
      }
    
      else{
           document.getElementById("mobile__menu").classList.remove('overlay_clicked');  
           document.getElementById("mobile__menu").classList.add('overlay');
           document.getElementById('menu').innerText='menu';
           document.getElementById('menu').style.backgroundColor='white';
           document.getElementById('menu').style.color='black';
    
      }
    
    }