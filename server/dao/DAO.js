/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 23:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-02 16:57:10
 * @Description: 
 */
var path = require("path");

// 获取数据库模型
databaseModule = require(path.join(process.cwd(), "modules/database"));
var logger = require('../modules/logger').logger();

/**
 * 创建对象数据
 * 
 * @param  {[type]}   modelName 模型名称
 * @param  {[type]}   obj       模型对象
 * @param  {Function} cb        回调函数
 */
module.exports.create = function (modelName, obj, cb) {
  var db = databaseModule.getDatabase();
  var Model = db.models[modelName];
  Model.create(obj, cb);
}

/**
 * 获取一条数据
 * @param  {[type]}   modelName  模型名称
 * @param  {[数组]}   conditions  条件集合
 * @param  {Function} cb         回调函数
 */
module.exports.findOne = function (modelName, conditions, cb) {
  var db = databaseModule.getDatabase();

  var Model = db.models[modelName];

  if (!Model) return cb("模型不存在", null);

  if (!conditions) return cb("条件为空", null);

  Model.one(conditions, function (err, obj) {
    logger.debug(err);
    if (err) {
      return cb("查询失败", null);
    }
    return cb(null, obj);
  });
}

/**
 * 更新对象数据
 * 
 * @param  {[type]}   modelName 模型名称
 * @param  {[type]}   id        数据关键ID
 * @param  {[type]}   updateObj 更新对象数据
 * @param  {Function} cb        回调函数
 */
module.exports.update = function (modelName, id, updateObj, cb) {
  var db = databaseModule.getDatabase();
  var Model = db.models[modelName];
  Model.get(id, function (err, obj) {
    if (err) return cb("更新失败", null);
    obj.save(updateObj, cb);
  });
}


/**
 * 通过主键ID获取对象
 * @param  {[type]}   modelName 模型名称
 * @param  {[type]}   id        主键ID
 * @param  {Function} cb        回调函数
 */
module.exports.show = function (modelName, id, cb) {
  var db = databaseModule.getDatabase();
  var Model = db.models[modelName];
  Model.get(id, function (err, obj) {
    cb(err, obj);
  });
}

/**
 * 通过主键ID删除对象
 * 
 * @param  {[type]}   modelName 模型名称
 * @param  {[type]}   id        主键ID
 * @param  {Function} cb        回调函数
 */
 module.exports.destroy = function(modelName,id,cb) {
	var db = databaseModule.getDatabase();
	var Model = db.models[modelName];
	Model.get(id,function(err,obj){
		if(err) return cb("无模型ID");
		obj.remove(function(err) {
			if(err) return cb("删除失败");
			return cb(null);
		});
	});
}

