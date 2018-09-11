function initSlider() {
	const sliderItems		= document.querySelectorAll('.newsCarousel-item'),
				current 			= document.getElementById("newsNavigation-current");
	
	var		sliderLength 	= sliderItems.length,
				even 					= sliderLength / 2,
				odd 					= (sliderLength + 1) / 2;

	sliderItems[0].classList.add("active");
	sliderItems[1].classList.add('next');

	sliderItems.forEach(function(el, i, arr) {
		el.addEventListener("click", function(e) {
			
			e.preventDefault();
			e.stopPropagation();

			const sliderContainer = document.querySelector('.newsCarousel');

			let position = (((70 * i) + (10 * (i - 1))) * -1);
		  sliderContainer.style.transform = 'translateX(' + position + 'vw)';
		  
		  el.classList.remove('prev', 'next');
		  
		  sliderItems.forEach(function(el, i, arr) {
		  	el.classList.remove('prev', 'active', 'next');
		  });
		  
		  el.classList.add('active');

		  current.innerText = (i + 1);

		  if (el.previousElementSibling) el.previousElementSibling.classList.add('prev');
		  if (el.nextElementSibling) el.nextElementSibling.classList.add('next');

		  initUpdateReadingScroll(i);
		});
	});

	// Keyboard nav
	document.body.addEventListener("keydown", function(e) {
	  if (e.keyCode == 37) {
	    document.querySelector('.active').previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
	  }
	  else if (e.keyCode == 39) {
	    document.querySelector('.active').nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
	  }
	});
}

function initNewsNavigation() {

	const previous 			= document.querySelector(".newsNavigation-previous a"),
				next 					= document.querySelector(".newsNavigation-next a"),
				total					= document.getElementById("newsNavigation-total"),
				sliderLength	= document.querySelectorAll('.newsCarousel-item').length;

	total.innerText = sliderLength;
	previous.classList.add("disabled");

	previous.addEventListener("click", function(e) {
		e.preventDefault();
		previous.classList.remove("disabled");
		if (document.querySelector('.active').previousElementSibling) {
	  	document.querySelector('.active').previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		} else {
			previous.classList.add("disabled");
		}
	});

	next.addEventListener("click", function(e) {
		e.preventDefault();
		next.classList.remove("disabled");
		if (document.querySelector('.active').nextElementSibling) {
	  	document.querySelector('.active').nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		} else {
			next.classList.add("disabled");
		}
	});

}