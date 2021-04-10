import $ from 'jquery';

$(document).ready(()=>{

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    });

    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
    $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
      $menuWrap.toggleClass('menu-show');
    });

    $('#select').on('click', function() {
      $('.select').toggleClass('select-open');
    });

    $('.items-label').on('click', function() {
      $(this).parent('.items').parent('.select').removeClass('select-open');
    });
});