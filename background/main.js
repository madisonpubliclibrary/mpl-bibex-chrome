function setIcon() {
  chrome.storage.sync.get('skin', function(res) {
    var skin = res.hasOwnProperty('skin') ? res.skin : 'MAD';

    switch (skin) {
      case "MID":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/mid-icon-16.png",
            "32": "/content/img/mid-icon-32.png",
            "48": "/content/img/mid-icon-48.png",
            "64": "/content/img/mid-icon-64.png",
            "128": "/content/img/mid-icon-128.png"
          }
        });
        break;
      case "SCLS":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/scls-icon-16.png",
            "32": "/content/img/scls-icon-32.png",
            "48": "/content/img/scls-icon-48.png",
            "64": "/content/img/scls-icon-64.png",
            "128": "/content/img/scls-icon-128.png"
          }
        });
        break;
      case "SUN":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/sun-icon-16.png",
            "32": "/content/img/sun-icon-32.png",
            "48": "/content/img/sun-icon-48.png",
            "64": "/content/img/sun-icon-64.png",
            "128": "/content/img/sun-icon-128.png"
          }
        });
        break;
      default:
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/mpl-icon-16.png",
            "32": "/content/img/mpl-icon-32.png",
            "48": "/content/img/mpl-icon-48.png",
            "64": "/content/img/mpl-icon-64.png",
            "128": "/content/img/mpl-icon-128.png"
          }
        });
    }
  });
};

chrome.runtime.onMessage.addListener(function(message, sender, reply) {
  switch (message.key) {
    case "updateExtensionIcon":
      setIcon();
      break;
    case "addLostCardNote":
      /*chrome.tabs.executeScript({
        "file": "/browserAction/scripts/addLostCardNote.js",
        "allFrames": true
      });*/
      break;
    case "addPaymentPlanNote":
      /*chrome.tabs.executeScript({
        "file": "/browserAction/scripts/addPaymentPlanNote.js",
        "allFrames": true
      });*/
      break;
    case "alternatePSTAT":
      /*chrome.tabs.query({
        "currentWindow": true,
        "active": true
      }).then(tabs => {
        for (let tab of tabs) {
          chrome.tabs.sendMessage(tab.id, {
            "key": "findAlternatePSTAT"
          });
        }
      });*/
      break;
  }
});
