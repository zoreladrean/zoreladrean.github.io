document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const initHeroSlider = () => {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentIndex = 0;
        let autoSlide;

        const updateSlider = () => {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        };

        // Auto-advance every 5 seconds
        const startAutoSlide = () => {
            autoSlide = setInterval(nextSlide, 5000);
        };

        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slider.addEventListener('mouseleave', startAutoSlide);

        // Dot controls
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
                clearInterval(autoSlide);
                startAutoSlide();
            });
        });

        // Initialize
        startAutoSlide();
        updateSlider();
    };

    if (document.querySelector('.hero-slider')) {
        initHeroSlider();
    }

    // Skill Bars Animation
    // const animateSkillBars = () => {
    //     document.querySelectorAll('.bar').forEach(bar => {
    //         // Set the width based on the data-level attribute
    //         bar.style.width = bar.dataset.level;
            
    //         // Update the text of the percentage label
    //         const percentLabel = bar.querySelector('.skill-percent');
    //         if (percentLabel) {
    //             percentLabel.textContent = bar.dataset.level;
                
    //             // Fade in the percentage label after the width is animated
    //             setTimeout(() => {
    //                 percentLabel.style.opacity = 1;
    //             }, 1500); // Adjust the delay if needed to match the width transition
    //         }
    //     });
    // };    

    // // Intersection Observer for skill bars
    // const skillsSection = document.getElementById('about');
    // if (skillsSection) {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //           if (entry.isIntersecting) {
    //             // Add slight delay to ensure CSS paint
    //             setTimeout(animateSkillBars, 100);
    //             observer.unobserve(entry.target);
    //           }
    //         });
    //       }, {
    //         threshold: 0.1,
    //         rootMargin: '0px 0px -100px 0px'
    //       });
        
    //     observer.observe(skillsSection);
    // }
const initSkillCarousel = () => {
    const slides = document.querySelectorAll('.skill-slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to show a specific slide and animate its skill bar.
    const showSlide = index => {
        // Hide all slides and reset their bars
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            // Reset each slide's bar immediately.
            const bar = slide.querySelector('.bar');
            if (bar) {
                bar.style.transition = "none";
                bar.style.width = "0";
            }
            const percentLabel = slide.querySelector('.skill-percent');
            if (percentLabel) {
                percentLabel.style.transition = "none";
                percentLabel.style.opacity = "0";
            }
        });
        
        // Show the target slide
        const activeSlide = slides[index];
        activeSlide.classList.add('active');
        
        // Allow a brief timeout so the slide is visible before animating
        setTimeout(() => {
            const bar = activeSlide.querySelector('.bar');
            if (bar) {
                // Enable transition and animate to the desired width
                bar.style.transition = "width 1.5s ease-out";
                bar.style.width = bar.dataset.level;
            }
            
            const percentLabel = activeSlide.querySelector('.skill-percent');
            if (percentLabel) {
                percentLabel.textContent = bar.dataset.level;
                percentLabel.style.transition = "opacity 0.5s ease";
                // Fade in the percentage label after the width completes
                setTimeout(() => {
                    percentLabel.style.opacity = 1;
                }, 1000);
            }
        }, 100); // small delay to ensure the slide is rendered
    };

    // Show the first slide immediately
    showSlide(currentIndex);

    // Set an interval to cycle through slides continuously
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 2000); // Change slide every 4 seconds (adjust as needed)
};

// Initialize the Skill Carousel if it exists on the page.
if (document.querySelector('.skill-carousel')) {
    initSkillCarousel();
}

    // View More Projects
    const projects = document.querySelectorAll('.project-card');
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (projects.length > 3 && loadMoreBtn) {
        let visibleProjects = 3;
        
        const updateProjects = () => {
            projects.forEach((project, index) => {
                project.style.display = index < visibleProjects ? 'grid' : 'none';
            });
            
            loadMoreBtn.style.display = visibleProjects >= projects.length 
                ? 'none' 
                : 'block';
            
            loadMoreBtn.textContent = visibleProjects >= projects.length
                ? 'All Projects Loaded'
                : 'Load More Projects';
        };

        loadMoreBtn.addEventListener('click', () => {
            visibleProjects = Math.min(visibleProjects + 3, projects.length);
            updateProjects();
        });

        updateProjects();
    }

    // EmailJS Form Handling
    const contactForm = document.getElementById('contact-form');
    // if (contactForm) {
    //     emailjs.init('YOUR_USER_ID');
        
    //     contactForm.addEventListener('submit', async (e) => {
    //         e.preventDefault();
            
    //         try {
    //             await emailjs.sendForm(
    //                 'YOUR_SERVICE_ID',
    //                 'YOUR_TEMPLATE_ID',
    //                 contactForm
    //             );
                
    //             contactForm.reset();
    //             showToast('Message sent successfully!');
    //         } catch (error) {
    //             showToast(`Error: ${error.text}`, true);
    //         }
    //     });
    // }
    // Animate the "Currently Exploring" section when it comes into view
    const currentlyLearningSection = document.querySelector('.currently-learning');
    if (currentlyLearningSection) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            currentlyLearningSection.classList.add('animate');
            } else {
            currentlyLearningSection.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(currentlyLearningSection);
    }

    const skilsGridSection = document.querySelector('.skills-grid');
    if (skilsGridSection) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            skilsGridSection.classList.add('animate');
            } else {
            skilsGridSection.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(skilsGridSection);
    }

    const experienceCardSection = document.querySelector('.experience-card');
    if (experienceCardSection) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCardSection.classList.add('animate');
            } else {
            experienceCardSection.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCardSection);
    }

    const experienceCard2Section = document.querySelector('.experience-card2');
    if (experienceCard2Section) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCard2Section.classList.add('animate');
            } else {
            experienceCard2Section.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCard2Section);
    }

    const experienceCard3Section = document.querySelector('.experience-card3');
    if (experienceCard3Section) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCard3Section.classList.add('animate');
            } else {
            experienceCard3Section.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCard3Section);
    }

    const experienceCard4Section = document.querySelector('.experience-card4');
    if (experienceCard4Section) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCard4Section.classList.add('animate');
            } else {
            experienceCard4Section.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCard4Section);
    }

    const experienceCard5Section = document.querySelector('.experience-card5');
    if (experienceCard5Section) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCard5Section.classList.add('animate');
            } else {
            experienceCard5Section.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCard5Section);
    }

    const experienceCard6Section = document.querySelector('.experience-card6');
    if (experienceCard6Section) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            experienceCard6Section.classList.add('animate');
            } else {
            experienceCard6Section.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(experienceCard6Section);
    }

    const educationListSection = document.querySelector('.education-list');
    if (educationListSection) {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            educationListSection.classList.add('animate');
            } else {
            educationListSection.classList.remove('animate');
            }
        });
        },
        { threshold: 0.5 }
    );
    observer.observe(educationListSection);
    }

});

// Toast notification function
function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : 'success'}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// hamburger menu
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});