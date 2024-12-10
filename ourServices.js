function initializeSliders() {
    const sections = document.querySelectorAll(".picsContainer");

    sections.forEach((section) => {
        const slides = section.querySelectorAll(".pic");
        const dots = [];

        const sliderControls = document.createElement("div");
        sliderControls.classList.add("slider-controls");

        const prevButton = document.createElement("button");
        prevButton.classList.add("slider-button", "prev");
        prevButton.innerHTML = "❮";
        sliderControls.appendChild(prevButton);

        const nextButton = document.createElement("button");
        nextButton.classList.add("slider-button", "next");
        nextButton.innerHTML = "❯";
        sliderControls.appendChild(nextButton);

        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots-container");
        slides.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });
        sliderControls.appendChild(dotsContainer);

        section.parentElement.appendChild(sliderControls);

        let slideIndex = 1; 

        function showSlides(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach((slide) => (slide.style.display = "none"));
            dots.forEach((dot) => dot.classList.remove("active"));

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        }

        prevButton.addEventListener("click", () => {
            showSlides(--slideIndex);
        });
        nextButton.addEventListener("click", () => {
            showSlides(++slideIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.addEventListener("click", () => {
                showSlides((slideIndex = dotIndex + 1));
            });
        });

        function adjustDisplay() {
            if (window.innerWidth > 784) {
                slides.forEach((slide) => {
                    slide.style.display = "block"; 
                });
                sliderControls.style.display = "none";
            } else {
                slides.forEach((slide, index) => {
                    slide.style.display = index === 0 ? "block" : "none";
                });
                sliderControls.style.display = "flex";
                showSlides(slideIndex); 
            }
        }

        adjustDisplay();

        window.addEventListener("resize", adjustDisplay);
    });
}

initializeSliders();