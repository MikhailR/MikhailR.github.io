$(document).ready(function(){
	/*Плавный переход по клику на пунктах главного меню*/
	$('.header__list').on('click','a', function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });

   /*Плавный переход по клику на пунктах меню-гамбургера*/
   $('.header-burger__list').on('click','a', function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });

	/*Настройка кликов по меню-гамбургеру: пункты, мимо, крестик*/
	$('.header-burger').on('click', function(e) {
		e.preventDefault();
		toggleMenu();
	});
	$('.header-burger__link').on('click', function() {
		toggleMenu();
	});
	$('.header__overlay').on('click', function() {
	 	toggleMenu();
	});

	function toggleMenu() {
	 	$('.header-burger__menu').toggleClass('header-burger__menu--active');
	 	$('.header-burger').toggleClass('header-burger--active');
	 	$('.header__overlay').toggleClass('header__overlay--active');
	 	if($('.header__overlay').hasClass('header__overlay--active'))
	 		{ $('body').css('overflow','hidden');}
	 			else { $('body').css('overflow','auto');}
	};

	/*"Приклеивание" меню-шапки к верху экрана*/
	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) 
			{ $('.header').addClass('header--active');} 
				else { $('.header').removeClass('header--active');}
	});

	/*Скролл с главной страницы на следующий раздел*/
	$('.top__arrow').on('click', function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: $('#about').offset().top}, 1000);
	})

	/*Большой слайдер на втором экране*/
	$('.about__slider').slick({
     dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
     autoplaySpeed: 5000,
     prevArrow: '<button type="button" class="prev-arrow"><img src="img/arrow-left.png" alt="Previous arrow"></button>',
     nextArrow: '<button type="button" class="next-arrow"><img src="img/arrow-right.png" alt="Next arrow"></button>'
  });

	/*Анимация появления элементов в разделе Services*/ 
	var servicesItems = $('.services__item');
	$(window).scroll(function() {
		if($(this).width() <= 576)
		{
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(0).offset().top + 150))
				{  serviceVisible(servicesItems.eq(0));}
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(1).offset().top + 150))
				{  serviceVisible(servicesItems.eq(1));}
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(2).offset().top + 150))
				{  serviceVisible(servicesItems.eq(2));}
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(3).offset().top + 150))
				{  serviceVisible(servicesItems.eq(3));}
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(4).offset().top + 150))
				{  serviceVisible(servicesItems.eq(4));}
			if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(5).offset().top + 150))
				{  serviceVisible(servicesItems.eq(5));}
		} else
			if($(this).width() <= 1100)
			{
				if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(0).offset().top + 200))
					{  
						serviceVisible(servicesItems.eq(0));
						serviceVisible(servicesItems.eq(1));
					}
				if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(2).offset().top + 200))
					{  
						serviceVisible(servicesItems.eq(2));
						serviceVisible(servicesItems.eq(3));
					}
				if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(4).offset().top + 200))
					{  
						serviceVisible(servicesItems.eq(4));
						serviceVisible(servicesItems.eq(5));
					}	 	
		 	} else
				{
					if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(0).offset().top + 200))
					{
						setTimeout(function() { serviceVisible(servicesItems.eq(0));},0);
						setTimeout(function() { serviceVisible(servicesItems.eq(1));},1000);
						setTimeout(function() { serviceVisible(servicesItems.eq(2));},2000);
					}
					if(($(this).scrollTop() + $(this).height()) > (servicesItems.eq(3).offset().top + 150))
					{
						setTimeout(function() { serviceVisible(servicesItems.eq(3));},0);
						setTimeout(function() { serviceVisible(servicesItems.eq(4));},1000);
						setTimeout(function() { serviceVisible(servicesItems.eq(5));},2000);
					}
				}			
	});
	function serviceVisible(element) {
		element.css('opacity','1');
		element.css('transform','translateY(0)');
	};

	/*Слайдер в разделе о команде Team*/
	$('.team__block').slick({
     dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
     autoplaySpeed: 3000,
     prevArrow: '<button type="button" class="team__prev-arrow"><img src="img/arrow-left.png" alt="Previous arrow"></button>',
     nextArrow: '<button type="button" class="team__next-arrow"><img src="img/arrow-right.png" alt="Next arrow"></button>',
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

	/*Слайдер в разделе отзывов Reviews (Testimonials)*/
			/*Часть 1. Слайдер с фотогравиями авторов*/
	$('.reviews__gallery1').slick({
	  infinite: true,
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 3,
	  variableWidth: true,
	  arrows: true,
	  dots: false,
	  speed: 800,
	  asNavFor: '.reviews__gallery2'
	});
			/*Часть 2. Слайдер с отзывами*/
	$('.reviews__gallery2').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  speed: 800,
	  asNavFor: '.reviews__gallery1'
	});

	/*Tab'ы в разделе портфолио (Works)*/
	$('.works__link').click(function(e) {
		e.preventDefault();
		$('.works__link').removeClass('active');
		$(this).addClass('active');
		var current = $(this).attr('data-tab');
		$('.works__section').fadeOut(0);
		$('.works__section[data-tab="'+ current +'"]').fadeIn(500);
	});

