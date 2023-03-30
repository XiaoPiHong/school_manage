"use strict";(self["webpackChunkschool_manage_ts"]=self["webpackChunkschool_manage_ts"]||[]).push([[696],{6696:function(t,e,o){o.r(e),o.d(e,{default:function(){return H}});var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.reRender?e("div",{staticClass:"container",style:{height:t.containerHeight+"px"}},[e("Row",{attrs:{"class-name":"row-box"}},[e("Col",{attrs:{xs:24,md:12,xl:12,"class-name":"col-box"}},[e("LoginLogChart")],1),e("Col",{attrs:{xs:24,md:12,xl:12,"class-name":"col-box"}},[e("Chart")],1)],1),e("Row",{attrs:{"class-name":"row-box"}},[e("Col",{attrs:{xs:24,md:12,xl:12,"class-name":"col-box"}},[e("CategoryProportion")],1),e("Col",{attrs:{xs:24,md:12,xl:12,"class-name":"col-box"}},[e("Chart")],1)],1)],1):t._e()},n=[],a=o(7327),i=o(9203),s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Card",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})])},l=[],c=o(9081),d=o(5671),h=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i};let u=class extends i.w3{constructor(...t){super(...t),(0,a.Z)(this,"id","echartsBarLine"+Math.floor(9999*Math.random())),(0,a.Z)(this,"title","登录次数"),(0,a.Z)(this,"yName","单位：次"),(0,a.Z)(this,"xData",["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]),(0,a.Z)(this,"yData",[0,0,0,0,0,0,0,0,0,0,0,0]),(0,a.Z)(this,"color",[["#426AFE","#733CFD"],["#25E7E1","#306BCE"]])}renderCharts(){let t={fn:"complete",id:this.id,data:[this.xData,this.yData],name:this.title,color:this.color};this[t.fn](t.id,t.data,t.name,t.color)}complete(t="",e=[],o="",r=[]){const n=document.getElementById(t);if(n){let t=c.S1(n),a={tooltip:{},legend:{show:!0,selectedMode:!0,textStyle:{color:"#000"},icon:"rect",itemWidth:12,itemHeight:8},grid:{top:"20%",left:"4%",right:"0%",bottom:"8%",containLabel:!0},xAxis:{name:"",data:e[0],axisLine:{lineStyle:{color:"#122465"}},axisLabel:{color:"#000"},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"#122465",width:1,type:"solid"}}},yAxis:{name:this.yName,nameTextStyle:{color:"#000",fontSize:12},axisLine:{lineStyle:{color:"#122465"}},axisLabel:{show:!0,color:"#000"},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{color:"#122465",width:1,type:"solid"}}},series:[{name:o,type:"bar",barWidth:18,data:e[1],itemStyle:{label:{show:!1,position:"top",textStyle:{color:"#000",fontSize:12}},borderRadius:[8,8,0,0],color(t){let e=r[t.dataIndex%2];return new c.Q.o(0,0,0,1,[{offset:0,color:e[0]},{offset:1,color:e[1]}],!1)}}},{name:o,type:"line",smooth:!0,barWidth:18,data:e[1],stack:!0,symbolSize:6,symbol:"circle",itemStyle:{label:{show:!1,position:"top",textStyle:{color:"#000",fontSize:12}},borderRadius:[8,8,0,0],color:"#196AFB"},areaStyle:{color:new c.Q.o(0,0,0,1,[{offset:0,color:"#196AFB"},{offset:.8,color:"#0E2661"}])}}]};t.setOption(a),window.addEventListener("resize",(function(e){t.resize()}))}}mounted(){(0,d.z)({us_name:JSON.parse(this.$cookie.get("manage")).username}).then((t=>{t.data.forEach((t=>{const e=new Date(t.time).getMonth();this.yData[e]+=1})),this.renderCharts()})).catch((t=>{console.log(t)}))}};u=h([(0,i.wA)({name:"LoginLogChart",components:{}})],u);var p=u,m=p,f=o(3736),y=(0,f.Z)(m,s,l,!1,null,"56c3c0dd",null),g=y.exports,x=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Card",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})])},C=[],b=(o(7658),o(7621)),w=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i};let R=class extends i.w3{constructor(...t){super(...t),(0,a.Z)(this,"transformTree",((t,e,o)=>{const{idKey:r,parentIdKey:n,formatNode:a=(t=>t)}=o,i=(t,e)=>{const o=[];for(let s=0,l=e.length;s<l;s++){const l=e[s],c=l[n],d=l[r];if(c===t){const t={id:d,data:l,children:i(d,e)};o.push(a(t))}}return o};return i(t,e)})),(0,a.Z)(this,"id","echartsPie"+Math.floor(9999*Math.random())),(0,a.Z)(this,"x",[]),(0,a.Z)(this,"color",[])}created(){(0,b.lj)().then((t=>{const{data:e}=t;let o=this.transformTree(0,e,{parentIdKey:"menu_parent_id",idKey:"menu_id",formatNode({id:t,children:e,data:o}){return{elementId:o.menu_el_id,resourceName:o.menu_el_name,childNodes:e}}});for(let r=0;r<o.length;r++){const t=o[r];let e=0;for(let o=0;o<t.childNodes.length;o++){const r=t.childNodes[o];e+=r.childNodes.length}this.x.push({value:e,name:t.resourceName}),this.color.push(this.getColor())}this.renderCharts()})).catch((t=>{console.log(t)}))}renderCharts(){let t={fn:"echartsAngle",id:this.id,data:this.x,name:"知识分类占比",color:this.color};this[t.fn](t.id,t.data,t.name,t.color)}echartsAngle(t="",e=[],o="",r=[]){const n=document.getElementById(t);if(n){let t=c.S1(n),a={legend:{show:!0,selectedMode:!0,textStyle:{color:"#000"},icon:"rect",itemWidth:12,itemHeight:8},tooltip:{trigger:"item",formatter:"{b}：{d}%",show:!0},series:[{name:o,type:"pie",radius:["40%","80%"],center:["50%","50%"],avoidLabelOverlap:!1,clickable:!1,right:"10%",top:"15%",emphasis:{scale:!0},itemStyle:{lineStyle:{color:"#333"},label:{show:!0,formatter:"{b}\n{d}%",fontSize:12,color:"#000",textAlign:"center",padding:[2,6],borderRadius:2},length:20,length2:70,color:function(t){var e=r;return e[t.dataIndex]}},data:e,roseType:"angle",clockwise:!0}]};t.setOption(a),window.addEventListener("resize",(function(e){t.resize()}))}}getColor(){let t="#",e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];for(let o=0;o<6;o++){let o=parseInt((16*Math.random()).toString());t+=e[o]}return t}};R=w([(0,i.wA)({name:"CategoryProportion",components:{}})],R);var D=R,O=D,S=(0,f.Z)(O,x,C,!1,null,"22327d34",null),v=S.exports,A=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Card",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.id}})])},_=[],L=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i};let Z=class extends i.w3{constructor(...t){super(...t),(0,a.Z)(this,"id","echartsBarLine"+Math.floor(9999*Math.random())),(0,a.Z)(this,"data",[{ReportDate:"2021-03-27",OrderCount:2438,AmountCount:27685.517},{ReportDate:"2021-03-28",OrderCount:1602,AmountCount:20048.743},{ReportDate:"2021-03-29",OrderCount:1533,AmountCount:21409.663},{ReportDate:"2021-03-30",OrderCount:1696,AmountCount:25014.709},{ReportDate:"2021-03-31",OrderCount:1899,AmountCount:29553.744},{ReportDate:"2021-04-01",OrderCount:1865,AmountCount:28838.309},{ReportDate:"2021-04-02",OrderCount:1898,AmountCount:29158.179},{ReportDate:"2021-04-03",OrderCount:1800,AmountCount:27034.394},{ReportDate:"2021-04-04",OrderCount:2871,AmountCount:38149.408},{ReportDate:"2021-04-05",OrderCount:2525,AmountCount:40736.609},{ReportDate:"2021-04-06",OrderCount:2422,AmountCount:39135.864},{ReportDate:"2021-04-07",OrderCount:2550,AmountCount:42628.024},{ReportDate:"2021-04-08",OrderCount:2604,AmountCount:42467.154},{ReportDate:"2021-04-09",OrderCount:2516,AmountCount:42940.268},{ReportDate:"2021-04-10",OrderCount:2600,AmountCount:41830.045}]),(0,a.Z)(this,"option",{color:["rgb(85,193,195)","#675bba"],tooltip:{trigger:"axis"},title:{show:!0,text:this.data[0].ReportDate.split("-").join("/")+" - "+this.data[this.data.length-1].ReportDate.split("-").join("/"),y:"bottom",x:"center"},calculable:!0,legend:{data:["订单数","销售金额（USD）"]},xAxis:[{type:"category",data:this.data.map((t=>t.ReportDate.slice(t.ReportDate.indexOf("-")+1)))}],yAxis:[],series:[]})}chart(){const t=document.getElementById(this.id),e=t?c.S1(t,"macarons"):null;e&&(e.setOption(this.option),window.addEventListener("resize",(function(t){e.resize()})))}setData(){let t=["订单数","销售金额（USD）"].map((t=>({type:"value",name:t,axisLabel:{formatter:"{value}"}}))),e=[{name:["订单数","销售金额（USD）"][0],type:"bar",data:this.data.map((t=>t.OrderCount))},{name:["订单数","销售金额（USD）"][1],type:"line",yAxisIndex:1,data:this.data.map((t=>t.AmountCount))}];this.option.yAxis=t,this.option.series=e}mounted(){this.setData(),this.chart()}};Z=L([(0,i.wA)({name:"Chart",components:{}})],Z);var P=Z,j=P,z=(0,f.Z)(j,A,_,!1,null,"37ebccb1",null),E=z.exports,k=o(3822),I=function(t,e,o,r){var n,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(i=(a<3?n(i):a>3?n(e,o,i):n(e,o))||i);return a>3&&i&&Object.defineProperty(e,o,i),i};let M=class extends i.w3{constructor(...t){super(...t),(0,a.Z)(this,"reRender",!1)}get containerHeight(){return this.$ui.winHeight-60-10-40}activated(){this.reRender=!1,this.$nextTick((()=>{this.reRender=!0}))}};M=I([(0,i.wA)({name:"Index",components:{LoginLogChart:g,CategoryProportion:v,Chart:E},computed:{...(0,k.rn)({$ui:t=>t.systemModule.ui})}})],M);var N=M,B=N,T=(0,f.Z)(B,r,n,!1,null,"c8267238",null),H=T.exports},5671:function(t,e,o){o.d(e,{z:function(){return n}});var r=o(430);function n(t){return(0,r.Z)({url:"/api/private/chart/loginLog",method:"get",params:t})}}}]);