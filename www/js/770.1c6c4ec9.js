"use strict";(self["webpackChunkschool_manage_ts"]=self["webpackChunkschool_manage_ts"]||[]).push([[770],{9770:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var a=function(){var e=this,r=e._self._c;e._self._setupProxy;return r("Row",{staticClass:"pd10"},[r("Col",{attrs:{span:"24"}},[r("div",[r("h1",[e._v("1.下面是文件类型的家族图")]),r("img",{attrs:{src:t(2938),alt:""}}),r("hr")]),r("div",[r("h1",[e._v("2.ArrayBuffer")]),r("p",[e._v(" 1.ArrayBuffer对象是最底层的一个能够存储固定长度二进制数据的二进制数据缓冲区 ")]),r("p",[e._v(" 2.ArrayBuffer对象是一个字节数组，它的元素就是字节（这里要知道一个字节是8个位，也就是8个bit），通常在其它语言中称为byte array ")]),r("p",[e._v(" 3.我们是不能直接操作ArrayBuffer对象的内容的，而是要通过 类型数组对象(TypeArray) 或 DateView对象来操作，它们会将ArrayBuffer的内容表示为特定的格式，并通过这些格式来读写内容 ")]),r("hr")]),r("div",[r("h1",[e._v("3.TypeArray(类型数组)")]),r("p",[e._v("1.TypeArray能够把ArrayBuffer当成数组来操作")]),r("p",[e._v(" 2.TypeArray它本身是不可以被实例化的，甚至无法访问，可以把他理解为接口，它有很多类型：Int8Array，Uint8Array，Int16Array，Uint16Array ")]),r("img",{attrs:{src:t(6767),alt:""}}),r("p",[e._v(" 这里解释一下有符号和无符号的区别： "),r("br"),e._v(" 因为TypeArray操作的是二进制数据，所以Int8Array或Uint8Array表示的是8位的二进制数，8位也就是最大只能是占8个位也就是一个字节，但是由于二进制的数据只能用0或1来表示，每一个0或1都占一个位，所以在Uint8Array中最大的8位的二进制数就是11111111,转化成十进制数就是255，所以无符号时Uint8Array最大能表示的十进制数是255，00000000表示的是最小的十进制数0。 "),r("br"),e._v(" 但是要想表示负数，在Int8Array中，所以就要将一个字节里面8个位中的最左边的位用来表示-，1表示-号，0表示+，所以后面7位所能表示最大的8位的二进制数为01111111，也就是127，10000000表示的是最小的十进制数-128，11111111表示十进制数是0，01111111->11111111->10000000表示的十进制数是127 -> 0 -> -128（Int16和Uint16也是这个道理）。 ")]),r("p",[e._v("3.也就是说TypeArray能把ArrayBuffer化作不同类型的数组来进行读写")]),r("p",[e._v(" 4.int8Array/uint8Array/int16Array/uint16Array.buffer === arrayBuffer，也就是说.buffer可以获取到原来的ArrayBuffer ")]),r("hr")]),r("div",[r("h1",[e._v("4.DataView")]),r("p",[e._v("1.DataView是一个可以把ArrayBuffer作为任意类型的TypeArray进行读写")]),r("img",{attrs:{src:t(1568),alt:""}}),r("p",[e._v(" 2.dataView.setInt8(第几个字节(说的是索引),设置的数(这里说的是十进制的数))，说的意思是将该索引的字节存储一个十进制的数字 ")]),r("p",[e._v(" 3.dataView.getInt8(第几个字节(说的是索引))，返回的是该索引字节所存储的十进制数字 ")]),r("p",[e._v(" 4.dataView.setInt16(第几个双字节(说的是索引),设置的数(这里说的是十进制的数))，说的意思是将该索引的双字节存储一个十进制的数字 ")]),r("p",[e._v(" 5.dataView.getInt16(第几个双字节(说的是索引))，返回的是该索引字节所存储的十进制数字 ")]),r("p",[e._v(" 6.dataView.buffer === araybuffer，也就是说.buffer可以获取到原来的ArrayBuffer ")]),r("p",[e._v("7.setInt8() 、 getInt8()...理解图如下：")]),r("img",{attrs:{src:t(1016),alt:""}}),r("hr")]),r("div",[r("h1",[e._v("5.Blob")]),r("p",[e._v(" 1.Blob表示二进制类型的大对象（input框上传文件的File对象就是基于Blob实现的,也就是File是Blob的子类） ")]),r("p",[e._v(" 2.Blob对象可以存储二进制数据，可以把他看成是一个存储二进制文件的容器 ")]),r("p",[e._v(" 3.生成Blob对象有两种方法，1.通过Blob构造函数；2.通过Blob的slice方法从一个Blob对象中切割出一个新的Blob对象 ")]),r("p",[e._v(" 4.Blob构造函数可以接收两个参数，new Blob(array[,options])，array可以是由ArrayBuffer、DataView、TypeArray、Blob、File、DomString等对象构成的数组 ")]),r("Button",{attrs:{type:"primary"},on:{click:e.handleReadBlob}},[e._v("将blob转化为其它格式数据")]),r("hr")],1),r("div",[r("h1",[e._v("6.Object URL")]),r("p",[e._v(" 1.Object URL说的是浏览器的URL对象，我们可以通过这个对象的方法来生成一个url来表示Blob数据 ")]),r("p",[e._v(" 2.URL.createObjectURL(Blob/File)静态方法会创建一个DOMString,其中包含一个表示参数中给出的对象URL，这个URL和窗口中的document绑定，URL对象表示指定的Blob对象或File对象 ")]),r("p",[e._v(" 3.URL.revokeObjectURL(Object URL)静态方法用来释放一个之前已经存在的，通过调用createObjectURL创建的URL对象，也就是销毁Object Url，同时也会销毁Blob ")]),r("Button",{attrs:{type:"primary"},on:{click:e.downloadByObjectURL}},[e._v("点击通过Object URL下载json文件")]),r("hr")],1)])],1)},n=[],i=t(7327),o=(t(3767),t(8585),t(8696),t(9203)),l=function(e,r,t,a){var n,i=arguments.length,o=i<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,t):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,r,t,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(i<3?n(o):i>3?n(r,t,o):n(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o};let f=class extends o.w3{constructor(...e){super(...e),(0,i.Z)(this,"buffer",new ArrayBuffer(8)),(0,i.Z)(this,"buffer1",new ArrayBuffer(8)),(0,i.Z)(this,"int8Array1",new Int8Array(this.buffer1)),(0,i.Z)(this,"int16Array1",new Int16Array(this.buffer1)),(0,i.Z)(this,"buffer2",new ArrayBuffer(2)),(0,i.Z)(this,"dataView2",new DataView(this.buffer2)),(0,i.Z)(this,"data3",{name:"xiaopihong"}),(0,i.Z)(this,"str3",JSON.stringify(this.data3)),(0,i.Z)(this,"blob3",new Blob([this.str3],{type:"application/json"}))}readBlob(e,r){return new Promise((function(t){let a=new FileReader;switch(a.onloadend=function(e){t(e.target.result)},r){case"ArrayBuffer":a.readAsArrayBuffer(e);break;case"DataURL":a.readAsDataURL(e);break;case"Text":a.readAsText(e,"utf-8");break;default:break}}))}handleReadBlob(){this.readBlob(this.blob3,"ArrayBuffer").then((e=>{console.log(e)})),this.readBlob(this.blob3,"DataURL").then((e=>{console.log(e)})),this.readBlob(this.blob3,"Text").then((e=>{console.log(e)}))}downloadByObjectURL(){let e={name:"xiaopihong"},r=JSON.stringify(e),t=new Blob([r],{type:"application/json"}),a=document.createElement("a");a.download="user.json",a.rel="noopener";let n=URL.createObjectURL(t);a.href=n,a.dispatchEvent(new MouseEvent("click")),URL.revokeObjectURL(n)}};f=l([(0,o.wA)({name:"FileCom",components:{}})],f);var s=f,b=s,c=t(3736),p=(0,c.Z)(b,a,n,!1,null,"58e43e02",null),y=p.exports},2938:function(e,r,t){e.exports=t.p+"img/file.e7863191.png"},6767:function(e,r,t){e.exports=t.p+"img/file_2.f24a48f7.png"},1568:function(e,r,t){e.exports=t.p+"img/file_3.6802c26f.png"},1016:function(e,r,t){e.exports=t.p+"img/file_4.5129c2b1.png"}}]);