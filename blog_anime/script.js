document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const telefonoInput = document.getElementById('telefono');
    const correoInput = document.getElementById('correo');
    const mensajeInput = document.getElementById('mensaje');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successAlert = document.createElement('div');
    successAlert.className = 'success-alert';
    successAlert.innerHTML = '¡Mensaje enviado con éxito, Otaku! Nos pondremos en contacto contigo pronto.';
    form.parentNode.appendChild(successAlert);
    const createErrorElement = (input, message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
        return errorDiv;
    };
    const nombreError = createErrorElement(nombreInput, 'Por favor, escribe tu nombre completo.');
    const apellidoError = createErrorElement(apellidoInput, 'Por favor, escribe tu apellido.');
    const telefonoError = createErrorElement(telefonoInput, 'Por favor, introduce tu número de teléfono.');
    const correoError = createErrorElement(correoInput, 'Por favor, introduce un correo electrónico válido.');
    const mensajeError = createErrorElement(mensajeInput, 'Por favor, escribe un mensaje.');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        nombreError.style.display = 'none';
        apellidoError.style.display = 'none';
        telefonoError.style.display = 'none';
        correoError.style.display = 'none';
        mensajeError.style.display = 'none';
        successAlert.style.display = 'none';
        if (nombreInput.value.trim() === '') {
            nombreError.style.display = 'block';
            isValid = false;
        }
        if (apellidoInput.value.trim() === '') {
            apellidoError.style.display = 'block';
            isValid = false;
        }
        if (telefonoInput.value.trim() === '') {
            telefonoError.style.display = 'block';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoInput.value.trim())) {
            correoError.style.display = 'block';
            isValid = false;
        }
        if (mensajeInput.value.trim() === '') {
            mensajeError.style.display = 'block';
            isValid = false;
        }
        if (isValid) {
            submitBtn.disabled = true;
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Cargando Chakra...';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
                successAlert.style.display = 'block';
                form.reset();
            }, 1200);
        }
    });
    nombreInput.addEventListener('input', () => {
        if (nombreInput.value.trim() !== '') {
            nombreError.style.display = 'none';
        }
    });

    apellidoInput.addEventListener('input', () => {
        if (apellidoInput.value.trim() !== '') {
            apellidoError.style.display = 'none';
        }
    });

    telefonoInput.addEventListener('input', () => {
        if (telefonoInput.value.trim() !== '') {
            telefonoError.style.display = 'none';
        }
    });

    correoInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(correoInput.value.trim())) {
            correoError.style.display = 'none';
        }
    });

    mensajeInput.addEventListener('input', () => {
        if (mensajeInput.value.trim() !== '') {
            mensajeError.style.display = 'none';
        }
    });
});
