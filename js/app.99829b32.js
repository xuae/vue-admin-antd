!function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);p.length;)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];a[e]?t.push(a[e]):0!==a[e]&&{runtime:1}[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({runtime:"runtime"}[e]||e)+"."+{runtime:"9c3942a5"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++)if((l=(c=d[s]).getAttribute("data-href"))===r||l===o)return t();var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"js/"+({runtime:"runtime"}[e]||e)+"."+{runtime:"e422f2a1"}[e]+".js"}(e);var c=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;u.push([0,"chunk-antd","chunk-libs"]),n()}({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.r(t),n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var r=n("2b0e"),a=n("2f62");r.a.use(a.a);var o={},u=n("bdfc");u.keys().forEach((function(e){var t=e.replace(/(\.\/|\.ts)/g,"");"index"!==t&&(o[t]=u(e))})),t.default=new a.a.Store({state:{},getters:{},actions:{},mutations:{},modules:o,plugins:[]})},1:function(e,t){},2:function(e,t){},"2e04":function(e,t,n){"use strict";n.r(t);var r=n("f457");t.default=[r.default.request({uri:"/login",method:"post",response:function(e){var t=e.body,n=t.account,a=t.password;return void 0===n?r.default.responseError("暂时仅支持账号密码登录"):"admin"!==n||"123456"!==a?r.default.responseError("账号或密码错误，admin/123456"):r.default.responseOk({id:"@id",nick:"@cname",account:n,email:"@email",phone:/^(13|14|15|17|18|19)[0-9]{9}$/,token:/\d{5,10}\/-2/})}}),r.default.request({uri:"/logout",method:"post",response:r.default.responseOk()}),r.default.request({uri:"/test",method:"post",response:r.default.responseOk()})]},"2e91":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="2e91"},3:function(e,t){},3328:function(e,t,n){var r={"./account.js":"2e04","./index.js":"f513","./mock-server.js":"5704","./util.js":"f457"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="3328"},"3d99":function(e,t,n){},4:function(e,t){},"4d4d":function(e,t,n){"use strict";var r=n("5bc2");n.n(r).a},"553e":function(e,t,n){"use strict";var r=n("f104");n.n(r).a},5704:function(e,t,n){(function(t){n("a4d3"),n("e01a"),n("d28b"),n("4160"),n("caad"),n("a434"),n("b64b"),n("d3b7"),n("2532"),n("3ca3"),n("159b"),n("ddb0");var r=n("b44e"),a=n("1503"),o=(n("53f4"),t);function u(e){var t,r=n("f513").default.fakeData,a=!0,o=!1,u=void 0;try{for(var i,s=r[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var c=i.value;e[c.type](c.url,c.response),t=e._router.stack.length}}catch(e){o=!0,u=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw u}}var l=Object.keys(r).length;return{mockRoutesLength:l,mockStartIndex:t-l}}function i(){Object.keys(n.c).forEach((function(e){e.includes(o)&&delete n.c[n("2e91").resolve(e)]}))}e.exports=function(e){n("d80f"),e.use(a.json()),e.use(a.urlencoded({extended:!0}));var t=u(e),s=t.mockRoutesLength,c=t.mockStartIndex;r.watch(o,{ignored:/mock-server/,ignoreInitial:!0}).on("all",(function(t,n){if("change"===t||"add"===t)try{e._router.stack.splice(c,s),i();var r=u(e);s=r.mockRoutesLength,c=r.mockStartIndex}catch(e){}}))}}).call(this,"/")},"5bc2":function(e,t,n){},"5d9c":function(e,t,n){var r={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="5d9c"},"660b":function(e,t,n){"use strict";n.r(t),n.d(t,"namespaced",(function(){return r})),n.d(t,"state",(function(){return a})),n.d(t,"getters",(function(){return o})),n.d(t,"mutations",(function(){return u})),n.d(t,"actions",(function(){return i}));var r=!0,a={breakpoint:"lg",collapsed:!1,collapsedWidth:80,collapsible:!0,defaultCollapsed:!1,width:"240",theme:"dark",uniqueOpened:!1},o={sidebarCollapsed:function(e,t,n,r){return e.collapsed}},u={SET_COLLAPSED:function(e,t){e.collapsed=t}},i={}},"7d46":function(e,t,n){"use strict";var r=n("d4ec"),a=n("99de"),o=n("7e84"),u=n("262e"),i=n("9ab4"),s=n("60a3"),c=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),t}(s.f),l=c=Object(i.a)([s.a],c),d=(n("4d4d"),n("2877")),p=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("a",{attrs:{href:"http://xuae.github.io/vue-admin-antd/",target:"_blank"}},[e._v(" Vue Admin Antd ")]),n("a",{attrs:{href:"http://www.github.com/xuae/vue-admin-antd",target:"_blank"}},[n("a-icon",{attrs:{type:"github"}})],1),e._v(" Copyright ©2020 "),n("a",{attrs:{href:"http://www.github.com/xuae",target:"_blank"}},[e._v("xuae")])])}),[],!1,null,"638f3101",null);t.a=p.exports},8876:function(e,t,n){},9655:function(e,t,n){},"9b71":function(e,t,n){var r={"./":"f513","./README.md":"c3d5","./account":"2e04","./account.js":"2e04","./index":"f513","./index.js":"f513","./mock-server":"5704","./mock-server.js":"5704","./util":"f457","./util.js":"f457"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="9b71"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},"9fb5":function(e,t,n){"use strict";var r=n("f671");n.n(r).a},b090:function(e,t,n){"use strict";n.r(t);var r=n("18be"),a=n.n(r);n.d(t,"CheckCircleFill",(function(){return a.a}));var o=n("f942"),u=n.n(o);n.d(t,"CloseCircleFill",(function(){return u.a}));var i=n("0887"),s=n.n(i);n.d(t,"ExclamationCircleFill",(function(){return s.a}));var c=n("b3e1"),l=n.n(c);n.d(t,"InfoCircleFill",(function(){return l.a}));var d=n("5745"),p=n.n(d);n.d(t,"CheckCircleOutline",(function(){return p.a}));var f=n("e2b6"),m=n.n(f);n.d(t,"CloseCircleOutline",(function(){return m.a}));var h=n("bea9"),b=n.n(h);n.d(t,"ExclamationCircleOutline",(function(){return b.a}));var v=n("7dca"),y=n.n(v);n.d(t,"GithubOutline",(function(){return y.a}));var g=n("bff2"),O=n.n(g);n.d(t,"InfoCircleOutline",(function(){return O.a}));var k=n("d90a"),j=n.n(k);n.d(t,"HomeOutline",(function(){return j.a}));var _=n("d2dc"),C=n.n(_);n.d(t,"LockOutline",(function(){return C.a}));var w=n("8fae"),M=n.n(w);n.d(t,"MailOutline",(function(){return M.a}));var x=n("92a6"),E=n.n(x);n.d(t,"MobileOutline",(function(){return E.a}));var R=n("0803"),T=n.n(R);n.d(t,"SettingOutline",(function(){return T.a}));var N=n("462e"),A=n.n(N);n.d(t,"SmileOutline",(function(){return A.a}));var S=n("0d7e"),q=n.n(S);n.d(t,"WechatOutline",(function(){return q.a}));var L=n("7c63"),I=n.n(L);n.d(t,"LeftOutline",(function(){return I.a}));var D=n("96a4"),P=n.n(D);n.d(t,"LoadingOutline",(function(){return P.a}));var F=n("65c4"),U=n.n(F);n.d(t,"LogoutOutline",(function(){return U.a}));var $=n("eec3"),K=n.n($);n.d(t,"MenuUnfoldOutline",(function(){return K.a}));var H=n("9033"),V=n.n(H);n.d(t,"MenuFoldOutline",(function(){return V.a}));var z=n("df94"),W=n.n(z);n.d(t,"QqOutline",(function(){return W.a}));var X=n("c5c6"),B=n.n(X);n.d(t,"RightOutline",(function(){return B.a}));var Z=n("bb89"),J=n.n(Z);n.d(t,"UserOutline",(function(){return J.a}));var Q=n("2c88"),Y=n.n(Q);n.d(t,"WeiboOutline",(function(){return Y.a}));var G=n("44c6"),ee=n.n(G);n.d(t,"CheckCircleTwoTone",(function(){return ee.a}));var te=n("82d0"),ne=n.n(te);n.d(t,"CloseCircleTwoTone",(function(){return ne.a}));var re=n("4f4e"),ae=n.n(re);n.d(t,"ExclamationCircleTwoTone",(function(){return ae.a}));var oe=n("09d6"),ue=n.n(oe);n.d(t,"InfoCircleTwoTone",(function(){return ue.a}))},b546:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n("96cf");var r=n("1da1"),a=n("d4ec"),o=n("bee2"),u=n("99de"),i=n("7e84"),s=n("262e"),c=(n("d3b7"),n("5530")),l=n("bc3a"),d=n.n(l),p=(n("a9e3"),n("9129"),n("b64b"),n("25f0"),function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isArray",value:function(e){return Array.isArray(e)}},{key:"isNumber",value:function(e){return"number"==typeof e&&!Number.isNaN(e)}},{key:"isNull",value:function(e){return null==e||""===e||!(!this.isArray(e)||0!==e.length)||!(!this.isObject(e)||0!==Object.keys(e).length)}}]),e}()),f=n("f64c"),m=n("ed3b"),h=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"getMessage",value:function(e){var t="";return e&&(t=e.message),t}},{key:"getCode",value:function(e){var t=0;return e&&(t=e.code),t}}]),e}();h.UNKNOWN_ERROR={code:-1,message:"Unknown ResponseError"},h.OK={code:0,message:"Ok"},h.FAILED={code:1,message:"Failed"},h.NOT_LOGIN={code:10001,message:"Haven't Login"},h.INVALID_ACCOUNT={code:10011,message:"Invalid Account"},h.INVALID_PASSWORD={code:10012,message:"Invalid Password"},h.NOT_IDENTITY={code:10013,message:"Haven't Identity"},h.NOT_FOUND={code:11001,message:"Not Found"},h.NOT_ALLOWED={code:11002,message:"No allowed"},h.NOT_OWNER={code:11003,message:"Not owner"},h.NO_VALIDATION={code:11004,message:"No validation"},h.EXCEPTION={code:2,message:"Unnamed exception"},h.EXPIRED={code:3,message:"Out of time"},h.TOO_MANY_REQUEST={code:4,message:"Too Many Requests"},h.RUN_OUT={code:40001,message:"Something Has run out"},h.NOT_EMPTY={code:5,message:"Content can not be empty"},h.FREEZE_WALLET={code:50001,message:"Wallet is Froze, allowed payment for the time being"},h.ACTION_ALREADY_BE_DONE={code:6,message:"The action you request already be done by other admin"},h.NON_COMPLIANCE={code:7,message:"The case of non-compliance"},h.NOT_IMPLEMENT={code:8,message:"Function not implement"},h.TARGET_FORBIDDEN={code:9,message:"Target be forbidden"};var b=function(){function e(t,n){Object(a.a)(this,e),t||(t=h.OK),this.statusCode=t.code,this.message=t.message,this.data=n||null}return Object(o.a)(e,[{key:"setApiResponse",value:function(e){var t=e.statusCode,n=e.message,r=e.data;return this.statusCode=t,this.message=n,this.data=r,this}},{key:"setError",value:function(e){return this.statusCode=e.code,this.message=e.message,this}},{key:"makeError",value:function(e,t){return this.statusCode=e,this.message=t,this}},{key:"setMessage",value:function(e){return this.message=e,this}},{key:"setData",value:function(e){return this.data=e,this}},{key:"exception",value:function(e){return this.setError(h.EXCEPTION).setMessage(e.message),e.stack&&this.setData(e.stack),this}},{key:"isOk",value:function(){return this.statusCode===h.OK.code}},{key:"showMessage",value:function(){this.isOk()?f.a.success(this.message||h.OK.message):f.a.error(this.message||h.FAILED.message)}},{key:"alertMessage",value:function(){this.isOk()?m.a.success({title:this.message||h.OK.message}):m.a.error({title:this.message||h.FAILED.message})}}]),e}(),v=n("b383"),y=function(){function e(t){Object(a.a)(this,e),this.instance=d.a.create(t),this.instance.defaults.baseURL="/pro-api",this.instance.defaults.timeout=15e3,this.instance.defaults.withCredentials=!0,this.instance.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),this.instance.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}return Object(o.a)(e,[{key:"request",value:function(e){var t=e.uri,n=e.method,r=void 0===n?"get":n,a=e.data,o=e.params,u=e.responseType,i=void 0===u?"json":u,s=e.contentType,l=void 0===s?"json":s,d=e.config,p=d?Object(c.a)({},d):{};return p.params=o,p.data=a,p.responseType=i,p.method=r,p.transformRequest=this.transformRequest(l),p.transformResponse=this.transformResponse(),p.headers=this.transformHeaders(p.headers,l),this.instance(t,p)}},{key:"asyncRequest",value:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.request(t);case 3:return n=e.sent,e.abrupt("return",(new b).setApiResponse(n.data));case 7:return e.prev=7,e.t0=e.catch(0),r=(new b).exception(e.t0),e.abrupt("return",Promise.resolve(r));case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){return this.request(Object(c.a)({uri:e,method:"get"},t))}},{key:"post",value:function(e,t,n){return this.request(Object(c.a)({uri:e,method:"post",data:t},n))}},{key:"put",value:function(e,t,n){return this.request(Object(c.a)({uri:e,method:"put",data:t},n))}},{key:"delete",value:function(e,t){return this.request(Object(c.a)({uri:e,method:"delete"},t))}},{key:"transformHeaders",value:function(e,t){return(e=p.isObject(e)?e:{})["Content-Type"]=this.getContentType(t),e}},{key:"getContentType",value:function(e){switch(e){case"json":return"application/json;charset=utf-8";case"form":return"application/x-www-form-urlencoded";case"file":return"multipart/form-data";default:return"application/json;charset=utf-8"}}},{key:"transformRequest",value:function(e){return function(t){switch(e){case"json":var n=null;return t&&((p.isObject(t)||Array.isArray(t))&&(n=JSON.stringify(t))),n;case"form":return v.stringify(t);case"file":var r=new FormData;if(p.isObject(t))for(var a in t)r.append(a,t[a]);return r;default:return t}}}},{key:"transformResponse",value:function(){return function(e){return"string"==typeof e?JSON.parse(e):e}}}]),e}(),g=function e(){Object(a.a)(this,e)};g.base=new y;var O=function(e){function t(){return Object(a.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,null,[{key:"login",value:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.base.asyncRequest({uri:"/login",method:"post",data:t,contentType:"form"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.base.asyncRequest({uri:"/logout",method:"post"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"test",value:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.base.asyncRequest({uri:"/test",method:"post",params:{a:1},data:{b:2},contentType:"json"});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(g)},bdfc:function(e,t,n){var r={"./index.ts":"0613","./sidebar.ts":"660b"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="bdfc"},c3d5:function(e,t){e.exports="<h1 id=mock-规范>Mock 规范</h1> <ul> <li><a href=#directory>文件结构</a></li> <li><a href=#standard>代码规范</a></li> </ul> <h2 id=h2-iddirectory文件结构h2><h2 id=directory>文件结构</h2></h2> <pre><code>├─account.js                 #账号类接口模拟数据\n├─index.js                   #mock数据合集，启动mock配置\n├─mock-server.js             #启动mock server配置\n├─util.js                    #mock工具类\n└─README.md                  #Mock文件说明</code></pre><h2 id=h2-idstandard代码规范h2><h2 id=standard>代码规范</h2></h2> <ul> <li><p>文件名都采用 kebab-case 的命名方式</p> </li> <li><p>文件名与 api 文件夹下的 ts 文件对应</p> </li> <li><p>xxx.js 模拟数据文件模板</p> </li> </ul> <pre><code class=language-javascript>import Util from &#39;./util&#39;;\n\nexport default[\n    Util.request({\n        uri: &#39;&#39;,\n        method: &#39;&#39;,\n        response: config =&gt; {},\n    }),\n]</code></pre> "},cd49:function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("9655"),n("3d99");var r=n("f64c"),a=n("56cd"),o=n("ed3b"),u=n("3af3"),i=n("2c92"),s=n("27fd"),c=n("83d8"),l=n("a071"),d=n("2fc4"),p=n("5efb"),f=n("bb76"),m=n("4df5"),h=n("a600"),b=n("0c63"),v=n("b558"),y=n("98c5"),g=n("55f1"),O=n("ccb9"),k=n("2b0e");n("7369"),n("2a74"),n("6512"),n("ec29"),n("83d1"),n("8db6"),n("0ab2"),n("e975"),n("104d"),n("d40c"),n("dab2"),n("04e9"),n("a09b"),n("c1e0"),n("4b3e"),n("956a"),n("e70f"),k.a.prototype.$message=r.a,k.a.prototype.$notification=a.a,k.a.prototype.$info=o.a.info,k.a.prototype.$success=o.a.success,k.a.prototype.$error=o.a.error,k.a.prototype.$warning=o.a.warning,k.a.prototype.$confirm=o.a.confirm,k.a.prototype.$form=u.a,k.a.use(i.a),k.a.use(s.a),k.a.use(c.a),k.a.use(l.a),k.a.use(d.a),k.a.use(p.a),k.a.use(f.a),k.a.use(m.b),k.a.use(h.a),k.a.use(u.a),k.a.use(b.a),k.a.use(v.a),k.a.use(y.a),k.a.use(g.a),k.a.use(O.a);var j=(n("5c3a"),n("c1df")),_=n.n(j),C=n("677e"),w=n.n(C);_.a.locale("zh-cn");var M={data:function(){return{zh_CN:w.a}}},x=n("2877"),E=Object(x.a)(M,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a-config-provider",{attrs:{locale:e.zh_CN}},[n("router-view")],1)],1)}),[],!1,null,null,null).exports,R=(n("d3b7"),n("8c4f")),T=(n("96cf"),n("1da1")),N=n("d4ec"),A=n("bee2"),S=n("99de"),q=n("7e84"),L=n("262e"),I=n("9ab4"),D=n("60a3"),P=n("7d46"),F=(n("ac1f"),n("5319"),n("4bb5")),U=n("b546"),$=Object(F.a)("sidebar"),K=function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(S.a)(this,Object(q.a)(t).apply(this,arguments))).userName="",e}return Object(L.a)(t,e),Object(A.a)(t,[{key:"handleCollapsed",value:function(){this.setCollapsed(!this.collapsed)}},{key:"handleMenuClick",value:function(){var e=Object(T.a)(regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=a.length>0&&void 0!==a[0]?a[0]:{}).item,n=t.key,t.keyPath,e.t0=n,e.next="user"===e.t0?5:"setting"===e.t0?6:"logout"===e.t0?7:17;break;case 5:case 6:return e.abrupt("break",17);case 7:return e.next=9,U.a.logout();case 9:if(!(r=e.sent).isOk()){e.next=15;break}return e.next=13,this.$router.replace({name:"login"});case 13:e.next=16;break;case 15:r.alertMessage();case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"created",value:function(){this.userName="Admin"}},{key:"route",get:function(){return this.$route}}]),t}(D.f);Object(I.a)([$.State("collapsed")],K.prototype,"collapsed",void 0),Object(I.a)([$.Mutation("SET_COLLAPSED")],K.prototype,"setCollapsed",void 0);var H=K=Object(I.a)([D.a],K),V=(n("eed8"),Object(x.a)(H,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout-header",{staticClass:"layout-header"},[n("a-icon",{staticClass:"layout-header__trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.handleCollapsed}}),n("a-breadcrumb",{staticClass:"layout-header__breadcrumb"},["home"!==e.$route.name?[n("a-breadcrumb-item",{key:"home"},[n("router-link",{attrs:{to:{name:"home"}}},[e._v(" 首页 ")])],1)]:e._e(),e._l(e.route.matched,(function(t,r){var a=t.name,o=t.meta,u=t.children;return[o&&o.title?n("a-breadcrumb-item",{key:r},[a&&u&&0!==u.length&&r!==e.route.matched.length-1?n("router-link",{attrs:{to:{name:a}}},[e._v(" "+e._s(o.title)+" ")]):n("span",[e._v(" "+e._s(o.title)+" ")])],1):e._e()]}))],2),n("div",{staticClass:"layout-header__right"},[n("a-dropdown",{staticClass:"layout-header__user"},[n("div",[n("a-avatar",{attrs:{icon:"user"}}),n("div",{staticClass:"layout-header__user__name"},[e._v(" "+e._s(e.userName)+" ")])],1),n("a-menu",{staticStyle:{width:"160px"},attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[n("a-menu-item",{key:"user"},[n("a-icon",{attrs:{type:"user"}}),e._v(" 个人中心 ")],1),n("a-menu-item",{key:"setting"},[n("a-icon",{attrs:{type:"setting"}}),e._v(" 个人设置 ")],1),n("a-menu-divider"),n("a-menu-item",{key:"logout"},[n("a-icon",{attrs:{type:"logout"}}),e._v(" 退出登录 ")],1)],1)],1)],1)],1)}),[],!1,null,"20de6d75",null)).exports,z=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("b0c0"),n("6062"),n("2532"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),W=function(e){function t(){return Object(N.a)(this,t),Object(S.a)(this,Object(q.a)(t).apply(this,arguments))}return Object(L.a)(t,e),t}(D.f);Object(I.a)([Object(D.c)({type:Object,required:!0})],W.prototype,"menu",void 0);var X=W=Object(I.a)([D.a],W),B=Object(x.a)(X,(function(e,t){var n=t._c;return n("a-sub-menu",{key:t.props.menu.name},[n("template",{slot:"title"},[t.parent.getMenuIcon(t.props.menu)?n("a-icon",{attrs:{type:t.parent.getMenuIcon(t.props.menu)}}):t._e(),n("span",[t._v(t._s(t.parent.getMenuTitle(t.props.menu)))])],1),t._l(t.parent.getSubMenus(t.props.menu),(function(e){return[t.parent.showMenu(e)?[t.parent.getSubMenus(e)?n("layout-sidebar-menu",{key:e.name,attrs:{menu:e}}):n("a-menu-item",{key:e.name},[t.parent.getMenuIcon(e)?n("a-icon",{attrs:{type:t.parent.getMenuIcon(e)}}):t._e(),n("span",[t._v(t._s(t.parent.getMenuTitle(e)))])],1)]:t._e()]}))],2)}),[],!0,null,null,null).exports,Z=Object(F.a)("sidebar"),J=function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(S.a)(this,Object(q.a)(t).apply(this,arguments))).menuCollapsed=!1,e.selectedMenuKey="",e.openMenuKeys=[],e.tempOpenMenuKeys=[],e}return Object(L.a)(t,e),Object(A.a)(t,[{key:"reloadView",value:function(){}},{key:"onMenuCollapsedChange",value:function(){this.setCollapsed(this.menuCollapsed)}},{key:"onCollapsedChange",value:function(){this.collapsed?(this.tempOpenMenuKeys=Object(z.a)(this.openMenuKeys),this.openMenuKeys=[]):this.openMenuKeys=Object(z.a)(this.tempOpenMenuKeys),this.menuCollapsed=this.collapsed}},{key:"onRouteChange",value:function(){var e=this.route;e.name&&(this.selectedMenuKey=e.name);var t=[];e.matched.forEach((function(n){n.name&&n.name!==e.name&&t.push(n.name)})),this.uniqueOpened?this.openMenuKeys=t:this.openMenuKeys=Object(z.a)(new Set([].concat(Object(z.a)(this.openMenuKeys),t)))}},{key:"onOpenChange",value:function(e){var t=this;if(this.uniqueOpened){var n=e.find((function(e){return!t.openMenuKeys.includes(e)})),r=e;n&&this.rootMenuKeys.includes(n)&&(r=[n]),this.openMenuKeys=r}else this.openMenuKeys=e}},{key:"onClick",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(t.item,t.key),r=void 0===n?"":n;t.keyPath,this.route.name===r?this.reloadView():this.$router.push({name:r},(function(){e.selectedMenuKey=r}),(function(t){e.reloadView()}))}},{key:"showMenu",value:function(e){return this.route.name===e.name||!(e.meta&&e.meta.hidden)}},{key:"isRootMenu",value:function(e){return!e.redirect||!e.children||1!==e.children.length}},{key:"getMenuTitle",value:function(e){return this.showMenu(e)?e.meta&&e.meta.title?e.meta.title:e.path:null}},{key:"getMenuIcon",value:function(e){return e.meta&&e.meta.icon?e.meta.icon:null}},{key:"getSubMenus",value:function(e){var t=this;if(!e.children||0===e.children.length)return null;var n=e.children.filter((function(e){return t.showMenu(e)}));return n.length>0?n:null}},{key:"routes",get:function(){return this.$router.options.routes}},{key:"route",get:function(){return this.$route}},{key:"rootMenuKeys",get:function(){var e=this,t=[];return this.routes.forEach((function(n){e.isRootMenu(n)?e.getSubMenus(n)&&n.name&&t.push(n.name):n.children&&e.getSubMenus(n.children[0])&&n.children[0].name&&t.push(n.children[0].name)})),t}}]),t}(D.f);Object(I.a)([Object(D.b)("reload-view")],J.prototype,"reloadView",null),Object(I.a)([Object(D.g)("menuCollapsed")],J.prototype,"onMenuCollapsedChange",null),Object(I.a)([Z.State("breakpoint")],J.prototype,"breakpoint",void 0),Object(I.a)([Z.State("collapsed")],J.prototype,"collapsed",void 0),Object(I.a)([Object(D.g)("collapsed")],J.prototype,"onCollapsedChange",null),Object(I.a)([Z.State("collapsedWidth")],J.prototype,"collapsedWidth",void 0),Object(I.a)([Z.State("collapsible")],J.prototype,"collapsible",void 0),Object(I.a)([Z.State("defaultCollapsed")],J.prototype,"defaultCollapsed",void 0),Object(I.a)([Z.State("width")],J.prototype,"width",void 0),Object(I.a)([Z.State("theme")],J.prototype,"theme",void 0),Object(I.a)([Z.State("uniqueOpened")],J.prototype,"uniqueOpened",void 0),Object(I.a)([Z.Mutation("SET_COLLAPSED")],J.prototype,"setCollapsed",void 0),Object(I.a)([Object(D.g)("route",{immediate:!0,deep:!0})],J.prototype,"onRouteChange",null);var Q=J=Object(I.a)([Object(D.a)({components:{LayoutSidebarMenu:B}})],J),Y=(n("553e"),Object(x.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout-sider",{staticClass:"layout-sidebar",attrs:{trigger:null,breakpoint:e.breakpoint,"collapsed-width":e.collapsedWidth,collapsible:e.collapsible,"default-collapsed":e.defaultCollapsed,width:e.width,theme:e.theme},model:{value:e.menuCollapsed,callback:function(t){e.menuCollapsed=t},expression:"menuCollapsed"}},[r("div",{staticClass:"layout-sidebar__logo"},[r("img",{attrs:{src:n("9d64"),alt:""}}),r("h1",[e._v("Vue Admin Antd")])]),r("a-menu",{attrs:{mode:"inline",theme:e.theme,"open-keys":e.openMenuKeys,"selected-keys":[e.selectedMenuKey]},on:{openChange:e.onOpenChange,click:e.onClick}},[e._l(e.routes,(function(t){return[e.showMenu(t)?[e.isRootMenu(t)?[e.getSubMenus(t)?r("layout-sidebar-menu",{key:t.name,attrs:{menu:t}}):r("a-menu-item",{key:t.name},[e.getMenuIcon(t)?r("a-icon",{attrs:{type:e.getMenuIcon(t)}}):e._e(),r("span",[e._v(e._s(e.getMenuTitle(t)))])],1)]:[e.getSubMenus(t.children[0])?r("layout-sidebar-menu",{key:t.children[0].name,attrs:{menu:t.children[0]}}):r("a-menu-item",{key:t.children[0].name},[e.getMenuIcon(t.children[0])?r("a-icon",{attrs:{type:e.getMenuIcon(t.children[0])}}):e._e(),r("span",[e._v(e._s(e.getMenuTitle(t.children[0])))])],1)]]:e._e()]}))],2)],1)}),[],!1,null,"5696a1c6",null)).exports,G=function(e){function t(){var e;return Object(N.a)(this,t),(e=Object(S.a)(this,Object(q.a)(t).apply(this,arguments))).isRouterAlive=!0,e.backTopTarget=function(){return window},e}return Object(L.a)(t,e),Object(A.a)(t,[{key:"reload",value:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},{key:"onReloadView",value:function(){this.reload()}},{key:"mounted",value:function(){var e=Object(T.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$refs.layoutContent,this.backTopTarget=function(){return t.$el};case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(D.f);Object(I.a)([Object(D.e)()],G.prototype,"layoutContent",void 0),Object(I.a)([Object(D.d)("reload")],G.prototype,"reload",null);var ee=G=Object(I.a)([Object(D.a)({components:{LayoutFooter:P.a,LayoutHeader:V,LayoutSidebar:Y}})],G),te=(n("9fb5"),Object(x.a)(ee,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticClass:"layout"},[n("layout-sidebar",{on:{"reload-view":e.onReloadView}}),n("a-layout",{staticClass:"layout__container"},[n("layout-header"),n("a-layout-content",{ref:"layoutContent",staticClass:"layout__content"},[n("a-back-top",{staticClass:"layout__back",attrs:{target:e.backTopTarget}}),e.isRouterAlive?n("router-view",{key:e.$route.fullPath,staticClass:"layout__view"}):e._e(),n("layout-footer")],1)],1)],1)}),[],!1,null,"647515af",null)).exports,ne=R.a.prototype.push;R.a.prototype.push=function(e,t,n){return t||n?ne.call(this,e,t,n):ne.call(this,e).catch((function(e){return e}))},k.a.use(R.a);var re=[{path:"/403",name:"403",component:function(){return n.e("runtime").then(n.bind(null,"e409"))},meta:{hidden:!0}},{path:"/404",name:"404",component:function(){return n.e("runtime").then(n.bind(null,"cc89"))},meta:{hidden:!0}},{path:"/500",name:"500",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{hidden:!0}},{path:"/login",name:"login",component:function(){return n.e("runtime").then(n.bind(null,"dc3f"))},meta:{hidden:!0}},{path:"/",redirect:"/login",component:te,children:[{path:"home",name:"home",component:function(){return n.e("runtime").then(n.bind(null,"6511"))},meta:{title:"首页",icon:"home"}}]},{path:"/exception",component:te,redirect:"/exception/403",name:"exception",meta:{title:"异常页",icon:"exclamation-circle"},children:[{path:"403",name:"exception403",component:function(){return n.e("runtime").then(n.bind(null,"e409"))},meta:{title:"403",icon:"exclamation-circle"}},{path:"404",name:"exception404",component:function(){return n.e("runtime").then(n.bind(null,"cc89"))},meta:{title:"404",icon:"exclamation-circle"}},{path:"500",name:"exception500",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"500",icon:"exclamation-circle"}}]},{path:"/menu",component:te,redirect:"/exception/403",name:"menu",meta:{title:"menu"},children:[{path:"menu-1",name:"menu-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-1"},children:[{path:"menu-1-1",name:"menu-1-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-1-1"}},{path:"menu-1-2",name:"menu-1-2",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-1-2"}}]},{path:"menu-2",name:"menu-2",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2"},children:[{path:"menu-2-1",name:"menu-2-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2-1"},children:[{path:"menu-2-1-1",name:"menu-2-1-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2-1-1"}}]}]}]},{path:"/menu2",component:te,redirect:"/exception/403",name:"menu2",meta:{title:"menu2"},children:[{path:"menu-1",name:"menu2-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu2-1"},children:[{path:"menu-1-1",name:"menu2-1-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu2-1-1"}},{path:"menu-1-2",name:"menu2-1-2",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu2-1-2"}}]},{path:"menu-2",name:"menu2-2",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2"},children:[{path:"menu-2-1",name:"menu2-2-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2-1"},children:[{path:"menu-2-1-1",name:"menu2-2-1-1",component:function(){return n.e("runtime").then(n.bind(null,"6c05"))},meta:{title:"menu-2-1-1"}}]}]}]}],ae=new R.a({routes:re});ae.beforeEach((function(e,t,n){0!==e.matched.length?n():n({name:"404"})}));var oe=ae,ue=n("0613"),ie=n("5530"),se={userName:{pattern:/[A-Za-z0-9_\-\u4e00-\u9fa5]{4,}/,message:"至少 4 位字符，可含字母、数字、中文、下划线"},password:{pattern:/^[a-zA-Z0-9_]{6,}$/,message:"至少 6 位密码，可含字母、数字、下划线"},mobile:{pattern:/^1[3456789]\d{9}$/,message:"手机号格式错误"},fixedPhone:{pattern:/^((0[0-9]{2,3}-)+([0-9]{7,8})+(-[0-9]{1,4})?$)/,message:"座机号格式错误"},email:{pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,message:"邮箱格式错误"},url:{pattern:/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,message:"可含字母、数字、中文、下划线"},ip:{pattern:/(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,message:"IP 地址格式错误"},idCard:{pattern:/\d{17}[\d|x]|\d{15}/,message:"身份证号格式错误"},chinese:{pattern:/[\u4e00-\u9fa5]/,message:"仅含中文字符"},qq:{pattern:/[1-9]([0-9]{5;11})/,message:"QQ 号格式错误"},int:{pattern:/-?[1-9]\d*/,message:"请输入整数"},plusInt:{pattern:/[1-9]\d*/,message:"请输入正整数"},minusInt:{pattern:/-[1-9]\d*/,message:"请输入负整数"},float2:{pattern:/^(-)?(0|[1-9]\d*)(\s|$|\.\d{1,2}\b)/,message:"只能输入数字，最多两位小数"}},ce={validator:function(e,t,n){t&&(se.mobile.pattern.test(t)||se.email.pattern.test(t)?n():n("手机或邮箱格式错误")),n()}},le=Object(ie.a)({},se,{mobileOrEmail:ce});k.a.prototype.$rules=le,k.a.config.productionTip=!1,k.a.config.devtools=!1,n("f513").default.mockXHR(),new k.a({router:oe,store:ue.default,render:function(e){return e(E)}}).$mount("#app")},eed8:function(e,t,n){"use strict";var r=n("8876");n.n(r).a},f104:function(e,t,n){},f457:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("ade3"),a=n("d4ec"),o=n("bee2"),u=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"request",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.uri,r=t.method,a=void 0===r?"get":r,o=t.response,u=void 0===o?function(t){return e.responseOk(t)}:o;if(n)return{uri:n,method:a,response:u}}},{key:"getRequestUri",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.uri;return t||void 0}},{key:"getRequestMethod",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method;return t||void 0}},{key:"getRequestResponse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.response;return t||void 0}},{key:"response",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.statusCode,n=void 0===t?0:t,r=e.message,a=void 0===r?"OK":r,o=e.data,u=void 0===o?null:o;return{statusCode:n,message:a,data:u}}},{key:"responseOk",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.response({data:e})}},{key:"responseList",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{id:"@id"},n=e.body,a=n.pageSize,o=void 0===a?10:a,u=n.pageNo,i=void 0===u?1:u,s=3.5*o,c=s/i>o?o:s-o*(i-1);return this.responseOk(Object(r.a)({total:s,pageNo:i,pageSize:o,size:c},"list|".concat(c),[t]))}},{key:"responseError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Failed",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.response({statusCode:1,message:e,data:t})}}]),e}()},f513:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c})),n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("4de4"),n("0481"),n("caad"),n("d81d"),n("4069"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("ddb0");var r=n("d4ec"),a=n("bee2"),o=n("96eb"),u=n.n(o),i=n("f457"),s=n("b383"),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"mockXHR",value:function(){u.a.XHR.prototype.proxy_send=u.a.XHR.prototype.send,u.a.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send.apply(this,arguments)};var e=!0,t=!1,n=void 0;try{for(var r,a=this.api[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=r.value,s=i.default.getRequestUri(o),c=i.default.getRequestMethod(o),l=i.default.getRequestResponse(o);s&&u.a.mock(new RegExp(s),c||"get",this._XHR2ExpressReqWrap(l))}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}},{key:"_XHR2ExpressReqWrap",value:function(e){return function(t){var n;if(e instanceof Function){var r,a=t.body,o=t.type,i=t.url;try{r=JSON.parse(a)}catch(e){r=s.parse(a)}n=e({method:o,body:r,query:s.parse(i.split("?")[1])})}else n=e;return u.a.mock(n)}}},{key:"ignoreFiles",get:function(){return["index.js","mock-server.js","util.js"]}},{key:"ignoreFileNames",get:function(){return this.ignoreFiles.map((function(e){return e.replace(/\.js/g,"")}))}},{key:"apiFileNames",get:function(){var e=this;return n("3328").keys().map((function(e){return e.replace(/(\.\/|\.js)/g,"")})).filter((function(t){return!e.ignoreFileNames.includes(t)}))}},{key:"api",get:function(){return this.apiFileNames.map((function(e){return n("9b71")("./".concat(e)).default})).flat().filter((function(e){return i.default.getRequestUri(e)}))}},{key:"fakeData",get:function(){return this.api.map((function(e){var t=i.default.getRequestUri(e),n=i.default.getRequestMethod(e),r=i.default.getRequestResponse(e);if(t)return{url:new RegExp("^".concat(Object({NODE_ENV:"production",VUE_APP_BASE_API:"/pro-api",VUE_APP_MOCK:"Mock",BASE_URL:""}).VUE_APP_MOCK_CONTEXT).concat(t,"$")),type:n||"get",response:function(e,t){t.json(u.a.mock(r instanceof Function?r(e,t):r))}}})).filter(Boolean)}}]),e}()},f671:function(e,t,n){}});