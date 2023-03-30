/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 23:33:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-30 15:27:55
 * @Description: 
 */
var path = require("path");
var userDAO = require(path.join(process.cwd(), "dao/UserDAO"));
var Password = require("node-php-password");
var logger = require('../modules/logger').logger();


/**
 * 用户登录
 * @param  {[type]}   username 用户名
 * @param  {[type]}   password 密码
 * @param  {Function} cb       回调
 */
module.exports.login = function (username, password, cb) {
  logger.debug('login => username:%s,password:%s', username, password);
  logger.debug('login => loginName:%s', username);
  userDAO.findOne({ "us_name": username }, function (err, user) {
    logger.debug(err);
    if (err || !user) return cb("用户名不存在");
    if (user.role_id < 0) {
      return cb("该用户没有权限登录");
    }

    if (user.role_id != 0 && user.us_state != 1) {
      return cb("该用户已经被禁用");
    }

    if (Password.verify(password, user.us_pwd)) {
      cb(
        null,
        {
          "id": user.us_id,
          "rid": user.role_id,
          "username": user.us_name,
          "mobile": user.us_mobile,
          "email": user.us_email,
        }
      );
    } else {
      return cb("密码错误");
    }
  });
}


/**
 * 创建用户
 * 
 * @param  {[type]}   user 用户数据集
 * @param  {Function} cb   回调函数
 */
module.exports.createUser = function (params, cb) {

  userDAO.exists(params.username, function (err, isExists) {
    if (err) return cb(err);

    if (isExists) {
      return cb("用户名已存在");
    }

    userDAO.create({
      "us_name": params.username,
      "us_pwd": Password.hash(params.password),
      "us_mobile": params.mobile,
      "us_email": params.email,
      "us_time": (Date.parse(new Date()) / 1000),
      "role_id": params.rid
    }, function (err, user) {
      if (err) return cb("创建失败");
      result = {
        "id": user.us_id,
        "username": user.us_name,
        "mobile": user.us_mobile,
        "email": user.us_email,
        "role_id": user.role_id,
        "create_time": user.us_time
      };
      cb(null, result);
    });
  });
}

/**
 * 更新密码
 * 
 * @param  {[type]}   params 用户信息
 * @param  {Function} cb     回调函数
 */
module.exports.updateUser = function (params, cb) {
  userDAO.findOne({ "us_id": params.id }, function (err, user) {
    if (err || !user) return cb("用户不存在");
    if (Password.verify(params.password, user.us_pwd)) return cb("原密码与新密码不能一致");
    userDAO.update(
      {
        "us_id": params.id,
        "us_pwd": Password.hash(params.password),
      },
      function (err, user) {
        if (err) return cb(err);
        cb(null, {
          "id": user.us_id,
          "username": user.us_name,
          "role_id": user.role_id,
          "mobile": user.us_mobile,
          "email": user.us_email
        });
      }
    )
  });
}

/**
 * 通过用户 ID 获取用户信息
 * 
 * @param  {[type]}   id 用户 ID
 * @param  {Function} cb 回调函数
 */
module.exports.getUser = function (id, cb) {
  userDAO.show(id, function (err, user) {
    if (err) return cb(err);
    if (!user) return cb("该用户不存在");
    cb(
      null,
      {
        "id": user.us_id,
        "rid": user.role_id,
        "username": user.us_name,
        "mobile": user.us_mobile,
        "email": user.us_email
      }
    );
  });
}

/**
 * 获取所有用户
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
  module.exports.getAllUsers = function(conditions,cb) {

	
    if(!conditions.pagenum) return cb("pagenum 参数不合法");
    if(!conditions.pagesize) return cb("pagesize 参数不合法");
  
  
    // 通过关键词获取用户数量
    userDAO.countByKey(conditions["query"],function(err,count) {
      key = conditions["query"];
      pagenum = parseInt(conditions["pagenum"]);
      pagesize = parseInt(conditions["pagesize"]);
  
      pageCount = Math.ceil(count / pagesize);
      offset = (pagenum - 1) * pagesize;
      if(offset >= count) {
        offset = count;
      }
      limit = pagesize;
  
      userDAO.findByKey(key,offset,limit,function(err,users){
        var retManagers = [];
        for(idx in users) {
          var user = users[idx];
          var role_name = user.role_name;
          if(!user.role_id) {
            role_name = "超级管理员"
          }
          retManagers.push({
            "us_id": user.us_id,
            "role_name":role_name,
            "us_name":user.us_name,
            "us_time":user.us_time,
            "us_mobile":user.us_mobile,
            "us_email":user.us_email,
            "state":user.us_state == 1
          });
        }
        var resultDta = {};
        resultDta["total"] = count;
        resultDta["pagenum"] = pagenum;
        resultDta["list"] = retManagers;
        cb(err,resultDta);
      });
    });
  }

/**
 * 更新用户信息
 * 
 * @param  {[type]}   params 用户信息
 * @param  {Function} cb     回调函数
 */
module.exports.updateUserInfo = function(params,cb) {
	userDAO.update(
		{
			"us_id":params.id,
			"us_mobile":params.mobile,
			"us_email":params.email
		},
		function(err,user) {
			if(err) return cb(err);
			cb(null,{
					"us_id":user.us_id,
					"us_name":user.us_name,
					"role_id":user.role_id,
					"us_mobile":user.us_mobile,
					"us_email":user.us_email
				});
		}
	)
}

/**
 * 通过用户 ID 进行删除操作
 * 
 * @param  {[type]}   id 用户ID
 * @param  {Function} cb 回调函数
 */
 module.exports.deleteUser = function(id,cb) {
	userDAO.destroy(id,function(err){
		if(err) return cb("删除失败");
		cb(null);
	});
}