$(document).ready(function(){
	/*Функция для преобразованя картинки из html в фоновое изображение*/ 
	function ibg() {
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0) {
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	/*Описание работы слайдера в разделе "О нас"*/ 
	$('.about__slider').slick({
    dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="about-prev-arrow">&lt;</button>',
    nextArrow: '<button type="button" class="about-next-arrow">&gt;</button>'
  });


  /*Описание работы слайдера в разделе с формой*/ 
	$('.contacts__slider').slick({
    	dots: false,
	  	infinite: true,
	  	speed: 800,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
    	autoplaySpeed: 5000,
    	prevArrow: '<button type="button" class="contacts-prev-arrow">&lsaquo;</button>',
    	nextArrow: '<button type="button" class="contacts-next-arrow">&rsaquo;</button>'
 	});

});

// window.onload = function() {
// /*Организация функции "ленивой загрузки" изображенй*/
// 	[].forEach.call(document.querySelectorAll('img[data-src]'),function(img) {
//   		img.setAttribute('src', img.getAttribute('data-src'));
//   		img.onload = function() {
//     		img.removeAttribute('data-src');
//   		};
// 	});
// };