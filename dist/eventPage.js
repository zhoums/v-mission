!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.darenCateTypeList=[701,704],t.TWCateTypeList=[801],t.darenFansCountList=["100万以上","50-100万","30-50万","10-30万","10万以下"],t.darenRoleList=["美搭","美妆个护","居家","美食","母婴","型男","数码科技","运动","汽车","文化娱乐","萌宠","园艺","动漫","星座","摄影","游戏","旅游","其他"],t.darenChannel=["微淘","淘宝头条","有好货","必买清单","ifashion","每日好店","装备天地","酷玩星球","全球时尚","美妆学院","极有家","汇吃"],t.cateType=[602,601,603,604],t.vedioCateType=["店铺故事","使用评测","清单盘点","教程教学"],t.default={token:"KE923jddu#@(DFDJiw1dI$*FYHHHHH",willbeServer:"http://47.107.35.8:8281/spider-oper"}},function(e,t,r){"use strict";var n,a,o=d(r(2)),s=(n=f(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i();case 1:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),i=(a=f(o.default.mark(function e(){var t,r,n,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=6,x();case 6:if(r=e.sent,t=[].concat(p(t),p(r.result.list)),!(1<r.result.maxPage)){e.next=19;break}console.log("turnPage"),n=2;case 11:if(n<=r.result.maxPage)return e.next=14,x(n);e.next=19;break;case 14:a=e.sent,t=[].concat(p(t),p(a.result.list));case 16:n++,e.next=11;break;case 19:return t.splice(1,0,t[0]),t.forEach(function(e,r){chrome.tabs.getSelected(null,function(n){l.default.sleep(3e3);var a=n.id;chrome.tabs.update(a,{url:e.url,selected:!0}),chrome.tabs.sendRequest(a,{greeting:"getArctilUrl",isLast:t.length==r+1},function(e){})})}),e.abrupt("return");case 22:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)}),u=(f(o.default.mark(function e(){var t,r,n=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return(t=e.sent).result.list.forEach(function(){var e=f(o.default.mark(function e(t,r){var a,s,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s=null,i="",e.next=5,$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+t.userId,success:function(e){e=JSON.parse(e),s=Object.assign({},e)}});case 5:return s.data.desc&&JSON.parse(s.data.desc).blocks.forEach(function(e,t){e.text&&(i+=e.text)}),a.darenId=t.userId,a.darenName=s.data.darenNick,a.fansCount=s.data.fansCount,a.agencyName=s.data.darenAgency.agencyName,a.agencyUrl="https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId="+s.data.darenAgency.agencyID,a.vUrl="https://v.taobao.com/v/home/?spm=a21xh.8861523.801.1.5f024accJ0p9KH&userId="+t.userId,a.scoreDarenCapacity=s.data.darenScore,a.orderTakingRate=s.data.darenMissionData.receiveRate+"%",a.orderTakingResponseTime=s.data.darenMissionData.responseTime,a.serviceTotalCustomer=s.data.darenMissionData.cooperateSellerCount,a.serviceTotalQuantity=s.data.darenMissionData.completeMission,a.serviceType=s.data.darenMissionData.servType,a.serviceDomain=s.data.userId,a.introduction=i,a.identityType="",a.serviceScore=s.data.darenMissionData.avgScore,a.orderTakingFinishRate=s.data.darenMissionData.completeRate+"%",e.next=25,$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskDetail.wb",beforeSend:function(e){e.setRequestHeader("token",c.default.token)},type:"post",data:a,success:function(e){console.log("post",e)}});case 25:l.default.sleep(600*Math.random()+200);case 26:case"end":return e.stop()}},e,n)}));return function(t,r){return e.apply(this,arguments)}}()),e.abrupt("return");case 7:if(r<=t.result.maxPage)return e.next=10,b(r);e.next=16;break;case 10:e.sent.result.list.forEach(function(){var e=f(o.default.mark(function e(t,r){var a,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s=null,e.next=4,$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+t.userId,success:function(e){e=JSON.parse(e),s=Object.assign({},e)}});case 4:return a.darenId=t.userId,a.darenName=s.data.darenNick,a.fansCount=s.data.fansCount,a.agencyName=s.data.darenAgency.agencyName,a.agencyUrl="https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.14c46b6fNZot7a&userId="+s.data.darenAgency.agencyID,a.vUrl="",a.scoreDarenCapacity=s.data.darenScore,a.orderTakingRate=s.data.darenMissionData.receiveRate+"%",a.orderTakingResponseTime=s.data.darenMissionData.responseTime,a.serviceTotalCustomer=s.data.darenMissionData.cooperateSellerCount,a.serviceTotalQuantity=s.data.darenMissionData.completeMission,a.serviceType=s.data.darenMissionData.servType,a.serviceDomain=s.data.userId,a.introduction="",a.identityType="",a.serviceScore=s.data.darenMissionData.avgScore,a.orderTakingFinishRate=s.data.darenMissionData.completeRate+"%",e.next=23,$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskDetail.wb",beforeSend:function(e){e.setRequestHeader("token",c.default.token)},type:"post",data:a,success:function(e){console.log("post",e)}});case 23:case"end":return e.stop()}},e,n)}));return function(t,r){return e.apply(this,arguments)}}()),r==t.result.maxPage&&console.log("v task done, maxPage is "+t.result.maxPage);case 13:r++,e.next=7;break;case 16:e.next=19;break;case 18:console.log("v task done, maxPage is 1");case 19:case"end":return e.stop()}},e,this)})),r(0)),c=d(u),l=d(r(5));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,o){try{var s=t[a](o),i=s.value}catch(a){return void r(a)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}function p(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}chrome.webRequest.onBeforeSendHeaders.addListener(function(e){if("xmlhttprequest"===e.type){for(var t=!1,r=0;r<e.requestHeaders.length;++r)if("Referer"===e.requestHeaders[r].name){t=!0,e.requestHeaders[r].value="https://v.taobao.com/";break}return t||e.requestHeaders.push({name:"Referer",value:"https://v.taobao.com/"}),{requestHeaders:e.requestHeaders}}},{urls:["https://*.taobao.com/*"]},["blocking","requestHeaders","extraHeaders"]);var v=[],h=1,y=-1,m="KE923jddudk3FYjWedkHH",g=void 0;function b(e){var t=1800*Math.random()+200;l.default.sleep(t);var r=e||1;return new Promise(function(e,t){$.ajax({url:c.default.willbeServer+"/tb/v/getAllVTaskDarenIds.wb?page="+r+"&pageSize=500",beforeSend:function(e){e.setRequestHeader("token",c.default.token)},success:function(t){e(t)}})})}function x(e){var t=e||1;return new Promise(function(e,r){$.ajax({url:c.default.willbeServer+"/tb/front/getDarenArticleUrl.wb?page="+t+"&pageSize=20",beforeSend:function(e){e.setRequestHeader("token",c.default.token)},success:function(t){e(t)}})})}chrome.browserAction.onClicked.addListener(function(e){s()}),chrome.runtime.onMessage.addListener(function(e,t,r){"sendDarenPage"===e.greeting&&(v.includes(e.darenPageUrl)||(v=[].concat(p(v),[e.darenPageUrl])),e.islast&&(console.log("开始打开达人首页爬数据.共有"+v.length+"个达人"),v.forEach(function(e,t){var r;chrome.tabs.getSelected(null,(r=f(o.default.mark(function t(r){var n;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:l.default.sleep(3e3),n=r.id,chrome.tabs.update(n,{url:e,selected:!0}),l.default.sleep(300);case 4:case"end":return t.stop()}},t,this)})),function(e){return r.apply(this,arguments)}))})),r({jj:"kjdsjfd"})),"postDarenData"==e.greeting&&$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskDetail.wb",type:"post",data:e.data,success:function(e){console.log("post 达人首页数据 结果："+e)}}),"VSCmission"==e.greeting&&chrome.tabs.getSelected(null,function(e){var t=this;g||(g=e.id),M(h,20).then(function(e){var r;e.result.list.forEach((r=f(o.default.mark(function r(n,a){var s,i,u,c,l,d;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:s=a==e.result.list.length-1,i={darenId:n.darenId,darenName:n.darenName,vUrl:""},u={darenId:n.darenId},c={darenId:n.darenId,statType:1},l={darenId:n.darenId,statType:2},d={darenId:n.darenId,statType:3},L(n.darenId).then(function(){var e=f(o.default.mark(function e(r){var f,p,v,m,b,x,w,k,_,T;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=89;break}if(i.fansCount=r?r.fansCount:0,i.agencyName=r&&r.darenAgency&&r.darenAgency.agencyName?r.darenAgency.agencyName:0,i.agencyUrl=r&&r.darenAgency&&r.darenAgency.agencyID?"https://v.taobao.com/v/home?spm=a21xh.11250901.0.0.6a6f6b6fpgjIgW&userId="+r.darenAgency.agencyID:"",i.scoreDarenCapacity=r?r.darenScore:0,i.orderTakingRate=r&&r.darenMissionData&&r.darenMissionData.receiveRate?r.darenMissionData.receiveRate:"",i.orderTakingResponseTime=r&&r.darenMissionData&&r.darenMissionData.responseTime?r.darenMissionData.responseTime:"",i.serviceTotalCustomer=r&&r.darenMissionData&&r.darenMissionData.cooperateSellerCount?r.darenMissionData.cooperateSellerCount:0,i.serviceTotalQuantity=r&&r.darenMissionData&&r.darenMissionData.completeMission?r.darenMissionData.completeMission:"",i.serviceType=r&&r.darenMissionData&&r.darenMissionData.servType?r.darenMissionData.servType:"",i.serviceDomain=r?r.area:0,i.introduction="",!r||!r.desc){e.next=38;break}if(!r.desc.match(/^{(.*)}$/)){e.next=35;break}for(p=!(f=!0),v=void 0,e.prev=17,m=JSON.parse(r.desc).blocks[Symbol.iterator]();!(f=(b=m.next()).done);f=!0)x=b.value,i.introduction+=x.text;e.next=25;break;case 21:e.prev=21,e.t0=e.catch(17),p=!0,v=e.t0;case 25:e.prev=25,e.prev=26,!f&&m.return&&m.return();case 28:if(e.prev=28,p)throw v;e.next=31;break;case 31:return e.finish(28);case 32:return e.finish(25);case 33:e.next=36;break;case 35:i.introduction+=r.desc;case 36:e.next=39;break;case 38:console.log(a+" unexpected in json");case 39:return i.identityType="",i.serviceScore=r&&r.darenMissionData&&r.darenMissionData.avgScore?r.darenMissionData.avgScore:"",i.orderTakingFinishRate=r&&r.darenMissionData&&r.darenMissionData.completeRate?r.darenMissionData.completeRate:"",e.next=44,P(n.darenId);case 44:return w=e.sent,i.contentPub7Days=w.result&&w.result.publish?w.result.publish:0,i.contentBrowse7Days=w.result&&w.result.text_pv?w.result.text_pv:0,i.contentGuide7Days=w.result&&w.result.ipv?w.result.ipv:0,i.contentLiveBrowse7Days=w.result&&w.result.live_pv?w.result.live_pv:0,i.contentVideoBrowse7Days=w.result&&w.result.video_pv?w.result.video_pv:0,c.contentPub=w.result&&w.result.publish?w.result.publish:0,c.contentBrowse=w.result&&w.result.text_pv?w.result.text_pv:0,c.contentGuide=w.result&&w.result.ipv?w.result.ipv:0,c.contentLiveBrowse=w.result&&w.result.live_pv?w.result.live_pv:0,c.contentVideoBrowse=w.result&&w.result.video_pv?w.result.video_pv:0,e.next=57,P(n.darenId,30);case 57:return k=e.sent,i.contentPub30Days=k.result&&k.result.publish?k.result.publish:0,i.contentBrowse30Days=k.result&&k.result.text_pv?k.result.text_pv:0,i.contentGuide30Days=k.result&&k.result.ipv?k.result.ipv:0,i.contentLiveBrowse30Days=k.result&&k.result.live_pv?k.result.live_pv:0,i.contentVideoBrowse30Days=k.result&&k.result.video_pv?k.result.video_pv:0,l.contentPub=k.result&&k.result.publish?k.result.publish:0,l.contentBrowse=k.result&&k.result.text_pv?k.result.text_pv:0,l.contentGuide=k.result&&k.result.ipv?k.result.ipv:0,l.contentLiveBrowse=k.result&&k.result.live_pv?k.result.live_pv:0,l.contentVideoBrowse=k.result&&k.result.video_pv?k.result.video_pv:0,e.next=70,P(n.darenId,90);case 70:return _=e.sent,i.contentPub90Days=_.result&&_.result.publish?_.result.publish:0,i.contentBrowse90Days=_.result&&_.result.text_pv?_.result.text_pv:0,i.contentGuide90Days=_.result&&_.result.ipv?_.result.ipv:0,i.contentLiveBrowse90Days=_.result&&_.result.live_pv?_.result.live_pv:0,i.contentVideoBrowse90Days=_.result&&_.result.video_pv?_.result.video_pv:0,d.contentPub=_.result&&_.result.publish?_.result.publish:0,d.contentBrowse=_.result&&_.result.text_pv?_.result.text_pv:0,d.contentGuide=_.result&&_.result.ipv?_.result.ipv:0,d.contentLiveBrowse=_.result&&_.result.live_pv?_.result.live_pv:0,d.contentVideoBrowse=_.result&&_.result.video_pv?_.result.video_pv:0,e.next=83,N(n.darenId);case 83:return T=e.sent,u=Object.assign({},u,T),e.next=87,I(i,u,c,l,d,s);case 87:e.next=90;break;case 89:s&&(h<y?(h++,chrome.tabs.sendRequest(g,{greeting:"vm-turnpage",page:h})):h==y&&(y=-(h=1)));case 90:case"end":return e.stop()}},e,t,[[17,21,25,33],[26,,28,32]])}));return function(t){return e.apply(this,arguments)}}());case 7:case"end":return r.stop()}},r,t)})),function(e,t){return r.apply(this,arguments)}))}).catch(function(e){console.log("getDarenId error",e)})}),"VSCdarenIdmission"==e.greeting&&(chrome.runtime.sendMessage({greeting:"popupTips"},function(e){console.log("response")}),H().then(function(){B(u.vedioCateType,u.cateType).then(function(){J(u.TWCateTypeList,u.darenFansCountList,u.darenRoleList,u.darenChannel).then(function(){K()})})}))});var w,k,_,T,S,D,j,C,M=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;return new Promise(function(r,n){$.ajax({url:c.default.willbeServer+"/tb/v/getAllVTaskDarenIds.wb",headers:{token:m},data:{page:e,pageSize:t},success:function(e){0==e.status?(y<=0&&(y=e.result.maxPage),r(e)):(y=-1,n(e.msg))},erroe:function(e){y=-1,n(e.msg)}})})},L=function(e){return new Promise(function(t,r){$.ajax({url:"https://v.taobao.com/micromission/daren/daren_main_portalv3.do?userId="+e+"&spm=a21xh.11312869.industryArea_0_30008_darenCol.2.75a8627fK87XrV&_ksTS=1550107520153_17",success:function(e){0==(e=JSON.parse(e)).status?t(e.data):t(null)},error:function(e){t(null)}})})},P=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:7;return new Promise(function(r,n){$.ajax({url:"https://v.taobao.com/micromission/GetDarenContentStatistic.do?userId="+e+"&cycle="+t+"&_ksTS=1548233873983_143",success:function(e){0==(e=JSON.parse(e)).status?r(e.data):n(e.msg)},error:function(e){n(e.msg)}})})},I=function(e,t,r,n,a){var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskDetail.wb",type:"post",async:!1,headers:{token:m,"Content-Type":"application/x-www-form-urlencoded"},data:e,success:function(e){}}),$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskFans.wb",type:"post",async:!1,headers:{token:m,"Content-Type":"application/json"},data:JSON.stringify(t),success:function(e){}}),l.default.sleep(500),$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:m,"Content-Type":"application/x-www-form-urlencoded"},data:r,success:function(e){}}),l.default.sleep(500),$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:m,"Content-Type":"application/x-www-form-urlencoded"},data:n,success:function(e){}}),l.default.sleep(500),$.ajax({url:c.default.willbeServer+"/tb/v/syncVTaskStat.wb",type:"post",async:!1,headers:{token:m,"Content-Type":"application/x-www-form-urlencoded"},data:a,success:function(e){},error:function(){}}),o&&h<y?(h++,chrome.tabs.sendRequest(g,{greeting:"vm-turnpage",page:h})):o&&h==y&&(y=-(h=1))},N=function(e){return new Promise(function(t,r){$.ajax({url:"https://v.taobao.com/micromission/daren/qry_fans_portrait.do?userId="+e+"&_ksTS=1548399407613_101",success:function(e){0==(e=JSON.parse(e)).status?t(e.data.fansFeature):r(e.msg)},error:function(e){r(e.msg)}})})},E=function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1;return new Promise(function(a,o){$.ajax({url:"https://v.taobao.com/micromission/req/selectCreatorV3.do",data:{cateType:e,fansCount:t,currentPage:n,role:r,_ksTS:"1550732344164_101",_output_charset:"UTF-8",_input_charset:"UTF-8"},success:function(e){0==(e=JSON.parse(e)).status?a(e.data):a(null)},error:function(){a(null)}})})},R=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(n,a){var o={cateType:e,videoCateType:t,currentPage:r,_ksTS:"1551253834204_269",_output_charset:"UTF-8",_input_charset:"UTF-8"};t||delete o.videoCateType,$.ajax({url:"https://v.taobao.com/micromission/req/selectCreatorV3.do",data:o,success:function(e){0==(e=JSON.parse(e)).status?n(e.data):n(null)},error:function(){n(null)}})})},O=function(e,t,r,n){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1;return new Promise(function(o,s){$.ajax({url:"https://v.taobao.com/micromission/req/selectCreatorV3.do",data:{cateType:e,fansCount:t,currentPage:a,role:r,channelName:n,_ksTS:"1551259112356_465",_output_charset:"UTF-8",_input_charset:"UTF-8"},success:function(e){0==(e=JSON.parse(e)).status?o(e.data):o(null)},error:function(){o(null)}})})},F=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:30;return new Promise(function(n,a){$.ajax({url:"https://v.taobao.com/micromission/select_micro_mission_subject_daren_v2.do",data:{subjectId:e,page:t,pageSize:r,_ksTS:"1551321913629_31",_input_charset:"utf-8",_output_charset:"utf-8"},success:function(e){0==(e=JSON.parse(e)).status?n(e.data):n(null)},error:function(){n(null)}})})},A=function(e){e.forEach(function(e){$.ajax({url:c.default.willbeServer+"/tb/v/syncSingleRecordDarenIdsAndName.wb",type:"post",async:!1,headers:{token:m},data:{darenId:e.userId,darenName:e.nick},success:function(e){console.log("k",e)}})})},H=(w=f(o.default.mark(function e(){var t,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],u.darenCateTypeList.forEach(function(){var e=f(o.default.mark(function e(r){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.darenFansCountList.forEach(function(){var e=f(o.default.mark(function e(n){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.darenRoleList.forEach(function(){var e=f(o.default.mark(function e(a){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.push([r,n,a]);case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()),console.log("darenCateType, darenFansCount, darenRole",t),r=0;case 4:if(r<t.length)return e.next=7,V(t[r][0],t[r][1],t[r][2]);e.next=10;break;case 7:r++,e.next=4;break;case 10:case"end":return e.stop()}},e,void 0)})),function(){return w.apply(this,arguments)}),V=(k=f(o.default.mark(function e(t,r,n){var a,s,i,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,r,n);case 2:if(a=e.sent,s=a.totalCounts?Math.ceil(a.totalCounts/20):0,a.result&&A(a.result),!(1<s)){e.next=15;break}i=2;case 7:if(i<=s)return e.next=10,E(t,r,n,i);e.next=15;break;case 10:(u=e.sent).result&&A(u.result);case 12:i++,e.next=7;break;case 15:case"end":return e.stop()}},e,void 0)})),function(e,t,r){return k.apply(this,arguments)}),q=(_=f(o.default.mark(function e(t){var r,n,a,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t.cateType,t.vedioCateType||"");case 2:if(r=e.sent,n=r.totalCounts?Math.ceil(r.totalCounts/20):0,r.result&&A(r.result),!(1<n)){e.next=15;break}a=2;case 7:if(a<=n)return e.next=10,R(t.cateType,t.vedioCateType||"",a);e.next=15;break;case 10:(s=e.sent).result&&A(s.result);case 12:a++,e.next=7;break;case 15:case"end":return e.stop()}},e,void 0)})),function(e){return _.apply(this,arguments)}),B=(T=f(o.default.mark(function e(t,r){var n,a,s,i,u,c,l;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r.forEach(function(e){"602"==e?t.forEach(function(t){n.push({cateType:e,vedioCateType:t})}):n.push({cateType:e})}),s=!(a=!0),i=void 0,e.prev=5,u=n[Symbol.iterator]();case 7:if(a=(c=u.next()).done){e.next=15;break}return l=c.value,e.next=11,q(l);case 11:e.sent;case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),s=!0,i=e.t0;case 21:e.prev=21,e.prev=22,!a&&u.return&&u.return();case 24:if(e.prev=24,s)throw i;e.next=27;break;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,void 0,[[5,17,21,29],[22,,24,28]])})),function(e,t){return T.apply(this,arguments)}),U=(S=f(o.default.mark(function e(t){var r,n,a,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.cateType,t.fansCount,t.role,t.channelName);case 2:if(r=e.sent,n=r.totalCounts?Math.ceil(r.totalCounts/20):0,r.result&&A(r.result),!(1<n)){e.next=15;break}a=2;case 7:if(a<=n)return e.next=10,O(t.cateType,t.fansCount,t.role,t.channelName,a);e.next=15;break;case 10:(s=e.sent).result&&A(s.result);case 12:a++,e.next=7;break;case 15:case"end":return e.stop()}},e,void 0)})),function(e){return S.apply(this,arguments)}),J=(D=f(o.default.mark(function e(t,r,n,a){var s,i,u,c,l,d,f;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=[],t.forEach(function(e){r.forEach(function(t){n.forEach(function(r){a.forEach(function(n){s.push({cateType:e,fansCount:t,role:r,channelName:n})})})})}),u=!(i=!0),c=void 0,e.prev=5,l=s[Symbol.iterator]();case 7:if(i=(d=l.next()).done){e.next=15;break}return f=d.value,e.next=11,U(f);case 11:e.sent;case 12:i=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),u=!0,c=e.t0;case 21:e.prev=21,e.prev=22,!i&&l.return&&l.return();case 24:if(e.prev=24,u)throw c;e.next=27;break;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}},e,void 0,[[5,17,21,29],[22,,24,28]])})),function(e,t,r,n){return D.apply(this,arguments)}),G=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:12;return new Promise(function(r,n){$.ajax({url:"https://v.taobao.com/micromission/subjectPageV2.do",data:{tabKey:0,pageSize:t,current_page:e,channel:"全部",subject_scene:"全部",_ksTS:"1551321708603_255",_input_charset:"utf-8",_output_charset:"UTF-8"},success:function(e){if(0==(e=JSON.parse(e)).status){var t=e.data,n=t.subjects,a=t.total,o=t.pageSize;r({subjects:n,total:a,pageSize:o})}else r(null)},error:function(e){console.log("error:",e),r(null)}})})},z=(j=f(o.default.mark(function e(){var t,r,n,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=1,r=[],e.next=4,G();case 4:n=e.sent,t=Math.ceil(n.total/n.pageSize),n.subjects.forEach(function(e){r.push(e.id)}),a=2;case 8:if(a<=t)return e.next=11,G(a);e.next=16;break;case 11:e.sent.subjects.forEach(function(e){r.push(e.id)});case 13:a++,e.next=8;break;case 16:return e.abrupt("return",new Promise(function(e,t){e(r)}));case 17:case"end":return e.stop()}},e,void 0)})),function(){return j.apply(this,arguments)}),K=(C=f(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:z().then(function(e){var t;e.forEach((t=f(o.default.mark(function e(t){var r,n,a,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t,1,30);case 2:if(r=e.sent,n=Math.ceil(r.total/30),r.dataList&&A(r.dataList),!(1<n)){e.next=16;break}a=2;case 7:if(a<=n)return e.next=10,F(t,a,30);e.next=16;break;case 10:(s=e.sent).dataList&&A(s.dataList),a==n&&chrome.runtime.sendMessage({greeting:"HidePopupTips"},function(e){console.log("response")});case 13:a++,e.next=7;break;case 16:case"end":return e.stop()}},e,void 0)})),function(e){return t.apply(this,arguments)}))});case 1:case"end":return e.stop()}},e,void 0)})),function(){return C.apply(this,arguments)})},function(e,t,r){e.exports=r(3)},function(e,t,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&0<=Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(4),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof e,l=t.regeneratorRuntime;if(l)c&&(e.exports=l);else{(l=t.regeneratorRuntime=c?e.exports:{}).wrap=x;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",h={},y={};y[s]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==n&&a.call(g,s)&&(y=g);var b=T.prototype=k.prototype=Object.create(y);_.prototype=b.constructor=T,T.constructor=_,T[u]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},S(D.prototype),D.prototype[i]=function(){return this},l.AsyncIterator=D,l.async=function(e,t,r,n){var a=new D(x(e,t,r,n));return l.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(b),b[u]="Generator",b[s]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var o=this.tryEntries.length-1;0<=o;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=a.call(s,"catchLoc"),c=a.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;M(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}function x(e,t,r,n){var a,o,s,i,u=t&&t.prototype instanceof k?t:k,c=Object.create(u.prototype),l=new L(n||[]);return c._invoke=(a=e,o=r,s=l,i=d,function(e,t){if(i===p)throw new Error("Generator is already running");if(i===v){if("throw"===e)throw t;return I()}for(s.method=e,s.arg=t;;){var r=s.delegate;if(r){var n=j(r,s);if(n){if(n===h)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(i===d)throw i=v,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);i=p;var u=w(a,o,s);if("normal"===u.type){if(i=s.done?v:f,u.arg===h)continue;return{value:u.arg,done:s.done}}"throw"===u.type&&(i=v,s.method="throw",s.arg=u.arg)}}),c}function w(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function k(){}function _(){}function T(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function D(e){var t;this._invoke=function(r,n){function o(){return new Promise(function(t,o){!function t(r,n,o,s){var i=w(e[r],e,n);if("throw"!==i.type){var u=i.arg,c=u.value;return c&&"object"==typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,s)},function(e){t("throw",e,o,s)}):Promise.resolve(c).then(function(e){u.value=e,o(u)},s)}s(i.arg)}(r,n,t,o)})}return t=t?t.then(o,o):o()}}function j(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,j(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=w(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function P(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:I}}function I(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={$http:function(e,t){return new Promise(function(r,n){var a=new XMLHttpRequest;a.open(e,t,!0),a.onreadystatechange=function(){if(4==a.readyState){var e=JSON.parse(a.responseText);r(e)}},a.send()})},sleep:function(e){for(var t=new Date,r=t.getTime()+e;;)if((t=new Date).getTime()>r)return},getDateRange:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=(new Date).getTime(),r=new Date(t-24*e*60*60*1e3),n=r.getMonth()+1;return n=9<n?n:"0"+n,r.getFullYear()+"-"+n+"-"+r.getDate()}}}]);