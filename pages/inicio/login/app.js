// validar el formulario


// Evento que escucha el envío del formulario
document.getElementById('form').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();


     // Si todos los campos son válidos, se puede enviar el formulario
this.submit();
});


// Validar el campo Nombre(s) al perder el foco
document.getElementById('nombre').addEventListener('blur', function() {
    var nombre = this.value.trim();
    if (nombre.length <=2) {
        // Mostrar alerta si el campo Nombre está vacío
        document.getElementById('alerta_nombre').classList.remove('d-none');
    } else {
        // Ocultar alerta si el campo Nombre no está vacío
        document.getElementById('alerta_nombre').classList.add('d-none');
    }
});

// Validar el campo Apellido(s) al perder el foco
document.getElementById('apellido').addEventListener('blur', function() {
    var apellido = this.value.trim();
    if (apellido.length <=2) {
        // Mostrar alerta si el campo Apellido está vacío
        document.getElementById('alerta_apellido').classList.remove('d-none');
    } else {
        // Ocultar alerta si el campo Apellido no está vacío
        document.getElementById('alerta_apellido').classList.add('d-none');
    }
});

// Validar el campo Correo al perder el foco
document.getElementById('correo').addEventListener('blur', function() {
    var correo = this.value.trim();
    if (correo === '' || !validarEmail(correo)) {
        // Mostrar alerta si el campo Correo está vacío o no es válido
        document.getElementById('alerta_correo').classList.remove('d-none');
    } else {
        // Ocultar alerta si el campo Correo no está vacío y es válido
        document.getElementById('alerta_correo').classList.add('d-none');
    }
});

// Validar el campo Contraseña al perder el foco
document.getElementById('contrasena').addEventListener('blur', function() {
    var contrasena = this.value.trim();
    if (contrasena.length < 8) {
        // Mostrar alerta si la contraseña tiene menos de 8 caracteres
        document.getElementById('alerta_contrasena').classList.remove('d-none');
    } else {
        // Ocultar alerta si la contraseña tiene al menos 8 caracteres
        document.getElementById('alerta_contrasena').classList.add('d-none');
    }
});

// Función para validar el formato del correo electrónico
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}








// Evento que escucha el envío del formulario
document.getElementById('form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe
    event.preventDefault();

    // Llamar a la función para registrar los datos del formulario en la consola
    logFormData();
});

// Función para registrar los datos del formulario en la consola
function logFormData() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var contrasena = document.getElementById('contrasena').value.trim();
    var rol = document.getElementById('rol').value;

    // Crear un objeto para almacenar los datos del formulario
    var formData = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena,
        rol: rol
    };

    // Registrar el objeto formData en la consola
    console.log(formData);
}



