$(function() {



	// Движущаяся картинка на главной
	$('body').mousemove( function(event) {

		var width = $('.image_conteiner').width();
		var height = $('.image_conteiner').height();

		var mid_width = width/2
		var mid_height = height/2;

		var moveX = (mid_width - event.pageX)*0.07
		var moveY = (mid_height - event.pageY)*0.02

		$('.back_image').css({"top" : moveY + "px"});
		$('.back_image').css({"left" : moveX + "px"});

	})

	// Огромный слайдер на всю страницу из 3х элементов
	let shift = {'pos' : 0}
	
	$('.button1').click( function() {

		let slider = $('.slider_conteiner')
		
		if (shift.pos < 200) {
			shift.pos = shift.pos+100; 
			slider.css({'left': shift.pos + 'vw'})
		} else {
			shift.pos = 0
			slider.css({'left': '0vw'})
		}
	})
	
	$('.button2').click( function() {

		let slider = $('.slider_conteiner')
		
		if (shift.pos > 0) {
			shift.pos = shift.pos-100; 
			slider.css({'left': shift.pos + 'vw'})
		} else {
			shift.pos = 200
			slider.css({'left': shift.pos + 'vw'})
		}
	})
	
	$('.button1').hover(
		function() {
			$('.cursor1').css({
				'border-top': '10px solid transparent',
				'border-right': '20px solid #fff',
				'border-bottom': '10px solid transparent'
			})
		},
		function() {
			$('.cursor1').css({
				'border-top': '10px solid transparent',
				'border-right': '20px solid #333A41',
				'border-bottom': '10px solid transparent'
			})
		}
	)

	$('.button2').hover(
		function() {
			$('.cursor2').css({
				'border-top': '10px solid transparent',
				'border-left': '20px solid #fff',
				'border-bottom': '10px solid transparent'
			})
		},
		function() {
			$('.cursor2').css({
				'border-top': '10px solid transparent',
				'border-left': '20px solid #333A41',
				'border-bottom': '10px solid transparent'
			})
		}
	)



	// Ползунок на слайдере с фотками
	let sliderBut = $('.sliderButton')
	let lineButton = $('.lineButton')
	let imgSlider = $('.windowPhotos')
	let sliderCont = $('.sliderConteiner')
	
	$(document).on( "mousedown",'.sliderButton', function() {
		console.log("mouse press")

		let coordBut = sliderBut.position()
		let coordLine = lineButton.offset()

		// Правая граница полосы прокрутки
		let rightRestriction = lineButton.width() - sliderBut.width()
		

		//Ширина окна блока с картинками минус блок, который отображает картинки
		let widthImgSlider = (imgSlider.width() - sliderCont.width())*(-1)

		let shiftSlid = widthImgSlider/rightRestriction

		$(document).on("mousemove",'body', function(e) {
			
			//смещение относительно начала полосы прокрутки
			let shiftX = e.pageX - coordLine.left

			// смещение относительно центра позунка
			let moveX = shiftX - sliderBut.width()/2;
			
			if (moveX < 0) moveX = 0;
			if (moveX > rightRestriction) moveX = rightRestriction;

			let moveSlide = moveX * shiftSlid;
			

			if (moveSlide > 0) moveSlide = 0;
			
			if (moveSlide < widthImgSlider) moveSlide = widthImgSlider;
			

			sliderBut.css({'left': moveX +'px'})
			imgSlider.css({'left': moveSlide +'px'})
		})

		$(document).on('mouseup','body',  function() {
			$(document).off("mousemove")
			$(document).off('mouseup','body')
		})
		return false
	})


	$('img').on('mouseover', function(e) {
		//console.log(e.delegateTarget.src)
		//console.log(e.delegateTarget.id)
		
		let idImg = '#' + e.target.id
		let urlAdr = $(idImg).attr('src')

		$(idImg).on("click", function() {
			console.log("it's work")
			
			$('#hi').attr('src', urlAdr)
			
		})
		
	})
	

		
		
	
	


	



})