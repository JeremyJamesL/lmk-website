/* Variables */

const nav = document.querySelector('.nav');
const navToggle =   document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const sidebarLogo = document.querySelector('.sidebar-logo');



/* Fuctions */

function toggleNav() {
    nav.classList.toggle('nav--open');
    sidebar.classList.toggle('sidebar--open');
}

function toggleLogos() {

    if(window.scrollY > 100) {
        logo.classList.add('logo--scrolled');
        sidebarLogo.classList.add('sidebar-logo--scrolled');
    } else {
        logo.classList.remove('logo--scrolled');
        sidebarLogo.classList.remove('sidebar-logo--scrolled')
    }

}

/* Event listeners */

navToggle.addEventListener('click', toggleNav);
window.addEventListener('scroll', toggleLogos);





/* Slideshow */

var slideshowImages = document.querySelectorAll('.portfolio__slideshow-img');
var lightBox = document.querySelector('.lightbox');
var closeBtn = document.querySelector('.lightbox__close');
var lightImages = document.querySelectorAll('.lightbox__img');
var lightImagesArr = Array.from(lightImages);



// Close lightbox
function closeLightbox(e) {
    lightBox.style.display = "none";
    e.style.display = "none";
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
    currImg.style.display = "block";



    // Add event listener for right and left buttons
    navBtnArr.forEach(btn => {
        btn.addEventListener("click", event => {

            if(event.target.classList.contains('lightbox__nav--right')) {
                if(index == lightImagesArr.length - 1) {
                    return;
                } else {
                    currImg.style.display = "none";
                    index++;
                    currImg = lightImagesArr[index];
                    lightImagesArr[index].style.display = "block";
                }
            }

            if(event.target.classList.contains('lightbox__nav--left')) {
                if(index === 0) {
                    return;
                } else {
                    currImg.style.display = "none";
                    index--;
                    currImg = lightImagesArr[index];
                    lightImagesArr[index].style.display = "block";
                }
            }
        });
    });

}



slideshowImages.forEach(function(img, index) {
    img.addEventListener('click', function() {
        openLightbox(index);
    })
});




