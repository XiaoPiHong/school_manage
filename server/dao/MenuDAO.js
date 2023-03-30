const path = require("path");
daoModule = require("./DAO");
databaseModule = require(path.join(process.cwd(), "modules/database"));

/**
 * 获取菜单列表
 * 
 * @param  {Function} cb 回调函数
 */
module.exports.list = function(cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM menu";
	database.driver.execQuery(sql,function(err,result){
		if(err) return cb("获取菜单列表失败",null);
		cb(null,result);
	});
}

/**
 * 判断是否存在菜单
 * 
 * @param  {[type]}   menu_el_id 菜单元素id
 * @param  {Function} cb       回调函数
 *  
 */
module.exports.exists = function (menu_el_id, cb) {
  var db = databaseModule.getDatabase();
  var Model = db.models.MenuModel;
  Model.exists({ "menu_el_id": menu_el_id }, function (err, isExists) {
    if (err) return cb("查询失败");
    cb(null, isExists);
  });
}

/**
 * 创建菜单
 * 
 * @param  {[type]}   obj 菜单信息
 * @param  {Function} cb  回调函数
 */
module.exports.create = function (obj, cb) {
  daoModule.create("MenuModel", obj, cb);
}

/**
 * 通过查询条件获取菜单对象
 * 
 * @param  {[type]}   conditions 条件
 * @param  {Function} cb         回调函数
 */
module.exports.findOne = function (conditions, cb) {
  daoModule.findOne("MenuModel", conditions, cb);
}

/**
 * 通过关键词查询菜单
 * 
 * @param  {[type]}   key    关键词
 * @param  {[type]}   offset 
 * @param  {[type]}   limit  
 * @param  {Function} cb     回调函数
 */
module.exports.findByKey = function(key,offset,limit,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT * FROM menu";

	if(key) {
		sql += " WHERE menu_el_name LIKE ? LIMIT ?,?";
		database.driver.execQuery(
			sql
		,["%" + key + "%",offset,limit],function(err,menus){
			if(err) return cb("查询执行出错");
			cb(null,menus);
		});
	} else {
		sql += " LIMIT ?,? ";
		database.driver.execQuery(sql,[offset,limit],function(err,menus){
			if(err) return cb("查询执行出错");
			cb(null,menus);
		});
	}
}

/**
 * 模糊查询菜单数量
 * 
 * @param  {[type]}   key 关键词
 * @param  {Function} cb  回调函数
 */
module.exports.countByKey = function(key,cb) {
	db = databaseModule.getDatabase();
	sql = "SELECT count(*) as count FROM menu";
	if(key) {
		sql += " WHERE menu_el_name LIKE ?";
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
 * 更新菜单信息
 * 
 * @param  {[type]}   obj 菜单对象
 * @param  {Function} cb  回调函数
 */
module.exports.update = function (obj, cb) {
  daoModule.update("MenuModel", obj.menu_id, obj, cb);
}

/**
 * 删除菜单对象数据
 * 
 * @param  {[type]}   id 主键ID
 * @param  {Function} cb 回调函数
 */
 module.exports.destroy = function(id,cb) {
	daoModule.destroy("MenuModel",id,function(err){
		if(err) return cb(err);
		return cb(null);
	});
}