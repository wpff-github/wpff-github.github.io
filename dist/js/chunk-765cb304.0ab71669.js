(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-765cb304"],{2767:function(t,a,s){"use strict";s("ea57")},"5c3b":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("van-row",[s("van-col",{attrs:{span:"8"}},[s("van-dropdown-menu",[s("van-dropdown-item",{ref:"item",attrs:{title:"分类"}},[s("div",{staticClass:"lzh-contbox"},[s("div",{staticClass:"lzh-contai"},[s("p",[t._v("年级")]),s("div",{staticClass:"lzh-container"},[s("span",[t._v("初一")]),s("span",[t._v("初二")]),s("span",[t._v("初三")]),s("span",[t._v("高一")]),s("span",[t._v("高二")])])])]),s("div",{staticClass:"lzh-contbox"},[s("div",{staticClass:"lzh-contai"},[s("p",[t._v("学科")]),s("div",{staticClass:"lzh-container"},[s("span",[t._v("语文")]),s("span",[t._v("数学")]),s("span",[t._v("英语")]),s("span",[t._v("物理")]),s("span",[t._v("化学")])])])]),s("div",{staticClass:"lzh-butbox"},[s("van-button",{staticStyle:{background:"#fff",color:"#000",border:"1px solid #d9d9d9"},attrs:{type:"danger"}},[t._v("重置")]),s("van-button",{staticStyle:{background:"#eb6100",color:"#fff"},attrs:{type:"danger"}},[t._v(" 确认 ")])],1)])],1)],1),s("van-col",{attrs:{span:"8"}},[s("van-dropdown-menu",[s("van-dropdown-item",{attrs:{title:"排序",options:t.option1},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1)],1),s("van-col",{attrs:{span:"8"}},[s("van-dropdown-menu",[s("van-dropdown-item",{ref:"item",attrs:{title:"筛选"}},[s("div",{staticClass:"lzh-contbox"},[s("div",{staticClass:"lzh-contai"},[s("div",{staticClass:"lzh-container"},[s("span",[t._v("全部")]),s("span",[t._v("大班课")]),s("span",[t._v("小班课")]),s("span",[t._v("公开课")]),s("span",[t._v("点播课")]),s("span",[t._v("面授课")]),s("span",[t._v("音频课")]),s("span",[t._v("系统课")]),s("span",[t._v("图文课")]),s("span",[t._v("会员课")])])])])])],1)],1)],1),s("div",{staticClass:"lzh-title-box"},t._l(t.list,(function(a,i){return s("div",{key:i,staticClass:"lzh-container"},[s("div",{staticClass:"lzh-teseke",on:{click:function(s){return t.courseitem(a)}}},[s("div",{staticStyle:{"margin-left":"0.4rem"}},[t._v(t._s(a.title))]),s("div",{staticStyle:{"margin-left":"0.4rem"}},[t._v("共8课时")]),s("div",{staticClass:"lzh-titlebox"},[s("div",{staticClass:"lzh-titleleft"},[s("van-image",{attrs:{round:"",width:"1.5rem",height:"1.5rem",src:a.cover_img}}),t._v("李青 ")],1),t._m(0,!0)]),t._m(1,!0)])])})),0),s("div",{staticStyle:{height:"3rem"}})],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lzh-titleright"},[s("img",{attrs:{src:"/baoming.png",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lzh-titlebox",staticStyle:{"border-bottom":"0"}},[s("div",{staticClass:"lzh-titleleft"},[s("div",[t._v("132人报名")])]),s("div",{staticClass:"lzh-titleright"},[s("div",{staticStyle:{color:"aquamarine"}},[t._v("免费")])])])}],e={data:function(){return{value1:0,option1:[{text:"综合排序",value:0},{text:"最新",value:1},{text:"最热",value:2},{text:"价格从低到高",value:3},{text:"价格从高到低",value:4}],list:[]}},mounted:function(){var t=this;this.$APP.course().then((function(a){console.log(a.data),t.list=a.data.data.list}))},methods:{courseitem:function(t){this.$router.push({path:"/courseitem",query:{item:t}})}}},l=e,o=(s("2767"),s("2c07")),c=Object(o["a"])(l,i,n,!1,null,null,null);a["default"]=c.exports},ea57:function(t,a,s){}}]);
//# sourceMappingURL=chunk-765cb304.0ab71669.js.map