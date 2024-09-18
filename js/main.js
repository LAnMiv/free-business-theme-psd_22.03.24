
//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	var headerMenu=$('.header-menu');
	var headerLang=$('.header-top-lang');
	if(w<767){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}

	if(w<767){
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.header-bottom-menu'), function(index, val) {
			if($(this).hasClass('header-bottom-menu--right')) {
				if($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			}else{
				if($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();


// var elements = $('[data-value]');

// $('input').attr("placeholder", $('input').attr("data-value"));
// var elements = $('*[data-value]');
// function placehold(){
// 	$.each(elements, function(index, val) {
// 		elements[i].attr("placeholder", $('input').attr("data-value"));
// 	});
// }
// placehold();
// function placehold(){
// 	$.each($('input'), function(index, val) {
// 		if($(this).find([data-value]).length>0){
// 			$(this).attr("placeholder", $('input').attr("data-value"));
// 		}
// 	});
// }
// placehold();

// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// }
// ibg();

// $('input').on('click', function() {
// 	$('input').attr("placeholder", $(this).attr("data-value"));
// });


// $('input').on('click', function() {
// 	$('input').removeAttr("placeholder", $(this).attr("data-value"));
// });
$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//ZOOM
if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom optinons
	});
}

//POPUP (ссылка на кусок кода https://youtu.be/m4RVcsNMaOY?t=4296)
/*
$('.pl').click(function(event) {
		var pl=$(this).attr('href').replace('#','');
		var v=$(this).data('vid');
	popupOpen(pl,v);
	return false;
});
function popupOpen(pl,v){

}
*/

// Преобразует картинку из html тега img в css свойство background-image (таким образом картинка становится фоном). Заказчик сможет менять картинку в html коде, а я смогу менять свойства позиционирования в css
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

// Клик вне области
$(document).on('click touchstart',function(e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});

// UP

/* 
$(window).scroll(function() {
		var w=$(window).width();
	if($(window).scrollTop()>50){
		$('#up').fadeIn(300);
	}else{
		$('#up').fadeOut(300);
	}
});
*/

// Плавная прокрутка по клику на ссылку меню навигации
$(document).ready(function () {
	// $('a[href="#home"].header-menu__link').addClass('active'); // Первая ссылка меню будет выделена при открытии страницы в браузере
	$('a[href^="#"].header-menu__link').click(function() {
		// var offset = $('.nav').innerHeight(); // Присваиваем переменной высоту блока меню навигации
		// $(this).addClass('active');
		$('.menu__burger-checkbox').prop('checked', false);
		var target = $(this).attr('href'); // присваиваем переменной target атрибут нажатой сслыки
		$('html, body').animate({
			scrollTop: $(target).offset().top - 0
			// scrollTop: $(target).offset().top - offset // С помощью переменной offset делаем отступ при скролле на высоту меню навигации, чтобы меню не перекрывало вверхнюю часть блока
		}, 500);
		// $('a[href^="#"].header-menu__link').removeClass('active'); // удаляем класс .active
		// $(this).addClass('active'); // добавляем класс .active
		// $(this).removeClass('active'); // добавляем класс .active
		return false;
	})
})