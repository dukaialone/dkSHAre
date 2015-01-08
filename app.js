/*!
 * jiuhao.share - app.js
 */

/**
 * Module dependencies.
 */
var config = require('./config');

/**
 * 监控
 */
if (!config.debug) {
    require('newrelic');
}

var http = require('http');
var path = require('path');
var Loader = require('loader');
var express = require('express');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var webRouter = require('./web_router');
var _ = require('lodash');
// 静态文件目录
var staticDir = path.join(__dirname, 'public');

var app = express();

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('method-override')());
app.use(require('cookie-parser')(config.session_secret));
/**
 * 静态文件路径
 */
app.use(Loader.less(__dirname));
app.use('/public', express.static(staticDir));

// set static, dynamic helpers
_.extend(app.locals, {
    config: config,
    Loader: Loader
});

//_.extend(app.locals, require('./common/render_helper'));

/**
 * 防止csrf攻击
 */
app.use(function (req, res, next) {
    res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
    next();
});

// routes
app.use('/', webRouter);

// error handler
if (config.debug) {
    app.use(errorhandler());
} else {
    app.use(function (err, req, res, next) {
        return res.status(500).send('500 status');
    });
}

app.listen(config.port, function () {
    console.log("Jiuhao.Share listening on port %d in %s mode", config.port, app.settings.env);
    console.log("God bless love....");
    console.log("You can debug your app with http://" + config.host + ':' + config.port);
});

module.exports = app;