(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22497a"],{e191:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("canvas",{ref:"container",staticStyle:{width:"100%",height:"100%"},style:{}})},a=[],r=(t("a9e3"),t("5a89")),s={name:"threeShadow",props:{h:Number},data:function(){return{render:null,camera:null,scene:null,player:!0,cube:null,cameraOpt:{angle:70,min:.1,max:1e3}}},mounted:function(){console.log(1),this.renderAll()},methods:{renderAll:function(){this.renderInit(),this.renderCube(),this.animation()},renderInit:function(){var e=this.$refs.container.clientWidth,n=this.$refs.container.clientHeight;this.render=new r["Db"]({canvas:this.$refs.container}),this.render.shadowMap.enabled=!0,this.render.setSize(e,n),this.camera=new r["bb"](this.cameraOpt.angle,e/n,this.cameraOpt.min,this.cameraOpt.max),this.camera.position.set(0,-80,80),this.camera.lookAt(0,0,0),this.scene=new r["mb"];var t=new r["a"](789516);this.scene.add(t);var i=new r["sb"](16777215);i.position.set(0,0,80),i.castShadow=!0,this.scene.add(i)},renderCube:function(){var e=new r["e"](20,20,20),n=new r["S"]({color:16776960});this.cube=new r["P"](e,n),this.cube.position.z=40,this.cube.castShadow=!0,this.scene.add(this.cube);var t=new r["e"](120,120,10),i=new r["S"]({color:16711680}),a=new r["P"](t,i);a.receiveShadow=!0,this.scene.add(a)},animation:function(){var e=this;this.cube&&(this.cube.rotation.x+=.01,this.cube.rotation.y+=.01),this.render.render(this.scene,this.camera),requestAnimationFrame((function(){e.player&&e.animation()}))}}},c=s,o=t("2877"),h=Object(o["a"])(c,i,a,!1,null,"14d55144",null);n["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d22497a.8cf01d32.js.map