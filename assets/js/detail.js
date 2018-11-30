document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {

		let headline 		= document.querySelector(".headline"),
				mainContent = document.querySelector(".detailContent");
		changeBackground(headline);
		changeBackground(headline, null, mainContent);

		darkOverlay(mainContent);

		var elem 		= document.querySelector('.drops-mobile-carousel'),
	      width   = document.documentElement.offsetWidth,
	  		options = {
	  			duration: 	200,
	  			dist: 		-20,
	  			padding: 	20,
	  			shift: 		10,
	  			numVisible: 3,
	  			noWrap: 	true,
	  			fullWidth: 	false,
	  			indicators: true
	  		},
	  		instance 	= M.Carousel.init(elem, options);

			document.addEventListener("keydown", function(e) {

				switch(e.keyCode) {
					case 37:
					case 38:
						instance.prev();
						break;
					case 39:
					case 40:
						instance.next();
						break;
				}

			});

	} else {

		parallaxDetail(true);

	}

	initUpdateReadingScroll(-1);
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
	} else {
		parallaxDetail(true);
	}

	initUpdateReadingScroll(-1);

});