webpackJsonp([18],{"+BTi":function(t,e){},"75l9":function(t,e){t.exports={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]}},CqeT:function(t,e){},GXEp:function(t,e){},H3rH:function(t,e){},KdGk:function(t,e){},MwAD:function(t,e,s){"use strict";var n=s("Dd8w"),i=s.n(n),a=s("ifoU"),o=s.n(a),r=s("msXN"),l=s("NYxO"),c=s("gyMJ"),u=s("VuIw"),g={name:"MusicTable",mixins:[r.a],props:{songList:Array,playFunc:{type:Function},pageNum:{type:Number,default:1}},data:function(){return{}},components:{},methods:{unique:function(t){var e=new o.a;return t.filter(function(t){return!e.has(t.rid)&&e.set(t.rid,1)})},playBtnClick:function(t,e){this.$store.commit("setPlaySong",t),"function"==typeof this.playFunc?(u.a.setLocalStorage("play_song_index",e),this.playFunc(e)):(u.a.setLocalStorage("play_song_index",0),this.getSongInfo(t))},getSongInfo:function(t){var e=this,s=this;s.$store.commit("setIsPlay",!1),c.a.getSongInfo(t).then(function(t){var n=void 0;s.$store.commit("setSongInfo",t.data),(n=null===u.a.getLocalStorage("song_list")?[]:u.a.getLocalStorage("song_list")).unshift(t.data),u.a.setLocalStorage("song_list",e.unique(n))}).catch(function(){}),c.a.getPlayUrl({mid:t,type:"music"}).then(function(t){s.$store.commit("setSongUrl",t.data.url),s.$store.commit("setIsPlay",!0)}).catch(function(){}),console.log(u.a.getLocalStorage("song_list"))}},computed:i()({},Object(l.b)(["isPlay","playSong"])),created:function(){},mounted:function(){}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"song_list"},[s("ul",[t._l(t.songList,function(e,n){return[s("li",{key:n,staticClass:"song_item flex_c"},[s("div",{staticClass:"song_rank"},[s("div",{staticClass:"rank_num"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.playSong===e.rid,expression:"playSong===item.rid"}],staticClass:"playing"},[s("span",{staticClass:"side1",class:t.isPlay?"playing_now":"pause"}),t._v(" "),s("span",{staticClass:"side2",class:t.isPlay?"playing_now":"pause"}),t._v(" "),s("span",{staticClass:"side3",class:t.isPlay?"playing_now":"pause"})]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.playSong!=e.rid,expression:"playSong!=item.rid"}]},[t._v(t._s(30*(t.pageNum-1)+n+1))])])]),t._v(" "),s("div",{staticClass:"song_name flex_c"},[s("span",{staticClass:"name",attrs:{title:e.name.split("-")[0]},domProps:{innerHTML:t._s(e.name.split("-")[0])},on:{click:function(s){return t.goPage("music",e.rid)}}})]),t._v(" "),s("div",{staticClass:"song_artist"},[s("span",{attrs:{title:e.artist},domProps:{innerHTML:t._s(e.artist)},on:{click:function(s){return t.goPage("singer",e.artistid)}}})]),t._v(" "),s("div",{staticClass:"song_album"},[s("span",{attrs:{title:e.album},domProps:{innerHTML:t._s(e.album)},on:{click:function(s){return t.goPage("album",e.albumid)}}})]),t._v(" "),s("div",{staticClass:"song_time"},[s("span",[t._v(t._s(e.songTimeMinutes))])]),t._v(" "),s("div",{staticClass:"song_opts flex_c"},[s("i",{staticClass:"iconfont icon-icon_play_",on:{click:function(s){return t.playBtnClick(e.rid,n)}}}),t._v(" "),s("i",{staticClass:"iconfont icon-bar_icon_heart_"}),t._v(" "),s("i",{staticClass:"iconfont icon-bar_icon_download_"}),t._v(" "),t._t("opts")],2)])]})],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list_head"},[s("ul",{staticClass:"flex_c"},[s("li",{staticClass:"head_num"},[t._v("序号")]),t._v(" "),s("li",{staticClass:"head_name"},[t._v("歌曲")]),t._v(" "),s("li",{staticClass:"head_artist"},[t._v("歌手")]),t._v(" "),s("li",{staticClass:"head_album"},[t._v("专辑")]),t._v(" "),s("li",{staticClass:"head_time"},[t._v("时长")])])])}]};var m=s("VU/8")(g,d,!1,function(t){s("CqeT")},"data-v-5619e0c9",null);e.a=m.exports},MzOi:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("ylrw"),s("+BTi");var n=s("6oiW"),i=s.n(n),a=(s("NOFV"),s("mWcH")),o=s.n(a),r=(s("w2s5"),s("oTyR")),l=s.n(r),c=(s("H3rH"),s("6mNG")),u=s.n(c),g=(s("GXEp"),s("mtrD")),d=s.n(g),m=s("7+uW"),p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"text"},[s("div",t._l(t.footerList,function(e,n){return s("p",{key:n},[t._v("\n        "+t._s(e)+"\n      ")])}),0)])])},staticRenderFns:[]};var h=s("VU/8")({name:"MusicFooter",data:function(){return{footerList:["关于 | 帮助 | 条款 | 反馈","Copyright © 2021 DKH"]}},components:{},methods:{},computed:{}},p,!1,function(t){s("nt5x")},"data-v-c75d42f4",null).exports,A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"head"},[n("div",{staticClass:"flex_c"},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:s("dLd/")}})]),t._v(" "),n("ul",{staticClass:"nav"},t._l(t.nav,function(e){return n("li",{key:e.id,staticClass:"item",class:{active:t.isActive===e.id},on:{click:function(s){return t.select_nav(e.id)}}},[n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1)}),0)],1),t._v(" "),n("div",{staticClass:"nav_r flex_c"},[n("div",{staticClass:"search_out",class:{search_focus:!0===t.isShow}},[n("div",{staticClass:"search_inn flex_c"},[n("i",{staticClass:"icon iconfont icon-header_icon_search_",on:{click:function(e){return t.goSearch()}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search",attrs:{maxlength:"128",type:"text",placeholder:"搜索音乐/MV/歌单/歌手"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch()},blur:function(e){t.isShow=!1},focus:function(e){t.isShow=!0},input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!0===t.isShow,expression:"isShow===true"}],staticClass:"list",class:{hot_key:!0===t.isShow}},[n("p",{directives:[{name:"show",rawName:"v-show",value:""===t.searchValue,expression:"searchValue===''"}],staticClass:"tit"},[t._v("大家都在搜")]),t._v(" "),n("ul",{ref:"searchList"},[!0===t.isShow?t._l(t.searchList,function(e,s){return n("li",{key:s,staticClass:"list_item reg_text"},[n("span",{directives:[{name:"show",rawName:"v-show",value:""===t.searchValue,expression:"searchValue===''"}],staticClass:"idx"},[t._v(t._s(s+1))]),t._v(" "),n("span",{staticClass:"key_text"},[t._v(t._s(e))])])}):t._e()],2)])]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reg_text"},[e("span",[this._v("登录")]),this._v(" "),e("span",[this._v("/")]),this._v(" "),e("span",[this._v("注册")])])}]};var f=s("VU/8")({name:"MusicNav",data:function(){return{searchValue:"",nav:[{id:0,name:"首页",link:"/"},{id:1,name:"排行榜",link:"/rankList"},{id:2,name:"歌单",link:"/playlists"},{id:3,name:"歌手",link:"/singers"},{id:4,name:"我的音乐",link:"/play"}],searchList:["金玉良缘","test1","test2"],isActive:0,isShow:!1}},methods:{select_nav:function(t){this.isActive=t},goSearch:function(){this.$store.commit("setSearchword",this.searchValue),this.$router.push({path:"/search/song",query:{key:this.searchValue}})}},watch:{"$route.query.key":{handler:function(t,e){this.searchValue=t},immediate:!0}}},A,!1,function(t){s("MzOi")},"data-v-3cc6c9d9",null).exports,v=s("j8mR");document.cookie="kw_token=EO83VCKQTKF; path=/";var w={components:{MusicHeader:f,MusicFooter:h,MusicPlay:v.a},name:"App"},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("music-header")],1),this._v(" "),e("keep-alive",[e("router-view",{key:this.$route.fullPath,staticClass:"container"})],1),this._v(" "),e("music-footer"),this._v(" "),"mvPlay"!=this.$route.name?e("music-play"):this._e()],1)},staticRenderFns:[]};var I=s("VU/8")(w,y,!1,function(t){s("kFV8")},null,null).exports,C=s("YaEn"),_=s("mtWM"),S=s.n(_),x={state:{lrcList:[],isLrc:0,isPlay:!1,curTime:0,songInfo:{},songUrl:"",playSong:-1},getters:{isLrc:function(t){return t.isLrc},isPlay:function(t){return t.isPlay},playSong:function(t){return t.playSong},lrcList:function(t){var e=t.lrcList;return e||(e=JSON.parse(window.sessionStorage.getItem("lrcList")||null)),e},curTime:function(t){var e=t.curTime;return e||(e=JSON.parse(window.sessionStorage.getItem("curTime")||null)),e},songInfo:function(t){var e=t.songInfo;return e||(e=JSON.parse(window.sessionStorage.getItem("songInfo")||null)),e},songUrl:function(t){var e=t.songUrl;return e||(e=JSON.parse(window.sessionStorage.getItem("songUrl")||null)),e}},mutations:{setIsPlay:function(t,e){t.isPlay=e},setLrcList:function(t,e){t.lrcList=e},setIsLrc:function(t,e){t.isLrc=e},setCurTime:function(t,e){t.curTime=e},setSongInfo:function(t,e){t.songInfo=e},setSongUrl:function(t,e){t.songUrl=e},setPlaySong:function(t,e){t.playSong=e}}},E={state:{loginIn:!1,searchword:"",showAside:!1,activeName:"",index:0,isActive:!1},getters:{},mutations:{setSearchword:function(t,e){t.searchword=e}},actions:{}},B=s("NYxO");m.default.use(B.a);var M=new B.a.Store({modules:{song:x,configure:E}});var b=M,L=s("AXdl");m.default.use(L.a,{error:s("k6x5"),attempt:1}),m.default.use(d.a),m.default.use(u.a),m.default.use(l.a),m.default.use(o.a),m.default.use(i.a),m.default.prototype.$axios=S.a,m.default.config.productionTip=!1,new m.default({el:"#app",router:C.a,store:b,components:{App:I},template:"<App/>"})},NOFV:function(t,e){},VuIw:function(t,e,s){"use strict";var n=s("mvHQ"),i=s.n(n),a={getLocalStorage:function(t){return JSON.parse(localStorage.getItem(t))},setLocalStorage:function(t,e){localStorage.setItem(t,i()(e))},removeLocalStorage:function(t){localStorage.removeItem(t)},clearLocalStorage:localStorage.clear,getSessionStorage:function(t){return JSON.parse(sessionStorage.getItem(t))},setSessionStorage:function(t,e){sessionStorage.setItem(t,i()(e))},removeSessionStorage:function(t){sessionStorage.removeItem(t)},clearSessionStorage:sessionStorage.clear,SessionStorageLength:sessionStorage.length};e.a=a},YaEn:function(t,e,s){"use strict";var n=s("7+uW"),i=s("/ocq");n.default.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"*",redirect:"/404"},{path:"/404",component:function(){return s.e(12).then(s.bind(null,"c5Mg"))}},{path:"/",name:"home",component:function(){return Promise.all([s.e(0),s.e(2)]).then(s.bind(null,"HXef"))}},{path:"/rankList",name:"rankList",component:function(){return Promise.all([s.e(0),s.e(13)]).then(s.bind(null,"hpQ/"))}},{path:"/singers",name:"singers",component:function(){return Promise.all([s.e(0),s.e(7)]).then(s.bind(null,"9BZc"))}},{path:"/playlists",name:"playlists",component:function(){return Promise.all([s.e(0),s.e(9)]).then(s.bind(null,"BUSC"))}},{path:"/playlistDetail/:pid",name:"playlistDetail",component:function(){return Promise.all([s.e(0),s.e(16)]).then(s.bind(null,"EUe0"))}},{path:"/albumDetail/:aid",name:"albumDetail",component:function(){return Promise.all([s.e(0),s.e(15)]).then(s.bind(null,"eKdv"))}},{path:"/singerDetail/:id",name:"singerDetail",component:function(){return Promise.all([s.e(0),s.e(1)]).then(s.bind(null,"iO3U"))}},{path:"/songDetail/:rid",name:"songDetail",component:function(){return Promise.all([s.e(0),s.e(10)]).then(s.bind(null,"fx9W"))}},{path:"/mvPlay/:id",name:"mvPlay",component:function(){return Promise.all([s.e(0),s.e(8)]).then(s.bind(null,"7gOe"))}},{path:"/search",name:"search",component:function(){return s.e(14).then(s.bind(null,"tnDH"))},children:[{path:"song",name:"searchSong",component:function(){return Promise.all([s.e(0),s.e(11)]).then(s.bind(null,"gbdR"))}},{path:"album",name:"searchAlbum",component:function(){return Promise.all([s.e(0),s.e(3)]).then(s.bind(null,"TF9d"))}},{path:"mv",name:"searchMv",component:function(){return Promise.all([s.e(0),s.e(4)]).then(s.bind(null,"xHgl"))}},{path:"playlist",name:"searchPlaylist",component:function(){return Promise.all([s.e(0),s.e(6)]).then(s.bind(null,"vkVg"))}},{path:"singer",name:"searchSinger",component:function(){return Promise.all([s.e(0),s.e(5)]).then(s.bind(null,"rUUk"))}}]}],scrollBehavior:function(t,e,s){return s||{x:0,y:0}}})},"dLd/":function(t,e,s){t.exports=s.p+"static/img/logo.9a43e22.png"},fRlY:function(t,e){},gyMJ:function(t,e,s){"use strict";var n=s("//Fk"),i=s.n(n),a=s("mtWM"),o=s.n(a),r=s("YaEn");function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"json";return new i.a(function(n,i){o.a.get(t,{params:e,responseType:s,headers:{csrf:document.cookie.split("kw_token=")[1]}}).then(function(t){n(t.data)}).catch(function(t){i(t)})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i.a(function(s,n){o.a.post(t,{data:e,headers:{csrf:document.cookie.split("kw_token=")[1]}}).then(function(t){s(t.data)},function(t){n(t)})})}o.a.defaults.timeout=5e3,o.a.defaults.withCredentials=!0,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",o.a.interceptors.response.use(function(t){return 200===t.status?i.a.resolve(t):i.a.reject(t)},function(t){if(t.response.status){switch(t.response.status){case 401:r.a.replace({path:"/",query:{redirect:r.a.currentRoute.fullPath}});break;case 403:console.log(t.response.data.msg)}return i.a.reject(t.response)}}),s.d(e,"a",function(){return u});var u={loginIn:function(t){return c("user/login/status",t)},SignUp:function(t){return c("user/add",t)},updateUserMsg:function(t){return c("user/update",t)},getUserOfId:function(t){return l("user/detail?id="+t)},getSwiperList:function(){return l("/api/www/banner/index/bannerList?httpsStatus=1")},getIndexBangList:function(){return l("/api/www/bang/index/bangList?httpsStatus=1")},getTagBang:function(){return l("/api/www/bang/bang/bangMenu?httpsStatus=1")},getBangList:function(t){return l("/api/www/bang/bang/musicList?httpsStatus=1",t)},getIndexRcmPlaylist:function(){return l("/api/www/rcm/index/playlist?httpsStatus=1")},getIndexTagPlaylist:function(){return l("/api/www/playlist/index/tags?httpsStatus=1")},getTagPlaylist:function(){return l("/api/www/playlist/getTagList?httpsStatus=1")},getRcmPlaylist:function(t){return l("/api/www/classify/playlist/getRcmPlayList?httpsStatus=1",t)},getPlaylist:function(t){return l("/api/www/classify/playlist/getTagPlayList?httpsStatus=1",t)},getPlaylistInfo:function(t){return l("/api/www/playlist/playListInfo?httpsStatus=1",t)},getSongListOfLikeTitle:function(t){return l("songList/likeTitle/detail?title="+t)},getListSongOfSongId:function(t){return l("listSong/detail?songListId="+t)},getIndexTagSinger:function(){return l("/api/www/artist/index/tags?httpsStatus=1")},getSingerList:function(t){return l("/api/www/artist/artistInfo?httpsStatus=1",t)},getSingerInfo:function(t){return l("/api/www/artist/artist?httpsStatus=1&artistid="+t)},getSingerMusic:function(t){return l("/api/www/artist/artistMusic?httpsStatus=1",t)},getSingerAlbum:function(t){return l("/api/www/artist/artistAlbum?httpsStatus=1",t)},getSingerMv:function(t){return l("/api/www/artist/artistMv?httpsStatus=1",t)},getSingerOfSex:function(t){return l("singer/sex/detail?sex="+t)},getCollectionOfUser:function(t){return l("collection/detail?userId="+t)},setCollection:function(t){return c("collection/add",t)},setRank:function(t){return c("rank/add",t)},getRankOfSongListId:function(t){return l("rank?songListId="+t)},setComment:function(t){return c("comment/add",t)},setLike:function(t){return c("comment/like",t)},getAllComment:function(t,e){var s="";return 1===t?s="comment/songList/detail?songListId="+e:0===t&&(s="comment/song/detail?songId="+e),l(s)},getSongLrc:function(t){return l("/newh5/singles/songinfoandlrc?musicId="+t+"&httpsStatus=1")},getSongInfo:function(t){return l("/api/www/music/musicInfo?mid="+t+"&httpsStatus=1")},getSongOfSingerId:function(t){return l("song/singer/detail?singerId="+t)},getSongOfSingerName:function(t){return l("song/singerName/detail?name="+t)},downloadMusic:function(t){return l(t,{},"blob")},getAlbumInfo:function(t){return l("/api/www/album/albumInfo?&httpsStatus=1",t)},getPlayUrl:function(t){return l("/api/v1/www/music/playUrl?httpsStatus=1",t)},getSearchByKeyWord:function(t,e){return l("/api/www/search/search"+t+"BykeyWord?httpsStatus=1",e)},getSearchKey:function(t){return l("/api/www/search/searchKey?key="+t+"&httpsStatus=1")}}},j8mR:function(t,e,s){"use strict";var n=s("Dd8w"),i=s.n(n),a=s("NYxO"),o=s("gyMJ"),r=s("msXN"),l=s("VuIw"),c={components:{MusicTable:s("MwAD").a},name:"MusicPlay",mixins:[r.a],data:function(){return{playTime:"00:00",isShow:!1,playMode:0,isVolume:!0,defaultImg:s("k6x5"),tempVolume:0,realVolume:50,playList:[],index:0}},created:function(){},methods:{setPlayOrPause:function(){this.$store.commit("setIsPlay",!this.isPlay)},audioEnd:function(){switch(this.index=l.a.getLocalStorage("play_song_index"),this.playMode){case 0:this.index+=1,this.index>=this.playList.length&&(this.index=0),this.getSongInfo(this.index);break;case 1:this.getSongInfo(this.index);break;case 2:this.index+=1,this.index>=this.playList.length&&(this.index=this.playList.length-1,this.$store.commit("setIsPlay",!1));break;case 3:this.index=Math.floor(Math.random()*this.playList.length),this.getSongInfo(this.index)}l.a.setLocalStorage("play_song_index",this.index)},download:function(){window.location.href=this.songUrl},setVolume:function(){var t=this.$refs.audio;this.isVolume=!this.isVolume,this.isVolume?(this.realVolume=this.tempVolume,l.a.setLocalStorage("volume",this.tempVolume)):(this.tempVolume=l.a.getLocalStorage("volume"),this.realVolume=0,l.a.setLocalStorage("volume",0)),t.volume=.01*this.realVolume},floatToTime:function(t){var e=t/60|0,s=t%60|0,n=void 0;return n=e<10?"0"+e+":":e+":",n+=s<10?"0"+s:s},timeUpdate:function(){var t=this.$refs.audio;this.playTime=this.floatToTime(t.currentTime),t.volume=.01*this.realVolume,this.$refs.progress.style="width:"+t.currentTime/(t.duration/340)+"px",this.$store.commit("setCurTime",t.currentTime),t.currentTime<=1&&this.$store.commit("setIsLrc",0)},progressMove:function(t,e){var s=document.documentElement.scrollLeft||document.body.scrollLeft,n=this.$refs.audio;if("volume"===e){var i=t.clientX+s-this.$refs.volume.getBoundingClientRect().left;n.volume=.01*i,this.realVolume=0|i,l.a.setLocalStorage("volume",this.realVolume),this.$refs.volume.style="width:"+i+"px"}if("progress"===e){var a=t.clientX+s-this.$refs.progress.getBoundingClientRect().left;n.currentTime=a*(n.duration/340)}},progressBtnMove:function(t){var e=this,s=document.documentElement.scrollLeft||document.body.scrollLeft,n=this.$refs.audio;document.onmousemove=function(i){if("volume"===t){var a=i.clientX+s-e.$refs.volume.getBoundingClientRect().left;a>100?a=100:a<0&&(a=0),n.volume=.01*a,e.realVolume=0|a,l.a.setLocalStorage("volume",e.realVolume),e.$refs.volume.style="width:"+a+"px"}if("progress"===t){var o=i.clientX+s-e.$refs.progress.getBoundingClientRect().left;o>340?o=340:o<0&&(o=0),n.currentTime=o*(n.duration/340)}},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}},getSongInfo:function(t){var e=this;this.$store.commit("setIsPlay",!1),this.$store.commit("setSongInfo",l.a.getLocalStorage("song_list")[t]),this.$store.commit("setPlaySong",this.playList[t].rid),o.a.getPlayUrl({mid:l.a.getLocalStorage("song_list")[t].rid,type:"music"}).then(function(t){e.$store.commit("setSongUrl",t.data.url),e.$store.commit("setIsPlay",!0)}).catch(function(){})},getPreSong:function(){this.index=l.a.getLocalStorage("play_song_index")||0,3===this.playMode?this.index=Math.floor(Math.random()*this.playList.length):(this.index-=1,this.index<0&&(this.index=this.playList.length-1)),l.a.setLocalStorage("play_song_index",this.index),this.getSongInfo(this.index)},getNextSong:function(){this.index=l.a.getLocalStorage("play_song_index")||0,3===this.playMode?this.index=Math.floor(Math.random()*this.playList.length):(this.index+=1,this.index>=this.playList.length&&(this.index=0)),l.a.setLocalStorage("play_song_index",this.index),this.getSongInfo(this.index)}},computed:i()({},Object(a.b)(["songInfo","songUrl","isPlay"])),watch:{isPlay:{handler:function(t,e){var s=this.$refs.audio;!0===t?setTimeout(function(){s.play()},200):s.pause(),this.playList=l.a.getLocalStorage("song_list")}}},mounted:function(){var t=this,e=this;window.onscroll=function(){var t=-(document.documentElement.scrollLeft||document.body.scrollLeft);e.$refs.play.style.left=t+"px"},window.onclick=function(e){t.$refs.playList.contains(e.target)||t.$refs.playListBtn.contains(e.target)||(t.isShow=!1)},this.$store.commit("setIsPlay",!1),null===l.a.getLocalStorage("volume")&&l.a.setLocalStorage("volume",50),this.$refs.audio.volume=.01*l.a.getLocalStorage("volume"),this.realVolume=l.a.getLocalStorage("volume"),null!=l.a.getLocalStorage("play_song_index")?this.index=l.a.getLocalStorage("play_song_index"):l.a.setLocalStorage("play_song_index",0),null!=l.a.getLocalStorage("song_list")&&(this.playList=l.a.getLocalStorage("song_list"),this.$store.commit("setSongInfo",this.playList[this.index]),this.$store.commit("setPlaySong",this.playList[this.index].rid),o.a.getPlayUrl({mid:this.playList[this.index].rid,type:"music"}).then(function(t){e.$store.commit("setSongUrl",t.data.url)}).catch(function(){}))},beforeDestroy:function(){window.onscroll=null,window.onclick=null}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"play"}},[s("div",{ref:"play",staticClass:"play_bar"},[s("div",{staticClass:"col_l flex_c",class:{no_list:0===t.playList.length}},[0===t.playList.length?s("div",{staticStyle:{width:"100%",height:"100%",position:"absolute","z-index":"10"}}):t._e(),t._v(" "),s("i",{staticClass:"iconfont icon-bar_icon_pre_",attrs:{title:"上一首"},on:{click:function(e){return t.getPreSong()}}}),t._v(" "),s("i",{staticClass:"iconfont",class:t.isPlay?"icon-bar_icon_pause_":"icon-bar_icon_play_1",attrs:{id:"play",title:t.isPlay?"暂停":"播放"},on:{click:function(e){return t.setPlayOrPause()}}}),t._v(" "),s("i",{staticClass:"iconfont icon-bar_icon_next_",attrs:{title:"下一首"},on:{click:function(e){return t.getNextSong()}}})]),t._v(" "),s("div",{staticClass:"col_c flex_c"},[0===t.playList.length?s("div",{staticStyle:{width:"100%",height:"100%",position:"absolute","z-index":"10"}}):t._e(),t._v(" "),s("div",{staticClass:"cover_out"},[s("img",{staticClass:"pic",attrs:{src:t.songInfo.pic||t.defaultImg},on:{click:function(e){return t.goPlayPage(t.songInfo.rid)}}})]),t._v(" "),s("div",[s("div",{staticClass:"songInfo flex_c"},[s("div",{staticClass:"info flex_c"},[s("span",{staticClass:"song_name",on:{click:function(e){return t.goPage("music",t.songInfo.rid)}}},[t._v(t._s(t.songInfo.name||"Music"))]),t._v(" "),s("span",{staticClass:"artist"},[t._v(" - "+t._s(t.songInfo.artist))])]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.playTime)+"/"+t._s(t.songInfo.songTimeMinutes||"00:00"))])]),t._v(" "),s("div",{staticClass:"process"},[s("div",{staticClass:"progress_bar",on:{mousedown:function(e){return t.progressMove(e,"progress")}}},[s("div",{ref:"progress",staticClass:"progress"},[s("div",{staticClass:"progress_btn",on:{mousedown:function(e){return t.progressBtnMove("progress")}}})])])])])]),t._v(" "),s("div",{staticClass:"col_r flex_c"},[s("i",{staticClass:"prev icon_heart iconfont icon-bar_icon_heart_",attrs:{title:"收藏歌曲"}}),t._v(" "),s("i",{staticClass:"prev iconfont icon-bar_icon_download_",attrs:{title:"下载歌曲"},on:{click:function(e){return t.download()}}}),t._v(" "),s("span",{on:{click:function(e){t.playMode++,t.playMode>3&&(t.playMode=0)}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:0===t.playMode,expression:"playMode===0"}],staticClass:"prev iconfont icon-bar_icon_loop_",attrs:{title:"循环播放"}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:1===t.playMode,expression:"playMode===1"}],staticClass:"prev iconfont icon-bar_icon_repeat_",attrs:{title:"单曲循环"}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:2===t.playMode,expression:"playMode===2"}],staticClass:"prev iconfont icon-bar_icon_list_",attrs:{title:"顺序播放"}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:3===t.playMode,expression:"playMode===3"}],staticClass:"prev iconfont icon-bar_icon_random_",attrs:{title:"随机播放"}})]),t._v(" "),s("span",{ref:"playListBtn",staticClass:"playList",on:{click:function(e){t.isShow=!t.isShow}}},[0!=t.playList.length?s("span",{staticClass:"play_count"},[t._v(t._s(t.playList.length))]):t._e(),t._v(" "),s("i",{staticClass:"prev iconfont icon-bar_icon_playlistfuzhi",attrs:{title:"歌曲列表"}})]),t._v(" "),s("span",{on:{click:function(e){return t.setVolume()}}},[s("i",{directives:[{name:"show",rawName:"v-show",value:!t.isVolume,expression:"!isVolume"}],staticClass:"iconfont icon-bar_icon_mute",attrs:{title:"静音"}}),t._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isVolume,expression:"isVolume"}],staticClass:"iconfont icon-bar_icon_volume_",attrs:{title:"音量"}})]),t._v(" "),s("div",{staticClass:"volume"},[s("div",{staticClass:"progress_bar",on:{mousedown:function(e){t.progressMove(e,"volume")}}},[s("div",{ref:"volume",staticClass:"progress",style:"width:"+t.realVolume+"px"},[s("div",{staticClass:"progress_btn",attrs:{title:t.realVolume},on:{mousedown:function(e){return t.progressBtnMove("volume")}}})])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"playList",staticClass:"play_list"},[s("div",{staticClass:"top flex_c"},[s("span",[t._v("播放列表")]),t._v(" "),s("div",{staticClass:"flex_c"},[t._m(0),t._v(" "),s("i",{staticClass:"close iconfont icon-list_icon_x",on:{click:function(e){t.isShow=!1}}})])]),t._v(" "),s("music-table",{staticClass:"list",attrs:{songList:t.playList,playFunc:t.getSongInfo},scopedSlots:t._u([{key:"opts",fn:function(){return[s("i",{staticClass:"iconfont icon-list_clean_n"})]},proxy:!0}])})],1)]),t._v(" "),s("audio",{ref:"audio",attrs:{src:t.songUrl},on:{timeupdate:t.timeUpdate,ended:t.audioEnd}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex_c"},[e("i",{staticClass:"iconfont icon-list_clean_n"}),this._v(" "),e("span",[this._v("清空列表")])])}]};var g=s("VU/8")(c,u,!1,function(t){s("fRlY"),s("KdGk")},"data-v-3c0e3d8b",null);e.a=g.exports},k6x5:function(t,e){t.exports="data:image/png;base64,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Vzs2Gx9l9uPwQnxIBdcTDO5xUjY+7urHeYX4sPrEXQSDm51djq++fUv5tpx8+/byyx68VHA7waAIV2ajOjpBIX7c/QDgP9PF/nS9rxwfdikojWBQFuXQCYolGBSqt3LoBOUTDEr3tRwXbzJfYBiG9/stFVTBpjdVqnfaUeb7RSBhhkGVPtOOTzyez2exCZmWm8wkqJ0ZBq35vE/irn583u0hDzTGDIPWfIbpr1OQz58eOBf59jZAhaB5Zhj0blop+vb+7clnHclqEggGAKm/7n4AANRBMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIgIBgARwQAgIhgARAQDgIhgABARDAAiggFARDAAiAgGABHBACAiGABEBAOAiGAAEBEMACKCAUBEMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIgIBgARwQAgIhgARAQDgIhgABARDAAiggFARDAAiAgGABHBACAiGABEBAOAiGAAEBEMACKCAUBEMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIgIBgARwQAgIhgARAQDgIhgABARDAAiggFARDAAiAgGABHBACAiGABEBAOAiGAAEBEMACKCAUBEMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIgIBgARwQAgIhgARAQDgIhgABARDAAiggFARDAAiAgGABHBACAiGABEBAOAiGAAEBEMACKCAUBEMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIgIBgARwQAgIhgARAQDgIhgABARDAAiggFARDAAiAgGABHBACAiGABEBAOAiGAAEBEMACKCAUBEMACICAYAEcEAICIYAEQEA4CIYAAQEQwAIoIBQEQwAIj8vwAAAP//V3nTYUiggxYAAAAASUVORK5CYII="},kFV8:function(t,e){},msXN:function(t,e,s){"use strict";s("NYxO"),s("gyMJ");e.a={computed:{},methods:{goPage:function(t,e,s){var n=void 0;switch(t){case"music":n="/songDetail/";break;case"singer":n="/singerDetail/";break;case"album":n="/albumDetail/";break;case"playlist":n="/playlistDetail/";break;case"mvPlay":n="/mvPlay/";break;default:n="/"}this.$route.fullPath!=n+e&&this.$router.push({path:n+e,query:s})}}}},nt5x:function(t,e){},w2s5:function(t,e){},ylrw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0aed8a950737c550a2f2.js.map