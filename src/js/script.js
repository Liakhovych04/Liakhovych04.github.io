window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__list'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navigation__list_active');
        })
    })
});

function toggleSlide(product) {
    $(product).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.product__body').eq(i).toggleClass('product__body_active');
            $('.product__list').eq(i).toggleClass('product__list_active');
        })
      });
  };
  toggleSlide('.product__descr');
  toggleSlide('.product__back');
