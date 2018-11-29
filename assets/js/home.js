document.addEventListener("DOMContentLoaded", function(e) {

	var elem 		= document.querySelector('.carousel'),
		options 	= {
			duration: 	200,
			dist: 		-100,
			padding: 	0,
			shift: 		0,
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


	var news = document.querySelectorAll(".card.news");

	news.forEach(function (el, i){
    changeBackground(el, "cover");
	});

});