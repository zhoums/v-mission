!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}({6:function(e,n,t){"use strict";chrome.extension.onRequest.addListener(function(e,n,t){if(console.log(n.tab?"from a content script:"+n.tab.url:"from the extension"),"getArctilUrl"==e.greeting){var r="https:"+$("div[data-spm='account_vertical']>a").attr("href");console.log($("div[data-spm='account_vertical']>a").attr("href")),chrome.runtime.sendMessage({greeting:"sendDarenPage",darenPageUrl:r,islast:e.isLast},function(e){console.log(e)}),console.log("request",e),t({authorPageUrl:r})}else"vm-turnpage"==e.greeting?(console.log("vm-turnpage"),chrome.runtime.sendMessage({greeting:"VSCmission"},function(e){console.log(e)})):t({})}),console.log($("div[title='达人主页']").length),$(function(){if($("div[title='达人主页']").length){var e={darenHomepage:location.href},n=location.search.replace("?","").split("&").filter(function(e){return e.includes("accountId=")});e.darenId=n[0].replace("accountId=","");for(var t=$($($("#abs-block").find('div[data-spm^="daren-header"]')[0]).children()[0]).children(),r=0;r<$(t[1]).children().length;r++)0==r?(e.darenName=$($(t[1]).children()[r]).children("span").text(),e.darenType=$($(t[1]).children()[r]).children("div").text()):1==r?e.officialCert=$($(t[1]).children()[r]).children("span").text().replace("认证：",""):2==r&&(e.darenDesc=$($(t[1]).children()[r]).children("span").text());e.fansCount=parseInt($(t[2]).text()),console.log("targetData",e),chrome.runtime.sendMessage({greeting:"postDarenData",data:e},function(e){console.log(e)})}if(console.log(location.href,location.href.includes("chowsangsang.com")),location.href.includes("chowsangsang.com")){var o=$('<button id="btn_business" style="position:fixed;z-index:10000">回填参谋数据</button>');$("body").prepend(o),$("#btn_business").on("click",function(){chrome.runtime.sendMessage({greeting:"VSCmission"},function(e){console.log(e)})})}})}});