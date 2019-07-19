
$(document).ready(function() {
	$('.popup_button').click(function(){
		$(this).toggleClass('open');
});
});


// Карусель.

$(document).ready(function(){
	$(".info-carousel").owlCarousel({
	//	nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	autoWidth:true,
	//	items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
		responsive: {0:{items:1}, 600:{items:2, center:false}, 900:{items:3}},
	});
	$(".about__carousel").owlCarousel({
		nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	autoWidth:true,
	//	items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
		responsive: {0:{items:1}},
	});
});


// Кнопка на верх

$(document).ready(function(){

	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// Своя иконка на картах

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [59.9387165, 30.3218587], // Y, X более 12000 (относительно центра) может выйти за пределы экрана на мобильных 
					zoom: 17
			}, {
					searchControlProvider: 'yandex#search'
			}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки',
					balloonContent: 'Html Accademy'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '',
					// Размеры метки.
					iconImageSize: [30, 42],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkWithContent = new ymaps.Placemark([59.9387205, 30.3230652], {
					hintContent: '',
					balloonContent: 'Html Accademy',
					iconContent: '' //Не забыть удалить
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: '../img/svg/map-pin.svg',
					// Размеры метки.
					iconImageSize: [70, 120],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-30, -110],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkWithContent);
});

