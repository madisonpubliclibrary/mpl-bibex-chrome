(function(){
  'use strict';
  return new Promise((resolve, reject) => {
    let getItemBib = setInterval(() => {
      let itemBib = document.querySelector('div[id^=\"kohabib-\"]');
      if (itemBib) {
        resolve(itemBib.id.match(/\d+/)[0]);
      }
    }, 650);
  });
})();
