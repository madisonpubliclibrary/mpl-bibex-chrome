(function(){
  'use strict';
  return new Promise((resolve, reject) => {
    let waitForBib = setInterval(() => {
      let itemBib = document.querySelector('div[id^=\"kohabib-\"]');
      if (itemBib) {
        clearInterval(waitForBib);
        console.log(itemBib.id.match(/\d+/)[0]);
        resolve(itemBib.id.match(/\d+/)[0]);
      }
    }, 350);
  });
})();
