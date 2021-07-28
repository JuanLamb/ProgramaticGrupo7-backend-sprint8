let errors = {};

let email = document.getElementById('email');
let password = document.getElementById('password');
let firstName = document.getElementById('nombre-apellido');
let lastName = document.getElementById('apellido');
let user = document.getElementById('usuario');
let birthday = document.getElementById('nacimiento');
let address = document.getElementById('Calle');
let addressNumber = document.getElementById('domicilio');
let passwordConfirm = document.getElementById('password-confirm');
let avatar = document.getElementById('avatar');

let form = document.getElementById('form-registro');

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

let validateFirstName = () => {
    let feedback = "";
    let feedbackElement = firstName.nextElementSibling;

    if (firstName.value.trim() == "") {
        feedback = "El nombre no puede estar vacio"
    }else if (firstName.value.length < 2) {
        feedback = "El nombre no puede tener menos de 2 caracteres"
    }

    if (feedback) {
        firstName.classList.add('error-input');
        errors.firstName = feedback;
    }else {
        firstName.classList.remove('error-input');
        delete errors.firstName;
    }

    feedbackElement.innerText = feedback;
}

let validateLastName = () => {
    let feedback = "";
    let feedbackElement = lastName.nextElementSibling;

    if (lastName.value.trim() == "") {
        feedback = "El apellido no puede estar vacio"
    }else if (lastName.value.length < 2) {
        feedback = "El apellido no puede tener menos de 2 caracteres"
    }

    if (feedback) {
        lastName.classList.add('error-input');
        errors.lastName = feedback;
    }else {
        lastName.classList.remove('error-input');
        delete errors.lastName;
    }

    feedbackElement.innerText = feedback;
}

let validateUser = () => {
    let feedback = "";
    let feedbackElement = user.nextElementSibling;

    if (user.value.trim() == "") {
        feedback = "El usuario no puede estar vacio"
    }else if (user.value.length < 2) {
        feedback = "El usuario no puede tener menos de 2 caracteres"
    }

    if (feedback) {
        user.classList.add('error-input');
        errors.user = feedback;
    }else {
        user.classList.remove('error-input');
        delete errors.user;
    }

    feedbackElement.innerText = feedback;
}

let validateAddress = () => {
    let feedback = "";
    let feedbackElement = address.nextElementSibling;

    if (address.value.trim() == "") {
        feedback = "La calle no puede estar vacia"
    }

    if (feedback) {
        address.classList.add('error-input');
        errors.address = feedback;
    }else {
        address.classList.remove('error-input');
        delete errors.address;
    }

    feedbackElement.innerText = feedback;
}

let validateAddressNumber = () => {
    let feedback = "";
    let feedbackElement = addressNumber.nextElementSibling;

    if (addressNumber.value == "") {
        feedback = "El numero de calle no puede estar vacio"
    }

    if (feedback) {
        addressNumber.classList.add('error-input');
        errors.addressNumber = feedback;
    }else {
        addressNumber.classList.remove('error-input');
        delete errors.addressNumber;
    }

    feedbackElement.innerText = feedback;
}

let validatePassword = () => {
    let feedback = "";
    let feedbackElement = password.nextElementSibling;

    if (password.value.trim() == "") {
        feedback = "La contraseña no puede estar vacia"
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password.value)) {
        feedback = 'Tu contraseña debe contener una mayuscula, minuscula, numero y caracter especial';
    } else if (password.value.trim() < 8) {
        feedback = "La contraseña no puede tener menos de 8 caracteres"
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

let confirmPassword = () => {
    let feedback = "";
    let feedbackElement = passwordConfirm.nextElementSibling;

    if (passwordConfirm.value == "") {
        feedback = "Debes confirmar tu contraseña"
    } else if (passwordConfirm.value !== password.value) {
        feedback = "Las contraseñas no coinciden"
    }

    if (feedback) {
        passwordConfirm.classList.add('error-input');
        errors.passwordConfirm = feedback;
    }else {
        passwordConfirm.classList.remove('error-input');
        delete errors.passwordConfirm;
    }

    feedbackElement.innerText = feedback;
}

let validateAvatar = () => {
    let feedback = "";
    let feedbackElement = avatar.nextElementSibling;
    let acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
    let filename = avatar.value;
    let fileExtension = filename.split(".").pop();

    if (avatar.files[0] == undefined) {
        feedback = "Debes cargar un avatar"
    }else if(!acceptedExtensions.includes(fileExtension)) {
        feedback = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`
    }

    if (feedback) {
        avatar.classList.add('error-input');
        errors.avatar = feedback;
    }else {
        avatar.classList.remove('error-input');
        delete errors.avatar;
    }

    feedbackElement.innerText = feedback;
}

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
firstName.addEventListener('blur', validateFirstName);
lastName.addEventListener('blur', validateLastName);
user.addEventListener('blur', validateUser);
address.addEventListener('blur', validateAddress);
addressNumber.addEventListener('blur', validateAddressNumber);
passwordConfirm.addEventListener('blur', confirmPassword);
avatar.addEventListener('blur', validateAvatar);

// Si submit de form se ejecutan funciones de validacion
form.addEventListener('submit', (e) => {
    validateFirstName();
    validateEmail();
    validatePassword();
    validateLastName();
    validateUser();
    validateAddress();
    validateAddressNumber();
    confirmPassword();
    validateAvatar();
    // si existen errores prevent default
    if (Object.keys(errors).length) {
        e.preventDefault();
    }
})

