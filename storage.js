const multer = require('multer');
const uuid = require('uuid')

const avatarStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'avatars')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, uuid.v4() + '-' + Date.now() + '.' +extension);
    }
});

const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, uuid.v4() + '-' + Date.now() + '.' +extension);
    }
});

const avatarUpload = multer({ storage: avatarStorage });
const productUpload = multer({ storage: productStorage });

module.exports = {avatarUpload, productUpload};