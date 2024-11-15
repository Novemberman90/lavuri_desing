window.addEventListener('DOMContentLoaded', ()=>{

const select = document.querySelector('.user-nav__box');
const aproveLang = ['ua','ru']
  select.addEventListener('click', changeURLLanguage);

  function changeURLLanguage(event) {
    if (event.target.classList.contains('user-nav__lang')) {
      const language = event.target.getAttribute('data-lang'); // Получаем значение "ua" или "ru"
      
      // Удаляем класс "active" у всех кнопок 
      document.querySelectorAll('.user-nav__lang').forEach(btn => {
        btn.classList.remove('user-nav__lang-active');
      });
      // Добавляем класс "active" у нажатой кнопки
      event.target.classList.add('user-nav__lang-active');

       // Обновляем URL с новым языковым кодом
      location.href = `${window.location.pathname}#${language}`;
       console.log(`Выбран ${language}`);
       location.reload(); 
    }
  }
  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if(!aproveLang.includes(hash)) {
      location.href = `${window.location.pathname}#ua`;
      location.reload();
    }

    // Устанавливаем активное значение
    document.querySelectorAll('.user-nav__lang').forEach(btn => {
      if (btn.getAttribute('data-lang') === hash) {
        btn.classList.add('user-nav__lang-active');
      }
    });

     // Обновляем контент страницы
    /*  document.querySelector('.hero__title').innerHTML = langArr['hero-title'][hash]; */
     
     for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
     }
  }
  changeLanguage();





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

const scrollLinks = document.querySelectorAll('.menu__link');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElemetn = document.querySelector(targetId);

      if(targetElemetn)  {
        // Вычисляем позицию прокрутки с учётом высоты шапки
        const headerHeight = document.querySelector('header').offsetHeight;

       const top = targetElemetn.getBoundingClientRect().top + window.scrollY - headerHeight;
       // Плавный скролл к целевому элементу
       window.scrollTo({
         top: top,
         behavior: "smooth"
       });
         // Удаляем классы активности из меню
         closeMenu()
      }
    })
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
      spaceBetween: 20,
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
});

