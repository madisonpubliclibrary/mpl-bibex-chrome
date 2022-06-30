(function() {
  'use strict'
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];
      let items = Array.from(document.querySelectorAll('.item-data-barcode'));

      if (items.length > 0) {
        for (let item of items) {
          if (item.textContent.includes(itemBC)) {
            for (let col of item.parentElement.children) {
              if (col.classList.contains('item-data-952.Z')) {
                resolve(col.textContent.trim() || "0");
              }
            }
          }
        }
      }
    }, 650);
  });
})();
