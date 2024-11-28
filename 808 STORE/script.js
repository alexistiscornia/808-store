// Añadir desplazamiento suave a los enlaces del menú
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace
        
        // Seleccionar la sección objetivo
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Desplazamiento suave hacia la sección
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
