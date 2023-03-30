const express = require('express');
const path = require("path");
const router = express.Router();

const ChartService = require(path.join(process.cwd(), 'services/ChartService'))

// 获取登录日志图表数据
router.get("/loginLog",
	function (req, res, next) {
		if (!req.query.us_name) {
			return res.sendResult(null, 400, "参数错误");
		}
		next();
	},
	function(req,res,next) {
		ChartService.getLoginLog({
			us_name: req.query.us_name
		},
			function(err,result){
				if(err) return res.sendResult(null,400,err);
				res.sendResult(result,200,"获取登录日志成功");
			}
		);
	}
);

module.exports = router