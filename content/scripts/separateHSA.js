(function(){
  'use strict';
  if (/cgi-bin\/koha\/circ\/waitingreserves\.pl/.test(window.location)) {
    var holdsTable = document.getElementById("holdst"),
      bibliovationFilter = document.getElementById('filter_select'),
      avCodes = {
        "ill": "ILL",
        "avAndOther": "AV and other equipment",
        "cassette": "Cassette",
        "cd": "Compact disc",
        "dap": "Digital Audio Player",
        "dvd": "DVD",
        "equipment": "Equipment",
        "software": "Software",
        "video": "Video"
      },
      illArray = [],
      avArray = [],
      otherArray = [];

    function sortHoldTRs(a,b) {
      if (a.children[3].children[0].textContent > b.children[3].children[0].textContent) return 1;
      else if (a.children[3].children[0].textContent < b.children[3].children[0].textContent) return -1;
      else return 0;
    }

    function filterHolds() {
      chrome.storage.sync.get(Object.keys(avCodes), res => {
        for (let key in res) {
          if (!res.hasOwnProperty(key)) continue;

          if (!res[key]) {
            delete avCodes[key];
          }
        }

        if (holdsTable) {
          for (let row of holdsTable.children[1].children) {
            var itemType = row.children[2].children[1].textContent;

            if (itemType.match(/^ILL,/)) {
              if (avCodes.hasOwnProperty("ill")) illArray.push(row);
            } else {
              var wasMatched = false;
              for (let k in avCodes) {
                if (itemType.match(new RegExp("^" + avCodes[k] + ","))) {
                  avArray.push(row);
                  wasMatched = true;
                  break;
                }
              }

              if (!wasMatched) otherArray.push(row);
            }
          }

          holdsTable.children[1].textContent = "";

          for (let row of illArray.sort(sortHoldTRs)) {
            holdsTable.children[1].appendChild(row);
          }

          for (let row of avArray.sort(sortHoldTRs)) {
            holdsTable.children[1].appendChild(row);
          }

          for (let row of otherArray.sort(sortHoldTRs)) {
            holdsTable.children[1].appendChild(row);
          }

          for (var i = 0; i < holdsTable.children[1].children.length; i++) {
            if (i % 2) {
              holdsTable.children[1].children[i].classList.remove("even");
              holdsTable.children[1].children[i].classList.add("odd");
            } else {
              holdsTable.children[1].children[i].classList.remove("odd");
              holdsTable.children[1].children[i].classList.add("even");
            }
          }
        }
      });
    }

    filterHolds();

    bibliovationFilter.addEventListener('change', filterHolds);
  }
})();
