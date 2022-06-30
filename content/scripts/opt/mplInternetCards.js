(function(){
  const accountType = document.getElementById('categorycode');

  function makeInternetCard() {
    if (accountType && accountType.value === "WEB") {
      const addr = document.getElementById('address');
      const city = document.getElementById('city');
      const zip = document.getElementById('zipcode');
      const pstat = document.getElementsByName('sort1')[0];
      const circNote = document.getElementById('borrowernotes');
      const yesDebarred = document.getElementById('yesdebarred');
      const noDebarred = document.getElementById('nodebarred');

      if (addr.value === '') addr.value = "NA";
      if (city.value === '') city.value = "MADISON WI";
      if (zip.value === '') zip.value = "00088";
      if (pstat.value === '' || pstat.value === 'D-X-MAD' || pstat.value === 'X-UND' || pstat.value === 'D-X-SUN') pstat.value = "D-17.04";
      if (circNote.value === '') circNote.value = "FOR INTERNET USE ONLY; NO CKO ALLOWED.";

      if (yesDebarred && noDebarred) {
        yesDebarred.checked = true;
        noDebarred.checked = false;

        chrome.storage.sync.get('triggerDebarred').then(res => {
          const debarAccount = res.hasOwnProperty('triggerDebarred') ? res.triggerDebarred : false;
          chrome.storage.sync.set({'triggerDebarred': false}).then(() => {
            if (debarAccount) {
              const saveButton = document.getElementById('entryform_submit');
              if (saveButton) saveButton.click();
            }
          });
        });
      } else {
        chrome.storage.sync.set({'triggerDebarred': true});
      }
    } else {
      chrome.storage.sync.set({'triggerDebarred': false});
    }
  }

  if (accountType) {
    accountType.addEventListener('change', makeInternetCard);
    makeInternetCard();
  }

  /** If we're on the checkout screen, check whether we need to make the account debarred **/
  if (/\/cgi-bin\/koha\/members\/moremember\.pl\?borrowernumber=/.test(window.location)) {
    chrome.storage.sync.get('triggerDebarred').then(res => {
      if (res.hasOwnProperty('triggerDebarred') && res.triggerDebarred) {
        const editButton = document.querySelector('#editpatron a:first-of-type');
        if (editButton) editButton.click();
      }
    });
  }
})();
