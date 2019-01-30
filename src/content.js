 chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse) {
     console.log(sender.tab ?
       "from a content script:" + sender.tab.url :
       "from the extension");
     if (request.greeting == "getArctilUrl") {
       // $("div[data-spm='account_vertical']>a");
       var url = 'https:' + $("div[data-spm='account_vertical']>a").attr('href');
       console.log($("div[data-spm='account_vertical']>a").attr('href'))
       chrome.runtime.sendMessage({
         greeting: "sendDarenPage",
         darenPageUrl: url,
         islast: request.isLast
       }, function(response) {
         console.log(response);
       });
       console.log('request', request)
       sendResponse({
         authorPageUrl: url
       });
     } else if (request.greeting == "vm-turnpage") {
       console.log('vm-turnpage')
       chrome.runtime.sendMessage({
         greeting: "VSCmission",
       }, function(response) {
         console.log(response);
       });
     } else {
       sendResponse({}); // snub them.
     }
   });
 console.log($("div[title='达人主页']").length)
 $(function() {
   if ($("div[title='达人主页']").length) {
     let targetData = {
       darenHomepage: location.href
     };
     let urlSearch = location.search.replace('?', '').split("&");
     let targetAccountIdItem = urlSearch.filter(item => item.includes('accountId='))
     targetData.darenId = targetAccountIdItem[0].replace('accountId=', '');
     //四大DIV
     let contentDivList = $($($("#abs-block").find('div[data-spm^="daren-header"]')[0]).children()[0]).children();
     for (let i = 0; i < $(contentDivList[1]).children().length; i++) {
       if (i == 0) {
         targetData.darenName = $($(contentDivList[1]).children()[i]).children('span').text();
         targetData.darenType = $($(contentDivList[1]).children()[i]).children('div').text();
       } else if (i == 1) {
         targetData.officialCert = $($(contentDivList[1]).children()[i]).children('span').text().replace("认证：", '');
       } else if (i == 2) {
         targetData.darenDesc = $($(contentDivList[1]).children()[i]).children('span').text();
       }
     }
     targetData.fansCount = parseInt($(contentDivList[2]).text())
     console.log('targetData', targetData)
     chrome.runtime.sendMessage({
       greeting: "postDarenData",
       data: targetData
     }, function(response) {
       console.log(response);
     });
   }
   console.log(location.href, location.href.includes('chowsangsang.com'))
   if (location.href.includes('chowsangsang.com')) {
     let btn = $('<button id="btn_business" style="position:fixed;z-index:10000">回填参谋数据</button>');
     $("body").prepend(btn);
     $("#btn_business").on("click", () => {
       chrome.runtime.sendMessage({
         greeting: "VSCmission",
       }, function(response) {
         console.log(response);
       });
     })
   }
 })
