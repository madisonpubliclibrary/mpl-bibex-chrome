chrome.storage.sync.get(null, function (res)  {
  // Increment the resetCounter to trigger the extension to restore defalt settings
  // next time it loads
  let resetCounter = 0;
  let performReset = false;
  if (!res.hasOwnProperty('resetCounter') || (res.hasOwnProperty('resetCounter') && parseInt(res.resetCounter) < resetCounter)) {
    chrome.storage.sync.set({"resetCounter": resetCounter});
    performReset = true;
  }

  if (!res.hasOwnProperty('skin') || performReset) {
    chrome.storage.sync.set({"skin": "MAD"});
  }
  if (!res.hasOwnProperty('parseAddr') || performReset) {
    chrome.storage.sync.set({"parseAddr": true});
  }
  if (!res.hasOwnProperty('restrictPatronFields') || performReset) {
    chrome.storage.sync.set({"restrictPatronFields": true});
  }
  if (!res.hasOwnProperty('updateAccountType') || performReset) {
    chrome.storage.sync.set({"updateAccountType": true});
  }
  if (!res.hasOwnProperty('addPatronNotes') || performReset) {
    chrome.storage.sync.set({"addPatronNotes": true});
  }
  if (!res.hasOwnProperty("sepAllAV") || performReset) {
    chrome.storage.sync.set({"sepAllAV": false});
  }
  if (!res.hasOwnProperty("avAndOther") || performReset) {
    chrome.storage.sync.set({"avAndOther": false});
  }
  if (!res.hasOwnProperty("cassette") || performReset) {
    chrome.storage.sync.set({"cassette": false});
  }
  if (!res.hasOwnProperty("cd") || performReset) {
    chrome.storage.sync.set({"cd": true});
  }
  if (!res.hasOwnProperty("dap") || performReset) {
    chrome.storage.sync.set({"dap": false});
  }
  if (!res.hasOwnProperty("dvd") || performReset) {
    chrome.storage.sync.set({"dvd": false});
  }
  if (!res.hasOwnProperty("equipment") || performReset) {
    chrome.storage.sync.set({"equipment": false});
  }
  if (!res.hasOwnProperty("ill") || performReset) {
    chrome.storage.sync.set({"ill": true});
  }
  if (!res.hasOwnProperty("software") || performReset) {
    chrome.storage.sync.set({"software": false});
  }
  if (!res.hasOwnProperty("video") || performReset) {
    chrome.storage.sync.set({"video": false});
  }
  if (!res.hasOwnProperty('receiptFont') || performReset) {
    chrome.storage.sync.set({"receiptFont": "36px"});
  }
  if (!res.hasOwnProperty('sundayDropbox') || performReset) {
    chrome.storage.sync.set({"sundayDropbox": true});
  }
  if (!res.hasOwnProperty('getItemUse') || performReset) {
    chrome.storage.sync.set({"getItemUse": true});
  }
  if (!res.hasOwnProperty('shortcutText1') || !res.hasOwnProperty('shortcutLink1') || performReset) {
    chrome.storage.sync.set({
      "shortcutText1": "Bibliovation—Checkin",
      "shortcutLink1": "https://scls.kohalibrary.com/app/staff/circ/checkin"
    });
  }
  if (!res.hasOwnProperty('shortcutText2') || !res.hasOwnProperty('shortcutLink2') || performReset) {
    chrome.storage.sync.set({
      "shortcutText2": "Bibliovation—Checkout",
      "shortcutLink2": "https://scls.kohalibrary.com/app/staff/circ/checkout"
    });
  }
  if (!res.hasOwnProperty('shortcutText3') || !res.hasOwnProperty('shortcutLink3') || performReset) {
    chrome.storage.sync.set({
      "shortcutText3": "American Fact Finder",
      "shortcutLink3": "http://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t"
    });
  }
  if (!res.hasOwnProperty('shortcutText4') || !res.hasOwnProperty('shortcutLink4') || performReset) {
    chrome.storage.sync.set({
      "shortcutText4": "MPL Home Page",
      "shortcutLink4": "http://madisonpubliclibrary.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText5') || !res.hasOwnProperty('shortcutLink5') || performReset) {
    chrome.storage.sync.set({
      "shortcutText5": "MPLnet",
      "shortcutLink5": "http://www.mplnet.org"
    });
  }
  if (!res.hasOwnProperty('shortcutText6') || !res.hasOwnProperty('shortcutLink6') || performReset) {
    chrome.storage.sync.set({
      "shortcutText6": "MPL Reference Tools",
      "shortcutLink6": "http://www.madisonpubliclibrary.org/research/referenc2"
    });
  }
});
