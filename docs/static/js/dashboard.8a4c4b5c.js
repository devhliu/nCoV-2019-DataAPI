(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{7159:function(t,s,e){t.exports=e.p+"static/img/img.146655c9.jpg"},"7ed4":function(t,s,e){"use strict";var a=e("0261"),n=new a["default"];s["a"]=n},c51b:function(t,s,e){},e2ad:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:e("7159"),alt:""}}),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.userInfo.userName))]),a("div",[t._v(t._s(t.role))])])]),a("div",{staticClass:"user-info-list"},[t._v("\n                    上次登录时间：\n                    "),a("span",[t._v(t._s(t.userInfo.lastLoginTime))])]),a("div",{staticClass:"user-info-list"},[t._v("\n                    上次登录地点：\n                    "),a("span",[t._v("东莞")])])]),a("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("语言详情")])]),t._v("\n                Vue\n                "),a("el-progress",{attrs:{percentage:71.3,color:"#42b983"}}),t._v("\n                JavaScript\n                "),a("el-progress",{attrs:{percentage:24.1,color:"#f1e05a"}}),t._v("\n                CSS\n                "),a("el-progress",{attrs:{percentage:13.7}}),t._v("\n                HTML\n                "),a("el-progress",{attrs:{percentage:5.9,color:"#f56c6c"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-warning grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.sumInfo.confirmedCount))]),a("div",[t._v("确诊人数")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-success grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.sumInfo.curedCount))]),a("div",[t._v("治愈人数")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-error grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v(t._s(t.sumInfo.deadCount))]),a("div",[t._v("死亡人数")])])])])],1)],1),a("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("待办事项")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.todoList}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-checkbox",{model:{value:s.row.status,callback:function(e){t.$set(s.row,"status",e)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":s.row.status}},[t._v(t._s(s.row.title)+"\n                            ")])]}}])}),a("el-table-column",{attrs:{width:"60"}},[[a("i",{staticClass:"el-icon-edit"}),a("i",{staticClass:"el-icon-delete"})]],2)],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",options:t.options}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",options:t.options2}})],1)],1)],1)],1)},n=[],o=(e("6d57"),e("a311")),i=(e("7ed4"),e("425e")),r={name:"dashboard",data:function(){return{name:"",todoList:[],data:[],options:{type:"bar",title:{text:"各个省份的确诊人数统计"},xRorate:0,legend:{display:!1},labels:[],datasets:[]},options2:{type:"line",title:{text:"全国确诊人数统计"},labels:[],datasets:[]},userInfo:{},sumInfo:{}}},components:{Schart:o["a"]},computed:{role:function(){return"admin"===this.userInfo.userName?"超级管理员":"普通用户"}},created:function(){var t=this,s=localStorage.getItem("nCoV-token"),e=localStorage.getItem("nCoV-uid");i["a"].setTokenInHeaders(s),i["a"].fetchPost("/admin/getUserInfo",{id:e}).then((function(s){s.userInfo.lastLoginTime=new Date(s.userInfo.lastLoginTime).toLocaleTimeString(),t.userInfo=s.userInfo})),i["a"].fetchGet("/api").then((function(s){t.sumInfo=s.sumInfo;var e=[],a=[];s.provinceInfo.forEach((function(t){e.push(t.provinceShortName),a.push(t.confirmedCount)})),t.options.labels=e,t.options.datasets.push({data:a})})),i["a"].fetchGet("/api/sum").then((function(s){for(var e=[],a=[],n=0;n<10;n++){var o="".concat(new Date(s[n].addtime).getHours(),":").concat(new Date(s[n].addtime).getMinutes()<10?"0".concat(new Date(s[n].addtime).getMinutes()):new Date(s[n].addtime).getMinutes());e.push(o);var i=s[n].confirmedCount;a.push(i)}t.options2.labels=e.reverse(),t.options2.datasets.push({labels:"全国确诊人数",data:a.reverse()})}))},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(s,e){var a=new Date(t-864e5*(6-e));s.name="".concat(a.getFullYear(),"/").concat(a.getMonth()+1,"/").concat(a.getDate())}))}}},c=r,l=(e("ed05"),e("5511")),d=Object(l["a"])(c,a,n,!1,null,"b191974c",null);s["default"]=d.exports},ed05:function(t,s,e){"use strict";var a=e("c51b"),n=e.n(a);n.a}}]);