(function() {
  'use strict';
  // Warn staff that barcodes that are not a 14 digit number starting with a 3
  // are likely not an actual barcode (e.g. corrupt/unwritten tag)
  if (/\/cgi-bin\/koha\/circ\/circulation\.pl/.test(window.location) &&
      !document.getElementById('nonStdBarcode')) {
    const confirmForm = document.getElementById('circ_confirmed_form');

    if (confirmForm && confirmForm.textContent.includes('The barcode was not found')) {
      const barcode = document.querySelector('#circ_confirmed_form input[name="barcode"]').value;

      if (!/^3\d{13}$/.test(barcode)) {
        const list = document.querySelector('#circ_confirmed_form ul.circ_block');
        const warning = document.createElement('li');

        warning.id = 'nonStdBarcode';
        warning.classList.add('circ_block');
        warning.textContent = '`' + barcode + '`' + " is not a standard item barcode number.";
        warning.title = "Warning added by MPL BibEx";
        list.appendChild(warning);
      }
    }
  }
})();
