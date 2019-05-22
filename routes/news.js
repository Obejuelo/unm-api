const express = require('express');
const router = express.Router();

const newsController = require('../controllers/news.controller');

router.route('/api/news')
  .get(newsController.find)
  .post(
    newsController.multerMiddleware(),
    newsController.create,
    newsController.saveImage)

router.route('/api/news/:id')
    .get(newsController.findById)
    .put(newsController.update)
    .delete(newsController.destroy)

module.exports = router;
