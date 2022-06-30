(function(){
  'use strict';
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let itemID = window.location.search.match(/itemid=(?<itemid>\d+)/);
      if (itemID.length === 2) {
        let barcode = document.getElementById('item-4565673');
        if (barcode) {
          barcode = barcode.textContent.match(/3[0-9]{13}/);
          if (barcode) {
            resolve(barcode[0]);
          }
        }
      }
    }, 650);
  });
})();