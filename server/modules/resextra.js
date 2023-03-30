/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-13 23:28:51
 * @LastEditors: xiaopihong
 * @LastEditTime: 2022-02-13 23:28:52
 * @Description: 
 */
// 添加统一的返回结果方法
module.exports = function (req, res, next) {
  res.sendResult = function (data, code, message) {
    var fmt = req.query.fmt ? req.query.fmt : "rest";
    if (fmt == "rest") {
      res.json(
        {
          "data": data,
          "meta": {
            "msg": message,
            "status": code
          }
        });
    }
  };
  next();
}