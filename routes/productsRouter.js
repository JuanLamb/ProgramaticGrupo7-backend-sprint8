const express = require('express');
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const productController = require('../controllers/productController');
const router = express.Router();
const productValidations = require('../middlewares/productValidations.js');
const productEditValidations = require('../middlewares/productEditValidations');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images/productos'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

/* LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.readAll);

/* FORMULARIO DE CARGA */
router.get('/create', productController.createProduct);

/* BUSCA UN PRODUCTO */
router.get('/search', productController.searchProduct);

/* FILTRA PRODUCTOS SEGUN CATEGORIA/CUERDAS/ARNESES */
router.get('/productCategories/:category', productController.filterCategories);

/* LEE PRODUCTO SEGUN ID */
router.get('/:id', productController.readProduct);    

/* RECIBE DATOS DEL FORMULARIO DE CREACION */
router.post('/', upload.single('image'), productValidations, productController.recieveForm);  

/* MODIFICA PRODUCTO SEGUN ID */
router.get('/:id/edit', productController.modifyProduct);  

/* RECIBE FORMULARIO DE EDICION */
router.put('/:id', upload.single('image'), productEditValidations, productController.modifyForm);   

/* ELIMINA PRODUCTO  */
router.delete('/:id', productController.deleteProduct);  

module.exports = router;