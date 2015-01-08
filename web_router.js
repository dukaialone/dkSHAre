/*!
 * Jiuhao.share - route.js
 */

/**
 * Module dependencies.
 */

var express = require('express');
var passport = require('passport');
var config = require('./config');
var site = require("./controllers/site")
var activity = require("./controllers/activity");

var router = express.Router();

// home page
router.get('/', site.index);
router.get('/helloworld', site.helloworld);

//activity
router.get('/activity/',activity.create);
router.post('/activity/creat',activity.put)
// sitemap
//router.get('/sitemap.xml', site.sitemap);
module.exports = router;
