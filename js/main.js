// Datos del menú
const menuData = {
    hamburguesas: [
        {
            id: 1,
            name: "Hamburguesa Clásica",
            description: "Carne de res, lechuga, tomate, cebolla, queso cheddar y salsa especial",
            price: "$1,500",
            image: "images/hamburguesa.png",
            category: "hamburguesas"
        },
        {
            id: 2,
            name: "Hamburguesa Doble",
            description: "Doble carne, doble queso, lechuga, tomate, cebolla y bacon crocante",
            price: "$1,800",
            image: "images/hamburguesa.png",
            category: "hamburguesas"
        },
        {
            id: 3,
            name: "Hamburguesa Veggie",
            description: "Medallón vegetal, lechuga, tomate, cebolla, queso vegano y salsa de aguacate",
            price: "$1,400",
            image: "images/hamburguesa.png",
            category: "hamburguesas"
        }
    ],
    pizzas: [
        {
            id: 4,
            name: "Pizza Margherita",
            description: "Masa casera, salsa de tomate, mozzarella fresca, albahaca y aceite de oliva",
            price: "$2,200",
            image: "images/pizas.jpg",
            category: "pizzas"
        },
        {
            id: 5,
            name: "Pizza Pepperoni",
            description: "Masa casera, salsa de tomate, mozzarella y pepperoni artesanal",
            price: "$2,500",
            image: "images/pizas.jpg",
            category: "pizzas"
        },
        {
            id: 6,
            name: "Pizza Cuatro Quesos",
            description: "Masa casera, mozzarella, gorgonzola, parmesano y queso de cabra",
            price: "$2,800",
            image: "images/pizas.jpg",
            category: "pizzas"
        }
    ],
    sandwiches: [
        {
            id: 16,
            name: "Sandwich de Pollo Especial",
            description: "Pechuga de pollo a la plancha, lechuga, tomate, cebolla morada, queso mozzarella y salsa especial",
            price: "$1,200",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        },
        {
            id: 17,
            name: "Sandwich de Carne Especial",
            description: "Carne de res a la plancha, lechuga, tomate, cebolla caramelizada, queso cheddar y bacon",
            price: "$1,300",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        },
        {
            id: 18,
            name: "Sandwich Vegetariano Especial",
            description: "Medallón vegetal, lechuga, tomate, pepino, queso vegano, aguacate y salsa de mostaza",
            price: "$1,100",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        },
        {
            id: 19,
            name: "Sandwich de Jamón y Queso",
            description: "Jamón cocido, queso mozzarella, lechuga y tomate en pan fresco",
            price: "$800",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        },
        {
            id: 20,
            name: "Sandwich de Atún",
            description: "Atún en aceite, lechuga, tomate, cebolla y mayonesa casera",
            price: "$900",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        },
        {
            id: 21,
            name: "Sandwich de Huevo",
            description: "Huevo duro, lechuga, tomate, mayonesa y especias en pan integral",
            price: "$700",
            image: "images/placeholder.jpg",
            category: "sandwiches"
        }
    ],
    empanadas: [
        {
            id: 7,
            name: "Empanadas de Carne",
            description: "Carne molida, cebolla, huevo duro, aceitunas y especias tradicionales",
            price: "$300",
            image: "images/placeholder.jpg",
            category: "empanadas"
        },
        {
            id: 8,
            name: "Empanadas de Pollo",
            description: "Pollo desmenuzado, cebolla, morrón, huevo duro y condimentos",
            price: "$300",
            image: "images/placeholder.jpg",
            category: "empanadas"
        },
        {
            id: 9,
            name: "Empanadas de Queso y Cebolla",
            description: "Queso cremoso, cebolla caramelizada y especias",
            price: "$280",
            image: "images/placeholder.jpg",
            category: "empanadas"
        }
    ],
    milanesas: [
        {
            id: 22,
            name: "Milanesa de Carne Napolitana",
            description: "Milanesa de carne rebozada con salsa de tomate, jamón, queso y orégano",
            price: "$1,600",
            image: "images/sandwich.jpg",
            category: "milanesas"
        },
        {
            id: 23,
            name: "Milanesa de Pollo con Cheddar",
            description: "Milanesa de pollo rebozada con salsa cheddar y bacon crocante",
            price: "$1,500",
            image: "images/sandwich.jpg",
            category: "milanesas"
        },
        {
            id: 24,
            name: "Milanesa de Berenjena",
            description: "Milanesa de berenjena rebozada con provenzal y queso",
            price: "$1,300",
            image: "images/sandwich.jpg",
            category: "milanesas"
        }
    ],
    bebidas: [
        {
            id: 10,
            name: "Coca Cola",
            description: "Bebida gaseosa refrescante de 500ml",
            price: "$400",
            image: "images/smoothie-verde.jpg",
            category: "bebidas"
        },
        {
            id: 11,
            name: "Agua Mineral",
            description: "Agua mineral natural de 500ml",
            price: "$300",
            image: "images/smoothie-verde.jpg",
            category: "bebidas"
        },
        {
            id: 12,
            name: "Jugo Natural",
            description: "Jugo de naranja exprimido naturalmente",
            price: "$500",
            image: "images/smoothie-verde.jpg",
            category: "bebidas"
        }
    ],
    promos: [
        {
            id: 13,
            name: "Combo Clásico",
            description: "Hamburguesa clásica + papas fritas + bebida",
            price: "$2,200",
            image: "images/hamburguesa.png",
            category: "promos"
        },
        {
            id: 14,
            name: "Combo Familiar",
            description: "2 hamburguesas + 2 pizzas + 4 bebidas",
            price: "$4,500",
            image: "images/pizas.jpg",
            category: "promos"
        },
        {
            id: 15,
            name: "Promo Empanadas",
            description: "6 empanadas + 2 bebidas",
            price: "$1,800",
            image: "images/placeholder.jpg",
            category: "promos"
        }
    ]
};

