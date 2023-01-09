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

$('ul.product__tabs').on('click', 'li:not(.product__tab_active)', function() {
    $(this)
      .addClass('product__tab_active').siblings().removeClass('product__tab_active')
      .closest('div.product__container').find('div.product__content').removeClass('product__content_active').eq($(this).index()).addClass('product__content_active');
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

//   document.querySelectorAll('.product__img').forEach(image =>{
//     image.onClick = () =>{
//         document.querySelector('.product__popup').style.display = 'block';
//         document.querySelector('.product__popup img').src = image.getAttribute('src'); 
//     }
//   });

//   document.querySelector('.product__popup-close').onClick = () =>{
//     document.querySelector('.product__popup').style.display = 'none';
//   }


// $(document).ready(function() {
// 	$('.product__parent-img').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1]
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 			}
// 		}
// 	});
// });


$(document).ready(function() {
    $('.product__parent-img').magnificPopup({
        type:'image',
        delegate: 'a',
    });
  });