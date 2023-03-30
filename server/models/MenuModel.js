module.exports = function (db, callback) {
  // 菜单模型
  db.define("MenuModel", {
    menu_id: { type: 'serial', key: true },
    menu_parent_id: Number,
    menu_el_name: String,
    menu_el_id: String,
    menu_time: Number
  }, {
    table: "menu"
  });
  return callback();
}
