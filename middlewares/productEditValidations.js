const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe ser mayor a 2 letras'),
    body('price')
    .notEmpty().withMessage('Debes ingresar un precio').bail(),
    body('discount')
    .notEmpty().withMessage('Debes ingresar un descuento').bail(),
    body('description')
    .notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({ min: 5 }).withMessage('La descripcion debe ser mayor a 5 letras'),
    body('offer')
    .notEmpty().withMessage('Debes seleccionar una opción'),
    body('season')
    .notEmpty().withMessage('Debes seleccionar una opción'),
    body('image')
    .custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
        let fileExtension = "";
        if (file) {
           fileExtension = path.extname(file.originalname);
           if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    }),
    body('stockMin')
    .notEmpty().withMessage('Debes ingresar un stock minimo').bail(),
    body('stockMax')
    .notEmpty().withMessage('Debes ingresar un stock maximo').bail()
];

module.exports = validations;