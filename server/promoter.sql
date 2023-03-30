/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 8.0.30 : Database - promoter
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`promoter` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `promoter`;

/*Table structure for table `menu` */

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
  `menu_el_name` varchar(32) NOT NULL COMMENT '菜单元素名',
  `menu_id` int NOT NULL AUTO_INCREMENT COMMENT '菜单主键id',
  `menu_parent_id` int NOT NULL COMMENT '菜单父级id',
  `menu_el_id` varchar(32) NOT NULL COMMENT '菜单元素id',
  `menu_time` int unsigned NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb3;

/*Data for the table `menu` */

insert  into `menu`(`menu_el_name`,`menu_id`,`menu_parent_id`,`menu_el_id`,`menu_time`) values ('iview知识',1,0,'Iview',0),('插件',2,0,'Plugins',0),('JavaScript',3,0,'JavaScript',0),('Vue',4,0,'Vue',0),('CSS',5,0,'CSS',0),('Http',6,0,'Http',0),('系统管理',7,0,'System',0),('表单',8,1,'Form',0),('表格',9,1,'Table',0),('富文本编辑器',10,2,'RichTextEditor',0),('图表',11,2,'Echart',0),('axios库',12,2,'Axios',0),('SourceMap',13,2,'SourceMap',0),('ES7',14,3,'ES7',0),('ES5',15,3,'ES5',0),('File',16,3,'File',0),('Vue原理',17,4,'Principle',0),('路由',18,4,'VueRouter',0),('状态管理',19,4,'Vuex',0),('指令',20,4,'Instruction',0),('插槽',21,4,'Slot',0),('布局',22,5,'Layout',0),('缓存',23,6,'Cache',0),('安全管理',24,7,'Security',0),('表单验证',25,8,'ValidateForm',0),('Select组件',26,8,'SelectCom',0),('Input组件注意点',27,8,'InputCom',0),('InputNumber组件注意点',28,8,'InputNumberCom',0),('render注意',29,9,'RenderCom',0),('Jodit富文本编辑器',30,10,'JoditCom',0),('柱状图',31,11,'HistogramCom',0),('axios测试',32,12,'AxiosCom',0),('SourceMap的使用',33,13,'SourceMapCom',0),('async',34,14,'AsyncCom',0),('js类型验证',35,15,'JudgmentTypeCom',0),('防抖节流',36,15,'DebounceAndThrottleCom',0),('文件下载',37,16,'DownloadFileCom',0),('FileRender对象',38,16,'FileReaderCom',0),('文件操作',39,16,'FileCom',0),('Canvas剪切图片',40,16,'CanvasCom',0),('双向绑定原理',41,17,'MVVMCom',0),('事件委托原理',42,17,'DelegateCom',0),('列表元素为何使用key',43,17,'KeyCom',0),('函数调用创建组件',44,17,'FunctionCreateCom',0),('路由传参',45,18,'RouterPassCom',0),('Vuex的使用',46,19,'VuexCom',0),('v-model指令原理',47,20,'VmodelCom',0),('自定义vue指令',48,20,'CustomInstructionCom',0),('keep-alive',49,20,'KeepAliveCom',0),('插槽',50,21,'SlotCom',0),('flex布局',51,22,'FlexCom',0),('grid布局',52,22,'GridCom',0),('http缓存',53,23,'CacheCom',0),('用户管理',54,24,'UserCom',0),('菜单管理',55,24,'MenuCom',0),('样式穿透',61,17,'DeepCom',1669860550),('上传文件',62,16,'UploadFileCom',1676013810);

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `role_id` tinyint NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `role_name` varchar(32) NOT NULL COMMENT '角色名称',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

/*Data for the table `role` */

insert  into `role`(`role_id`,`role_name`) values (0,'超级管理员');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `us_id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `us_name` varchar(32) NOT NULL COMMENT '名称',
  `us_pwd` char(64) NOT NULL COMMENT '密码',
  `us_time` int unsigned NOT NULL COMMENT '注册时间',
  `role_id` tinyint NOT NULL DEFAULT '0' COMMENT '角色id',
  `us_mobile` varchar(32) DEFAULT NULL,
  `us_email` varchar(64) DEFAULT NULL,
  `us_state` tinyint DEFAULT '1' COMMENT '1：表示启用 0:表示禁用',
  PRIMARY KEY (`us_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COMMENT='用户表';

/*Data for the table `user` */

insert  into `user`(`us_id`,`us_name`,`us_pwd`,`us_time`,`role_id`,`us_mobile`,`us_email`,`us_state`) values (0,'xiaopihong','$2y$10$23ywmUiC5aPT4mbSl9.mSeplNe1/YonLy.2AylDiZR7hB0dWrVuvy',1659595208,0,'13068829005','260094892@qq.com',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
