"use strict";(self["webpackChunkschool_manage_ts"]=self["webpackChunkschool_manage_ts"]||[]).push([[693],{3693:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Row",{staticClass:"pd10"},[t("Col",{attrs:{span:"24"}},[t("h1",[e._v("一、认识SourceMap")]),t("p",[e._v(" 1.我们上线的代码都是经过高度压缩的（如*.min.js文件），连里面的变量名也会发生替换，所以上线之后的代码出错之后想要找错，只能在经过压缩的代码上面找，十分难受 ")]),t("p",[e._v(" 2.想要阅读这个压缩过的代码，可以使用浏览器插件：PrettyPrint，又或者使用浏览器f12的Prettey-print，如果是使用浏览器f12的Prettey-print，如下图： ")]),t("img",{attrs:{width:700,src:r(9479),alt:""}}),t("p",[e._v(" 3.一般我们node_modules里面的包中，都会含有*.js、*.min.js、*.min.js.map这三个文件，*.min.js是*.js的压缩版，而*.min.js.map则是*.js的对应(也就是这个map文件记录着*.js所有代码的位置) ")]),t("p",[e._v(" 4.*.min.js.map的存在，就可以让我们断点在*.min.js时，也可以加载出对应的*.js，方便我们在初始代码上调试 ")]),t("P",[e._v("5.简单来说SourceMap是一项技术，原理就是在压缩代码时生成对应的*.min.js.map文件，这个文件就是记录压缩之前初始代码的对应，在我们断点在压缩之后的文件上时，能加载出对应的*.js文件，方便调试（对于调试线上代码及其有帮助）")]),t("p",[e._v(" 注意：要想使用SourceMap技术调试，前提是有对应的*.min.js.map文件,而且要告诉*.min.js文件这个map文件的位置，方法如下： ")]),t("img",{attrs:{width:700,src:r(7764),alt:""}})],1),t("Col",{attrs:{span:"24"}},[t("h1",[e._v("二、vue项目中使用SourceMap找错误")]),t("p",[e._v(" 1.我们现在的vue项目默认线上的"),t("span",{staticClass:"f-color-red"},[e._v("productionSourceMap:true")]),e._v("（默认开启SourceMap，因为影响项目体积，所以一般都会改成false） ")]),t("p",[e._v(" 2.如果线上打包前设置"),t("span",{staticClass:"f-color-red"},[e._v("productionSourceMap:true")]),e._v("，只要断点在对应的位置，重新加载后，也会跳转到对应的.vue原始文件中去 ")])]),t("Col",{attrs:{span:"24"}},[t("h1",[e._v("三、vue项目中使用vscode进行断点调试")]),t("p",[e._v("1.运行项目，在vscode中使用-运行和调试功能")]),t("p",[e._v(' 2.点击增加一个launch.json文件，将内容改为如下： { // 使用 IntelliSense 了解相关属性。 // 悬停以查看现有属性的描述。 // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387 "version": "0.2.0", "configurations": [ { "type": "pwa-chrome", "request": "launch", "name": "vuejs: chrome", "url": "http://localhost:3000", "webRoot": "${workspaceFolder}/src", "breakOnLoad": true, "sourceMapPathOverrides": { "webpack:///src/*": "${webRoot}/*" } } ] } ')]),t("p",[e._v(" 3.在运行和调试功能中点击绿色按钮进行运行，会弹出新chrome窗口，再去代码对应的函数中写入debugger，该方法触发后就会自动跳转到对应的debugger中，方便调试 ")])])],1)},o=[],n=r(9203),a=function(e,t,r,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let p=class extends n.w3{};p=a([(0,n.wA)({name:"SourceMapCom",components:{}})],p);var c=p,u=c,i=r(3736),l=(0,i.Z)(u,s,o,!1,null,"e1856054",null),m=l.exports},7764:function(e,t,r){e.exports=r.p+"img/SourceMap.9173c73c.png"},9479:function(e,t,r){e.exports=r.p+"img/pretty_print.793b0ff4.png"}}]);