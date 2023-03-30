const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require('fs');
// Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件
const multer  = require('multer');
// 临时上传目录
const upload = multer({ dest: 'tmp_uploads/' });

const upload_config = require('config').get("upload_config");

// 提供文件上传服务
router.post("/",upload.single('file'),function(req,res,next) {
	const fileExtArray = req.file.originalname.split(".");
	const ext = fileExtArray[fileExtArray.length - 1];
	const targetPath = req.file.path + "." + ext;
	// multer上传完成后存储在tmp_uploads中是一个没有后缀的文件，所以需要从originalname获取后缀重命名
	fs.rename(path.join(process.cwd(),"/" + req.file.path),path.join(process.cwd(),targetPath),function(err){
		if(err) {
			return res.sendResult(null,400,"上传文件失败");
		}
		res.sendResult({"tmp_path":targetPath,"url":upload_config.get("baseURL") + "/" + targetPath},200,"上传成功");
	})
});

module.exports = router;