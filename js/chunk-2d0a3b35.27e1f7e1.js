(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3b35"],{"02fc":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"bar",staticStyle:{width:"100%",height:"100%"}})},n=[],s=(i("a434"),i("0d03"),i("b0c0"),{name:"bar",data:function(){return{time:0,speed:1e3,chart:null,chartData:[],option:{title:{text:"动态数据 + 时间坐标轴"},tooltip:{trigger:"axis",formatter:function(t){t=t[0];var e=new Date(t.name);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" : "+t.value[1]},axisPointer:{animation:!1}},xAxis:{type:"time",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"模拟数据",type:"line",showSymbol:!1,hoverAnimation:!1,data:[]}]}}},mounted:function(){this.time=(new Date).getTime(),this.chart=this.$echarts.init(this.$refs.bar),this.chart.setOption(this.option),this.initChart()},methods:{initChart:function(){(new Date).getTime()-this.time>this.speed&&(this.time=(new Date).getTime(),this.chartData.push(this.randomData()),this.chart.setOption({series:[{data:this.chartData,type:"line",smooth:!0}]})),window.requestAnimationFrame(this.initChart)},randomData:function(){var t=1e3*Math.random();return t=t+21*Math.random()-10,{name:(new Date).getMilliseconds(),value:[(new Date).getTime(),Math.round(t)]}}},beforeDestroy:function(){window.cancelAnimationFrame(this.initChart),this.chart.dispose(),this.chartData.splice(0,this.chartData.length)}}),r=s,h=i("2877"),o=Object(h["a"])(r,a,n,!1,null,"090ce22c",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0a3b35.27e1f7e1.js.map