/*---Для повышения доступности, не очень хорошо работает---*/
	// $('.works__href').focus(function(e) {
	// 	e.preventDefault();
	// 	$(this).parent('.works__overlay').css('opacity','1');
	// });
	// $('.works__zoom').focus(function(e) {
	// 	e.preventDefault();
	// });
	// $('.works__zoom').focusout(function() {
	// 	$(this).parent('.works__overlay').css('opacity','0');
	// });
	/*----------------------------*/

	/*Вызов модального окна с увеличенной картинкой*/
	/*Копируется путь маленькой картинки и вставляется в модальное окно*/
	$('.works__href').click(function(e) {
		e.preventDefault();
	});
	$('.works__zoom').click(function(e) {
		e.preventDefault();
		var source = $(this).parent().siblings('img').attr('src');
		$('.modal').fadeIn(300);
		$('.modal__image img').attr('src',''+source+'');
		$('body').css('overflow','hidden');
	});
	$('.modal').click(function() {
		$('.modal').fadeOut(300);
		$('body').css('overflow','auto');
	});
	$('.modal__close').click(function(e) {
		e.preventDefault();
		$('.modal').fadeOut(300);
		$('body').css('overflow','auto');
	});

  /*Закрытие модального окна, всплывающего на карте*/
  $('.map__close').click(function() {
    $('.map__info').removeClass('map__info--active');
  });


   // Устанавливаем обработчик потери фокуса для всех полей ввода текста
  $('input#name, input#email').unbind().blur( function(){
    var id = $(this).attr('id'),
        val = $(this).val(),
        counter = 0;
    switch(id)
    {
      case 'name':
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if(val.length > 2 && val != '' && rv_name.test(val))
        { 
          $(this).addClass('not_error').css('border-color','#c5c5c5');
          //$(this).css('border-color','#c5c5c5');
          $(this).siblings('.contacts__error').html('');
          counter++;      
        }
          else
          {
            $(this).removeClass('not_error').css('border-color','red');
            $(this).siblings('.contacts__error').html('*слишком короткое имя').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);
          }
      break;
      case 'email':
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(val != '' && rv_email.test(val))
        {
          $(this).addClass('not_error').css('border-color','#c5c5c5');
          $(this).siblings('.contacts__error').html('');
          counter++;
        }
          else
          {
            $(this).removeClass('not_error').css('border-color','red');
            $(this).siblings('.contacts__error').html('*введите правильный email-адрес').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);
          }
        break;
    }
	if($('.not_error').length === 2) { 
	    $('.contacts__button').removeClass('disabled');
	}
    $('.contacts__button').click(function(e) {
    	e.preventDefault();
     });
  });

  /*Плавный переход по клику на стрелке в футере (возврат на первый экран)*/
   $('.footer__arrow').on('click', function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
   });
});

/*---------------------------------------------------------------*/
/*Привязка и настройка Google-карты, настройка кастомного маркера*/
  function myMap() {
  	var posCenter = {lat: 33.988344, lng: -118.444520};
     var options = {
        center: posCenter,
        zoom: 18,
        styles: [
          {"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},
          {"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},
          {"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},
          {"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},
          {"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},
          {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},
          {"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},
          {"featureType":"poi","stylers":[{"visibility":"off"}]},
          {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},
          {"featureType":"poi.park","stylers":[{"visibility":"on"}]},
          {"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},
          {"featureType":"poi.medical","stylers":[{"visibility":"on"}]},
          {"featureType":"poi.business","stylers":[{ "visibility":"simplified"}]}
        ]
     };
     var map = new google.maps.Map(document.getElementById("map"),options);
     var myMarker = new google.maps.Marker({
      	position: posCenter,
      	map: map,
      	title: 'HEX - Our Main Office',
      	icon: 'img/map-pointer.png',
      	animation: google.maps.Animation.BOUNCE
     });
     var popup = document.querySelector('.map__info');
     myMarker.addListener('click', function() {
        popup.classList.add('map__info--active');
      });
  };