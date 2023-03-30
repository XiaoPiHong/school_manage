const express = require('express');
const path = require("path");
const router = express.Router();
// 通过验证模块获取菜单服务模块
const menuService = require(path.join(process.cwd(), 'services/MenuService'))

router.get("/getMenus",
	function(req,res,next) {
		menuService.getMenus(function(err,result) {
			if(err) return res.sendResult(null,400,err);
			res.sendResult(result,200,"获取菜单列表成功");
		});
	}
);

// 创建菜单
router.post("/postMenu",
  // 验证参数
  function (req, res, next) {
    if (!req.body.menu_el_id) {
      return res.sendResult(null, 400, "菜单元素id不能为空");
    }
    if (!req.body.menu_el_name) {
      return res.sendResult(null, 400, "菜单元素名不能为空");
    }
    next();
  },
  // 处理业务逻辑
  function (req, res, next) {
    params = {
      "menu_el_id": req.body.menu_el_id,
      "menu_el_name": req.body.menu_el_name,
      "menu_parent_id": req.body.menu_parent_id,
    }
    menuService.createMenu(params, function (err, user) {
      if (err) return res.sendResult(null, 400, err);
      res.sendResult(user, 200, "创建成功");
    });
  }
);

// 删除菜单
router.delete("/deleteMenu/:id",
	// 验证参数
	function(req,res,next){
		if(!req.params.id) return res.sendResult(null,400,"菜单ID不能为空");
		if(isNaN(parseInt(req.params.id))) return res.sendResult(null,400,"ID必须是数字");
		next();
	},
	// 处理业务逻辑
	function(req,res,next){
		menuService.deleteMenu(req.params.id,function(err){
			if(err) return res.sendResult(null,400,err);
			return res.sendResult(null,200,"删除成功");
		});
	}
);

// 编辑菜单信息
router.put("/changeMenu/:id",
	// 参数验证
	function(req,res,next) {
		if(!req.params.id) {
			return res.sendResult(null,400,"菜单ID不能为空");
		}
		if(isNaN(parseInt(req.params.id))) return res.sendResult(null,400,"菜单ID必须是数字");
		next();
	},
	// 处理业务逻辑
	function(req,res,next) {
		menuService.updateMenuInfo(
			{
				"menu_id":req.params.id,
				"menu_parent_id":req.body.menu_parent_id,
				"menu_el_name":req.body.menu_el_name,
				"menu_el_id":req.body.menu_el_id
			},
			function(err,menu) {
				if(err) return res.sendResult(null,400,err);
				res.sendResult(menu,200,"更新成功");
			}
		);
	}
);

// 查询顶级列表
router.get("/getMenuList",
	// 验证参数
	function(req,res,next) {
		// 参数验证
		if(!req.query.pagenum || req.query.pagenum <= 0) return res.sendResult(null,400,"pagenum 参数错误");
		if(!req.query.pagesize || req.query.pagesize <= 0) return res.sendResult(null,400,"pagesize 参数错误"); 
		next();
	},
	// 处理业务逻辑
	function(req,res,next) {
		menuService.getAllMenus(
			{
				"query":req.query.query,
				"pagenum":req.query.pagenum,
				"pagesize":req.query.pagesize
			},
			function(err,result){
				if(err) return res.sendResult(null,400,err);
				res.sendResult(result,200,"获取菜单列表成功");
			}
		);
	}
);
module.exports = router