// Variables globales
let currentCategory = 'todos';
let currentSlide = 0;
let slideInterval;
const modal = document.getElementById('menu-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupSlider();
    setupAccordionMenu();
    setupMenuCategories();
    setupContactForm();
    setupScrollAnimations();
    loadMenuItems();
    setupModal();
}

// Configuración del slider banner
function setupSlider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Función para mostrar slide específico
    function showSlide(index) {
        // Remover clase active de todos los slides e indicators
        sliderItems.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Agregar clase active al slide e indicator actual
        if (sliderItems[index]) {
            sliderItems[index].classList.add('active');
        }
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        // Actualizar categoría actual
        const category = sliderItems[index]?.getAttribute('data-category');
        if (category) {
            currentCategory = category;
            
            // Actualizar botones de categoría
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            const activeButton = document.querySelector(`[data-category="${category}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
            
            // Cargar items del menú
            loadMenuItems();
        }
        
        currentSlide = index;
    }
    
    // Función para siguiente slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % sliderItems.length;
        showSlide(nextIndex);
    }
    
    // Función para slide anterior
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        showSlide(prevIndex);
    }
    
    // Event listeners para botones
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners para indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play del slider DESACTIVADO
    // El slider ahora es completamente manual
    // Solo cambia cuando el usuario hace click en los controles o indicadores
    
    // Inicializar con el primer slide
    showSlide(0);
}

// Configuración del acordeón del menú
function setupAccordionMenu() {
    const accordionMenuItems = document.querySelectorAll('.accordion-menu-item');
    
    accordionMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover clase active de todos los items
            accordionMenuItems.forEach(accordionItem => {
                accordionItem.classList.remove('active');
            });
            
            // Agregar clase active al item clickeado
            this.classList.add('active');
            
            // Actualizar categoría actual y cargar menú
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Actualizar botones de categoría
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            const activeButton = document.querySelector(`[data-category="${category}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
            
            // Sincronizar con slider
            const sliderItems = document.querySelectorAll('.slider-item');
            const indicators = document.querySelectorAll('.indicator');
            
            sliderItems.forEach((item, index) => {
                if (item.getAttribute('data-category') === category) {
                    sliderItems.forEach(slide => slide.classList.remove('active'));
                    indicators.forEach(indicator => indicator.classList.remove('active'));
                    
                    item.classList.add('active');
                    if (indicators[index]) {
                        indicators[index].classList.add('active');
                    }
                    currentSlide = index;
                }
            });
            
            // Cargar items del menú
            loadMenuItems();
            
            // Scroll suave hacia la sección del menú
            setTimeout(() => {
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = menuSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        });
    });
}

// Configuración de navegación móvil
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.5)'; // Un poco de fondo al hacer scroll
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'transparent'; // Transparente por defecto
            header.style.boxShadow = 'none';
        }
    });
}

