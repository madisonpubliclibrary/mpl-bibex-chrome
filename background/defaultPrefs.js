chrome.storage.sync.get(null, function (res)  {
  if (!res.hasOwnProperty('skin')) {
    chrome.storage.sync.set({"skin": "MAD"});
  }
  if (!res.hasOwnProperty('parseAddr')) {
    chrome.storage.sync.set({"parseAddr": true});
  }
  if (!res.hasOwnProperty('restrictPatronFields')) {
    chrome.storage.sync.set({"restrictPatronFields": true});
  }
  if (!res.hasOwnProperty('updateAccountType')) {
    chrome.storage.sync.set({"updateAccountType": true});
  }
  if (!res.hasOwnProperty('addPatronNotes')) {
    chrome.storage.sync.set({"addPatronNotes": true});
  }
  if (!res.hasOwnProperty("sepAllAV")) {
    chrome.storage.sync.set({"sepAllAV": false});
  }
  if (!res.hasOwnProperty("avAndOther")) {
    chrome.storage.sync.set({"avAndOther": false});
  }
  if (!res.hasOwnProperty("cassette")) {
    chrome.storage.sync.set({"cassette": false});
  }
  if (!res.hasOwnProperty("cd")) {
    chrome.storage.sync.set({"cd": true});
  }
  if (!res.hasOwnProperty("dap")) {
    chrome.storage.sync.set({"dap": false});
  }
  if (!res.hasOwnProperty("dvd")) {
    chrome.storage.sync.set({"dvd": false});
  }
  if (!res.hasOwnProperty("equipment")) {
    chrome.storage.sync.set({"equipment": false});
  }
  if (!res.hasOwnProperty("ill")) {
    chrome.storage.sync.set({"ill": true});
  }
  if (!res.hasOwnProperty("software")) {
    chrome.storage.sync.set({"software": false});
  }
  if (!res.hasOwnProperty("video")) {
    chrome.storage.sync.set({"video": false});
  }
  if (!res.hasOwnProperty('receiptFont')) {
    chrome.storage.sync.set({"receiptFont": "36px"});
  }
  if (!res.hasOwnProperty('sundayDropbox')) {
    chrome.storage.sync.set({"sundayDropbox": true});
  }
  if (!res.hasOwnProperty('getItemUse')) {
    chrome.storage.sync.set({"getItemUse": true});
  }
  if (!res.hasOwnProperty('shortcutText1') || !res.hasOwnProperty('shortcutLink1')) {
    chrome.storage.sync.set({
      "shortcutText1": "Koha—Checkin",
      "shortcutLink1": "http://scls-staff.kohalibrary.com/cgi-bin/koha/circ/returns.pl"
    });
  }
  if (!res.hasOwnProperty('shortcutText2') || !res.hasOwnProperty('shortcutLink2')) {
    chrome.storage.sync.set({
      "shortcutText2": "Koha—Checkout",
      "shortcutLink2": "http://scls-staff.kohalibrary.com/cgi-bin/koha/circ/circulation.pl"
    });
  }
  if (!res.hasOwnProperty('shortcutText3') || !res.hasOwnProperty('shortcutLink3')) {
    chrome.storage.sync.set({
      "shortcutText3": "American Fact Finder",
      "shortcutLink3": "http://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t"
    });
  }
  if (!res.hasOwnProperty('shortcutText4') || !res.hasOwnProperty('shortcutLink4')) {
    chrome.storage.sync.set({
      "shortcutText4": "MPL Home Page",
      "shortcutLink4": "http://madisonpubliclibrary.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText5') || !res.hasOwnProperty('shortcutLink5')) {
    chrome.storage.sync.set({
      "shortcutText5": "MPLnet",
      "shortcutLink5": "http://www.mplnet.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText6') || !res.hasOwnProperty('shortcutLink6')) {
    chrome.storage.sync.set({
      "shortcutText6": "MPL Reference Tools",
      "shortcutLink6": "http://www.madisonpubliclibrary.org/research/referenc2"
    });
  }
});
