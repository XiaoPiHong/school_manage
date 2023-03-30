/*
 * @Author: xiaopihong
 * @Github: https://github.com/XiaoPiHong
 * @Date: 2022-02-14 11:40:42
 * @LastEditors: xiaopihong
 * @LastEditTime: 2022-02-14 13:24:22
 * @Description: 
 */
module.exports = function (db, callback) {
  // 用户模型
  db.define("UserModel", {
    us_id: { type: 'serial', key: true },
    us_name: String,
    us_pwd: String,
    us_time: Number,
    role_id: Number,
    us_mobile: String,
    us_email: String,
    us_state: Number
  }, {
    table: "user"
  });
  return callback();
}
