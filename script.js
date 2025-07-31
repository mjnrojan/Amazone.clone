document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.img-item');
    const prevBtn = document.querySelector('.ctrl-prev');
    const nextBtn = document.querySelector('.ctrl-next');
    let current = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'fade');
        });
        slides[index].classList.add('active', 'fade');
        current = index;
    }

    function nextSlide() {
        let nextIndex = (current + 1) % slides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (current - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        resetAutoplay();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        resetAutoplay();
    });

    function startAutoplay() {
        interval = setInterval(nextSlide, 21000); 
    }

    function resetAutoplay() {
        clearInterval(interval);
        startAutoplay();
    }

    // Initialize
    showSlide(current);
    startAutoplay();
});