
var models = require("../models");
var Activity = models.Activity;

exports.newAndSave = function(title,sub_title,focus_img,show,callback){
    var activity = new Activity();
    activity.title = title;
    activity.sub_title = sub_title;
    activity.focus_img = focus_img;
    activity.show = show;
    activity.save(callback);
}
