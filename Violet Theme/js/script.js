$(document).ready(function() {
	/*Плавный переход по клику на пунктах главного меню*/
	$('.header-menu__list').on('click','a', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /*Плавный переход по клику на пунктах меню-гамбургера*/
    $('.header-burger__menu').on('click','a', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /*"Приклеивание" меню-шапки к верху экрана*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 30) 
		{
			$('.header').addClass('header__active');
		} else {
			$('.header').removeClass('header__active');
		}
	});

	/*Анимация вращения в разделе Guests (информация о гостях)*/
	$(window).scroll(function() {
		if(($(this).scrollTop() + $(this).height()) > ($('.about-guests__info').offset().top + 100))
		{
			$('.about-guests__info').addClass('guestsRotate');
			$('.about-guests__info').css('opacity','1');
		}
	});

	/*Анимация движения карточек в разделе Guests (сервисы)*/
	var services = $('.about-services__item');
	$(window).scroll(function() {
		if($(this).width() < 577)
		{
			if(($(this).scrollTop() + $(this).height()) > (services.eq(0).offset().top + 100))
				{  servicesMove(services.eq(0),'animationLeft');}
			if(($(this).scrollTop() + $(this).height()) > (services.eq(1).offset().top + 100))
				{  servicesMove(services.eq(1),'animationDown');}
			if(($(this).scrollTop() + $(this).height()) > (services.eq(2).offset().top + 100))
				{  servicesMove(services.eq(2),'animationRight');}
		} else
			if($(this).width() < 769)
			{
				if(($(this).scrollTop() + $(this).height()) > ($('.about-services__block').offset().top + 100))
				{
					setTimeout(function() { servicesMove(services.eq(0),'animationLeft');},0);
					setTimeout(function() { servicesMove(services.eq(1),'animationDown');},1500);
				}
				if(($(this).scrollTop() + $(this).height()) > (services.eq(2).offset().top + 100))
					{  servicesMove(services.eq(2),'animationRight');}
		 	} else
				if(($(this).scrollTop() + $(this).height()) > ($('.about-services__block').offset().top + 100))
				{
					setTimeout(function() { servicesMove(services.eq(0),'animationLeft');},0);
					setTimeout(function() { servicesMove(services.eq(1),'animationDown');},1500);
					setTimeout(function() { servicesMove(services.eq(2),'animationRight');},3000);
				}
		function servicesMove(element,newClass)
		{
			element.addClass(newClass);
		}
	});

	/*Анимация появления блоков в разделе Shop (карточки компаний)*/
	var cards = $('.shop-priority__item');
	$(window).scroll(function() {
		if($(this).width() < 481)
		{
			if(($(this).scrollTop() + $(this).height()) > (cards.eq(0).offset().top + 100))
				{  cardsRotate(cards.eq(0));}
			if(($(this).scrollTop() + $(this).height()) > (cards.eq(1).offset().top + 100))
				{  cardsRotate(cards.eq(1));}
			if(($(this).scrollTop() + $(this).height()) > (cards.eq(2).offset().top + 100))
				{  cardsRotate(cards.eq(2));}
		} else
			if($(this).width() < 769)
			{
				if(($(this).scrollTop() + $(this).height()) > ($('.shop-priority__block').offset().top + 100))
				{
					setTimeout(function() { cardsRotate(cards.eq(0));},0);
					setTimeout(function() { cardsRotate(cards.eq(1));},1500);
				}
				if(($(this).scrollTop() + $(this).height()) > (cards.eq(2).offset().top + 100))
					{  cardsRotate(cards.eq(2));}
		 	} else
				if(($(this).scrollTop() + $(this).height()) > ($('.shop-priority__block').offset().top + 100))
				{
					setTimeout(function() { cardsRotate(cards.eq(0));},0);
					setTimeout(function() { cardsRotate(cards.eq(1));},1500);
					setTimeout(function() { cardsRotate(cards.eq(2));},3000);
				}
	});

	function cardsRotate(element) {
		element.addClass('shopItemRotate');
		element.css('opacity','1');
	};

	/*Настройка кликов по меню-гамбургеру: пункты, мимо, крестик*/
	$('.header-burger__link').on('click', function() {
		toggleMenu();
	});
	$('.header-burger__overlay').on('click', function() {
		toggleMenu();
	});

	$('.header-burger').on('click', function(e) {
		e.preventDefault();
		toggleMenu();
	});

	function toggleMenu() {
		$('.header-burger').toggleClass('header-burger__active');
		$('.header-burger__menu').toggleClass('header-burger__menu-active');
		$('.header-burger__overlay').toggleClass('header-burger__overlay-active');
	};

	//*Слайдер для раздела отзывов (What we do).*/ 
	$('.what-review__arrow-next').on('click', function(e) {
		e.preventDefault();
 		review1Next();
	});
	$('.what-review__arrow-prev').on('click', function(e) {
		e.preventDefault();
 		review1Prev();
	});

	var count1 = 0, count2,	array1 = $('.what-review__item').length;
	function review1Next() {
	 	if((array1 - count1) > 1) 
	 	{
	 		if($('.what-review__arrow-prev').hasClass('disabled'))
	 			{ $('.what-review__arrow-prev').removeClass('disabled');}
	 		$('.what-review__item').eq(count1).css('margin-left','-100%');
	 		$('.what-review__item').eq(count1).css('opacity','0');
	 		$('.what-review__item').eq(count1+1).css('opacity','1');
	 		count1++;
	 		if(count1 === (array1 - 1))
	 			{ $('.what-review__arrow-next').addClass('disabled');}
	 	};
	};
	function review1Prev() {
	 	if(count1 > 0) 
	 	{
	 		if($('.what-review__arrow-next').hasClass('disabled'))
	 			{ $('.what-review__arrow-next').removeClass('disabled');}
	 		count2 = count1 - 1;
	 		$('.what-review__item').eq(count2).css('margin-left','0');
	 		$('.what-review__item').eq(count2).css('opacity','1');
	 		$('.what-review__item').eq(count2+1).css('opacity','0');
	 		count1--;
	 		if(count1 === 0)
	 			{ $('.what-review__arrow-prev').addClass('disabled');}
	 	};
	};

	/*Анимация появления блоков в разделе Numbers*/ 
	var items = $('.works-numbers__item');
	$(window).scroll(function() {
		if($(this).width() < 769)
		{
			if(($(this).scrollTop() + $(this).height()) > (items.eq(0).offset().top + 100))
				{  numbersVisible(items.eq(0));}
			if(($(this).scrollTop() + $(this).height()) > (items.eq(1).offset().top + 100))
				{  numbersVisible(items.eq(1));}
			if(($(this).scrollTop() + $(this).height()) > (items.eq(2).offset().top + 100))
				{  numbersVisible(items.eq(2));}
		} else
			{
				if(($(this).scrollTop() + $(this).height()) > ($('.works-numbers__block').offset().top + 150))
				{
					setTimeout(function() { numbersVisible(items.eq(0));},0);
					setTimeout(function() { numbersVisible(items.eq(1));},1000);
					setTimeout(function() { numbersVisible(items.eq(2));},2000);
				}
			}
	});

	function numbersVisible(element) {
		element.css('opacity','1');
		element.css('transform','translateY(0)');
	};

	/*Анимация движения блоков в разделе Projects (проекты)*/
	var projects = $('.works-projects__item');
	$(window).scroll(function() {
		if(($(this).scrollTop() + $(this).height()) > (projects.eq(0).offset().top + 150))
			{  projectsMove(projects.eq(0),'projectAnimationLeft');}
		if(($(this).scrollTop() + $(this).height()) > (projects.eq(1).offset().top + 150))
			{  projectsMove(projects.eq(1),'projectAnimationRight');}
		if(($(this).scrollTop() + $(this).height()) > (projects.eq(2).offset().top + 150))
			{  projectsMove(projects.eq(2),'projectAnimationLeft');}
		function projectsMove(element,newClass)
		{
			element.addClass(newClass);
		}
	});

	//*Слайдер для раздела отзывов (Projects).*/ 
	$('.works-review__arrow-next').on('click', function(e) {
		e.preventDefault();
 		review2Next();
	});
	$('.works-review__arrow-prev').on('click', function(e) {
		e.preventDefault();
 		review2Prev();
	});

	var count3 = 0, count4,	array2 = $('.works-review__item').length;
	function review2Next() {
	 	if((array2 - count3) > 1) 
	 	{
	 		if($('.works-review__arrow-prev').hasClass('disabled'))
	 			{ $('.works-review__arrow-prev').removeClass('disabled');}
	 		$('.works-review__item').eq(count3).css('margin-left','-100%');
	 		$('.works-review__item').eq(count3).css('opacity','0');
	 		$('.works-review__item').eq(count3+1).css('opacity','1');
	 		count3++;
	 		if(count3 === (array2 - 1))
	 			{ $('.works-review__arrow-next').addClass('disabled');}
	 	};
	};
	function review2Prev() {
	 	if(count3 > 0) 
	 	{
	 		if($('.works-review__arrow-next').hasClass('disabled'))
	 			{ $('.works-review__arrow-next').removeClass('disabled');}
	 		count4 = count3 - 1;
	 		$('.works-review__item').eq(count4).css('margin-left','0');
	 		$('.works-review__item').eq(count4).css('opacity','1');
	 		$('.works-review__item').eq(count4+1).css('opacity','0');
	 		count3--;
	 		if(count3 === 0)
	 			{ $('.works-review__arrow-prev').addClass('disabled');}
	 	};
	};
});