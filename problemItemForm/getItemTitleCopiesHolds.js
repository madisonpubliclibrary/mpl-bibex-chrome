(function() {
  const data = {"found": false};

  let items = document.querySelectorAll('a .item-display-value');

  if (items.length > 0) {
    let marc245a = document.querySelector('.marc245a');
    let marc245b = document.querySelector('.marc245b');

    let holdsData = document.querySelector('.holds-data').textContent.trim();
    let totalHolds = holdsData.match(/Holds:\d+ total/);
    if (totalHolds.length > 0) totalHolds = totalHolds[0].match(/\d+/)[0];
    let copies = holdsData.match(/on\s+\d+ items/);
    if (copies.length > 0) copies = copies[0].match(/\d+/)[0];

    let itemBC = location.search.match(/mbxItemBC=3[0-9]{13}/)[0].match(/3[0-9]{13}/)[0];

    data.title = marc245a.textContent;
    if (marc245b) data.title += " " + marc245b.textContent;
    data.holds = totalHolds;
    data.copies = copies;

    for (let item of items) {
      if (item.textContent.trim() === itemBC) {
        data.itemID = item.parentElement.href.match(/=\d+/)[0].substr(1);
        for (let td of item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children) {

          if (td.classList.contains('ccode')) {
            data.cCode = td.textContent.trim();
          } else if (td.classList.contains('_availability')) {
            if (/^Checked out/.test(td.textContent.trim().replace(/\s+/g, ' '))) {
              let checkedOut = td.textContent.trim().replace(/\s+/g, ' ').match(/^Checked out to \d+/);
              if (checkedOut.length === 1) {
                data.patronID = checkedOut[0].match(/\d+/)[0];
                data.found = true;
              }
            } else {
              data.found = true;
            }
          }
        }
      }
    }
  }
  return data;
})();
