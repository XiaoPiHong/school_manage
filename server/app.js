/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 21:53:43
 * @LastEditors: xiaopihong
 * @LastEditTime: 2022-02-20 14:38:34
 * @Description: 
 */
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// 路由加载
const mount = require('mount-routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 初始化数据库模块
const database = require('./modules/database')
database.initialize(app, function (err) {
  if (err) {
    console.error('连接数据库失败失败 %s', err)
  }
})

/**
 *
 *	后台管理系统初始化
 *
 */
// 获取用户逻辑模块
const userService = require(path.join(process.cwd(), 'services/UserService'))

// 设置跨域和相应数据格式
app.all('/api/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  if (req.method == 'OPTIONS') res.sendStatus(200)/*让options请求快速返回*/
  else next()
})

// 初始化统一响应机制
const resextra = require('./modules/resextra')
app.use(resextra)

// 初始化 后台登录 passport 策略
admin_passport = require('./modules/passport')
// 设置登录模块的登录函数衔接 passport 策略
admin_passport.setup(app, userService.login)
// 设置 passport 登录入口点
app.use('/api/login', admin_passport.login)
// 设置 passport 验证路径
app.use('/api/private/*', admin_passport.tokenAuth)
// 开放上传的资源
app.use('/tmp_uploads', express.static('./tmp_uploads'))
/**
 *
 * 初始化路由
 *
 */
// 带路径的用法并且可以打印出路由表
mount(app, path.join(process.cwd(), '/routes'), true)

/**
 *
 * 统一处理无响应
 *
 */
// 如果没有路径处理就返回 Not Found
app.use(function (req, res, next) {
  res.sendResult(null, 404, 'Not Found')
})

app.listen(5000, function () {
  console.log('The server is running...')
})
