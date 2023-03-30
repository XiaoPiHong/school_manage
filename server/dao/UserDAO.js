/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 23:44:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-02 16:55:36
 * @Description: 
 */
var path = require("path");
daoModule = require("./DAO");
databaseModule = require(path.join(process.cwd(), "modules/database"));
/**
 * 通过查询条件获取用户对象
 * 
 * @param  {[type]}   conditions 条件
 * @param  {Function} cb         回调函数
 */
module.exports.findOne = function (conditions, cb) {
  daoModule.findOne("UserModel", conditions, cb);
}

/**
 * 判断是否存在用户
 * 
 * @param  {[type]}   username 用户名
 * @param  {Function} cb       回调函数
 * 
 */
module.exports.exists = function (username, cb) {
  var db = databaseModule.getDatabase();
  var Model = db.models.UserModel;
  Model.exists({ "us_name": username }, function (err, isExists) {
    if (err) return cb("查询失败");
    cb(null, isExists);
  });
}

/**
 * 创建用户
 * 
 * @param  {[type]}   obj 用户信息
 * @param  {Function} cb  回调函数
 */
module.exports.create = function (obj, cb) {
  daoModule.create("UserModel", obj, cb);
}


/**
 * 更新用户信息
 * 
 * @param  {[type]}   obj 用户对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function (obj, cb) {
  daoModule.update("UserModel", obj.us_id, obj, cb);
}

/**
 * 通过ID获取用户对象数据
 * 
 * @param  {[type]}   id 用户主键ID
 * @param  {Function} cb 回调函数
 */
module.exports.show = function (id, cb) {
  daoModule.show("UserModel", id, cb);
}

/**
 * 通过关键词查询用户
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
module.exports.findByKey = function(key,offset,limit,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM user as us LEFT JOIN role as ro ON us.role_id = ro.role_id"; // 左联表

	if(key) {
		sql += " WHERE us_name LIKE ? LIMIT ?,?";
		database.driver.execQuery(
			sql
		,["%" + key + "%",offset,limit],function(err,users){
			if(err) return cb("查询执行出错");
			cb(null,users);
		});
	} else {
		sql += " LIMIT ?,? ";
		database.driver.execQuery(sql,[offset,limit],function(err,users){
			if(err) return cb("查询执行出错");
			cb(null,users);
		});
	}
}

/**
 * 模糊查询用户数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
module.exports.countByKey = function(key,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT count(*) as count FROM user";
	if(key) {
		sql += " WHERE us_name LIKE ?";
		database.driver.execQuery(
			sql
		,["%" + key + "%"],function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result[0]["count"]);
		});
	} else {
		database.driver.execQuery(sql,function(err,result){
			if(err) return cb("查询执行出错");
			cb(null,result[0]["count"]);
		});
	}
	
}

/**
 * 删除用户对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("UserModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}