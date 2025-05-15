document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const toggleButton = document.getElementById('toggleForm');
    const formContainer = document.querySelector('.form-container');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.close-form');
    const form = document.querySelector('.form-container form');

    // Función para abrir el modal
    function openModal() {
        formContainer.classList.add('visible');
        modalOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Previene el scroll del fondo
    }

    // Función para cerrar el modal
    function closeModal() {
        formContainer.classList.remove('visible');
        modalOverlay.classList.remove('visible');
        document.body.style.overflow = ''; // Restaura el scroll
    }

    // Manejador del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene el envío por defecto

        // Obtener los valores del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value
        };

        // Aquí puedes agregar la lógica para enviar los datos
        console.log('Datos del formulario:', formData);
        
        // Limpiar el formulario
        form.reset();
        
        // Cerrar el modal
        closeModal();
        
        // Opcional: Mostrar mensaje de éxito
        alert('¡Mensaje enviado con éxito!');
    });

    // Event Listeners
    toggleButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && formContainer.classList.contains('visible')) {
            closeModal();
        }
    });

    // Evitar que los clics dentro del formulario cierren el modal
    formContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Funcionalidad para la ventana de enlaces
    const toggleLinks = document.getElementById('toggleLinks');
    const linksContainer = document.querySelector('.links-container');
    const closeLinksButton = document.querySelector('.close-links');

    // Función para abrir la ventana de enlaces
    function openLinks() {
        linksContainer.classList.add('visible');
        modalOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar la ventana de enlaces
    function closeLinks() {
        linksContainer.classList.remove('visible');
        modalOverlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    toggleLinks.addEventListener('click', openLinks);
    closeLinksButton.addEventListener('click', closeLinks);
    modalOverlay.addEventListener('click', closeLinks);

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && linksContainer.classList.contains('visible')) {
            closeLinks();
        }
    });

    // Evitar que los clics dentro de la ventana de enlaces cierren el modal
    linksContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 