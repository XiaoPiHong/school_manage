"use strict";(self["webpackChunkschool_manage_ts"]=self["webpackChunkschool_manage_ts"]||[]).push([[784],{4784:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Row",[t("Col",{attrs:{span:"5"}},[t("p",[e._v(" 1.iview4.x下拉组件中绑定的值一定要是下拉数据中存在的值，否则清空后会变成undefined ")]),t("p",[e._v(" 2.要想用表单的resetFields方法清空表单"),t("span",{staticClass:"f-color-red"},[e._v("并重置")]),e._v("（包括：下拉、输入框等），必须给FormItem绑定prop属性,且必须对应其绑定的变量名称 ")]),t("p",[e._v(" 3.下拉的clearable属性可以使其清空，但是清空后默认是''，因为下拉中没有该选项，所有会为undefined ")]),t("p",[e._v(" 4.iview2.x中不会出现清空后undefined的情况，赋值为空或者清空后其绑定的值都是'' ")])]),t("Col",{attrs:{span:"1"}}),t("Col",{attrs:{span:"18"}},[t("Form",{ref:"formRef",attrs:{model:e.form,inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[t("FormItem",{attrs:{prop:"text"}},[t("Input",{attrs:{placeholder:"请输入内容"},model:{value:e.form.text,callback:function(t){e.$set(e.form,"text",t)},expression:"form.text"}})],1),t("FormItem",{attrs:{prop:"city"}},[t("Select",{attrs:{clearable:"",filterable:"",placeholder:"请选择城市"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},e._l(e.list,(function(r){return t("Option",{key:r.key,attrs:{value:r.value}},[e._v(e._s(r.key))])})),1)],1),t("br"),t("FormItem",[e._v(" "+e._s("输入框绑定的值为："+e.form.text)+" ")]),t("FormItem",[e._v(" "+e._s("下拉组件绑定的值为："+e.form.city)+" ")]),t("Button",{attrs:{type:"warning"},on:{click:e.resetForm}},[e._v("重置")])],1)],1)],1)},s=[],n=r(7327),l=r(9203),c=r(1505),a=function(e,t,r,o){var s,n=arguments.length,l=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(n<3?s(l):n>3?s(t,r,l):s(t,r))||l);return n>3&&l&&Object.defineProperty(t,r,l),l};let i=class extends l.w3{constructor(...e){super(...e),(0,n.Z)(this,"form",new c.Z.SelectComForm),(0,n.Z)(this,"list",[{key:"请选择城市",value:0},{key:"广州",value:1},{key:"佛山",value:2}])}resetForm(){this.$refs.formRef.resetFields()}};i=a([(0,l.wA)({name:"SelectCom",components:{}})],i);var u=i,m=u,f=r(3736),p=(0,f.Z)(m,o,s,!1,null,"62b895a3",null),v=p.exports},1505:function(e,t,r){var o,s=r(7327);(function(e){class t{constructor(){(0,s.Z)(this,"startTime",""),(0,s.Z)(this,"endTime","")}}e.ValidateForm=t;class r{constructor(){(0,s.Z)(this,"city",0),(0,s.Z)(this,"text","")}}e.SelectComForm=r;class o{constructor(){(0,s.Z)(this,"num",0)}}e.InputComForm=o;class n{constructor(){(0,s.Z)(this,"num",null)}}e.InputNumberForm=n})(o||(o={})),t["Z"]=o}}]);