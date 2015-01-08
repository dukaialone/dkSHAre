/*!
 * Jiuhao.share - site index controller.
 */

/**
 * Module dependencies.
 */

//var User = require('../proxy').User
//var Topic = require('../proxy').Topic;
//var config = require('../config');
//var eventproxy = require('eventproxy');
//var cache = require('../common/cache');
//var xmlbuilder = require('xmlbuilder');
//var renderHelper = require('../common/render_helper');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.helloworld = function(req, res){
  res.render('index', { title: 'hello world' });
};

