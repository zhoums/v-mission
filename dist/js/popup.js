$(function() {
  $("#ck").on("click", () => {
    chrome.runtime.sendMessage({
      greeting: "VSCmission",
    }, function(response) {
      console.log('response');
    });
  })
  $("#dr").on("click", () => {
    chrome.runtime.sendMessage({
      greeting: "VSCdarenIdmission",
    }, function(response) {
      console.log('response');
    });
  })
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.greeting == 'popupTips') {
      $('#drtip').html('回填V任务达人昵称正在回填，请稍后。。。')
    }
    if (request.greeting == 'HidePopupTips') {
      $('#drtip').html('回填V任务达人昵称回填完成。')
    }
  })
})
