(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a057078"],{"01ae":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-button",{on:{click:e.send}},[e._v("send")]),t("iframe",{ref:"iframe",attrs:{src:"http://localhost:22122/iframe.html"}})],1)},s=[],r=(t("c975"),{name:"iframe",beforeMount:function(){window.addEventListener("message",(function(e){console.log("get message from iframe [",e.data,"]")}))},mounted:function(){},methods:{send:function(){var e=this.$refs.iframe.src.substring(this.$refs.iframe.src.indexOf("//")+2,this.$refs.iframe.src.length),n=-1===e.indexOf("/")?e.length:e.indexOf("/");this.$refs.iframe.contentWindow.postMessage("send to iframe","http://"+e.substring(0,n))}}}),f=r,a=t("2877"),o=Object(a["a"])(f,i,s,!1,null,"dab2f202",null);n["default"]=o.exports},c975:function(e,n,t){"use strict";var i=t("23e7"),s=t("4d64").indexOf,r=t("b301"),f=[].indexOf,a=!!f&&1/[1].indexOf(1,-0)<0,o=r("indexOf");i({target:"Array",proto:!0,forced:a||o},{indexOf:function(e){return a?f.apply(this,arguments)||0:s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0a057078.777b7b98.js.map