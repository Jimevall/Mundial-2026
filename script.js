// Datos de los estadios
const stadiumsData = {
    azteca: {
        title: 'Estadio Azteca',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        description: 'El Estadio Azteca es el estadio más emblemático de México y uno de los más históricos del mundo.',
        details: `
            <p><strong>📍 Ubicación:</strong> Ciudad de México, México</p>
            <p><strong>⚽ Capacidad:</strong> 87,000 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 1966</p>
            <p><strong>🏆 Curiosidades:</strong> Ha albergado dos Copas Mundiales (1970 y 1986). Es la casa de los Águilas del América y la Selección Mexicana.</p>
        `
    },
    metlife: {
        title: 'MetLife Stadium',
        image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&q=80',
        description: 'MetLife Stadium será la sede de la Gran Final del Mundial 2026, una experiencia inolvidable.',
        details: `
            <p><strong>📍 Ubicación:</strong> Nueva Jersey, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 82,500 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2010</p>
            <p><strong>🏆 Curiosidades:</strong> Uno de los estadios más modernos de Norteamérica. Sede de la final del Mundial.</p>
        `
    },
    sofi: {
        title: 'SoFi Stadium',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6c4d?w=800&q=80',
        description: 'SoFi Stadium es uno de los estadios más modernos e innovadores del mundo.',
        details: `
            <p><strong>📍 Ubicación:</strong> Los Ángeles, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 70,240 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2020</p>
            <p><strong>🏆 Curiosidades:</strong> Tecnología de punta, techo retráctil, diseño futurista. Casa de los Rams y Chargers.</p>
        `
    },
    att: {
        title: 'AT&T Stadium',
        image: 'https://images.unsplash.com/photo-1552672586-c5b0c6dc-10c9?w=800&q=80',
        description: 'AT&T Stadium es conocido por su magnífica arquitectura y capacidad.',
        details: `
            <p><strong>📍 Ubicación:</strong> Dallas, Texas, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 80,000 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2009</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de los Dallas Cowboys. Destaca por su colosal cúpula de vidrio retráctil.</p>
        `
    },
    mercedesbenz: {
        title: 'Mercedes-Benz Stadium',
        image: 'https://images.unsplash.com/photo-1577223557118-7aaf926668d2?w=800&q=80',
        description: 'Mercedes-Benz Stadium es un templo moderno del deporte con infraestructura de clase mundial.',
        details: `
            <p><strong>📍 Ubicación:</strong> Atlanta, Georgia, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 71,000 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2017</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de los Falcons y Atlanta United. Ganador del LEED Gold en sostenibilidad.</p>
        `
    },
    hardrock: {
        title: 'Hard Rock Stadium',
        image: 'https://images.unsplash.com/photo-1584399579527-65b60007e630?w=800&q=80',
        description: 'Hard Rock Stadium está ubicado en el corazón de Miami con vista al océano.',
        details: `
            <p><strong>📍 Ubicación:</strong> Miami, Florida, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 65,326 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 1987</p>
            <p><strong>🏆 Curiosidades:</strong> Casa del Inter Miami CF y los Dolphins. Ambiente tropical y vibrante.</p>
        `
    },
    bbva: {
        title: 'Estadio BBVA',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        description: 'Estadio BBVA es el orgullo del fútbol mexicano en el norte del país.',
        details: `
            <p><strong>📍 Ubicación:</strong> Monterrey, México</p>
            <p><strong>⚽ Capacidad:</strong> 81,044 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2007</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de Monterrey. Uno de los estadios más modernos de México con excelente atmósfera.</p>
        `
    },
    guadalajara: {
        title: 'Estadio Guadalajara',
        image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=800&q=80',
        description: 'Estadio Guadalajara es cuna de tradición futbolística mexicana.',
        details: `
            <p><strong>📍 Ubicación:</strong> Guadalajara, México</p>
            <p><strong>⚽ Capacidad:</strong> 46,420 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2010</p>
            <p><strong>🏆 Curiosidades:</strong> Casa del Deportivo Guadalajara. Representa la pasión del fútbol tapatío.</p>
        `
    },
    bcplace: {
        title: 'BC Place',
        image: 'https://images.unsplash.com/photo-1577223557118-7aaf926668d2?w=800&q=80',
        description: 'BC Place es un estadio único con un techo retráctil excepcional.',
        details: `
            <p><strong>📍 Ubicación:</strong> Vancouver, Canadá</p>
            <p><strong>⚽ Capacidad:</strong> 54,500 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 1983 (renovado 2011)</p>
            <p><strong>🏆 Curiosidades:</strong> Único estadio con techo retráctil en forma de burbuja. Casa de los Whitecaps.</p>
        `
    },
    bmofield: {
        title: 'BMO Field',
        image: 'https://images.unsplash.com/photo-1552672585-beab60f20129?w=800&q=80',
        description: 'BMO Field es la casa del fútbol canadiense con ambiente familiar.',
        details: `
            <p><strong>📍 Ubicación:</strong> Toronto, Canadá</p>
            <p><strong>⚽ Capacidad:</strong> 45,975 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 1999</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de Toronto FC. Ambiente cálido y apasionado de los aficionados canadienses.</p>
        `
    },
    arrowhead: {
        title: 'Arrowhead Stadium',
        image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&q=80',
        description: 'Arrowhead Stadium es famoso por su atmósfera increíble y aficionados apasionados.',
        details: `
            <p><strong>📍 Ubicación:</strong> Kansas City, Missouri, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 76,413 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 1972</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de los Kansas City Chiefs. Conocido por el ruido ensordecedor de sus fans.</p>
        `
    },
    levis: {
        title: "Levi's Stadium",
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        description: "Levi's Stadium es un ejemplo de tecnología y sostenibilidad en los estadios modernos.",
        details: `
            <p><strong>📍 Ubicación:</strong> San Francisco, California, EE.UU.</p>
            <p><strong>⚽ Capacidad:</strong> 75,000 espectadores</p>
            <p><strong>📅 Año de inauguración:</strong> 2014</p>
            <p><strong>🏆 Curiosidades:</strong> Casa de los San Francisco 49ers. Tecnología sostenible y eficiencia energética.</p>
        `
    }
};

