/* Variables */

const nav = document.querySelector('.nav');
const navToggle =   document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const sidebarLogo = document.querySelector('.sidebar-logo');
const contactToggle = document.querySelector('.contact-toggle');
const contactSlide = document.querySelector('.contact-slide');
// const portfolio = document.querySelector('.portfolio');
// let portfolioHeight = portfolio.offsetHeight;

/* Page on Load */

window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
});


/* Functions */

function toggleNav() {
    nav.classList.toggle('nav--open');
    sidebar.classList.toggle('sidebar--open');
    sidebarLogo.classList.toggle('open');
}

/* Scroll magic */

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    offset: 100
})
.setClassToggle('.sidebar-logo, .logo', 'scrolled')
.addTo(controller);


/* Event listeners */

navToggle.addEventListener('click', toggleNav);
contactToggle.addEventListener('click', openContact);



/* Slideshow */

var slideshowImages = document.querySelectorAll('.portfolio__slideshow-img');
var lightBox = document.querySelector('.lightbox');
var closeBtn = document.querySelector('.lightbox__close');
var lightImages = document.querySelectorAll('.lightbox__img');
var lightImagesArr = Array.from(lightImages);



// Close lightbox
function closeLightbox(e) {
    lightBox.style.display = "none";
    lightBox.style.zIndex = -1;
    lightImagesArr.forEach(img => img.style.opacity = 0); // Return all slideshowimages back to original state
}


// Open lightbox and initialise slideshow
function openLightbox(ind) {

    const navBtns = document.querySelectorAll('.lightbox__nav');
    const navBtnArr = Array.from(navBtns);

    // Get current image
    let index = ind;
    let currImg = lightImagesArr[index];

    // Add event listener for close button
    closeBtn.addEventListener('click', function() {
        closeLightbox(currImg);
    });

    // Open light box and current image;
    lightBox.style.display = "block";
    lightBox.style.zIndex = 2000;
    currImg.style.opacity = 1;



    // Add event listeners for arrow clicks and arrow keypresses
    navBtnArr.forEach(btn => btn.addEventListener("click", function(event) {
        shuffleImages(event);
    }));
    
    document.addEventListener("keydown", function(event){
        shuffleImages(event);
    });



    // Add event listener for right and left buttons

    function shuffleImages(e) {
        if(e.target.classList.contains('lightbox__nav--right') || e.key === 39 || e.which === 39) {
            if(index === lightImagesArr.length - 1) {
                return;
            } else {
                currImg.style.opacity = 0;
                index++;
                currImg = lightImagesArr[index];
                lightImagesArr[index].style.opacity = 1;
            }
        }

        // Click left button
        if(e.target.classList.contains('lightbox__nav--left') || e.key === 37 || e.which === 37 ) {
            if(index === 0) {
                return;
            } else {
                currImg.style.opacity = 0;
                index--;
                currImg = lightImagesArr[index];
                lightImagesArr[index].style.opacity = 1;
            }
        }
    }
    
    
}



// Add event listener to grid images
slideshowImages.forEach(function(img, index) {
    img.addEventListener('click', function() {
        openLightbox(index);
    })
});



// Open contact section

function openContact() {
    contactSlide.classList.toggle('contact-slide--open');
    nav.classList.remove('nav--open');
    sidebar.classList.remove('sidebar--open');
    sidebarLogo.classList.remove('open');
}




