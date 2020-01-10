(function(){
  'use strict';
  if (/kohalibrary\.com\/app\/staff\/patron/.test(window.location)) {
    let patronInfo = document.getElementsByClassName('patroninfo');

    if (!document.getElementById('printBarcode') && patronInfo.length > 0) {
      const button = document.createElement('button');

      patronInfo = patronInfo[0];
      button.id = 'printBarcode';

      patronInfo.style.textAlign = "right";
      button.textContent = "Print Barcode";
      button.style.marginBottom = "1em";

      button.addEventListener('click', function() {
        chrome.runtime.sendMessage({
          "key": "printBarcode",
          "barcode": patronInfo.children[0].textContent.substr(-15,14)
        });
      });

      patronInfo.insertBefore(button, patronInfo.children[1]);
    }
  }
})();
