let errors = {};

// Almaceno elementos del DOM
let btnSubmit = document.querySelector('.product-button');
let form = document.getElementById('product-form');
let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let descuento = document.getElementById('descuento');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let oferta = document.querySelectorAll('.oferta');
let temporada = document.getElementsByClassName('temporada');
let stockMin = document.getElementById('stockMin');
let stockMax = document.getElementById('stockMax');
let hiddenImage = document.getElementById("hiddenImage");

// Declaro funcion de validacion de campo nombre
let validateNombre = () => {
    // Declaro string vacio que contendra mensaje de error
    let feedback = "";
    // Almaceno elemento hermano(<p>) a input nombre 
    let feedbackElement = nombre.nextElementSibling;

    // Si el nombre no valida sobreescribo feedback
    if (nombre.value.trim() == "") {
        feedback = "El nombre no puede estar vacio"
    }else if (nombre.value.length < 5) {
        feedback = "El nombre no puede tener menos de 5 caracteres"
    }

    // Si existe error se almacena en objeto errors
    if (feedback) {
        nombre.classList.add('error-input');
        errors.nombre = feedback;
    }else {
        nombre.classList.remove('error-input');
        delete errors.nombre;
    }

    // Se imprime string de error en vista
    feedbackElement.innerText = feedback;
}

// Declaro funcion de validacion de campo precio
let validatePrecio = () => {
    let feedback = "";
    let feedbackElement = precio.nextElementSibling;

    if (precio.value == "" || precio.value == 0) {
        feedback = "El precio no puede estar vacio"
    }

    if (feedback) {
        precio.classList.add('error-input');
        errors.precio = feedback;
    }else {
        precio.classList.remove('error-input');
        delete errors.precio;
    }

    feedbackElement.innerText = feedback;
}

let validateDescuento = () => {
    let feedback = "";
    let feedbackElement = descuento.nextElementSibling;

    if (descuento.value == "") {
        feedback = "El descuento no puede estar vacio"
    }

    if (feedback) {
        descuento.classList.add('error-input');
        errors.descuento = feedback;
    }else {
        descuento.classList.remove('error-input');
        delete errors.descuento;
    }

    feedbackElement.innerText = feedback;
}

let validateDescripcion = () => {
    let feedback = "";
    let feedbackElement = descripcion.nextElementSibling;

    if (descripcion.value.trim() == "") {
        feedback = "La descripcion no puede estar vacia"
    }else if (descripcion.value.length < 20) {
        feedback = "La descripcion no puede tener menos de 20 caracteres"
    }

    if (feedback) {
        descripcion.classList.add('error-input');
        errors.descripcion = feedback;
    }else {
        descripcion.classList.remove('error-input');
        delete errors.descripcion;
    }

    feedbackElement.innerText = feedback;
}

let validateImagen = () => {
    let feedback = "";
    let feedbackElement = hiddenImage.nextElementSibling;
    let acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
    let filename = imagen.value;
    let fileExtension = filename.split(".").pop();
    console.log(hiddenImage.value)

    if (imagen.files[0] == undefined && !hiddenImage.value) {
        feedback = "Debes cargar una imagen"
    }else if(imagen.files[0] && !acceptedExtensions.includes(fileExtension)) {
        feedback = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`
    }

    if (feedback) {
        imagen.classList.add('error-input');
        errors.imagen = feedback;
    }else {
        imagen.classList.remove('error-input');
        delete errors.imagen;
    }

    feedbackElement.innerText = feedback;
}

let validateStockMin = () => {
    let feedback = "";
    let feedbackElement = stockMin.nextElementSibling;

    if (stockMin.value.trim() == "") {
        feedback = "El campo stockMin no puede estar vacio"
    }

    if (feedback) {
        stockMin.classList.add('error-input');
        errors.stockMin = feedback;
    }else {
        stockMin.classList.remove('error-input');
        delete errors.stockMin;
    }

    feedbackElement.innerText = feedback;
}

let validateStockMax = () => {
    let feedback = "";
    let feedbackElement = stockMax.nextElementSibling;

    if (stockMax.value.trim() == "") {
        feedback = "El campo stockMax no puede estar vacio"
    } else if (stockMax.value < stockMin.value) {
        feedback = "StockMax no puede ser menor a stockMin"
    }

    if (feedback) {
        stockMax.classList.add('error-input');
        errors.stockMax = feedback;
    }else {
        stockMax.classList.remove('error-input');
        delete errors.stockMax;
    }

    feedbackElement.innerText = feedback;
}

// Si focus se sale del input se ejecuta funcion validacion
nombre.addEventListener('blur', validateNombre);
precio.addEventListener('blur', validatePrecio);
descuento.addEventListener('blur', validateDescuento);
descripcion.addEventListener('blur', validateDescripcion);
stockMin.addEventListener('blur', validateStockMin);
stockMax.addEventListener('blur', validateStockMax);
imagen.addEventListener('blur', validateImagen);

// Si submit de form se ejecutan funciones de validacion
form.addEventListener('submit', (e) => {
    validateNombre();
    validatePrecio();
    validateDescuento();
    validateDescripcion();
    validateStockMin();
    validateStockMax();
    validateImagen();
    // si existen errores prevent default
    if (Object.keys(errors).length) {
        e.preventDefault();
    }  else {
        alert(`Se actualizó el producto ${nombre.value}`)
    }
})