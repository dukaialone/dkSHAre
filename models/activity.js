var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var config = require('../config');
//var _ = require('lodash');

var ActivitySchema = new Schema({
    activity_id:{ type : ObjectId},
    title: { type: String },
    sub_title:{ typw : String},
    //content: { type: String },
    focus_img: {type : String},
    show:{ type: Boolean, default:false},
    update_time:{ type:Date, default:Date.now}
});

mongoose.model('Activity', ActivitySchema);