webpackJsonp([4],{"2STg":function(t,a){},Z89D:function(t,a){},eANS:function(t,a,e){"use strict";var n=e("msXN"),i=e("U7lt"),s=e("t6GB"),o=e("cMGX"),r={name:"MvList",mixins:[n.a],props:{mvData:{type:Object,default:function(){return{code:0}}},keyWord:String},data:function(){return{}},components:{MusicNoData:s.a,MusicList:i.a,Pagination:o.a},methods:{},computed:{},filters:{playCnt:function(t){var a=parseInt(t);return a<1e4?a:(a/1e4).toFixed(1)+"万"}},created:function(){},mounted:function(){}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"mvs"},[e("music-list",{attrs:{dataList:t.mvData.mvList,pageType:"mvPlay",idPropName:"id"},scopedSlots:t._u([{key:"play_cnt",fn:function(a){return[e("p",{staticClass:"play_cnt"},[e("span",[e("span",[e("i",{staticClass:"iconfont icon-icon_play_"}),t._v("\n              "+t._s(t._f("playCnt")(a.item.mvPlayCnt))+"\n            ")])]),t._v(" "),e("span",[t._v(t._s(a.item.songTimeMinutes))])]),t._v(" "),e("div",{staticClass:"shadow"})]}},{key:"info",fn:function(a){return[e("p",{staticClass:"name"},[e("span",{attrs:{title:a.item.name},domProps:{innerHTML:t._s(a.item.name)},on:{click:function(e){return t.goPage("mvPlay",a.item.id)}}})]),t._v(" "),e("p",{staticClass:"artist"},[e("span",{attrs:{title:a.item.artist}},[t._v(t._s(a.item.artist))])])]}}])}),t._v(" "),e("music-no-data",{directives:[{name:"show",rawName:"v-show",value:200!=t.mvData.code&0!=t.mvData.code,expression:"mvData.code!=200 & mvData.code!=0"}],attrs:{keyWord:t.keyWord}})],1),t._v(" "),e("pagination",{attrs:{code:t.mvData.code,currentChange:t.mvData.getData,pageSize:t.mvData.pageSize,total:t.mvData.total}})],1)},staticRenderFns:[]};var u=e("VU/8")(r,c,!1,function(t){e("vIW3"),e("Z89D")},"data-v-139015a2",null);a.a=u.exports},uPEH:function(t,a){},vIW3:function(t,a){},xHgl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("woOf"),i=e.n(n),s=e("gyMJ"),o={name:"SearchMv",data:function(){return{keyWord:this.$route.query.key,mvData:{}}},components:{MvList:e("eANS").a},methods:{getMvList:function(t){var a=this;s.a.getSearchByKeyWord("Mv",{key:this.keyWord,pn:t,rn:30}).then(function(t){a.mvData=i()({},a.mvData,{code:parseInt(t.code),total:parseInt(t.data.total),mvList:t.data.mvlist,pageSize:30,getData:a.getMvList})}).catch(function(t){console.log(t)})}},computed:{},watch:{"$route.query.key":{handler:function(t,a){this.keyWord=t,this.getMvList(1)},immediate:!0}},created:function(){},mounted:function(){}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"child_view"},[a("mv-list",{attrs:{keyWord:this.keyWord,mvData:this.mvData}})],1)},staticRenderFns:[]};var c=e("VU/8")(o,r,!1,function(t){e("uPEH"),e("2STg")},"data-v-8725a2e8",null);a.default=c.exports}});
//# sourceMappingURL=4.af876eaf2c9a112c50ae.js.map