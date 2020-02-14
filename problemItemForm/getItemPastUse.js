(function() {
  'use strict'
  const data = {"found": false};

  let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];
  let items = Array.from(document.querySelectorAll('.item-cell.barcode'));

  if (items.length > 0) {
    for (let item of items) {
      if (item.textContent.includes(itemBC)) {
        data.found = true;
        data.pastUse = 0;
        for (let col of item.parentElement.parentElement.parentElement.children) {
          if (col.classList.contains('952.Z')) {
            data.pastUse = col.textContent.trim();
          } else if (col.classList.contains('dateaccessioned')) {
            data.acqDate = new Date(col.textContent.trim());
          }
        }
        break;
      }
    }
  }
  return data;
})();
