// Funcionalidades interactivas

// 1. Validación y manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, select');
    const messageElement = document.getElementById('formMessage');
    
    let isValid = true;
    
    // Validar que todos los campos estén llenos
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });
    
    if (isValid) {
        const nombre = inputs[0].value;
        messageElement.textContent = `¡Gracias ${nombre}! Te has suscrito correctamente. 🎉 Recibirás noticias sobre el Mundial 2026.`;
        messageElement.className = 'form-message success';
        
        // Resetear el formulario
        this.reset();
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
            messageElement.textContent = '';
        }, 5000);
    } else {
        messageElement.textContent = 'Por favor completa todos los campos.';
        messageElement.className = 'form-message error';
        
        setTimeout(() => {
            messageElement.textContent = '';
        }, 3000);
    }
});

// 2. Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Efecto de highlight en la navegación activa
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// 4. Agregar clase active al nav-link en CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #ffcc00 !important;
        border-bottom-color: #ffcc00 !important;
    }
`;
document.head.appendChild(style);

// 5. Contar elementos y mostrar estadísticas
window.addEventListener('load', () => {
    console.log('📊 Estadísticas de la página:');
    console.log('Tarjetas de sedes:', document.querySelectorAll('.card').length);
    console.log('Estadios:', document.querySelectorAll('.stadium-card').length);
    console.log('Equipos destacados:', document.querySelectorAll('.team-card').length);
    console.log('Secciones:', document.querySelectorAll('section').length);
});

// 6. Animación al cargar elementos en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
        }
    });
}, observerOptions);

// Observar todas las tarjetas y elementos
document.querySelectorAll('.card, .stadium-card, .team-card, .calendar-table').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// 7. Función para eventos especiales (futura expansión)
function handleTeamClick(teamName) {
    console.log(`Se seleccionó: ${teamName}`);
}

// 8. Mostrar alerta de bienvenida (opcional)
window.addEventListener('load', () => {
    const hasVisited = localStorage.getItem('visitedMundial2026');
    if (!hasVisited) {
        console.log('¡Bienvenido al sitio del Mundial 2026! 🎉⚽');
        localStorage.setItem('visitedMundial2026', 'true');
    }
});
