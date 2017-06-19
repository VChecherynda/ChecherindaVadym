(function($, window, document, undefined) {

	var owl = $('.tsn-header__slider');
	var videoSrc = 'video/TopNewsVideo.mp4'

	$('.tsn-header__slider').owlCarousel({
		items: 1,
		autoplay: false,
		items : 1, 
	    itemsDesktop : false,
	    itemsDesktopSmall : false,
	    itemsTablet: false,
	    itemsMobile : false
	});

	$('.tsn-slide--one')
		.closest('.owl-item')
		.prepend('<video muted><source src="'+videoSrc+'" type="video/mp4"></video>')
	$('.owl-item video')
		.attr('autoplay', true)
		.attr('loop', true);

// Sticky menu

	let menu = $('.tsn-header__nav');
	let header = $('.tsn-header__top');
	let headerTop = $('.tsn-header__top').offset().top;
	let menuTop = $('.tsn-header__nav').offset().top;

	function stickyMenu() {
		
		let windowTop = $(window).scrollTop();

		if( windowTop >= 200 ) {
			header.addClass('bg-black');
		} else {
			header.removeClass('bg-black');
		}

		if( windowTop >= menuTop ) {
			menu.addClass('fixed');	
		} else {
			menu.removeClass('fixed');
		}
	}	

	window.onscroll = function() {
		stickyMenu();
	}

// Play video

	$('.tsn-article__pic--video').click(function(e){
		e.preventDefault();
		$(this).closest('.tsn-article')
			   .find('.tsn-article__video')
			   .css('display','block');
	});
	
	$('.tsn-article__video').click(function(e){
		e.preventDefault();
		let video = $(this).find('video').get(0);	

		video.paused ? video.play() : video.pause();
	}); 

	$('.tsn-close--video').click(function(){
		$(this).parent().hide();
	});

// Modal-share

	// $('.tsn-share').click(function(e){
	// 	e.preventDefault();
	// 	$('.tsn-modal--share').show();
	// });

	$('.tsn-share').click(function(e){
		e.preventDefault();
		$('.tsn-modal--share').show();
	});

	$('.tsn-close--modal').click(function(){
		$(this).parent().parent().hide();
	});

	$(window).click(function(e) {
	    if ($(e.target).hasClass('tsn-modal')) {
	        $('.tsn-modal').hide();
	        $('body').css('overflow','auto');
	    }
	});

// Modal photo slider with thumbs

	let photoSlider = $('.tsn-modal__photo-slider');
	let photoThumb = $('.tsn-photo__thumb');
	
	photoSlider.owlCarousel({
		items: 1,
		pagination: false,
		itemsDesktop : false,
	    itemsDesktopSmall : false,
	    itemsTablet: false,
	    itemsMobile : false,
		afterAction: currentItem
	});	

	photoThumb.eq(0).addClass('active');

	function currentItem(el){
		photoThumb.removeClass('active');

		this
		   .$owlItems
		   .removeClass('active')

		//add class active
		this
		   .$owlItems //owl internal $ object containing items
		   .eq(this.currentItem)
		   .addClass('active')    

		photoThumb.eq(this.currentItem).addClass('active');   
	}

	photoThumb.click(function(){
		let index = $(this).index();
		photoSlider.trigger('owl.goTo', index);
	});

	//Modal photo slider open

	$('.js-gallery').click(function(e){
		e.preventDefault();
			$('body').css('overflow','hidden');
			$('.tsn-modal--photo').show();

	})

	//Modal photo slider close

	$('.tsn-close--photo').click(function(){
		$('body').css('overflow','auto');
		$(this).parent().hide()
	})
	

})(jQuery, window, document, undefined);

