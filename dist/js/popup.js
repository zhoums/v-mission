$(function(){
  $("#ck").on("click", () => {
    chrome.runtime.sendMessage({
      greeting: "VSCmission",
    }, function(response) {
      console.log('response');
    });
  })

})
