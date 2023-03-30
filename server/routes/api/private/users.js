/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 22:03:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-24 11:18:54
 * @Description: 
 */
const express = require('express')
const path = require('path')
const router = express.Router()
const userService = require(path.join(process.cwd(), 'services/UserService'))

// 修改用户密码
router.put("/changePassword/:id",
  // 参数验证
  function (req, res, next) {
    if (!req.params.id) {
      return res.sendResult(null, 400, "用户ID不能为空");
    }
    if (isNaN(parseInt(req.params.id))) return res.sendResult(null, 400, "用户ID必须是数字");
    if (!req.body.password) return res.sendResult(null, 400, "密码不能为空");
    next();
  },
  // 处理业务逻辑
  function (req, res, next) {
    userService.updateUser(
      {
        "id": req.params.id,
        "password": req.body.password,
      },
      function (err, user) {
        if (err) return res.sendResult(null, 400, err);
        res.sendResult(user, 200, "更新成功");
      }
    );
  }
);


//获取用户信息
router.post("/getUserInfo",
  function (req, res, next) {
    next();
  },
  function (req, res, next) {
    userService.getUser(req.userInfo.uid, function (err, user) {
      if (err) return res.sendResult(null, 400, err);
      res.sendResult(user, 200, "获取成功");
    });
  }
)

// 查询用户列表
router.get("/getUserList",
	// 验证参数
	function(req,res,next) {
		// 参数验证
		if(!req.query.pagenum || req.query.pagenum <= 0) return res.sendResult(null,400,"pagenum 参数错误");
		if(!req.query.pagesize || req.query.pagesize <= 0) return res.sendResult(null,400,"pagesize 参数错误"); 
		next();
	},
	// 处理业务逻辑
	function(req,res,next) {
		userService.getAllUsers(
			{
				"query":req.query.query,
				"pagenum":req.query.pagenum,
				"pagesize":req.query.pagesize
			},
			function(err,result){
				if(err) return res.sendResult(null,400,err);
				res.sendResult(result,200,"获取用户列表成功");
			}
		);
	}
);

// 修改用户信息
router.put("/changeUserInfo/:id",
	// 参数验证
	function(req,res,next) {
		if(!req.params.id) {
			return res.sendResult(null,400,"用户ID不能为空");
		}
		if(isNaN(parseInt(req.params.id))) return res.sendResult(null,400,"用户ID必须是数字");
		next();
	},
	// 处理业务逻辑
	function(req,res,next) {
		userService.updateUserInfo(
			{
				"id":req.params.id,
				"mobile":req.body.mobile,
				"email":req.body.email
			},
			function(err,user) {
				if(err) return res.sendResult(null,400,err);
				res.sendResult(user,200,"更新成功");
			}
		);
	}
);

// 删除用户
router.delete("/deleteUser/:id",
	// 验证参数
	function(req,res,next){
		if(!req.params.id) return res.sendResult(null,400,"用户ID不能为空");
		if(isNaN(parseInt(req.params.id))) return res.sendResult(null,400,"ID必须是数字");
		if(req.params.id == 0) return res.sendResult(null,400,"不允许删除超级管理员账户");
		next();
	},
	// 处理业务逻辑
	function(req,res,next){
		userService.deleteUser(req.params.id,function(err){
			if(err) return res.sendResult(null,400,err);
			return res.sendResult(null,200,"删除成功");
		});
	}
);

module.exports = router
