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

   let swiper = new Swiper(".swiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      setWrapperSize: true,
      updateOnWindowResize: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });