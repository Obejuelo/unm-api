const express = require('express');
const router = express.Router();

const imagesController = require('../controllers/images.controller');

router.route('/image')
  .get(imagesController.find)
  .post(
    imagesController.multerMiddleware(),
    imagesController.create,
    imagesController.saveImage)

router.route('/image/:id')
  .get(imagesController.findById)
  .put(imagesController.update)
  .delete(imagesController.destroy)

module.exports = router;