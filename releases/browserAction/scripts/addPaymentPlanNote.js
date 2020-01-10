(function(){
  'use strict';
  // Only execute script in the patron edit page
  if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
    const circNote = document.getElementById('borrowernotes');
    const categoryCode = document.getElementById('categorycode');
    const date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let incrementYear = false;
    let year;
    let expiryDate = '';
    let currDate = '';

    if (circNote) {
      let startingBalance = prompt('What is the patron\'s starting balance for this payment plan?')
        .replace(/^\$/,'');
      if (startingBalance && startingBalance !== '') {
        if (month+1 < 10) {
          currDate += '0' + (month+1) + '/';
        } else {
          currDate += (month+1) + '/';
        }
        month += 7;
        if (month > 12) {
          month -= 12;
          incrementYear = true;
        }
        if (month < 10) {
          month = '0' + month;
        }

        if (day < 10) {
          day = '0' + day;
        }
        currDate += day + '/' + date.getFullYear();
        year = incrementYear ? date.getFullYear() + 1 : date.getFullYear();
        expiryDate += month + '/' + day + '/' + year;
        if (circNote.value !== null && circNote.value !== '') {
          circNote.value += "\n\n";
        }
        circNote.value += 'AT MADISON PUBLIC LIBRARY ONLY, patron is allowed to checkout if they pay $1.00 per item. FULL payment is required outside of MPL. NO Outerloan or Rental checkouts allowed while on the plan. Holds are allowed only as copy specific on MPL items. Plan is void if new fees are added. Patron’s account is limited use while they are on the plan. Starting balance was $' + startingBalance + '. Charges must be paid by ' + expiryDate + '. Plan started on '+ currDate + ' ';
        if (categoryCode && categoryCode.value === 'AD') {
          categoryCode.value = 'LU';
        } else if (categoryCode && categoryCode.value == 'JU') {
          categoryCode.value = 'LUJ';
        }
      } else {
        alert('Payment plan note was not added.');
      }
    } else {
      alert('A payment plan note cannot be added unless you are currently editing a patron record.');
    }
  }
})();
