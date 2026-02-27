const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const level = entry.target.getAttribute("data-level");
            entry.target.style.width = level + "%";
        }
    });
}, { threshold: 0.4 });

skillFills.forEach(fill => {
    skillObserver.observe(fill);
});
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.25 });

sections.forEach(section => {
    observer.observe(section);
});

const carousels = document.querySelectorAll('.project-carousel');

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let current = 0;

    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 3000); // 3 seconds per image
});

const internshipCarousel = document.querySelectorAll('.internship-carousel');

internshipCarousel.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    let current = 0;

    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 3000); // change every 3 seconds
});


