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

function initFullScreen() {
  screenfull.on("change", function() {
    document.querySelector(".fullScreenMode").dispatchEvent( new MouseEvent("click", {bubbles: false}) );
  });
}

function toggleFullScreen() {

  var doc       = window.document, 
      docEl     = doc.documentElement,
      body      = document.body;

  if (screenfull.enabled) {

    console.log(screenfull.isFullscreen);

    if (screenfull.isFullscreen) {
      screenfull.exit();
      body.classList.remove("fullscreen");
    } else {
      screenfull.request();
      body.classList.add("fullscreen");
    }

  } else {
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

function a11yToggleIncreaseFont() {

  let htmlClass = document.documentElement.classList;

  if (htmlClass.contains("increaseFont")) {

    htmlClass.remove("increaseFont");

  } else {

    htmlClass.add("increaseFont");

  }

}