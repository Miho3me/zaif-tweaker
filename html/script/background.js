chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.method) {
    case "alert":
      sendResponse({data: alert("test")});
      break;
    default:
      console.log("no method");
      break;
  }
});
