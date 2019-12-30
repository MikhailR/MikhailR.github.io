/*Код на JQuery*/ 
$(document).ready(function(){
	/*Плавный переход по клику на пунктах главного меню*/
	$('.header__menu').on('click','a', function (e) {
      e.preventDefault();
      if($('.header__button').hasClass('header__button--active')) {
      	$('.header__button').toggleClass('header__button--active');
		 	$('.header__menu').toggleClass('header__menu--active');
		 	if($(window).width() <= 576) {
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
	 	$('.header__menu').toggleClass('header__menu--active');
	 	if($('.header__button').hasClass('header__button--active') && $(window).width() <= 576) {
	 		$('body').css('overflow','hidden');
	 	}
	});

	/*"Приклеивание" меню-шапки к верху экрана*/
	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) 
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

	/*Переключение превьюшек в секции "Стратегий"*/
	$('.strategy__small').click(function() {
		$('.strategy__small').removeClass('active');
		$(this).addClass('active');
		var current = $(this).attr('data-tab');
		$('.strategy__big').fadeOut(0);
		$('.strategy__big[data-tab="'+ current +'"]').fadeIn(500);
	});

	/*Вызов модального окна с формой обратной связи*/
	$('.top__button, .strategy__button, .start__button').click(function(e) {
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
});

/*Код на чистом JavaScript*/ 
window.onload = function() {
/*Организация функции "ленивой загрузки" изображенй*/
	[].forEach.call(document.querySelectorAll('img[data-src]'),function(img) {
  		img.setAttribute('src', img.getAttribute('data-src'));
  		img.onload = function() {
    		img.removeAttribute('data-src');
  		};
	});
/*Организация функции "ленивой загрузки" для youtube-роликов*/ 
	'use strict';
	function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
	r(function(){
	    if (!document.getElementsByClassName) {
	        // Поддержка IE8
	        var getElementsByClassName = function(node, classname) {
	            var a = [];
	            var re = new RegExp('(^| )'+classname+'( |$)');
	            var els = node.getElementsByTagName("*");
	            for(var i=0,j=els.length; i<j; i++)
	                if(re.test(els[i].className))a.push(els[i]);
	            return a;
	        }
	        var videos = getElementsByClassName(document.body,"youtube");
	    } else {
	        var videos = document.getElementsByClassName("youtube");
	    } 
	    var nb_videos = videos.length;
	    for (var i=0; i<nb_videos; i++) {
	        // Находим постер для видео, зная ID нашего видео
	        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)'; 
	        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
	        var play = document.createElement("div");
	        play.setAttribute("class","play");
	        videos[i].appendChild(play); 
	        videos[i].onclick = function() {
	            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
	            var iframe = document.createElement("iframe");
	            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
	            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
	            iframe.setAttribute("src",iframe_url);
	            iframe.setAttribute("frameborder",'0'); 
	            iframe.setAttribute("allowfullscreen",'1'); 
	            // Высота и ширина iFrame будет как у элемента-родителя
	            iframe.style.width  = this.style.width;
	            iframe.style.height = this.style.height; 
	            // Заменяем начальное изображение (постер) на iFrame
	            this.parentNode.replaceChild(iframe, this);
	        }
	    }
	});
};