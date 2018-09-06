//= require materialize

document.addEventListener("DOMContentLoaded", function(e) {

	function initSlider() {
		const sliderItems		= document.querySelectorAll('.newsCarousel-item');
		
		var		sliderLength 	= sliderItems.length,
					even 					= sliderLength / 2,
					odd 					= (sliderLength + 1) / 2;

					console.log("slider length: ", sliderLength, " even: ", even, " odd:", odd);

		sliderItems[0].classList.add("active");
		sliderItems[1].classList.add('next');

		sliderItems.forEach(function(el, i, arr) {
			el.addEventListener("click", function() {
				const sliderContainer = document.querySelector('.newsCarousel');

				let position = (((55 * i) + (15 * (i - 1))) * -1);
			  
			  sliderContainer.style.transform = 'translateX(' + position + 'vw)';
			  
			  el.classList.remove('prev', 'next');
			  //debugger;
			  sliderItems.forEach(function(el, i, arr) {
			  	el.classList.remove('prev', 'active', 'next');
			  });
			  
			  el.classList.add('active');
			  //debugger;
			  if (el.previousElementSibling) el.previousElementSibling.classList.add('prev');
			  if (el.nextElementSibling) el.nextElementSibling.classList.add('next');
			});
		});


		// Keyboard nav
		document.body.addEventListener("keydown", function(e) {
		  if (e.keyCode == 37) {
		    document.querySelector('.active').previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: true}) );
		  }
		  else if (e.keyCode == 39) {
		    document.querySelector('.active').nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: true}) );
		  }
		});
	}

	initSlider();

});