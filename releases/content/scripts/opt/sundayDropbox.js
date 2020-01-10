(function(){
  'use strict';
  var t = setInterval(function() {
    if (/\/app\/staff\/circ\/checkin\//.test(window.location)) {
      chrome.storage.sync.get("sundayDropboxPaused", res => {
        var dropbox = Array.from(document.getElementsByTagName('button'))
                           .filter(elt => elt.title === "Dropbox mode");

        if (dropbox && dropbox.length > 0) {
          dropbox = dropbox[0];
          if (!res.sundayDropboxPaused && !dropbox.classList.contains("dropbox-active")) {
            dropbox.click();
          }

          if (!dropbox.getAttribute('onclick')) {
            dropbox.onclick = function() {
              if (this.classList.contains("dropbox-active")) {
                chrome.runtime.sendMessage({"key": "pauseSundayDropbox"});
              } else {
                chrome.runtime.sendMessage({"key": "resumeSundayDropbox"});
              }
            };
          }
        }
      });
    }
  }, 500);
})();
