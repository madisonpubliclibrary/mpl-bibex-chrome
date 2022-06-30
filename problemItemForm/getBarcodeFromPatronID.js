(function(){
  'use strict';
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (/bibliovation\.com\/app\/staff\/patron/.test(window.location)) {
        let patronInfo = document.getElementsByClassName('patroninfo');
        if (patronInfo && patronInfo.length > 0) {
          let barcode = patronInfo[0].children[0].textContent.match(/2\d{13}/);
          if (barcode && barcode.length > 0) {
            resolve(barcode[0]);
          }
        }
      }
    }, 650);
  });
})();