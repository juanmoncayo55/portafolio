// Smooth scrolling for navigation links
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
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
        
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });


        function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Quitar clase activa de todos
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});



document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const apiUrl = 'https://emails-portafolio-production.up.railway.app/enviar-correo';
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
  
    const formData = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    console.log(apiUrl, formData);    
  
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.color = 'gray';
    responseMessage.textContent = 'Enviando...';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: true
        });
        console.log(response);

        const res2 = await response();
        console.log(res2);        
        if (!response.ok) {
            throw new Error('Ocurrió un error al enviar el mensaje.');
        }
        responseMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    } catch (error) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Error: ' + error.message;
        console.error('Error:', error);
    }
});