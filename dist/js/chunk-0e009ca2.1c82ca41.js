(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e009ca2"],{"586d":function(t,n,a){"use strict";a("a616")},a5e4:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",t._l(t.list,(function(n,s){return a("div",{key:s,staticClass:"wyl_famousItem"},[a("div",{staticClass:"wyl_famousItem_box"},[a("div",{staticClass:"wyl_famousItem_box_left"},[a("img",{attrs:{src:n.avatar,alt:""}})]),a("div",{staticClass:"wyl_famousItem_box_right"},[a("p",[t._v(t._s(n.teacher_name))]),a("div",{staticClass:"van-ellipsis"},[t._v(t._s(n.introduction))])]),a("button",{staticClass:"zmb_guanzhu_btn",on:{click:function(a){return t.attentionNO(n.teacher_id)}}},[t._v(" 已关注 ")])])])})),0)},i=[],c={data:function(){return{list:[]}},mounted:function(){this.collect()},methods:{attentionNO:function(t){var n=this;this.$APP.teaCollect(t).then((function(t){console.log(t),n.collect()}))},collect:function(){var t=this;this.$APP.collects().then((function(n){console.log(n.data.data.list),t.list=n.data.data.list}))}}},e=c,l=(a("586d"),a("2c07")),o=Object(l["a"])(e,s,i,!1,null,null,null);n["default"]=o.exports},a616:function(t,n,a){}}]);
//# sourceMappingURL=chunk-0e009ca2.1c82ca41.js.map