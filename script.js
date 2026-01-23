// Smooth Scrolling untuk navigasi
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

// Form Submission Handler
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil data dari form
        const formData = new FormData(this);
        const nama = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const whatsapp = this.querySelector('input[type="tel"]').value;
        const layanan = this.querySelector('select').value;
        const pesan = this.querySelector('textarea').value;
        
        // Format pesan WhatsApp
        const waMessage = `Halo AFIQA SALON!%0A%0ANama: ${nama}%0AEmail: ${email}%0ALayanan: ${layanan}%0APesan: ${pesan || 'Tidak ada pesan tambahan'}`;
        
        // Nomor WhatsApp salon (ganti dengan nomor sebenarnya)
        const waNumber = '6281234567890'; // Ganti dengan nomor WA salon
        
        // Redirect ke WhatsApp
        window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
        
        // Reset form
        this.reset();
        
        // Tampilkan notifikasi
        alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan booking.');
    });
}

// CTA Button Handler
const ctaButtons = document.querySelectorAll('.cta-button, .hero-cta');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const contactSection = document.getElementById('kontak');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animasi saat scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua service cards dan gallery items
const animateElements = document.querySelectorAll('.service-card, .gallery-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Mobile Menu Toggle (jika diperlukan di versi mobile)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #333;
        `;
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        navbar.querySelector('.container').insertBefore(menuToggle, navMenu);
    }
};

// Jalankan saat load dan resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Loading animation selesai
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('AFIQA SALON - Website loaded successfully!');
