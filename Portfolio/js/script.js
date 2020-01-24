new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
	speed: 1000,
	autoHeight: true,
  pagination: {
	  el: '.projects__pagination',
	  bulletClass: 'projects__bullet',
	  bulletActiveClass: 'projects__bullet--active',
	  clickable: true
	},
});