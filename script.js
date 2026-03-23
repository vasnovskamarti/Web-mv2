document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on click link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentContent = header.nextElementSibling;
            const isOpen = currentContent.style.maxHeight;

            // Optional: Close all others
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = null;
                content.previousElementSibling.querySelector('i').className = 'fa-solid fa-chevron-down';
            });

            if (!isOpen) {
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                header.querySelector('i').className = 'fa-solid fa-chevron-up';
            }
        });
    });

    // Fade-in scroll animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px 120px 0px',
        threshold: 0
    });

    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        } else {
            observer.observe(el);
        }
    });

    // Shrink header logo on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Formspree AJAX s vlastní hláškou po odeslání
    document.querySelectorAll('.cta-form').forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Odesílám…';
            let errorEl = form.querySelector('.form-error');
            if (errorEl) errorEl.remove();
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    form.innerHTML = '<p class="form-success">Děkuji za zprávu! Ozvu se vám co nejdříve zpět.</p>';
                } else {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    const el = document.createElement('p');
                    el.className = 'form-error';
                    el.textContent = 'Něco se nepovedlo. Zkuste to prosím znovu.';
                    form.appendChild(el);
                }
            } catch (err) {
                btn.disabled = false;
                btn.textContent = originalText;
                const el = document.createElement('p');
                el.className = 'form-error';
                el.textContent = 'Něco se nepovedlo. Zkuste to prosím znovu.';
                form.appendChild(el);
            }
        });
    });
});
