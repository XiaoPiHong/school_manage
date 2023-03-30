const fs = require('fs')
const path = require("path");

/**
 * 获取登录日志
 * @param  {[type]}   us_name 用户名
 * @param  {Function} cb     回调函数
 */
module.exports.getLoginLog = function(params,cb) {
  fs.readFile(path.join(process.cwd(), 'cheese.log'), 'utf8', function (err, data) { // 将读取到的内容直接按照utf8编码转换成我们认识的字符
    if (err) return cb("获取失败");
    // 只获取登录的日志
    const list = data.replace(/\r|\n/ig,"[[[,]]]").split('[[[,]]]').filter(item => item.includes('] [DEBUG] cheese - login => loginName:'))
    const theFullYear = new Date().getFullYear()
    const result = []
    for(let temp of list){
      
      const userName = temp.split('] [DEBUG] cheese - login => loginName:')[1]
      const time = temp.split('] [DEBUG] cheese - login => loginName:')[0].substring(1)

      if(userName === params.us_name && time.includes(theFullYear)){
        result.push({
          userName,
          time
        })
      }
    }
    cb(null, result)
  })
}