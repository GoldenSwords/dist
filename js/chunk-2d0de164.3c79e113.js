(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de164"],{"83c6":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("canvas",{ref:"canvas",staticStyle:{display:"block",width:"100%",height:"100%"}})},s=[],i=t("5a89"),r=t("4721"),c={name:"ThreeEarth",data:function(){return{canvas:null,scene:null,light:null,camera:null,width:null,height:null,earthMesh:null,cloudsMesh:null,controls:null,renderer:null,cube:null,diversions:[[[1,1,3],[1,2,3],[2,4,3]],[[2,2,3],[3,3,3],[5,1,3]]],material:null}},mounted:function(){this.canvas=this.$refs.canvas,this.demoB()},methods:{webglAvailable:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(n){return!1}},demoA:function(){},demoB:function(){var e=this.canvas.clientWidth,n=this.canvas.clientHeight,t=.1,a=2e4;this.renderer=new i["K"]({antialias:!0,canvas:this.canvas,context:this.canvas.getContext("webgl2")}),this.renderer.setSize(e,n),this.scene=new i["A"],this.camera=new i["x"](e/-2,e/2,n/2,n/-2,t,a),this.scene.add(this.camera),this.camera.position.set(0,-500,200),this.camera.lookAt(this.scene.position);var s=new i["F"]("black");s.position.set(-1e3,0,40),this.scene.add(s);var c=new i["l"],o=new i["b"](100,100,100),l=new i["t"]({color:"green",opacity:.5,transparent:!0}),h=new i["s"](o,l);c.add(h),o=new i["i"](o,1),l=new i["p"]({color:"orange"}),h=new i["q"](o,l),c.add(h),c.position.set(-10,10,0),c.rotation.z=Math.PI/180*45,this.scene.add(c),this.controls=new r["a"](this.camera,this.renderer.domElement),this.renderer.render(this.scene,this.camera),this.animate()},animate:function(){this.controls.update(),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.animate)}},beforeDestroy:function(){}},o=c,l=t("2877"),h=Object(l["a"])(o,a,s,!1,null,"33faacb8",null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0de164.3c79e113.js.map