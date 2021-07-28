let errors = {};

let btnSumbit = document.querySelector('.login-button button');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('login-form');

let validateEmail = () => {
    // Declaro string vacio que contendra mensaje de error
    let feedback = "";
    // Almaceno elemento hermano(<p>) a input nombre 
    let feedbackElement = email.nextElementSibling;

    // Si el usuario no valida sobreescribo feedback
    if (email.value.trim() == "") {
        feedback = "El email no puede estar vacio"
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        feedback = "El email debe ser valido"
    }

    // Si existe error se almacena en objeto errors
    if (feedback) {
        email.classList.add('error-input');
        errors.email = feedback;
    }else {
        email.classList.remove('error-input');
        delete errors.email;
    }

    // Se imprime string de error en vista
    feedbackElement.innerText = feedback;
}

let validatePassword = () => {
    let feedback = "";
    let feedbackElement = password.nextElementSibling;

    if (password.value.trim() == "") {
        feedback = "La contraseña no puede estar vacia"
    }

    if (feedback) {
        password.classList.add('error-input');
        errors.password = feedback;
    }else {
        password.classList.remove('error-input');
        delete errors.password;
    }

    feedbackElement.innerText = feedback;
}

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);

// Si submit de form se ejecutan funciones de validacion
form.addEventListener('submit', (e) => {
    validateEmail();
    validatePassword();
    // si existen errores prevent default
    if (Object.keys(errors).length) {
        e.preventDefault();
    }
})
    