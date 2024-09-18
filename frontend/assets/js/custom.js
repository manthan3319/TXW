// --------backtotop--------------
$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() < 50) {
			$('#rocketmeluncur').slideUp(500);
			var s = $('#rocketmeluncur').parent();
			$(s).css('bottom', '-80px');
		} else {
			$('#rocketmeluncur').slideDown(500);
			var s = $('#rocketmeluncur').parent();
			$(s).css('bottom', '30px');

		}
	});
	$('#rocketmeluncur').click(function () {
		$("html, body").animate({
			scrollTop: '0px',
			display: 'none',
		}, {
			duration: 300,
			easing: 'linear',
		});
		var self = this;
		$(this).parent().css('bottom', '-80px');
		this.className += ' ' + "launchrocket";
		setTimeout(function () {
			self.className = 'showrocket';
		}, 800)
	});
});


// --------preloader--------------
$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').slideUp('slow');
		$('.cube-wrapper').fadeOut();
	}, 1000);

	// wow = new WOW({
	// 	boxClass: 'wow',
	// 	animateClass: 'animate__animated',
	// 	offset: 0,
	// 	mobile: true,
	// 	live: true
	// });
	// wow.init();
});

$(document).ready(function () {
	var headerHeight = jQuery('.header-wrapper');
	var scroll = jQuery(window).scrollTop();
	if (scroll >= 50) {
		headerHeight.addClass('sticky');
	} else {
		headerHeight.removeClass('sticky');
	}
	$(window).scroll(function () {
		var headerHeight = $('.header-wrapper');
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			headerHeight.addClass('sticky');
		} else {
			headerHeight.removeClass('sticky');
		}
	});
	// --------header--------------
	$('.toggle-btn, .close-menu, .menu-overlay-bg').on('click', function () {
		$('.menu-part').toggleClass('active');
		$('.menu-overlay-bg').toggleClass('active');
	});
	// --------mega menu--------------

	$(document).ready(function () {
		function setAccordionBehavior() {
			if (window.matchMedia('(max-width: 1199px)').matches) {
				$('.category_icon_title').on('click', function (event) {
					event.stopPropagation();
					var $submenu = $(this).closest('.submenu_dropdown');
					var isActive = $submenu.hasClass('active');

					$('.submenu_dropdown').removeClass('active');
					if (!isActive) {
						$submenu.addClass('active');
					}
				});

				$('.navbar .dropdown-menu .dropdown-toggle').on('click', function (event) {
					event.stopPropagation();
				});
			} else {
				$('.category_icon_title').off('click');
				$('.submenu_dropdown').removeClass('active');
			}
		}

		$('.dropdown-toggle').dropdown();

		setAccordionBehavior();

		$(window).resize(function () {
			setAccordionBehavior();
		});
	});

	// --------select2-------
	$('.customSelect').each(function () {
		var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		});
	});
	$('.customSelect1').each(function () {
		// var dropdownParents = $(this).parents('.select2Part')
		$(this).select2({
			// dropdownParent: dropdownParents,
			minimumResultsForSearch: -1
		});
	});
	$('.customSelectSearch').each(function () {
		var dropdownParents = $(this).parents('.select2Part');
		$(this).select2({
			dropdownParent: dropdownParents,
		});
		$('.customSelectSearch').select2().on('select2:open', function (e) {
			$('.select2-search__field').attr('placeholder', 'Search Item');
		})
	});
	$('.customSelectSearchmultiple').each(function () {
		var dropdownParents = $(this).parents('.select2Part');
		var placehldrget = $(this).attr("data-placeholder");
		$(this).select2({
			dropdownParent: dropdownParents,
			placeholder: placehldrget,
		});
	});
});
// $(window).on('resize load', function () {
// 	var width = (($(window).width() - $('.container').outerWidth()) / 2) + 12;
// 	if ($(window).width() >= 992) {
// 		$('.hero_banner_image').css("margin-right", -width + 'px');
// 	} else {
// 		$('.hero_banner_image').css("margin-right", '0px')
// 	}
// });

$(function () {
	$('.tml_slider_main').slick({
		lazyLoad: 'progressive',
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		asNavFor: '.tml_slider_nav',
		autoplay: true,
	});

	$('.tml_slider_nav').slick({
		lazyLoad: 'progressive',
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		centerMode: true,
		centerPadding: '120px',
		adaptiveHeight: true,
		cssEase: 'ease-in-out',
		asNavFor: '.tml_slider_main',
		vertical: true,
		autoplay: true,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '80px',
			  }
			},
			// {
			//   breakpoint: 992,
			//   settings: {
			// 	slidesToShow: 1,
			// 	slidesToScroll: 1,
			// 	centerPadding: '80px',
			//   }
			// },
		]
	});
})

$(function () {
	$('.gallery_slider1').slick({
		slidesToShow: 1,
		infinite: false,
		arrows: true,
		speed: 1000,
		appendArrows: $('.slide_arrow1'),
		prevArrow: '<button class="slick-prev slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_left.svg" /></button>',
		nextArrow: '<button class="slick-next slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_right.svg" /></button>',
		// autoplay: true,
	});
	$('.gallery_slider2').slick({
		slidesToShow: 1,
		infinite: false,
		arrows: true,
		speed: 1000,
		appendArrows: $('.slide_arrow2'),
		prevArrow: '<button class="slick-prev slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_left.svg" /></button>',
		nextArrow: '<button class="slick-next slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_right.svg" /></button>',
		// autoplay: true,
	});
	$('.gallery_slider3').slick({
		slidesToShow: 1,
		infinite: false,
		arrows: true,
		speed: 1000,
		appendArrows: $('.slide_arrow3'),
		prevArrow: '<button class="slick-prev slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_left.svg" /></button>',
		nextArrow: '<button class="slick-next slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_right.svg" /></button>',
		// autoplay: true,
	});
})

$(function () {
	$('.home_image_slider').slick({
		slidesToShow: 1,
		infinite: false,
		arrows: true,
		speed: 1000,
		fade: true,
		appendArrows: $('.slide_arrow1'),
		prevArrow: '<button class="slick-prev slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_left.svg" /></button>',
		nextArrow: '<button class="slick-next slick-arrow bg_icon"><img src="frontend/assets/images/icons/slide_arrow_right.svg" /></button>',
		autoplay: true
	});
})

// $(function () {
// 	$('[data-fancybox]').fancybox({
// 		// Options will go here
// 		buttons: [
// 			'close'
// 		],
// 		wheel: false,
// 		transitionEffect: "slide",
// 		// thumbs          : false,
// 		// hash            : false,
// 		loop: false,
// 		// keyboard        : true,
// 		toolbar: false,
// 		// animationEffect : false,
// 		// arrows          : true,
// 		clickContent: false
// 	});
// });
