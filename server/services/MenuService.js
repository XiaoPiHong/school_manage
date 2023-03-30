const path = require("path");
const menuDAO = require(path.join(process.cwd(),"dao/MenuDAO"));

/**
 * 获取菜单列表
 * 
 * @param  {Function} cb     回调函数
 */
module.exports.getMenus = function(cb) {
	menuDAO.list(function(err,menus) {
		if(err) return cb("获取失败");
		cb(null,menus);
	});
}

/**
 * 创建菜单
 * 
 * @param  {[type]}   menu 菜单数据集
 * @param  {Function} cb   回调函数
 */
module.exports.createMenu = function (params, cb) {

  menuDAO.exists(params.menu_el_id, function (err, isExists) {
    if (err) return cb(err);

    if (isExists) {
      return cb("菜单元素id已存在");
    }

    menuDAO.create({
      "menu_el_id": params.menu_el_id,
      "menu_el_name": params.menu_el_name,
      "menu_parent_id": params.menu_parent_id,
      "menu_time": (Date.parse(new Date()) / 1000),
    }, function (err, menu) {
      if (err) return cb("创建失败");
      result = {
				"menu_id": menu.menu_id,
        "menu_el_id": menu.menu_el_id,
				"menu_el_name": menu.menu_el_name,
				"menu_parent_id": menu.menu_parent_id,
				"menu_time": menu.menu_time,
				};
      cb(null, result);
    });
  });
}

/**
 * 通过菜单 ID 进行删除操作
 * 
 * @param  {[type]}   id 菜单ID
 * @param  {Function} cb 回调函数
 */
module.exports.deleteMenu = function(id,cb) {
	menuDAO.destroy(id,function(err){
		if(err) return cb("删除失败");
		cb(null);
	});
}

/**
 * 获取所有菜单
 * @param  {[type]}   conditions 查询条件
 * 查询条件统一规范
 * conditions
	{
		"query" : 关键词查询,
		"pagenum" : 页数,
		"pagesize" : 每页长度
	}
 * @param  {Function} cb         回调函数
 */
module.exports.getAllMenus = function(conditions,cb) {


  if(!conditions.pagenum) return cb("pagenum 参数不合法");
  if(!conditions.pagesize) return cb("pagesize 参数不合法");


  // 通过关键词获取菜单数量
  menuDAO.countByKey(conditions["query"],function(err,count) {
    key = conditions["query"];
    pagenum = parseInt(conditions["pagenum"]);
    pagesize = parseInt(conditions["pagesize"]);

    pageCount = Math.ceil(count / pagesize);
    offset = (pagenum - 1) * pagesize;
    if(offset >= count) {
      offset = count;
    }
    limit = pagesize;

    menuDAO.findByKey(key,offset,limit,function(err,menus){
      var resultDta = {};
      resultDta["total"] = count;
      resultDta["pagenum"] = pagenum;
      resultDta["list"] = menus;
      cb(err,resultDta);
    });
  });
}

/**
 * 更新菜单信息
 * 
 * @param  {[type]}   params 菜单信息
 * @param  {Function} cb     回调函数
 */
module.exports.updateMenuInfo = function(params,cb) {
  menuDAO.findOne({ "menu_el_id": params.menu_el_id }, function (err, menu) {
    if (err || (menu && menu.menu_id != params.menu_id)) return cb("菜单元素ID已存在"); // 这里不可以用全等判断
    menuDAO.update(
      {
        "menu_id":params.menu_id,
        "menu_el_name":params.menu_el_name,
        "menu_el_id":params.menu_el_id,
        "menu_parent_id":params.menu_parent_id
      },
      function(err,menu) {
        if(err) return cb(err);
        cb(null,{
          "menu_id":menu.menu_id,
          "menu_el_name":menu.menu_el_name,
          "menu_el_id":menu.menu_el_id,
          "menu_parent_id":menu.menu_parent_id,
          "menu_time": menu.menu_time,
        });
      }
    )
  });
}
