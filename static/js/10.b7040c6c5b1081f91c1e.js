webpackJsonp([10],{fx9W:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),e=n("gyMJ"),r=n("j8mR"),c=n("t6GB"),o=n("NYxO"),l={name:"SongDetail",data:function(){return{code:0,status:0}},components:{MusicNoData:c.a,MusicPlay:r.a},methods:{getSongInfo:function(){var t=this;e.a.getSongInfo(this.$route.params.rid).then(function(s){t.code=parseInt(s.code),t.$store.commit("setSongInfo",s.data)}).catch(function(){}),e.a.getSongLrc(this.$route.params.rid).then(function(s){t.status=parseInt(s.status),t.$store.commit("setLrcList",s.data.lrclist)}).catch(function(){})},getSongUrl:function(){var t=this;e.a.getPlayUrl({mid:this.$route.params.rid,type:"music"}).then(function(s){t.$store.commit("setSongUrl",s.data.url)}).catch(function(){})},imgError:function(t){t.currentTarget.src="https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png",t.currentTarget.onerror=null}},computed:a()({},Object(o.b)(["isLrc","lrcList","curTime","songInfo"])),watch:{isLrc:{handler:function(t,s){this.$refs.lrc.scrollTop=40*t}},curTime:{handler:function(t,s){for(var n=0;n<this.lrcList.length-1;n++)parseFloat(this.lrcList[n].time)<=t+.4&&parseFloat(this.lrcList[n+1].time)>=t+.4&&this.$store.commit("setIsLrc",n);parseFloat(this.lrcList[this.lrcList.length-1].time)<=t+.4&&this.$store.commit("setIsLrc",this.lrcList.length-1)}}},created:function(){this.getSongInfo(),this.getSongUrl(),this.$store.commit("setIsPlay",!1)},mounted:function(){}},u={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"main"},[n("div",{staticClass:"bg_mask"}),t._v(" "),n("div",{staticClass:"bg",style:{backgroundImage:"url("+t.songInfo.pic+")"}}),t._v(" "),n("div",{staticClass:"main_con"},[n("div",[n("div",[n("div",{staticClass:"info"},[n("div",{staticClass:"cover_out"},[n("img",{staticClass:"pic",attrs:{src:t.songInfo.pic||"noimg.jpg"},on:{error:function(s){return t.imgError(s)}}})]),t._v(" "),n("div",[n("span",{staticClass:"title"},[t._v(t._s(t.songInfo.name))]),t._v(" "),n("p",{staticClass:"artist flex_c"},[n("span",[t._v(t._s(t.songInfo.artist))])]),t._v(" "),n("p",{staticClass:"song_info"},[n("span",[t._v("专辑：")]),t._v(" "),n("span",{staticClass:"album_name"},[t._v(t._s(t.songInfo.album))]),t._v(" "),n("span",[t._v("发行时间：")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.songInfo.releaseDate))])])])])]),t._v(" "),n("div",{ref:"lrc",staticClass:"lrc"},[t._l(4,function(t){return n("p",{key:"before"+t})}),t._v(" "),t._l(t.lrcList,function(s,i){return n("p",{key:i,class:{active:t.isLrc===i}},[t._v(t._s(s.lineLyric))])}),t._v(" "),t._l(4,function(t){return n("p",{key:"after"+t})})],2)])])])},staticRenderFns:[]};var f=n("VU/8")(l,u,!1,function(t){n("rFdw")},"data-v-d8452fa8",null);s.default=f.exports},rFdw:function(t,s){}});
//# sourceMappingURL=10.b7040c6c5b1081f91c1e.js.map