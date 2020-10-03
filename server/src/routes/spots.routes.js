const express = require('express');
const multer = require('multer');

const router = express.Router();

const SpotController = require('../controllers/SpotController');

const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

router.get('/spots', SpotController.index);
router.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = router;
