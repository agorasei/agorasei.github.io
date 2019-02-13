document.addEventListener("DOMContentLoaded", function(e) {

	pageSetup();

	document.querySelector(".highContrastMode").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleHighContrast();
	}, {passive: true});

	document.querySelector(".highContrastMode-small").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleHighContrast();
	}, {passive: true});

	document.querySelector(".increaseFontMode").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleIncreaseFont();
	}, {passive: true});

	document.querySelector(".increaseFontMode-small").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleIncreaseFont();
	}, {passive: true});

	document.querySelector(".fullScreenMode").addEventListener("click", function(e) {
		e.preventDefault();
		toggleFullScreen();
	}, {passive: true});

	document.querySelector(".exitFullScreen").addEventListener("click", function(e) {
		e.preventDefault();
		toggleFullScreen();
	}, {passive: true});

}, {passive: true});

window.addEventListener("resize", function(e) {

	pageSetup();

}, {passive: true});

function pageSetup() {

	let headline 		= document.querySelector(".headline"),
			mainContent = document.querySelector(".detailContent")
			elem 				= document.querySelector('.drops-mobile-carousel'),
			carousel 		= M.Carousel.getInstance(elem);

	if (carousel) carousel.destroy();

	if (document.documentElement.offsetWidth <= 600) {

		destroyParallaxDetail(headline);

		changeBackground(headline);
		changeBackground(headline, null, mainContent);

		darkOverlay(headline, 40);
		darkOverlay(mainContent, 90);

		detailCarousel();

	} else {

		initParallaxDetail(headline, true);
		darkOverlay(headline, 60);

	}

	initUpdateReadingScroll(-1);

}

function detailCarousel() {

	var elem 		= document.querySelector('.drops-mobile-carousel'),
  		options = {
  			duration: 	200,
  			dist: 		-20,
  			padding: 	0,
  			shift: 		0,
  			numVisible: 3,
  			noWrap: 	true,
  			fullWidth: 	false,
  			indicators: false,
  			onCycleTo: function() {
					newsNavigation(M.Carousel.getInstance(elem));
  			}
  		},
  		instance 	= M.Carousel.init(elem, options);

	document.addEventListener("keydown", function(e) {

		switch(e.keyCode) {
			case 37:
			case 38:
				e.preventDefault();
				carouselGoTo(instance, "prev");
				break;
			case 39:
			case 40:
				e.preventDefault();
				carouselGoTo(instance, "next");
				break;
		}

		return true;

	});

	newsNavigation(instance);

}
