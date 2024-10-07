// Testimonial Slider Logic
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

// Parallax effect for sections
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const sections = document.querySelectorAll('.features, .testimonials, .about, .contact');
    
    sections.forEach(section => {
        section.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });
});
