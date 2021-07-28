const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images/users'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

module.exports = storage;