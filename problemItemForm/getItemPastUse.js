(function() {
  'use strict'
  const data = {"found": false};

  let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];

  let items = Array.from(document.querySelectorAll('.item-cell.barcode'));

  if (items.length > 0) {
    for (let item of items) {
      if (item.textContent.includes(itemBC)) {
        data.found = true;
        data.pastUse = item.parentElement.parentElement.parentElement.children[12].textContent.trim();
      }
    }
  }

  return data;
})();
