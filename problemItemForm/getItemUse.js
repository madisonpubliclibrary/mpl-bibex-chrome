(function() {
  'use strict'
  return new Promise((resolve, reject) => {
    let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];

    let waitForItems = setInterval(() => {
      let items = Array.from(document.querySelectorAll('h4.itemlabel'));

      if (items.length > 0 ) {
        for (let item of items) {
          if (item.textContent.includes(itemBC) &&
              item.parentElement.parentElement.children[1].children[2].children[1].children[1].children[1].textContent.match(/YTD:\s+\d+/).length > 0) {
            clearInterval(waitForItems);
            resolve(item.parentElement.parentElement.children[1].children[2].children[1].children[1].children[1].textContent.match(/YTD:\s+\d+/)[0].match(/\d+/)[0]);
          }
        }
      }
    }, 350);
  });
})();
