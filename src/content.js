 chrome.extension.onRequest.addListener(
   function(request, sender, sendResponse) {
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
       sendResponse({
         authorPageUrl: url
       });
     }
     if (request.greeting == "vm-turnpage") {
       console.log('vm-turnpage-----vm-turnpage')
       chrome.runtime.sendMessage({
         greeting: "VSCmission",
       }, function(response) {
         console.log(response);
       });
     }
     if (request.greeting == 'popupTips') {
       if ($("#trigger_v").length) {
         $("#running_tip").remove();
         $('body').append('<div id="running_tip" style="position:absolute;right:10px; top:10px; background:#fff;color:#f50; border:#f50; padding:10px;">回填V任务达人昵称正在回填，请稍后。。。</div>')
       }

     }
     if (request.greeting == 'HidePopupTips') {
       if ($("#trigger_v").length) {
         $("#running_tip").remove();
         $('body').append('<div id="running_tip" style="position:absolute;right:10px; top:10px; background:#fff;color:#f50; border:#f50; padding:10px;">回填V任务达人昵称回填完成。</div>')
       }
     }
     if(request.greeting=='v-notLogin'){
       console.log('v-notLogin')
       alert('Please login first!')
     }
   });
 $(function() {
   chrome.runtime.sendMessage({
     greeting:'vTHEmission',
   }, function(response){});
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
   //trigger_v是触发按钮的ID
   if ($("#trigger_v").length) {
     $("#trigger_v").on("click", () => {
       chrome.runtime.sendMessage({
         greeting: "VSCdarenIdmission",
       }, function(response) {
         console.log('response');
       });
     })
   }
   // console.log(location.href, location.href.includes('chowsangsang.com'))
   // if (location.href.includes('chowsangsang.com')) {
   //   let btn = $('<button id="btn_business" style="position:fixed;z-index:10000">回填参谋数据</button>');
   //   $("body").prepend(btn);
   //   $("#btn_business").on("click", () => {
   //     chrome.runtime.sendMessage({
   //       greeting: "VSCmission",
   //     }, function(response) {
   //       console.log(response);
   //     });
   //   })
   // }
 })
