document.addEventListener('DOMContentLoaded', function() {
    
    // Remover el overlay después de la animación
    setTimeout(() => {
        const overlay = document.getElementById('openingOverlay');
        if (overlay) {
            overlay.remove();
        }
    }, 6000);

    
    // Efecto typewriter para el título
    function typewriterTitle() {
        const titleText = 'Narrar lo que somos';
        const titleElement = document.querySelector('.div');
        
        if (!titleElement) return;
        
        let currentTitleText = '';
        let titleIndex = 0;
        
        function typeNextTitleCharacter() {
            if (titleIndex < titleText.length) {
                currentTitleText += titleText[titleIndex];
                titleElement.textContent = currentTitleText;
                titleIndex++;
                
                const delay = Math.random() * 100 + 80;
                setTimeout(typeNextTitleCharacter, delay);
            } else {
                setTimeout(typewriterParagraph, 500);
            }
        }
        
        setTimeout(() => {
            titleElement.style.opacity = '1';
            titleElement.textContent = '';
            typeNextTitleCharacter();
        }, 6500);
    }

    // Efecto typewriter para el párrafo principal
    function typewriterParagraph() {
        const text = 'Este especial es el resultado de una búsqueda: la de entender, a través de los datos y de la lectura sensible, qué están escribiendo los estudiantes y revela lo que motiva, emociona y transforma a quienes están narrando el país desde sus historias.';
        const highlightWords = ['búsqueda', 'datos', 'lectura sensible', 'escribiendo', 'estudiantes', 'motiva', 'emociona', 'transforma', 'narrando', 'país', 'historias'];
        const typewriterElement = document.getElementById('typewriter-paragraph');
        
        if (!typewriterElement) return;
        
        let currentText = '';
        let currentIndex = 0;
        
        function addHighlights(text) {
            let highlightedText = text;
            highlightWords.forEach(word => {
                const regex = new RegExp(`\\b${word}\\b`, 'gi');
                highlightedText = highlightedText.replace(regex, `<span class="highlight">${word}</span>`);
            });
            return highlightedText;
        }
        
        function typeNextCharacter() {
            if (currentIndex < text.length) {
                currentText += text[currentIndex];
                typewriterElement.innerHTML = addHighlights(currentText);
                currentIndex++;
                
                const delay = Math.random() * 50 + 30;
                setTimeout(typeNextCharacter, delay);
            } else {
                setTimeout(() => {
                    typewriterElement.style.borderRight = 'none';
                }, 3000);
            }
        }
        
        typewriterElement.style.borderRight = '2px solid #DC6B5E';
        typeNextCharacter();
    }
    
    typewriterTitle();

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    const elementsToAnimate = [
        '.text-wrapper',
        '.group',
        '.vector',
        'img:not(.background-element)',
        '.rectangle',
        'p',
        'div[class*="text-wrapper"]'
    ];

    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            if (!element.classList.contains('animate-fade-in') && 
                !element.classList.contains('animate-scale-in') &&
                !element.classList.contains('background-element')) {
                element.classList.add('scroll-animate');
                if (index % 3 === 1) element.classList.add('animate-delay-1');
                if (index % 3 === 2) element.classList.add('animate-delay-2');
            }
        });
    });

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    const interactiveElements = document.querySelectorAll('a, button, [class*="rectangle"], [class*="group"]');
    interactiveElements.forEach(element => {
        if (!element.classList.contains('interactive-element')) {
            element.classList.add('hover-scale');
        }
    });

    setTimeout(() => {
        const importantElements = document.querySelectorAll('[class*="text-wrapper-2"], [class*="text-wrapper-119"]');
        importantElements.forEach(element => {
            element.classList.add('animate-wiggle');
        });
    }, 2000);

    function animateNumbers() {
        const numberElements = document.querySelectorAll('[class*="text-wrapper-43"], [class*="text-wrapper-76"], [class*="text-wrapper-77"]');
        numberElements.forEach(element => {
            const finalNumber = parseInt(element.textContent);
            if (!isNaN(finalNumber) && finalNumber > 0) {
                let currentNumber = 0;
                const increment = finalNumber / 50;
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        element.textContent = finalNumber;
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(currentNumber);
                    }
                }, 50);
            }
        });
    }

    setTimeout(animateNumbers, 1000);

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgroundElements = document.querySelectorAll('.background-element');
        backgroundElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    const importantButtons = document.querySelectorAll('[class*="rectangle-2"], [class*="rectangle-13"], [class*="rectangle-14"]');
    importantButtons.forEach(button => {
        button.classList.add('button-hover', 'hover-glow');
    });

    const circularElements = document.querySelectorAll('[class*="ellipse"]');
    circularElements.forEach((element, index) => {
        element.style.animation = `rotate ${20 + index * 5}s linear infinite`;
        element.style.animationDelay = `${index * 0.5}s`;
    });

    const floatingVectors = document.querySelectorAll('[class*="vector"]:not(.background-element)');
    floatingVectors.forEach((vector, index) => {
        if (index % 4 === 0) {
            vector.classList.add('vector-float');
        } else if (index % 4 === 1) {
            vector.classList.add('vector-pulse');
        }
    });
});

function addSoundEffects() {
    const clickableElements = document.querySelectorAll('a, button, .interactive-element');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = 'brightness(1)';
        });
        
        element.addEventListener('click', () => {
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        });
    });
}

addSoundEffects();

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particleContainer.appendChild(particle);
    }
}

createFloatingParticles();
