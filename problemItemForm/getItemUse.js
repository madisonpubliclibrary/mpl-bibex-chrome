(function() {
  'use strict'

  return new Promise((resolve, reject) => {
    setInterval(() => {
      let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];
      let items = Array.from(document.querySelectorAll('h4.itemlabel'));
    
      if (items && items.length > 0 ) {
        const data = {};
        for (let item of items) {
          let useString = item.parentElement.parentElement.children[1].children[2].children[1].children[1].children[1].textContent.trim();
          if (item.textContent.includes(itemBC) && useString.match(/YTD:\s+\d+/) && useString.match(/YTD:\s+\d+/).length > 0) {

            data.totalUse = useString.match(/^\d+/)[0];
            data.ytd = useString.match(/YTD:\s+\d+/)[0].match(/\d+/)[0];
          }
        }

        if (data.hasOwnProperty('totalUse') && data.hasOwnProperty('ytd')) { 
          resolve(data);
        }
      }
    }, 650);
  });
})();
