$(document).ready(function(){
	/*Плавный переход по клику на пунктах главного меню*/
	$('.header__menu').on('click','a', function (e) {
      e.preventDefault();
      if($('.header__button').hasClass('header__button--active')) {
      	$('.header__button').toggleClass('header__button--active');
		 		$('.header__navigation').toggleClass('header__navigation--active');
		 		if($(window).width() <= 768) {
	 				$('body').css('overflow','auto');
	 			}
      }	      
	   var id  = $(this).attr('href'),
	       top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);	      
   });

	/*Настройка кликов по меню-гамбургеру*/
	$('.header__button').on('click', function(e) {
		e.preventDefault();
		$('.header__button').toggleClass('header__button--active');
	 	$('.header__navigation').toggleClass('header__navigation--active');
	 	$('.header__user').removeClass('header__user--active');
	 	$('.user-menu').removeClass('user-menu--active');
	 	$('.header__form').removeClass('header__form--active');
	 	if($('.header__button').hasClass('header__button--active')) {
	 		$('body').css('overflow','hidden');
	 	} else { $('body').css('overflow','auto');}
	});

	/*"Приклеивание" меню-шапки к верху экрана*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 500) 
			{ $('.header').addClass('header--active');} 
				else { $('.header').removeClass('header--active');}
	});

	/*Показывание (скролл вверх) и скрытие (скролл вниз) меню при прокрутке странцы*/ 
	var header = $('.header'),
	scrollPrev = 0;
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();	 
		if ( scrolled > 100 && scrolled > scrollPrev ) {
			header.addClass('out');
		} else {
			header.removeClass('out');
		}
		scrollPrev = scrolled;
	});

	/*Увеличение иконки пользователя при нажатии*/ 
	$('.header__user').on('click', function(e) {
		e.preventDefault();
		$('.header__form').removeClass('header__form--active');
		$(this).toggleClass('header__user--active');
		$('.user-menu').toggleClass('user-menu--active');
		$('.header__button').removeClass('header__button--active');
	 	$('.header__navigation').removeClass('header__navigation--active');
	});
	$('.user-menu__link').on('click', function(e) {
		e.preventDefault();
		$('.user-menu').toggleClass('user-menu--active');
	});

	/*Выпадание формы поиска по сайту*/ 
	$('.header__search').on('click', function(e) {
		e.preventDefault();
		$('.header__user').removeClass('header__user--active');
		$('.user-menu').removeClass('user-menu--active');
		$('.header__form').toggleClass('header__form--active');
		$('.header__button').removeClass('header__button--active');
	 	$('.header__navigation').removeClass('header__navigation--active');
	});
	$('.search-form button').on('click', function(e) {
		e.preventDefault();
		$('.header__form').toggleClass('header__form--active');
		$('.search-form input').val('');
	});

	/*Функция для преобразованя картинки из html в фоновое изображение*/ 
	function ibg() {
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0) {
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	/*Описание работы слайдера на первом экране*/ 
	$('.top__slider').slick({
    dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="top-prev-arrow"><img src="img/arrow-prev.png" alt="К предыдущему слайду">Предыдущая</button>',
    nextArrow: '<button type="button" class="top-next-arrow"><img src="img/arrow-next.png" alt="К следующему слайду">Следующая</button>'
  });

  /*Счётчик времени в разделе "Лотов"*/ 
  	/*Счётчик для первого лота*/ 
  var days1 = $('.lots__days1').text(),
  		hours1 = $('.lots__hours1').text(),
  		minutes1 = $('.lots__minutes1').text(),
      seconds1 = $('.lots__seconds1').text();
			setInterval(function() {
				if (seconds1 > 0) {
				  seconds1--;
				  $('.lots__seconds1').text(seconds1);
				} else {
					seconds1=10;
				  $('.lots__seconds1').text(seconds1);
				  minutes1--;
				  if(minutes1 < 0) {
				  	minutes1 = 2;
				  	$('.lots__minutes1').text(minutes1);
				  	hours1--;
				  	if(hours1 < 0) {
				  		hours1 = 1;
				  		$('.lots__hours1').text(hours1);
				  		days1--;
				  		if(days1 < 0) {
				  			$('.lots__time').eq(0).html('время истекло').css({
				  				'color':'red',
				  				'font-size':'18px',
				  				'width':'80px',
				  				'margin':'0 auto',
				  				'text-align':'center'
				  				});
				  		}	else { $('.lots__days1').text(days1);}
				  	}	else { $('.lots__hours1').text(hours1);}
				  } else { $('.lots__minutes1').text(minutes1);}
				}
			},1000);
		/*Счётчик для второго лота*/ 
  var days2 = $('.lots__days2').text(),
  		hours2 = $('.lots__hours2').text(),
  		minutes2 = $('.lots__minutes2').text(),
      seconds2 = $('.lots__seconds2').text();
			setInterval(function() {
				if (seconds2 > 0) {
				  seconds2--;
				  $('.lots__seconds2').text(seconds2);
				} else {
					seconds2=10;
				  $('.lots__seconds2').text(seconds2);
				  minutes2--;
				  if(minutes2 < 0) {
				  	minutes2 = 2;
				  	$('.lots__minutes2').text(minutes2);
				  	hours2--;
				  	if(hours2 < 0) {
				  		hours2 = 1;
				  		$('.lots__hours2').text(hours2);
				  		days2--;
				  		if(days2 < 0) {
				  			$('.lots__time').eq(1).html('время истекло').css({
				  				'color':'red',
				  				'font-size':'18px',
				  				'width':'80px',
				  				'margin':'0 auto',
				  				'text-align':'center'
				  				});
				  		}	else { $('.lots__days2').text(days2);}
				  	}	else { $('.lots__hours2').text(hours2);}
				  } else { $('.lots__minutes2').text(minutes2);}
				}
			},1000);
		/*Счётчик для третьего лота*/ 
  var days3 = $('.lots__days3').text(),
  		hours3 = $('.lots__hours3').text(),
  		minutes3 = $('.lots__minutes3').text(),
      seconds3 = $('.lots__seconds3').text();
			setInterval(function() {
				if (seconds3 > 0) {
				  seconds3--;
				  $('.lots__seconds3').text(seconds3);
				} else {
					seconds3=10;
				  $('.lots__seconds3').text(seconds3);
				  minutes3--;
				  if(minutes3 < 0) {
				  	minutes3 = 2;
				  	$('.lots__minutes3').text(minutes3);
				  	hours3--;
				  	if(hours3 < 0) {
				  		hours3 = 1;
				  		$('.lots__hours3').text(hours3);
				  		days3--;
				  		if(days3 < 0) {
				  			$('.lots__time').eq(2).html('время истекло').css({
				  				'color':'red',
				  				'font-size':'18px',
				  				'width':'80px',
				  				'margin':'0 auto',
				  				'text-align':'center'
				  				});
				  		}	else { $('.lots__days3').text(days3);}
				  	}	else { $('.lots__hours3').text(hours3);}
				  } else { $('.lots__minutes3').text(minutes3);}
				}
			},1000);

  /*Задание видимости декоративных элементов в разделе "Все лоты"*/ 
  var devider = $('.categories__devider'),
  		items = $('.categories__item');
  if($(window).width() > 850) {
	  for(var i=1; i<devider.length+1; i++) {
	  	if((i % 3) !==0) {
	  		devider.eq(i-1).addClass('active');}
	  	if(i < (devider.length - 2)) {
	  		$('.categories__item').eq(i-1).addClass('active');}
	  }
	} else
	  	if($(window).width() >= 576) {
			  for(var i=1; i<devider.length; i++) {
			  	if((i % 2) !==0) {
			  		devider.eq(i-1).addClass('active');}
			  	$('.categories__item').eq(i-1).addClass('active');
			  }
			}
		else {
			for(var i=0; i<devider.length-1; i++) {
			  devider.eq(i).removeClass('active');
			  $('.categories__item').eq(i).addClass('active');
			}
		}

  /*Описание работы слайдера в разделе с цитатами*/ 
	$('.quotes__slider').slick({
    dots: false,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="quotes-prev-arrow">Предыдущая</button>',
    nextArrow: '<button type="button" class="quotes-next-arrow">Следующая</button>'
  });

  /*Вызов модального окна с формой обратной связи*/
	$('.top__button, .footer__contact').click(function(e) {
		e.preventDefault();
		$('.modal').fadeIn(300);
		$('body').css('overflow','hidden');
	});
	/*Закрытие модального окна по нажатию на "крестик" или при отправке формы*/ 
	$('.modal__close, .modal__button').click(function(e) {
		e.preventDefault();
		$('.modal').fadeOut(300);
		$('body').css('overflow','auto');
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
	        $(this).siblings('.modal__error').html('');
	        counter++;      
	      }
	        else
	        {
	          $(this).removeClass('not_error').css('border-color','red');
	          $(this).siblings('.modal__error').html('*слишком короткое имя').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);
	        }
	    break;
	    case 'email':
	      var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	      if(val != '' && rv_email.test(val))
	      {
	        $(this).addClass('not_error').css('border-color','#c5c5c5');
	        $(this).siblings('.modal__error').html('');
	        counter++;
	      }
	        else
	        {
	          $(this).removeClass('not_error').css('border-color','red');
	          $(this).siblings('.modal__error').html('*введите правильный email-адрес').animate({'paddingLeft':'10px'},400).animate({'paddingLeft':'5px'},400);
	        }
	      break;
	  }
		if($('.not_error').length === 2) { 
		  $('.modal__button').removeClass('disabled');
		}
  	});

  /*Плавный переход по клику на пунктах меню в футере*/
	$('.footer__menu').on('click','a', function (e) {
      e.preventDefault();	      
	   var id = $(this).attr('href'),
	       top = $(id).offset().top;
	   $('body,html').animate({scrollTop: top}, 1500);	      
   });
});

window.onload = function() {
/*Организация функции "ленивой загрузки" изображенй*/
	[].forEach.call(document.querySelectorAll('img[data-src]'),function(img) {
  		img.setAttribute('src', img.getAttribute('data-src'));
  		img.onload = function() {
    		img.removeAttribute('data-src');
  		};
	});
};