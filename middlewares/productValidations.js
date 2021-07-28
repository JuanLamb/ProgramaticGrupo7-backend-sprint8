const { body } = require('express-validator');
const path = require('path');

const productValidations = [
    body('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 2 }),
    body('price')
    .notEmpty().withMessage('Debes ingresar un precio').bail(),
    body('discount')
    .notEmpty().withMessage('Debes ingresar un descuento').bail(),
    body('description')
    .notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({ min: 5 }),
    body('offer')
    .notEmpty().withMessage('Debes seleccionar una opción'),
    body('season')
    .notEmpty().withMessage('Debes seleccionar una opción'),
    body('stockMin')
    .notEmpty().withMessage('Debes ingresar un stock minimo').bail(),
    body('stockMax')
    .notEmpty().withMessage('Debes ingresar un stock maximo').bail(),
    body('image')
    .custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

        if(!file){
            throw new Error('Debes cargar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    }),
];

module.exports = productValidations;