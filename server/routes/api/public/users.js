/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 22:03:26
 * @LastEditors: xiaopihong
 * @LastEditTime: 2022-02-20 14:34:52
 * @Description: 
 */
const express = require('express')
const path = require('path')
const router = express.Router()
const userService = require(path.join(process.cwd(), 'services/UserService'))

// 创建用户
router.post("/register",
  // 验证参数
  function (req, res, next) {
    if (!req.body.username) {
      return res.sendResult(null, 400, "用户名不能为空");
    }
    if (!req.body.password) {
      return res.sendResult(null, 400, "密码不能为空");
    }
    if (!req.body.rid) {
      req.body.rid = -1;
      //return res.sendResult(null,200,"角色ID不能为空");
    }
    if (isNaN(parseInt(req.body.rid))) req.body.rid = -1;//return res.sendResult(null,200,"角色ID必须是数字");
    next();
  },
  // 处理业务逻辑
  function (req, res, next) {
    params = {
      "username": req.body.username,
      "password": req.body.password,
      "mobile": req.body.mobile,
      "email": req.body.email,
      "rid": req.body.rid
    }
    userService.createUser(params, function (err, user) {
      if (err) return res.sendResult(null, 400, err);
      res.sendResult(user, 200, "创建成功");
    });
  }
);

module.exports = router
