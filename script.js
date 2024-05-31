document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicators');
    let index = 0;
    let interval;

    function createIndicators() {
        images.forEach((_, i) => {
            const indicator = document.createElement('div');
            indicator.addEventListener('click', () => {
                index = i;
                updateCarousel();
            });
            indicatorsContainer.appendChild(indicator);
        });
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicators div');
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    function showNextImage() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function showPrevImage() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        carouselImages.style.transform = `translateX(${-index * 100}%)`;
        updateIndicators();
        resetInterval();
    }

    function startInterval() {
        interval = setInterval(showNextImage, 3000);
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    createIndicators();
    updateCarousel();
    startInterval();
});