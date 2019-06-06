(function(){
  'use strict';
  // Only execute script in the patron edit page
  if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
    const opacNote = document.getElementById('opacnote');
    const circNote = document.getElementById('borrowernotes');
    const date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let currDate = '';

    if (opacNote && circNote) {
      let library = prompt('Please enter the name of the library from which the patron\'s library card may be retrieved (e.g. MPL-Central, MPL-Pinney, Middleton Public Library, etc.).');

      if (library) {
        if (month+1 < 10) {
          currDate += '0' + (month+1) + '/';
        } else {
          currDate += (month+1) + '/';
        }

        if (day < 10) {
          day = '0' + day;
        }
        currDate += day + '/' + date.getFullYear();

        if (opacNote.value && opacNote.value !== '') {
          opacNote.value += "\n\n";
        }
        if (circNote.value && circNote.value !== '') {
          circNote.value += "\n\n";
        }
        opacNote.value += 'Your library card was found at ' + library + ' and may be retrieved from the 1st floor circulation desk with a photo ID. Thank you! ' + currDate + ' ';
        circNote.value += 'Patron\'s library card was found at ' + library + ' and may be retrieved from the 1st floor circulation desk with a photo ID. Thank you! ' + currDate + ' ';
      }
    } else {
      alert('A lost library card note cannot be added unless you are currently editing a patron record.');
    }
  }
})();
