webpackJsonp([7],{HCnt:function(t,e){},d33j:function(t,e){},rUUk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),n=a.n(i),r=a("gyMJ"),s={name:"SearchSinger",data:function(){return{keyWord:this.$route.query.key,artistData:{}}},components:{SingerList:a("s8AD").a},methods:{getArtistList:function(t){var e=this;r.a.getSearchByKeyWord("Artist",{key:this.keyWord,pn:t,rn:30}).then(function(t){e.artistData=n()({},e.artistData,{code:parseInt(t.code),total:parseInt(t.data.total),artistList:t.data.artistList,pageSize:30,getData:e.getArtistList})}).catch(function(t){console.log(t)})}},computed:{},watch:{"$route.query.key":{handler:function(t,e){this.keyWord=t,this.getArtistList(1)},immediate:!0}},created:function(){},mounted:function(){}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"child_view"},[e("singer-list",{attrs:{keyWord:this.keyWord,artistData:this.artistData}})],1)},staticRenderFns:[]};var c=a("VU/8")(s,o,!1,function(t){a("d33j"),a("HCnt")},"data-v-557e7900",null);e.default=c.exports}});
//# sourceMappingURL=7.32f58c47ebfcbd9177f5.js.map