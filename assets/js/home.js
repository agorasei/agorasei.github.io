document.addEventListener("DOMContentLoaded", function(e) {

	var elem 		= document.querySelector('.carousel'),
		options 	= {
			duration: 	200,
			dist: 		-60,
			padding: 	20,
			shift: 		20,
			numVisible: 1,
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
		let image = el.getAttribute("data-image");
		el.style.backgroundImage = "url('" + image + "')";
	});

});