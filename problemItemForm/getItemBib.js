(function(){
  'use strict';
  const bibData = {'found': false};

  let itemBib = document.querySelector('div[id^=\"kohabib-\"]');
  if (itemBib) {
    bibData.found = true;
    bibData.bib = itemBib.id.match(/\d+/)[0];
  }

  return bibData;
})();
