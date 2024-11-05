const menuBtn = document.querySelector('.menu__btn');
const mobilMenu = document.querySelector('.menu__inner');

if(menuBtn) {
  menuBtn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('lock');
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('menu__btn--active');
    mobilMenu.classList.toggle('menu__inner--active');
  });
}

const closeMenu = () => {
  document.documentElement.classList.remove('lock');
  document.body.classList.remove('lock');
  menuBtn.classList.remove('menu__btn--active');
  mobilMenu.classList.remove('menu__inner--active');
}

document.body.addEventListener('click', (e) =>{
  if (
    e.target.closest('.menu__btn') == null && 
    e.target.closest('.menu__inner') != mobilMenu
  )
  {closeMenu()}
});

let reviewSlider = new Swiper(".review__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    setWrapperSize: true,
    updateOnWindowResize: true,
    pagination: true,
    loop: true,
    navigation: {
      nextEl: ".review__btn-next",
      prevEl: ".review__btn-prev",
    },
      pagination: {
      el: ".review__slider-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.2,
        spaceBetween: 5,
        centeredSlides: true,
        freeMode: false,
      },
      410: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
  /*      430: {
        slidesPerView: 1.5,
      }, */
      578: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      680: {
        slidesPerView: 3,
      },
      850: {
        slidesPerView: 4,
      },
      // when window width is >= 640px
    }
});

let worksSlider = new Swiper(".works__slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  setWrapperSize: true,
  updateOnWindowResize: true,
  pagination: true,
  loop: true,
  navigation: {
    nextEl: ".works__btn-next",
    prevEl: ".works__btn-prev",
  },
    pagination: {
    el: ".works__slider-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.7,
      spaceBetween: 10,
      centeredSlides: true,
      freeMode: false,
    },
    578: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 5,
    }
  }
});

const fileInput = document.querySelector('#fileInput');
const fileNameDisplay = document.querySelector('.send__file-name');

fileInput.addEventListener("change", function(params) {
  if ( fileInput.files.length > 0 ) {
    fileNameDisplay.textContent = fileInput.files[0].name;
    fileNameDisplay.classList.add('send__file-name--selected');
  } else {
    fileNameDisplay.textContent =  "Файл не выбран";
    fileNameDisplay.classList.remove('send__file-name--selected');
  }
});