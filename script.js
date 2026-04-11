document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Quitar animación de carga al iniciar
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 800);

    // 2. Menú Hamburguesa para móviles
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        if(navMenu.classList.contains("active")) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // 3. Navbar pegajoso y cambio de color al hacer scroll
    const header = document.getElementById("header");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Mostrar/Ocultar botón Volver Arriba
        if (window.scrollY > 500) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    // 4. Lightbox para la Galería
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close-lightbox");
    const galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
            // Prevenir scroll en el body
            document.body.style.overflow = "hidden";
        });
    });

    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Cerrar lightbox al hacer click fuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // 5. Modal para Reserva
    const reservaBtn = document.getElementById('reserva-btn');
    const reservaModal = document.getElementById('reserva-modal');
    const closeModal = document.querySelector('.close-modal');

    if (reservaBtn) {
        reservaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            reservaModal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            reservaModal.style.display = 'none';
        });
    }

    if (reservaModal) {
        reservaModal.addEventListener('click', (e) => {
            if (e.target === reservaModal) {
                reservaModal.style.display = 'none';
            }
        });
    }
});