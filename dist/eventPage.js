!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={token:"KE923jddu#@(DFDJiw1dI$*FYHHHHH",willbeServer:"http://47.107.35.8:8281/spider-oper"}},function(e,t,r){"use strict";var n,a,o=l(r(2)),s=(n=d(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i();case 1:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),i=(a=d(o.default.mark(function e(){var t,r,n,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=6,b();case 6:if(r=e.sent,t=[].concat(f(t),f(r.result.list)),!(1<r.result.maxPage)){e.next=19;break}console.log("turnPage"),n=2;case 11:if(n<=r.result.maxPage)return e.next=14,b(n);e.next=19;break;case 14:a=e.sent,t=[].concat(f(t),f(a.result.list));case 16:n++,e.next=11;break;case 19:return t.splice(1,0,t[0]),t.forEach(function(e,r){chrome.tabs.getSelected(null,function(n){c.default.sleep(3e3);var a=n.id;chrome.tabs.update(a,{url:e.url,selected:!0}),chrome.tabs.sendRequest(a,{greeting:"getArctilUrl",isLast:t.length==r+1},function(e){})})}),e.abrupt("return");case 22:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)}),u=(d(o.default.mark(function e(){var t,r,n=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return(t=e.sent).result.list.forEach(function(){var e=d(o.default.mark(function e(t,r){var a,s,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s=null,i="",e.next=5,$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+t.userId,success:function(e){e=JSON.parse(e),s=Object.assign({},e)}});case 5:return s.data.desc&&JSON.parse(s.data.desc).blocks.forEach(function(e,t){e.text&&(i+=e.text)}),a.darenId=t.userId,a.darenName=s.data.darenNick,a.fansCount=s.data.fansCount,a.agencyName=s.data.darenAgency.agencyName,a.agencyUrl="https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId="+s.data.darenAgency.agencyID,a.vUrl="https://v.taobao.com/v/home/?spm=a21xh.8861523.801.1.5f024accJ0p9KH&userId="+t.userId,a.scoreDarenCapacity=s.data.darenScore,a.orderTakingRate=s.data.darenMissionData.receiveRate+"%",a.orderTakingResponseTime=s.data.darenMissionData.responseTime,a.serviceTotalCustomer=s.data.darenMissionData.cooperateSellerCount,a.serviceTotalQuantity=s.data.darenMissionData.completeMission,a.serviceType=s.data.darenMissionData.servType,a.serviceDomain=s.data.userId,a.introduction=i,a.identityType="",a.serviceScore=s.data.darenMissionData.avgScore,a.orderTakingFinishRate=s.data.darenMissionData.completeRate+"%",e.next=25,$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskDetail.wb",beforeSend:function(e){e.setRequestHeader("token",u.default.token)},type:"post",data:a,success:function(e){console.log("post",e)}});case 25:c.default.sleep(600*Math.random()+200);case 26:case"end":return e.stop()}},e,n)}));return function(t,r){return e.apply(this,arguments)}}()),e.abrupt("return");case 7:if(r<=t.result.maxPage)return e.next=10,m(r);e.next=16;break;case 10:e.sent.result.list.forEach(function(){var e=d(o.default.mark(function e(t,r){var a,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s=null,e.next=4,$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+t.userId,success:function(e){e=JSON.parse(e),s=Object.assign({},e)}});case 4:return a.darenId=t.userId,a.darenName=s.data.darenNick,a.fansCount=s.data.fansCount,a.agencyName=s.data.darenAgency.agencyName,a.agencyUrl="https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId="+s.data.darenAgency.agencyID,a.vUrl="",a.scoreDarenCapacity=s.data.darenScore,a.orderTakingRate=s.data.darenMissionData.receiveRate+"%",a.orderTakingResponseTime=s.data.darenMissionData.responseTime,a.serviceTotalCustomer=s.data.darenMissionData.cooperateSellerCount,a.serviceTotalQuantity=s.data.darenMissionData.completeMission,a.serviceType=s.data.darenMissionData.servType,a.serviceDomain=s.data.userId,a.introduction="",a.identityType="",a.serviceScore=s.data.darenMissionData.avgScore,a.orderTakingFinishRate=s.data.darenMissionData.completeRate+"%",e.next=23,$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskDetail.wb",beforeSend:function(e){e.setRequestHeader("token",u.default.token)},type:"post",data:a,success:function(e){console.log("post",e)}});case 23:case"end":return e.stop()}},e,n)}));return function(t,r){return e.apply(this,arguments)}}()),r==t.result.maxPage&&console.log("v task done, maxPage is "+t.result.maxPage);case 13:r++,e.next=7;break;case 16:e.next=19;break;case 18:console.log("v task done, maxPage is 1");case 19:case"end":return e.stop()}},e,this)})),l(r(0))),c=l(r(5));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,o){try{var s=t[a](o),i=s.value}catch(a){return void r(a)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}function f(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}chrome.webRequest.onBeforeSendHeaders.addListener(function(e){if("xmlhttprequest"===e.type){for(var t=!1,r=0;r<e.requestHeaders.length;++r)if("Referer"===e.requestHeaders[r].name){t=!0,e.requestHeaders[r].value="https://v.taobao.com/";break}return t||e.requestHeaders.push({name:"Referer",value:"https://v.taobao.com/"}),{requestHeaders:e.requestHeaders}}},{urls:["https://*.taobao.com/*"]},["blocking","requestHeaders","extraHeaders"]);var p=[],v=1,h=-1,y="KE923jddudk3FYjWedkHH",g=void 0;function m(e){var t=1800*Math.random()+200;c.default.sleep(t);var r=e||1;return new Promise(function(e,t){$.ajax({url:u.default.willbeServer+"/tb/v/getAllVTaskDarenIds.wb?page="+r+"&pageSize=500",beforeSend:function(e){e.setRequestHeader("token",u.default.token)},success:function(t){e(t)}})})}function b(e){var t=e||1;return new Promise(function(e,r){$.ajax({url:u.default.willbeServer+"/tb/front/getDarenArticleUrl.wb?page="+t+"&pageSize=20",beforeSend:function(e){e.setRequestHeader("token",u.default.token)},success:function(t){e(t)}})})}chrome.browserAction.onClicked.addListener(function(e){s()}),chrome.runtime.onMessage.addListener(function(e,t,r){"sendDarenPage"===e.greeting&&(p.includes(e.darenPageUrl)||(p=[].concat(f(p),[e.darenPageUrl])),e.islast&&(console.log("开始打开达人首页爬数据.共有"+p.length+"个达人"),p.forEach(function(e,t){var r;chrome.tabs.getSelected(null,(r=d(o.default.mark(function t(r){var n;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c.default.sleep(3e3),n=r.id,chrome.tabs.update(n,{url:e,selected:!0}),c.default.sleep(300);case 4:case"end":return t.stop()}},t,this)})),function(e){return r.apply(this,arguments)}))})),r({jj:"kjdsjfd"})),"postDarenData"==e.greeting&&$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskDetail.wb",type:"post",data:e.data,success:function(e){console.log("post 达人首页数据 结果："+e)}}),"VSCmission"==e.greeting&&chrome.tabs.getSelected(null,function(e){var t=this;g||(g=e.id),w(v,20).then(function(e){var r;e.result.list.forEach((r=d(o.default.mark(function r(n,a){var s,i,u,c,l,d,f,p,y,m,b,w,S,T,M,j,I;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=a==e.result.list.length-1,i={darenId:n.darenId,darenName:n.darenName,vUrl:""},u={darenId:n.darenId},c={darenId:n.darenId,statType:1},l={darenId:n.darenId,statType:2},d={darenId:n.darenId,statType:3},t.next=8,x(n.darenId);case 8:if(!(f=t.sent)){t.next=98;break}if(i.fansCount=f?f.fansCount:0,i.agencyName=f&&f.darenAgency&&f.darenAgency.agencyName?f.darenAgency.agencyName:0,i.agencyUrl=f&&f.darenAgency&&f.darenAgency.agencyID?"https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.6a6f6b6fpgjIgW&userId="+f.darenAgency.agencyID:"",i.scoreDarenCapacity=f?f.darenScore:0,i.orderTakingRate=f&&f.darenMissionData&&f.darenMissionData.receiveRate?f.darenMissionData.receiveRate:"",i.orderTakingResponseTime=f&&f.darenMissionData&&f.darenMissionData.responseTime?f.darenMissionData.responseTime:"",i.serviceTotalCustomer=f&&f.darenMissionData&&f.darenMissionData.cooperateSellerCount?f.darenMissionData.cooperateSellerCount:0,i.serviceTotalQuantity=f&&f.darenMissionData&&f.darenMissionData.completeMission?f.darenMissionData.completeMission:"",i.serviceType=f&&f.darenMissionData&&f.darenMissionData.servType?f.darenMissionData.servType:"",i.serviceDomain=f?f.area:0,i.introduction="",!f||!f.desc){t.next=47;break}if(!f.desc.match(/^{(.*)}$/)){t.next=44;break}for(y=!(p=!0),m=void 0,t.prev=26,b=JSON.parse(f.desc).blocks[Symbol.iterator]();!(p=(w=b.next()).done);p=!0)S=w.value,i.introduction+=S.text;t.next=34;break;case 30:t.prev=30,t.t0=t.catch(26),y=!0,m=t.t0;case 34:t.prev=34,t.prev=35,!p&&b.return&&b.return();case 37:if(t.prev=37,y)throw m;t.next=40;break;case 40:return t.finish(37);case 41:return t.finish(34);case 42:t.next=45;break;case 44:i.introduction+=f.desc;case 45:t.next=48;break;case 47:console.log(a+" unexpected in json");case 48:return i.identityType="",i.serviceScore=f&&f.darenMissionData&&f.darenMissionData.avgScore?f.darenMissionData.avgScore:"",i.orderTakingFinishRate=f&&f.darenMissionData&&f.darenMissionData.completeRate?f.darenMissionData.completeRate:"",t.next=53,D(n.darenId);case 53:return T=t.sent,i.contentPub7Days=T.result&&T.result.publish?T.result.publish:0,i.contentBrowse7Days=T.result&&T.result.text_pv?T.result.text_pv:0,i.contentGuide7Days=T.result&&T.result.ipv?T.result.ipv:0,i.contentLiveBrowse7Days=T.result&&T.result.live_pv?T.result.live_pv:0,i.contentVideoBrowse7Days=T.result&&T.result.video_pv?T.result.video_pv:0,c.contentPub=T.result&&T.result.publish?T.result.publish:0,c.contentBrowse=T.result&&T.result.text_pv?T.result.text_pv:0,c.contentGuide=T.result&&T.result.ipv?T.result.ipv:0,c.contentLiveBrowse=T.result&&T.result.live_pv?T.result.live_pv:0,c.contentVideoBrowse=T.result&&T.result.video_pv?T.result.video_pv:0,t.next=66,D(n.darenId,30);case 66:return M=t.sent,i.contentPub30Days=M.result&&M.result.publish?M.result.publish:0,i.contentBrowse30Days=M.result&&M.result.text_pv?M.result.text_pv:0,i.contentGuide30Days=M.result&&M.result.ipv?M.result.ipv:0,i.contentLiveBrowse30Days=M.result&&M.result.live_pv?M.result.live_pv:0,i.contentVideoBrowse30Days=M.result&&M.result.video_pv?M.result.video_pv:0,l.contentPub=M.result&&M.result.publish?M.result.publish:0,l.contentBrowse=M.result&&M.result.text_pv?M.result.text_pv:0,l.contentGuide=M.result&&M.result.ipv?M.result.ipv:0,l.contentLiveBrowse=M.result&&M.result.live_pv?M.result.live_pv:0,l.contentVideoBrowse=M.result&&M.result.video_pv?M.result.video_pv:0,t.next=79,D(n.darenId,90);case 79:return j=t.sent,i.contentPub90Days=j.result&&j.result.publish?j.result.publish:0,i.contentBrowse90Days=j.result&&j.result.text_pv?j.result.text_pv:0,i.contentGuide90Days=j.result&&j.result.ipv?j.result.ipv:0,i.contentLiveBrowse90Days=j.result&&j.result.live_pv?j.result.live_pv:0,i.contentVideoBrowse90Days=j.result&&j.result.video_pv?j.result.video_pv:0,d.contentPub=j.result&&j.result.publish?j.result.publish:0,d.contentBrowse=j.result&&j.result.text_pv?j.result.text_pv:0,d.contentGuide=j.result&&j.result.ipv?j.result.ipv:0,d.contentLiveBrowse=j.result&&j.result.live_pv?j.result.live_pv:0,d.contentVideoBrowse=j.result&&j.result.video_pv?j.result.video_pv:0,t.next=92,k(n.darenId);case 92:return I=t.sent,u=Object.assign({},u,I),t.next=96,_(i,u,c,l,d,s);case 96:t.next=99;break;case 98:s&&(v<h?(v++,chrome.tabs.sendRequest(g,{greeting:"vm-turnpage",page:v})):v==h&&(h=-(v=1)));case 99:case"end":return t.stop()}},r,t,[[26,30,34,42],[35,,37,41]])})),function(e,t){return r.apply(this,arguments)}))}).catch(function(e){console.log("getDarenId error",e)})})});var w=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;return new Promise(function(r,n){$.ajax({url:u.default.willbeServer+"/tb/v/getAllVTaskDarenIds.wb",headers:{token:y},data:{page:e,pageSize:t},success:function(e){0==e.status?(h<=0&&(h=e.result.maxPage),r(e)):(h=-1,n(e.msg))},erroe:function(e){h=-1,n(e.msg)}})})},x=function(e){return new Promise(function(t,r){try{$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+e+"&spm=a21xh.11312869.industryArea_0_30008_darenCol.2.75a8627fK87XrV&_ksTS=1550107520153_17",success:function(e){0==(e=JSON.parse(e)).status?t(e.data):t(null)},error:function(e){t(null)}})}catch(e){r(e)}})},D=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:7;return new Promise(function(r,n){$.ajax({url:"https://v.taobao.com/micromission/GetDarenContentStatistic.do?userId="+e+"&cycle="+t+"&_ksTS=1548233873983_143",success:function(e){0==(e=JSON.parse(e)).status?r(e.data):n(e.msg)},error:function(e){n(e.msg)}})})},_=function(e,t,r,n,a){var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskDetail.wb",type:"post",async:!1,headers:{token:y,"Content-Type":"application/x-www-form-urlencoded"},data:e,success:function(e){}}),$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskFans.wb",type:"post",async:!1,headers:{token:y,"Content-Type":"application/json"},data:JSON.stringify(t),success:function(e){}}),$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:y,"Content-Type":"application/x-www-form-urlencoded"},data:r,success:function(e){}}),$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:y,"Content-Type":"application/x-www-form-urlencoded"},data:n,success:function(e){}}),$.ajax({url:u.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:y,"Content-Type":"application/x-www-form-urlencoded"},data:a,success:function(e){},error:function(){}}),o&&v<h?(v++,chrome.tabs.sendRequest(g,{greeting:"vm-turnpage",page:v})):o&&v==h&&(h=-(v=1))},k=function(e){return new Promise(function(t,r){$.ajax({url:"https://v.taobao.com/micromission/daren/qry_fans_portrait.do?userId="+e+"&_ksTS=1548399407613_101",success:function(e){0==(e=JSON.parse(e)).status?t(e.data.fansFeature):r(e.msg)},error:function(e){r(e.msg)}})})}},function(e,t,r){e.exports=r(3)},function(e,t,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&0<=Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(4),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{(l=t.regeneratorRuntime=c?e.exports:{}).wrap=w;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",h={},y={};y[s]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==n&&a.call(m,s)&&(y=m);var b=k.prototype=D.prototype=Object.create(y);_.prototype=b.constructor=k,k.constructor=_,k[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},S(T.prototype),T.prototype[i]=function(){return this},l.AsyncIterator=T,l.async=function(e,t,r,n){var a=new T(w(e,t,r,n));return l.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(b),b[u]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var o=this.tryEntries.length-1;0<=o;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=a.call(s,"catchLoc"),c=a.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}function w(e,t,r,n){var a,o,s,i,u=t&&t.prototype instanceof D?t:D,c=Object.create(u.prototype),l=new P(n||[]);return c._invoke=(a=e,o=r,s=l,i=d,function(e,t){if(i===p)throw new Error("Generator is already running");if(i===v){if("throw"===e)throw t;return R()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=M(r,s);if(n){if(n===h)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(i===d)throw i=v,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);i=p;var u=x(a,o,s);if("normal"===u.type){if(i=s.done?v:f,u.arg===h)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(i=v,s.method="throw",s.arg=u.arg)}}),c}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function D(){}function _(){}function k(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function T(e){var t;this._invoke=function(r,n){function o(){return new Promise(function(t,o){!function t(r,n,o,s){var i=x(e[r],e,n);if("throw"!==i.type){var u=i.arg,c=u.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,s)},function(e){t("throw",e,o,s)}):Promise.resolve(c).then(function(e){u.value=e,o(u)},s)}s(i.arg)}(r,n,t,o)})}return t=t?t.then(o,o):o()}}function M(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,M(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=x(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={$http:function(e,t){return new Promise(function(r,n){var a=new XMLHttpRequest;a.open(e,t,!0),a.onreadystatechange=function(){if(4==a.readyState){var e=JSON.parse(a.responseText);r(e)}},a.send()})},sleep:function(e){for(var t=new Date,r=t.getTime()+e;;)if((t=new Date).getTime()>r)return},getDateRange:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=(new Date).getTime(),r=new Date(t-24*e*60*60*1e3),n=r.getMonth()+1;return n=9<n?n:"0"+n,r.getFullYear()+"-"+n+"-"+r.getDate()}}}]);