// Only execute script in the patron edit page
if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
  var opacNote = document.getElementById('opacnote'),
    circNote = document.getElementById('borrowernotes'),
    date,
    month,
    day,
    currDate = '',
    library;

  if (opacNote && circNote) {
    library = prompt('Please enter the name of the library from which the patron\'s library card may be retrieved (e.g. MPL-Central, MPL-Pinney, Middleton Public Library, etc.).');

    if (library) {
      date = new Date();
      month = date.getUTCMonth();

      if (month+1 < 10) {
        currDate += '0' + (month+1) + '/';
      } else {
        currDate += (month+1) + '/';
      }
      day = date.getUTCDate();
      if (day < 10) {
        day = '0' + day;
      }
      currDate += day + '/' + date.getUTCFullYear();

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
