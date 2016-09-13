var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/404', function(req, res, next) {
  res.render('404', { title: '404' });
});

router.get('/blog-home-1', function(req, res, next) {
  res.render('blog-home-1', { title: 'blog-home-1' });
});

router.get('/blog-post', function(req, res, next) {
  res.render('blog-post', { title: 'blog-post' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'faq' });
});

router.get('/full-width', function(req, res, next) {
  res.render('full-width', { title: 'full-width' });
});

module.exports = router;