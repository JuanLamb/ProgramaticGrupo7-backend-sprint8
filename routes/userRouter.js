const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');
const validations = require('../middlewares/validations');
const storage = require('../middlewares/multerStorage');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');

const upload = multer({ storage });

const router = express.Router();

router.get('/login', guestMiddleware, userController.login);

router.get('/register', guestMiddleware, userController.register);

router.get('/productCart', userController.shopCart);

router.get('/productCart2',authMiddleware, userController.shopCart2);

router.get('/productCart3',authMiddleware, userController.shopCart3);

router.get('/productCart4',authMiddleware, userController.shopCart4);

router.post('/register', upload.single('avatar'), validations, userController.recieveFormRegister);  /* RECIBE DATOS DEL FORMULARIO DE CREACION DE USUARIO // AGREGAR VALIDACIONES*/ 

router.post('/login', loginMiddleware, userController.recieveFormLogin);  /* RECIBE DATOS DEL FORMULARIO DE LOGIN DE USUARIO */

router.put('/editUser', upload.single('avatar'), userController.modifyForm);   /* RECIBE FORMULARIO DE EDICION */

router.get('/profile', authMiddleware, userController.profile);

router.get('/logout', userController.logout);

module.exports = router;