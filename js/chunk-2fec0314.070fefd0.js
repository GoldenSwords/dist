(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fec0314","chunk-bfc4739a","chunk-2d0c209c"],{2753:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{width:"100%",height:"100%"}},[n("el-main",{staticStyle:{width:"100%",height:"100%"}},[n("el-button",{on:{click:t.add}},[t._v("新增")]),n("el-button",[t._v("清除日期过滤器")]),n("el-button",[t._v("清除所有过滤器")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"序号",prop:"id"}}),n("el-table-column",{attrs:{label:"配置项名称",prop:"name"}}),n("el-table-column",{attrs:{label:"配置项映射",prop:"key"}}),n("el-table-column",{attrs:{label:"状态",prop:"status"}}),n("el-table-column",{attrs:{label:"更新时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.dateFormat("yyyy-MM-dd hh:mm:ss",e.row.updatetime)))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])},[n("template",{slot:"header"},[n("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],2)],1),n("el-dialog",{attrs:{visible:t.addModal,width:"50%"},on:{"update:visible":function(e){t.addModal=e}}},[n("template",{slot:"title"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{collapse:!0,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[t._v(t._s("add"===t.operation?"新增":"编辑"))]),t._l(t.rootSelectData,(function(e,a){return[n("el-menu-item",{key:a,attrs:{index:""+a}},[t._v(t._s(e.name))])]}))],2)],1)],1),n("el-row",{attrs:{slot:"title"},slot:"title"},[n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{placeholder:"参数键值",size:"mini"},model:{value:t.option.key,callback:function(e){t.$set(t.option,"key",e)},expression:"option.key"}})],1),n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{placeholder:"参数名称",size:"mini"},model:{value:t.option.name,callback:function(e){t.$set(t.option,"name",e)},expression:"option.name"}})],1)],1),t._l(t.selectData,(function(e){return[n("l-view",{key:e._uuid?e._uuid:e.id,attrs:{item:e},on:{delele:t.delConfig,callback:t.callback}})]})),n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button-group",["add"===t.operation?n("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("提交")]):t._e(),"add"!==t.operation?n("el-button",{attrs:{type:"success"},on:{click:t.handleUpdate}},[t._v("修改")]):t._e(),n("el-button",{on:{click:t.clearForm}},[t._v("取消")])],1)],1)],2)],1)],1)},o=[],i=(n("99af"),n("c740"),n("a434"),n("b0c0"),n("ddd8")),l=n("4934"),s=n("dd17"),c={name:"CompoBaseConfig",components:{LView:s["default"]},props:{},data:function(){return{dateFormat:null,rootSelectData:[],selectData:[],selectDataCatch:[],activeIndex:0,addModal:!1,dialogVisible:!1,loading:!1,tableData:[],search:"",activeRow:{},activeData:[],maxTempId:0,option:{name:"配置项",key:"Option"},resultOptions:{},result:{},operation:"add",columnsConfig:{column:"",name:""}}},computed:{},created:function(){},beforeMount:function(){var t=this;this.dateFormat=i["dateFormat"],Object(l["BaseTypeList"])().then((function(e){t.rootSelectData=e.data.msg}))},mounted:function(){this.listTable()},methods:{add:function(){this.clearForm(),this.addModal=!0,this.operation="add"},closeDialog:function(){this.addModal=!1,this.clearForm()},listTable:function(){var t=this;Object(l["getComponentBaseConfigTemplateList"])().then((function(e){t.loading=!1,t.tableData=e.data.msg}))},save:function(){var t=this;this.option.child=this.selectData,Object(l["AddComponentConfigTemplate"])(JSON.stringify(this.option)).then((function(e){e.data.status?(t.listTable(),t.closeDialog()):t.$message({message:e.data.msg})}))},clearForm:function(){this.selectData.splice(0,this.selectData.length),this.option.key="",this.option.name="",this.addModal=!1},callback:function(t){for(var e=0;e<this.selectData.length;e++)this.selectData[e]._uuid===t._uuid&&(this.selectData[e].model=t.model,this.selectData[e].name=t.name,this.selectData[e].key=t.key,this.selectData[e].disabled=t.disabled)},print:function(){console.log(JSON.stringify(this.selectData))},delSelect:function(t){var e=this.selectData.findIndex((function(e){return e.id===t}));-1!==e&&this.selectData.splice(e,1)},handleSelect:function(t){var e=JSON.parse(JSON.stringify(this.rootSelectData[t]));delete e.id,e._uuid=Object(i["generateUUID"])(),e.disabled=!!e.disabled,this.selectData.push(e)},handleEdit:function(t,e){var n=this;Object(l["getComponentConfigTemplateDetail"])(e.id).then((function(t){n.option.key=t.data.msg.key,n.option.id=e.id,n.option.name=t.data.msg.name,n.selectData=[].concat(t.data.msg.child),n.addModal=!0,n.operation="edit"}))},handleUpdate:function(){var t=this;this.option.child=this.selectData,Object(l["updateComponentConfigTemplate"])(JSON.stringify(this.option)).then((function(e){e.data.status?(t.listTable(),t.closeDialog()):t.$message({message:e.data.msg})}))},handleDelete:function(t,e){var n=this;Object(l["delComponentConfigTemplate"])(JSON.stringify(e)).then((function(t){t.data.status?(n.listTable(),n.closeDialog()):n.$message({message:t.data.msg})}))},delConfig:function(t){var e=this;void 0!==t.id?Object(l["DelConfigTemplateInst"])(JSON.stringify(t)).then((function(n){e.selectData.splice(e.selectData.findIndex((function(e){return t.id===e.id})),1),n.data.status||e.$message({message:n.data.msg})})):this.selectData.splice(this.selectData.findIndex((function(e){return t._uuid===e._uuid})),1)},handleClose:function(){}}},r=c,d=n("2877"),u=Object(d["a"])(r,a,o,!1,null,"a7d61f4a",null);e["default"]=u.exports},4934:function(t,e,n){"use strict";n.r(e),n.d(e,"getComponentBaseConfigTemplateList",(function(){return l})),n.d(e,"BaseCompoList",(function(){return s})),n.d(e,"BaseCompoRelations",(function(){return c})),n.d(e,"BaseType",(function(){return r})),n.d(e,"findBaseCompCachcade",(function(){return d})),n.d(e,"componentsList",(function(){return u})),n.d(e,"getBaseCompoDetail",(function(){return p})),n.d(e,"componentsTemplateList",(function(){return m})),n.d(e,"componentsTemplateDetail",(function(){return f})),n.d(e,"BaseTypeList",(function(){return g})),n.d(e,"getComponentConfigTemplateDetail",(function(){return h})),n.d(e,"delComponentConfigTemplate",(function(){return b})),n.d(e,"updateComponentConfigTemplate",(function(){return v})),n.d(e,"AddComponentConfigTemplate",(function(){return y})),n.d(e,"DelConfigTemplateInst",(function(){return k})),n.d(e,"saveCompoTemplate",(function(){return C})),n.d(e,"getCompoTempList",(function(){return D})),n.d(e,"getPanelTemplateList",(function(){return O})),n.d(e,"PluginsDataList",(function(){return T}));var a=n("245a"),o=n("bc3a"),i=n.n(o),l=function(t){return i.a.get("/getComponentBaseConfigTemplateList",{data:t})},s=function(t){return i.a.get("/BaseCompoList",{data:t})},c=function(t){return i.a.get("/BaseCompoRelations",{data:t})},r=function(t){return i.a.get("/BaseType",{data:t})},d=function(t){return i.a.get("/findBaseCompCachcade",{data:t})},u=function(t){return i.a.get("/componentsList",{data:t})},p=function(t){return i.a.get("/getBaseCompoDetail",{data:t})},m=function(t){return i.a.get("/componentsTemplateList",{data:t})},f=function(t){return i.a.get("/componentsTemplateDetail",{data:t})},g=function(t){return i.a.get("/BaseTypeList",{data:t})},h=function(t){return i.a.get("/getComponentConfigTemplateDetail",{data:t})},b=function(t){return i.a.get("/delComponentConfigTemplate",{data:t})},v=function(t){return i.a.get("/updateComponentConfigTemplate",{data:t})},y=function(t){return i.a.get("/AddComponentConfigTemplate",{data:t})},k=function(t){return i.a.get("/DelConfigTemplateInst",{data:t})},C=function(t){return i.a.get("/saveCompoTemplate",{data:t})},D=function(t){return i.a.get("/getCompoTempList",{data:t})},O=function(t){return i.a.get("/getPanelTemplateList",{data:t})},T=function(t){return i.a.get("/PluginsDataList",{data:t})};Object(a["default"])({mock:!0})},c168:function(t,e,n){var a={"./LColor.vue":["9d9a","chunk-2d0f08c9"],"./LInput.vue":["18db","chunk-2d0ac5db"],"./LNumber.vue":["9fee","chunk-2d0f15a3"],"./LTextarea.vue":["167c","chunk-2d0ab8e7"],"./LView.vue":["dd17"]};function o(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id="c168",t.exports=o},dd17:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{padding:"5px 0"}},[t.use?[n("el-col",{attrs:{span:12}},[n("el-input",{attrs:{disabled:t.use,placeholder:"名称",size:"mini"},on:{change:t.doUpdate},model:{value:t.config.name,callback:function(e){t.$set(t.config,"name",e)},expression:"config.name"}})],1),n("el-col",{attrs:{span:12}},[n(t.item.code,{tag:"component",attrs:{disabled:t.config.disabled,value:t.item.model},on:{callback:t.callback}})],1)]:[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:10}},[n(t.item.code,{tag:"component",attrs:{disabled:t.config.disabled,value:t.item.model},on:{callback:t.callback}})],1),n("el-col",{attrs:{span:5}},[n("el-input",{attrs:{placeholder:"键值",size:"mini"},on:{change:t.doUpdate},model:{value:t.config.key,callback:function(e){t.$set(t.config,"key",e)},expression:"config.key"}})],1),n("el-col",{attrs:{span:5}},[n("el-input",{attrs:{placeholder:"名称",size:"mini"},on:{change:t.doUpdate},model:{value:t.config.name,callback:function(e){t.$set(t.config,"name",e)},expression:"config.name"}})],1),n("el-col",{attrs:{span:4}},[n("el-button-group",[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-lock"},on:{click:t.doDisable}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:t.doDelete}})],1)],1)]],2)},o=[],i=(n("a4d3"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("2fa7"));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=function(t){var e={};return t.forEach((function(t){e[t]=function(){return n("c168")("./"+t+".vue")}})),e}(["LInput","LNumber","LTextarea","LColor"]),r={name:"LView",props:{item:Object,use:Boolean},data:function(){return{config:{id:1,name:"数字",key:"method",component:"views/compo/base/LInput",model:1,type:"Number",code:"LInput",compId:1}}},beforeMount:function(){this.config=JSON.parse(JSON.stringify(this.item))},components:s({},c),methods:{callback:function(t){this.config.model=t,this.doUpdate()},doUpdate:function(){this.config.name&&this.config.name.length>0&&this.config.key&&this.config.key.length>0&&this.$emit("callback",{name:this.config.name,key:this.config.key,model:this.config.model,disabled:this.config.disabled,_uuid:this.config._uuid})},doDisable:function(){this.config.disabled=!this.config.disabled},doDelete:function(){this.$emit("delele",this.item)}}},d=r,u=n("2877"),p=Object(u["a"])(d,a,o,!1,null,"94df3498",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2fec0314.070fefd0.js.map