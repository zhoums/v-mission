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
  $("#interval").on("click", () => {
    chrome.runtime.sendMessage({
      greeting: "intervalMission",
    }, function(response) {
      console.log('response');
    });
  })
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.greeting == 'popupTips') {
      $('#drtip').html(request.text)
    }
  })
})