// Configuración de categorías del menú
function setupMenuCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Actualizar categoría actual
            currentCategory = this.getAttribute('data-category');
            
            // Sincronizar con slider
            const sliderItems = document.querySelectorAll('.slider-item');
            const indicators = document.querySelectorAll('.indicator');
            
            sliderItems.forEach((item, index) => {
                if (item.getAttribute('data-category') === currentCategory) {
                    // Mostrar el slide correspondiente
                    sliderItems.forEach(slide => slide.classList.remove('active'));
                    indicators.forEach(indicator => indicator.classList.remove('active'));
                    
                    item.classList.add('active');
                    if (indicators[index]) {
                        indicators[index].classList.add('active');
                    }
                    currentSlide = index;
                }
            });
            
            // Cargar items del menú
            loadMenuItems();
        });
    });
}

// Cargar items del menú según la categoría seleccionada
function loadMenuItems() {
    const menuGrid = document.getElementById('menu-grid');
    
    // Mostrar loading
    menuGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    // Simular delay de carga
    setTimeout(() => {
        let itemsToShow = [];
        
        if (currentCategory === 'todos') {
            // Combinar todos los items
            Object.values(menuData).forEach(categoryItems => {
                itemsToShow = itemsToShow.concat(categoryItems);
            });
        } else {
            itemsToShow = menuData[currentCategory] || [];
        }
        
        renderMenuItems(itemsToShow);
    }, 500);
}

// Renderizar items del menú
function renderMenuItems(items) {
    const menuGrid = document.getElementById('menu-grid');
    
    if (items.length === 0) {
        menuGrid.innerHTML = '<p class="text-center">No hay items disponibles en esta categoría.</p>';
        return;
    }
    
    const itemsHTML = items.map(item => `
        <div class="menu-item scroll-animation" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-price">${item.price}</div>
            </div>
        </div>
    `).join('');
    
    menuGrid.innerHTML = itemsHTML;
    
    // Agregar event listeners a los items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemData = items.find(i => i.name === this.querySelector('.menu-item-title').textContent);
            openModal(itemData);
        });
    });
    
    // Activar animaciones de scroll
    activateScrollAnimations();
}

// Configuración del modal
function setupModal() {
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Abrir modal con información del item
function openModal(item) {
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalPrice.textContent = item.price;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Configuración del formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Validar campos requeridos
        if (!name || !email || !message) {
            showNotification('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        
        // Validar email
        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío del formulario
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        
        // Limpiar formulario
        this.reset();
    });
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Colores según el tipo
    if (type === 'success') {
        notification.style.background = '#4CAF50';
    } else if (type === 'error') {
        notification.style.background = '#f44336';
    } else {
        notification.style.background = '#2196F3';
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Configuración de animaciones de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observar elementos con clase scroll-animation
    const animatedElements = document.querySelectorAll('.scroll-animation');
    animatedElements.forEach(el => observer.observe(el));
}

// Activar animaciones de scroll para elementos dinámicos
function activateScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animation:not(.animate)');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy loading para imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Manejo de errores de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'images/placeholder.jpg';
            this.alt = 'Imagen no disponible';
        });
    });
});

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimización de scroll
const optimizedScrollHandler = debounce(function() {
    // Aquí se pueden agregar funciones que se ejecuten en scroll
    // Por ejemplo, animaciones o efectos
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Detectar dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

function updateVideoSources() {
    document.querySelectorAll('.slider-item video').forEach(video => {
        const source = video.querySelector('source');
        if (source) {
            const desktopSrc = source.getAttribute('data-desktop-src');
            const mobileSrc = source.getAttribute('data-mobile-src');
            
            if (isMobile() && mobileSrc) {
                source.src = mobileSrc;
            } else if (desktopSrc) {
                source.src = desktopSrc;
            }
            video.load();
        }
    });
}

// Ajustar comportamiento según dispositivo
if (isMobile()) {
    // Comportamientos específicos para móvil
    document.body.classList.add('mobile');
}
updateVideoSources(); // Llamar al inicio para establecer la fuente correcta

// Resize handler
window.addEventListener('resize', debounce(function() {
    if (isMobile()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
    updateVideoSources(); // Actualizar las fuentes de video al redimensionar
}, 250));

// Console log para desarrollo
console.log('Green Bar Resistencia - Menú Digital');
console.log('Desarrollado con HTML, CSS y JavaScript vanilla');
console.log('Versión: 1.0.0');
