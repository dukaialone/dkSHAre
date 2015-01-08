
var validator = require('validator');

var Activity = require("../proxy").Activity;

exports.create = function (req, res, next) {
    res.render('activity/edit',{title:"新建活动"});
};

exports.put = function(req, res, next){
    var title = validator.trim(req.body.title);
    title = validator.escape(title);
    var sub_title = validator.trim(req.body.sub_title);
    sub_title = validator.escape(title);
    var focus_img = validator.trim(req.body.focus_img);
    focus_img = validator.escape(focus_img);

    var show = req.body.show;
    if(show === 1){
        show = false;
    }else{
        show = true;
    }
    Activity.newAndSave(title,sub_title,focus_img,show,function(err,activity){
        res.json({status: 'success',tag:'1'});
        return;
    });
}