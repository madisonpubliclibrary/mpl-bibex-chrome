(function(){
  'use strict';
  if (/\/cgi-bin\/koha\/catalogue\/issuehistory\.pl/.test(window.location)) {
    const itemTable = document.getElementById('checkouthistt');
    let libCode = window.parent.document.getElementsByClassName('loggedin');
    let searchResults = document.getElementsByClassName('searchresults')[0].children[0].children[0];
    const itemRows = [];
    let h1Elts = document.getElementsByTagName('h1');
    const sortSelect = document.createElement('select');
    const orderSelect = document.createElement('select');
    const ckoDate = document.createElement('option');
    const dueDate = document.createElement('option');
    const retDate = document.createElement('option');
    const asc = document.createElement('option');
    const desc = document.createElement('option');
    const groupBC = document.createElement('input');
    const restrictBC = document.createElement('input');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    let resetTable = false;

    let ItemRow = function(htmlTR) {
      this.html = htmlTR;
      this.ckoDate = new Date(htmlTR.children[0].textContent.trim());
      this.name = htmlTR.children[1].textContent.trim();
      this.barcode = htmlTR.children[2].textContent.trim();
      this.owningLibrary = htmlTR.children[3].textContent.trim();
      this.dueDate = new Date(htmlTR.children[6].textContent.trim());
      this.returnDate = htmlTR.children[7].textContent.trim() !== "" ? new Date(htmlTR.children[7].textContent.trim()) : new Date();
    }

    if (libCode && libCode.length > 0) {
      libCode = libCode[0].textContent.substr(0,3).toUpperCase();
    }

    if (itemTable && libCode && h1Elts && h1Elts.length > 0) {
      sortSelect.style.cursor = 'pointer';
      orderSelect.style.cursor = 'pointer';

      ckoDate.value = "ckoDate";
      ckoDate.textContent = "checkout date";
      dueDate.value = "dueDate";
      dueDate.textContent = "due date";
      retDate.value = "retDate";
      retDate.textContent = "return date";
      asc.value = "1";
      asc.textContent = "ascending";
      desc.value = "-1"
      desc.textContent = "descending";

      span1.textContent = "Sort items by ";
      span2.textContent = " in ";
      span3.textContent = " order.";
      span4.textContent = "Group items by barcode: "
      span5.textContent = " Limit barcode to: "

      groupBC.type = "checkbox";
      groupBC.style.cursor = "pointer";
      restrictBC.type = "text";
      restrictBC.maxLength = "14";
      restrictBC.placeholder = "Enter 14-digit barcode";

      div1.style.marginTop = "10px";
      div2.style.marginTop = "10px";
      div1.style.marginLeft = "50px";
      div2.style.marginLeft = "50px";

      sortSelect.appendChild(ckoDate);
      sortSelect.appendChild(dueDate);
      sortSelect.appendChild(retDate);
      sortSelect.value = "ckoDate";
      orderSelect.appendChild(asc);
      orderSelect.appendChild(desc);
      orderSelect.value = "-1";

      div1.appendChild(span1);
      div1.appendChild(sortSelect);
      div1.appendChild(span2);
      div1.appendChild(orderSelect);
      div1.appendChild(span3);
      div2.appendChild(span4);
      div2.appendChild(groupBC);
      div2.appendChild(span5);
      div2.appendChild(restrictBC);

      h1Elts[0].parentElement.insertBefore(div1,h1Elts[0].parentElement.children[1]);
      h1Elts[0].parentElement.insertBefore(div2,h1Elts[0].parentElement.children[2]);

      function sortItemRows(a,b) {
        if (groupBC.checked) {
          if (a.owningLibrary < b.owningLibrary) return -1;
          else if (a.owningLibrary > b.owningLibrary) return 1;
          else if (a.barcode < b.barcode) return -1;
          else if (a.barcode > b.barcode) return 1;
        }

        if (sortSelect.value === "ckoDate") {
          if (a.ckoDate < b.ckoDate) return -1 * orderSelect.value;
          else if (a.ckoDate > b.ckoDate) return 1 * orderSelect.value;
          else if (a.name < b.name) return -1 * orderSelect.value;
          else if (a.name > b.name) return 1 * orderSelect.value;
          else return 0;
        } else if (sortSelect.value === "dueDate") {
          if (a.dueDate < b.dueDate) return -1 * orderSelect.value;
          else if (a.dueDate > b.dueDate) return 1 * orderSelect.value;
          else if (a.name < b.name) return -1 * orderSelect.value;
          else if (a.name > b.name) return 1 * orderSelect.value;
          else return 0;
        } else if (sortSelect.value === "retDate") {
          if (a.retDate < b.retDate) return -1 * orderSelect.value;
          else if (a.retDate > b.retDate) return 1 * orderSelect.value;
          else if (a.name < b.name) return -1 * orderSelect.value;
          else if (a.name > b.name) return 1 * orderSelect.value;
          else return 0;
        }
      }

      function reloadTable() {
        const newBody = document.createElement('tbody');
        itemRows.sort(sortItemRows);

        // Float rows of items owned by the logged in library to the top if grouping barcodes
        if (groupBC.checked && restrictBC.length !== 14) {
          itemRows.sort(function(a,b) {
            if (a.owningLibrary === libCode && b.owningLibrary !== libCode) return -1;
            else if (a.owningLibrary !== libCode && b.owningLibrary === libCode) return 1;
            else return 0;
          });
        }

        for (let row of itemRows) {
          if (restrictBC.value.length === 14) {
            if (restrictBC.value === row.barcode) {
              newBody.appendChild(row.html);
            }
          } else {
            newBody.appendChild(row.html);
          }
        }

        // Replace table body
        itemTable.children[1].remove();
        itemTable.appendChild(newBody);

        // Update item count
        let numRows = itemTable.children[1].children.length;
        if (restrictBC.value.length === 14) {
          searchResults.textContent = "Item with barcode " + restrictBC.value +
              " has been checked out " + numRows + " times";
        } else {
          searchResults.textContent = "Has been checked out " + numRows + " times";
        }
      }

      for (let tr of itemTable.children[1].children) {
        itemRows.push(new ItemRow(tr));
      }

      sortSelect.addEventListener('change', reloadTable);
      orderSelect.addEventListener('change', reloadTable);
      groupBC.addEventListener('change', reloadTable);
      restrictBC.addEventListener('input', function() {
        if (this.value.length === 14) {
          resetTable = true;
          reloadTable();
        } else if (resetTable) {
          resetTable = false;
          reloadTable();
        }
      });

      reloadTable();
    }
  }
})();
