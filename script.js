// nav bar
    // 
    // nav bar
    document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");
    
        toggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            toggle.classList.toggle("active");
        });
    });
// carousel-1
const carousel = new bootstrap.Carousel(document.getElementById('giftosCarousel'));
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            carousel.prev();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            carousel.next();
        });

// carousel-2

    // carousel-2
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function updateSlide() {
        slides.style.transform = `translateX(-${currentIndex * 600}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    function autoPlay() {
        nextSlide();
        setTimeout(autoPlay, 3000);
    }

    setTimeout(autoPlay, 3000);