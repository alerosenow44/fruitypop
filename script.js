// Animazioni al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    // Effetto di apparizione per le sezioni
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
    
    // Animazione al click dei pulsanti
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            button.innerHTML = 'Yummy! <i class="fas fa-heart"></i>';
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.innerHTML = button.getAttribute('data-original-text') || 'Ordina Ora <i class="fas fa-gift"></i>';
                button.style.transform = 'scale(1)';
            }, 1000);
        });
        
        // Salva il testo originale
        button.setAttribute('data-original-text', button.innerHTML);
    });
    
    // Effetto hover per le card dei gusti
    document.querySelectorAll('.flavor-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'rotate(20deg) scale(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Cambia colore della navbar allo scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'white';
            nav.style.backdropFilter = 'none';
        }
    });
    
    // Animazione per i titoli
    const rainbowTexts = document.querySelectorAll('.rainbow-text');
    rainbowTexts.forEach(text => {
        text.style.animationDelay = `${Math.random() * 2}s`;
    });
});