// Datos de los equipos
const teamsData = {
    argentina: {
        title: '🇦🇷 Argentina',
        image: 'https://images.unsplash.com/photo-1577223557118-7aaf926668d2?w=800&q=80',
        description: 'Campeones del Mundo 2022. Un equipo legendario liderado por Lionel Messi.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 3 (1978, 1986, 2022)</p>
            <p><strong>👥 Jugador estrella:</strong> Lionel Messi, Ángel Di María, Julián Álvarez</p>
            <p><strong>⚽ Entrenador:</strong> Lionel Scaloni</p>
            <p><strong>📊 Ranking:</strong> Top 5 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Defensa sólida, mediocampo creativo, experiencia ganadora</p>
        `
    },
    brasil: {
        title: '🇧🇷 Brasil',
        image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&q=80',
        description: 'La potencia mundial del fútbol con más títulos en la historia.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 5 (1958, 1962, 1970, 1994, 2002)</p>
            <p><strong>👥 Jugadores estrella:</strong> Neymar Jr, Vinicius Jr, Rodrygo</p>
            <p><strong>⚽ Entrenador:</strong> Dorival Júnior</p>
            <p><strong>📊 Ranking:</strong> Top 5 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Talento ofensivo, velocidad, técnica incomparable</p>
        `
    },
    españa: {
        title: '🇪🇸 España',
        image: 'https://images.unsplash.com/photo-1551958219-acbc608c6c4d?w=800&q=80',
        description: 'Potencia histórica del fútbol europeo con un estilo único.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 1 (2010)</p>
            <p><strong>👥 Jugadores estrella:</strong> Sergio Busquets, Gavi, Pedri</p>
            <p><strong>⚽ Entrenador:</strong> Luis de la Fuente</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Tiki-taka, control de balón, juego colectivo</p>
        `
    },
    inglaterra: {
        title: '🇬🇧 Inglaterra',
        image: 'https://images.unsplash.com/photo-1584399579527-65b60007e630?w=800&q=80',
        description: 'Finalistas de la Eurocopa 2020, buscando su primer título mundial.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 1 (1966)</p>
            <p><strong>👥 Jugadores estrella:</strong> Harry Kane, Jude Bellingham, Bukayo Saka</p>
            <p><strong>⚽ Entrenador:</strong> Gareth Southgate</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Juventud, ritmo ofensivo, profundidad de jugadores</p>
        `
    },
    francia: {
        title: '🇫🇷 Francia',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        description: 'Campeones 2018, buscando defender su corona mundial.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 2 (1998, 2018)</p>
            <p><strong>👥 Jugadores estrella:</strong> Kylian Mbappé, Antoine Griezmann, N'Golo Kanté</p>
            <p><strong>⚽ Entrenador:</strong> Didier Deschamps</p>
            <p><strong>📊 Ranking:</strong> Top 5 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Velocidad, poderío físico, experiencia en grandes torneos</p>
        `
    },
    alemania: {
        title: '🇩🇪 Alemania',
        image: 'https://images.unsplash.com/photo-1552672585-beab60f20129?w=800&q=80',
        description: 'Tradición ganadora con 4 títulos mundiales en su palmarés.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 4 (1954, 1974, 1990, 2014)</p>
            <p><strong>👥 Jugadores estrella:</strong> Manuel Neuer, Thomas Müller, Serge Gnabry</p>
            <p><strong>⚽ Entrenador:</strong> Hansi Flick</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Disciplina táctica, eficiencia, mentalidad ganadora</p>
        `
    },
    usa: {
        title: '🇺🇸 Estados Unidos',
        image: 'https://images.unsplash.com/photo-1553778018-0c95e1901f7f?w=800&q=80',
        description: 'Anfitrión local con jóvenes talentos emergentes en el fútbol mundial.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> Nunca</p>
            <p><strong>👥 Jugadores estrella:</strong> Christian Pulisic, Weston McKennie, Sergiño Dest</p>
            <p><strong>⚽ Entrenador:</strong> Gregg Berhalter</p>
            <p><strong>📊 Ranking:</strong> Top 20 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Juventud, ritmo, mejora continua, ventaja de local</p>
        `
    },
    mexico: {
        title: '🇲🇽 México',
        image: 'https://images.unsplash.com/photo-1512628263316-da2b3c7b39ba?w=800&q=80',
        description: 'Anfitrión local con fuerte tradición futbolística en Norteamérica.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> Nunca</p>
            <p><strong>👥 Jugadores estrella:</strong> Raúl Jiménez, Hirving Lozano, Guillermo Ochoa</p>
            <p><strong>⚽ Entrenador:</strong> Jaime Lozano</p>
            <p><strong>📊 Ranking:</strong> Top 15 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Experiencia, conocimiento del terreno, afición apasionada</p>
        `
    },
    canada: {
        title: '🇨🇦 Canadá',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe36e3ad?w=800&q=80',
        description: 'Anfitrión local clasificado por primera vez a un Mundial.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> Nunca</p>
            <p><strong>👥 Jugadores estrella:</strong> Alphonso Davies, Jonathan David, Milan Borjan</p>
            <p><strong>⚽ Entrenador:</strong> Jesse Marsch</p>
            <p><strong>📊 Ranking:</strong> Top 40 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Defensa sólida, equipo joven y unido, sorpresa potencial</p>
        `
    },
    'paises-bajos': {
        title: '🇳🇱 Países Bajos',
        image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&q=80',
        description: 'Potencia ofensiva europea con un estilo de juego ofensivo.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> Nunca</p>
            <p><strong>👥 Jugadores estrella:</strong> Memphis Depay, Frenkie de Jong, Daley Blind</p>
            <p><strong>⚽ Entrenador:</strong> Ronald Koeman</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Ataque fluido, creatividad, tradición holandesa</p>
        `
    },
    italia: {
        title: '🇮🇹 Italia',
        image: 'https://images.unsplash.com/photo-1577223557118-7aaf926668d2?w=800&q=80',
        description: 'Campeones de Eurocopa 2020, buscando repetir en el mundial.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> 4 (1934, 1938, 1982, 2006)</p>
            <p><strong>👥 Jugadores estrella:</strong> Gianluigi Donnarumma, Marco Verratti, Nicolo Barella</p>
            <p><strong>⚽ Entrenador:</strong> Luciano Spalletti</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Defensa histórica, portería segura, experiencia</p>
        `
    },
    portugal: {
        title: '🇵🇹 Portugal',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
        description: 'Con Cristiano Ronaldo, siempre un peligro ofensivo en cualquier torneo.',
        details: `
            <p><strong>🏆 Títulos mundiales:</strong> Nunca</p>
            <p><strong>👥 Jugadores estrella:</strong> Cristiano Ronaldo, Bruno Fernandes, João Félix</p>
            <p><strong>⚽ Entrenador:</strong> Roberto Martínez</p>
            <p><strong>📊 Ranking:</strong> Top 10 mundial</p>
            <p><strong>💪 Fortalezas:</strong> Experiencia en Eurocopas, gol de calidad, liderazgo</p>
        `
    }
};

// Función para abrir modal de estadios
function openModal(stadiumId) {
    const modal = document.getElementById('stadiumModal');
    const stadium = stadiumsData[stadiumId];
    
    if (stadium) {
        document.getElementById('modalTitle').textContent = stadium.title;
        document.getElementById('modalImage').src = stadium.image;
        document.getElementById('modalImage').alt = stadium.title;
        document.getElementById('modalDescription').textContent = stadium.description;
        document.getElementById('modalDetails').innerHTML = stadium.details;
        modal.style.display = 'block';
    }
}

// Función para cerrar modal de estadios
function closeModal() {
    document.getElementById('stadiumModal').style.display = 'none';
}

// Función para abrir modal de equipos
function openTeamModal(teamId) {
    const modal = document.getElementById('teamModal');
    const team = teamsData[teamId];
    
    if (team) {
        document.getElementById('teamModalTitle').textContent = team.title;
        document.getElementById('teamModalImage').src = team.image;
        document.getElementById('teamModalImage').alt = team.title;
        document.getElementById('teamModalDescription').textContent = team.description;
        document.getElementById('teamModalDetails').innerHTML = team.details;
        modal.style.display = 'block';
    }
}

// Función para cerrar modal de equipos
function closeTeamModal() {
    document.getElementById('teamModal').style.display = 'none';
}

// Cerrar modal cuando se hace click fuera
window.onclick = function(event) {
    const stadiumModal = document.getElementById('stadiumModal');
    const teamModal = document.getElementById('teamModal');
    
    if (event.target === stadiumModal) {
        stadiumModal.style.display = 'none';
    }
    if (event.target === teamModal) {
        teamModal.style.display = 'none';
    }
}

// Validación y manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, select');
    const messageElement = document.getElementById('formMessage');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
        }
    });
    
    if (isValid) {
        const nombre = inputs[0].value;
        messageElement.textContent = `¡Gracias ${nombre}! Te has suscrito correctamente. 🎉 Recibirás noticias sobre el Mundial 2026.`;
        messageElement.className = 'form-message success';
        
        this.reset();
        
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

// Navegación suave
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

// Efecto de highlight en la navegación activa
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

// Contar elementos y mostrar estadísticas
window.addEventListener('load', () => {
    console.log('📊 Estadísticas de la página:');
    console.log('Tarjetas de sedes:', document.querySelectorAll('.card').length);
    console.log('Estadios:', document.querySelectorAll('.stadium-card').length);
    console.log('Equipos destacados:', document.querySelectorAll('.team-card').length);
    console.log('Secciones:', document.querySelectorAll('section').length);
    console.log('✨ ¡Bienvenido al Mundial 2026!');
});

// Animación al cargar elementos en vista
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

document.querySelectorAll('.card, .stadium-card, .team-card, .calendar-table').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});