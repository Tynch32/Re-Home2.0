const multer = require('multer');
const path = require('path');
const {hashSync} = require ('bcryptjs')

const storage = multer.diskStorage({
    
    destination : (req,file,cb) => {
        return cb(null, './public/img/products')
    },
    filename : (req, file, cb) => {
        let nombre = hashSync(file.originalname,6).toString()
        nombre = nombre.replace(/[\/\\]/g, '');
        return cb(null, `${nombre}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage
});


module.exports = upload;

