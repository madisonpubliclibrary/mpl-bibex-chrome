(function() {
  'use strict'
  let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];

  let items = Array.from(document.querySelectorAll('h4.itemlabel'));

  if (items.length > 0 ) {
    for (let item of items) {
      if (item.textContent.includes(itemBC) &&
          /^\d+$/.test(item.parentElement.parentElement.children[1].children[2].children[1].children[1].children[1].textContent.split(',')[0].trim())) {
        return item.parentElement.parentElement.children[1].children[2].children[1].children[1].children[1].textContent.split(',')[0].trim();
      }
    }
  }
  return null;
})();
