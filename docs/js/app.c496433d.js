(function(e){function n(n){for(var a,o,s=n[0],u=n[1],l=n[2],f=0,m=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(n);while(m.length)m.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(a=!1)}a&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},i={app:0},r=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/ema-chan-ha-kawaii/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var a=t("85ec"),i=t.n(a);i.a},"44a4":function(e,n,t){"use strict";var a=t("4a07"),i=t.n(a);i.a},"4a07":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"app-memo"},[t("h2",[e._v("エマちゃんはかわいいα（DQ11物理被ダメージ計算のようなもの）")]),e._m(0),t("p",[e._v(" 主Lv13守りの種1ユグノア+竜のうろこ+ちからのゆびわ守備力:104 "),t("button",{on:{click:e.vsArachtagon}},[e._v("適用")])]),t("p",[e._v(" 主Lv22守りの種1まほうの盾+しっぷう+シルメ守備力:139 "),t("button",{on:{click:e.vsTyriant}},[e._v("適用")])])]),t("div",{staticClass:"app-input"},[t("div",{staticClass:"input"},[t("label",[e._v("モンスター")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.monster,expression:"monster"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.monster=n.target.multiple?t:t[0]}}},e._l(e.monsters,(function(n){return t("option",{key:n.no,domProps:{value:n}},[e._v(" "+e._s(n.name)+" ")])})),0)]),t("div",{staticClass:"input"},[t("label",[e._v("守備力")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.def,expression:"def"}],attrs:{type:"number"},domProps:{value:e.def},on:{input:function(n){n.target.composing||(e.def=n.target.value)}}})]),t("div",{staticClass:"input"},[t("label",[e._v("敵ゾーン状態")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.isZone,expression:"isZone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isZone)?e._i(e.isZone,null)>-1:e.isZone},on:{change:function(n){var t=e.isZone,a=n.target,i=!!a.checked;if(Array.isArray(t)){var r=null,o=e._i(t,r);a.checked?o<0&&(e.isZone=t.concat([r])):o>-1&&(e.isZone=t.slice(0,o).concat(t.slice(o+1)))}else e.isZone=i}}})]),t("div",{staticClass:"input"},[t("label",[e._v("敵バフ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.enemyBuff,expression:"enemyBuff"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.enemyBuff=n.target.multiple?t:t[0]}}},e._l(e.buffValues,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v(" "+e._s(n)+" ")])})),0)]),t("div",{staticClass:"input"},[t("label",[e._v("味方バフ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.allyBuff,expression:"allyBuff"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.allyBuff=n.target.multiple?t:t[0]}}},e._l(e.buffValues,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v(" "+e._s(n)+" ")])})),0)])]),e.monster&&e.def?t("div",{staticClass:"app-results"},e._l(e.monster.skillNumbers,(function(n){return t("damage-calc",e._b({key:n,staticClass:"results"},"damage-calc",e.calculationParameters(n),!1))})),1):e._e()])},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" 間違っている可能性は高いので利用は自己責任でお願いします。"),t("br"),e._v(" 味方が使える特技で敵が使ってくるものは基本的にダメージ倍率が不明です。"),t("br"),e._v(" 私は解析できない&解析情報を知らないため、実測値で見るしかなさそうです。"),t("br"),e._v(" このくらいかなってのあれば教えてください。"),t("br"),e._v(" 調査とか手伝ってくれる人募集してます。"),t("br")])}],o=(t("7db0"),t("a9e3"),t("5530")),s=[{no:1,name:"いたずらデビル",atk:38,skillNumbers:[1]},{no:2,name:"イビルビースト",atk:44,skillNumbers:[1,2]},{no:3,name:"デンダ",atk:66,skillNumbers:[1]},{no:4,name:"デンダのこぶん",atk:40,skillNumbers:[1]},{no:5,name:"デスコピオン",atk:55,skillNumbers:[1,3]},{no:6,name:"シーゴーレム",atk:117,skillNumbers:[1]},{no:7,name:"ホメロス（ダーハルーネ）",atk:116,skillNumbers:[1,4]},{no:8,name:"ベロリンマン",atk:58,skillNumbers:[1]},{no:9,name:"ガレムソン",atk:64,skillNumbers:[1]},{no:10,name:"ビビアン",atk:58,skillNumbers:[1]},{no:11,name:"サイデリア",atk:94,skillNumbers:[1,5]},{no:12,name:"レディ・マッシブ",atk:109,skillNumbers:[1,6]},{no:13,name:"マスク・ザ・ハンサム",atk:78,skillNumbers:[1,7]},{no:14,name:"ロウ（仮面）",atk:65,skillNumbers:[1]},{no:15,name:"マルティナ（仮面）",atk:109,skillNumbers:[1,8,9]},{no:16,name:"アラクラトロ",atk:122,skillNumbers:[1,10,11]},{no:17,name:"クラーゴン",atk:161,skillNumbers:[1,12]},{no:18,name:"ごくらくちょう",atk:182,skillNumbers:[1,13]},{no:19,name:"ヘルコンドル",atk:105,skillNumbers:[1,13]},{no:20,name:"メルトア",atk:160,skillNumbers:[1]},{no:21,name:"ムンババ",atk:141,skillNumbers:[1,14]},{no:22,name:"リーズレット",atk:181,skillNumbers:[1]},{no:23,name:"ゾルデ",atk:161,skillNumbers:[1,15,16]}],u=[{no:1,name:"通常攻撃",magnification:1},{no:2,name:"するどいツメ",magnification:1.2},{no:3,name:"ツメラッシュ（6Hit）",magnification:.5},{no:4,name:"通常攻撃（逆手）",magnification:1,powerMagnification:.5},{no:5,name:"かえん斬り（+5ダメージ） ※調査中",magnification:1.2},{no:6,name:"ミラクルソード　※調査中",magnification:1},{no:7,name:"デュアルカッター ※調査中",magnification:1.2},{no:8,name:"ムーンサルト ※調査中",magnification:1.3},{no:9,name:"しんくうげり ※調査中",magnification:1.2},{no:10,name:"死グモのとげ",magnification:.9},{no:11,name:"もうどく攻撃",magnification:1},{no:12,name:"ばくれつけん",magnification:.3},{no:13,name:"わしづかみ",magnification:1.2},{no:14,name:"けとばし ※調査中",magnification:1.15},{no:15,name:"振り下ろし",magnification:1.25},{no:16,name:"なぎはらい ※調査中",magnification:.8}],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"damage-calc"},[t("p",[e._v("行動："+e._s(e.name))]),t("p",[e._v("最大ダメージ："+e._s(e.max))]),t("p",[e._v("最小ダメージ："+e._s(e.min))])])},c=[],f={name:"DamageCalc",props:{atk:{type:Number,required:!0},def:{type:Number,required:!0},name:{type:String,required:!0},magnification:{type:Number,required:!0},powerMagnification:{type:Number,default:1},isZone:{type:Boolean,default:!1},allyBuff:{type:String,default:"0"},enemyBuff:{type:String,default:"0"}},computed:{zoneMagnification:function(){return this.isZone?1.2:1},allyBuffMagnification:function(){return{"-2":.25,"-1":.5,0:1,"+1":1.5,"+2":2}},enemyBuffMagnification:function(){return{"-2":.5,"-1":.75,0:1,"+1":1.25,"+2":1.5}},base:function(){return this.atk/2*this.enemyBuffMagnification[this.enemyBuff]*this.zoneMagnification*this.powerMagnification-this.def/4*this.allyBuffMagnification[this.allyBuff]},range:function(){return this.base/16+1},max:function(){var e=Math.floor((this.base+this.range)*this.magnification);return e>0?e:1},min:function(){var e=Math.floor((this.base-this.range)*this.magnification);return e>0?e:0}}},m=f,p=(t("44a4"),t("2877")),v=Object(p["a"])(m,l,c,!1,null,"11ed0ab0",null),d=v.exports,b={name:"App",components:{DamageCalc:d},data:function(){return{monster:null,def:104,isZone:!1,enemyBuff:"0",allyBuff:"0"}},computed:{monsters:function(){return s},buffValues:function(){return["-2","-1","0","+1","+2"]}},methods:{calculationParameters:function(e){return Object(o["a"])(Object(o["a"])({},u.find((function(n){return n.no===e}))),{},{atk:this.monster.atk,def:Number(this.def),isZone:this.isZone,enemyBuff:this.enemyBuff,allyBuff:this.allyBuff})},vsArachtagon:function(){this.def=104,this.monster=this.monsters.find((function(e){return 16===e.no}))},vsTyriant:function(){this.def=139,this.monster=this.monsters.find((function(e){return 23===e.no}))}}},g=b,k=(t("034f"),Object(p["a"])(g,i,r,!1,null,null,null)),y=k.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.c496433d.js.map