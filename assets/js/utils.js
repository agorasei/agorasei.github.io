function newsNavigation(carousel) {

  const previous      = document.querySelector(".newsNavigation-previous a"),
        next          = document.querySelector(".newsNavigation-next a"),
        total         = document.getElementById("newsNavigation-total"),
        sliderLength  = document.querySelectorAll('.carousel-item').length;

  total.innerText = sliderLength;

  manageControls(document.querySelector('.active'), previous, next);

  previous.addEventListener("click", function(e) {
    e.preventDefault();

    carouselGoTo(carousel, "prev");
  });

  next.addEventListener("click", function(e) {
    e.preventDefault();
    
    carouselGoTo(carousel, "next");
  });

}

function manageControls (el, previous, next) {

  const current = document.getElementById("newsNavigation-current");

  let index = getElementIndex(el);

  current.innerText = index + 1;

  initUpdateReadingScroll(index);

  previous.classList.remove("disabled");
  next.classList.remove("disabled");

  if (!el.previousElementSibling) {
    previous.classList.add("disabled");
    next.classList.remove("disabled");
  } else {
    previous.classList.remove("disabled");
  }

  if (!el.nextElementSibling) {
    next.classList.add("disabled");
    previous.classList.remove("disabled");
  } else {
    next.classList.remove("disabled");
  }

}

function getElementIndex(element) {
  return [].indexOf.call(element.parentNode.children, element);
}

function carouselGoTo(carousel, direction) {

  const previous      = document.querySelector(".newsNavigation-previous a"),
        next          = document.querySelector(".newsNavigation-next a");

  let el = null;

  switch(direction) {
    case "prev":
      el = document.querySelector('.active').previousElementSibling;

      if (el) {
        carousel.prev();
        manageControls(el, previous, next);
      }
      break;
    case "next":
      el = document.querySelector('.active').nextElementSibling;

      if (el) {
        carousel.next();
        manageControls(el, previous, next);
      }
  }

}

function changeBackground(el, bgSize, destination) {
  let elDest = destination || el;

  elDest.style.backgroundImage = "url('" + el.getAttribute("data-image") + "')";
  elDest.style.backgroundRepeat = "no-repeat";
  elDest.style.backgroundPosition = "center center";
  elDest.style.backgroundSize = bgSize || "auto";
}

function parallaxDetail(createImage) {
  let parallaxContainer = document.querySelector(".parallax-container"),
      elems = document.querySelector('.parallax');

  if (createImage) {
    let image = document.createElement("img");
    image.src = parallaxContainer.getAttribute("data-image");
    elems.appendChild(image);
  }

  var instancesParallax = M.Parallax.init(elems, {});
}

function initParallaxDetail(el, createImage) {

  el.classList.add("parallax-container");

  parallaxDetail(createImage);

}

function destroyParallaxDetail(el) {
  
  el.classList.remove("parallax-container");

}

function darkOverlay(target, opacity) {

  let op = opacity || 100;

  target.classList.add("darkOverlay", "opacity-" + op);

}

function toggleFullScreen() {

  var doc       = window.document, 
      docEl     = doc.documentElement,
      body      = document.body;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
    body.classList.add("fullscreen");
  } else {
    cancelFullScreen.call(doc);
    body.classList.remove("fullscreen");
  }

}

// Todas as funções iniciadas com a11y são relacionadas a acessibilidade
function a11yToggleHighContrast() {

  let bodyClass = document.body.classList;

  if (bodyClass.contains("highContrast")) {

    bodyClass.remove("highContrast");

  } else {

    bodyClass.add("highContrast");

  }

}

function a11yIncreaseFont() {

  let bodyClass = document.body.classList;



}