const lostcard = document.getElementById('lostCard');
const altPSTAT = document.getElementById('PSTAT2');
const problemItem = document.getElementById('problemItem');
const noticeFormatter = document.getElementById('noticeFormatter');
const customPicklistSort = document.getElementById('customPicklistSort');
const shortcut1 = document.getElementById('shortcut1');
const shortcut2 = document.getElementById('shortcut2');
const shortcut3 = document.getElementById('shortcut3');
const shortcut4 = document.getElementById('shortcut4');
const shortcut5 = document.getElementById('shortcut5');
const shortcut6 = document.getElementById('shortcut7');
const prefs = document.getElementById('prefs');

lostcard.addEventListener('click', function() {
  chrome.runtime.sendMessage({"key": "addLostCardNote"});
});

altPSTAT.addEventListener('click', function() {
  chrome.runtime.sendMessage({"key": "getAlternatePSTAT"});
});

problemItem.addEventListener('click', function() {
  chrome.tabs.create({
    "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html"),
    "active": true
  });
});

noticeFormatter.addEventListener('click', function() {
  chrome.tabs.create({
    "url": chrome.runtime.getURL("../noticeFormatter/noticeFormatter.html"),
    "active": true
  });
});

customPicklistSort.addEventListener('click', function() {
  chrome.tabs.create({
    "url": chrome.runtime.getURL("../customPicklistSort/picklistSort.html"),
    "active": true
  });
});

prefs.addEventListener('click', function() {
  chrome.runtime.openOptionsPage()
});

/** Generate shortcut options **/
chrome.storage.sync.get(['shortcutText1','shortcutLink1','shortcutText2','shortcutLink2','shortcutText3','shortcutLink3',
                         'shortcutText4','shortcutLink4','shortcutText5','shortcutLink5','shortcutText6','shortcutLink6',
                         'shortcutText7','shortcutLink7']).then((res) => {
  shortcut1.textContent = res.shortcutText1;
  shortcut2.textContent = res.shortcutText2;
  shortcut3.textContent = res.shortcutText3;
  shortcut4.textContent = res.shortcutText4;
  shortcut5.textContent = res.shortcutText5;
  shortcut6.textContent = res.shortcutText6;
  shortcut7.textContent = res.shortcutText7;

  if (res.shortcutLink1) {
    if (res.shortcutLink1.includes('kohalibrary.com')) {
      res.shortcutLink1 = res.shortcutLink1.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink1': res.shortcutLink1});
    }

    shortcut1.href = res.shortcutLink1;
    if (shortcut1.textContent == "") {
      shortcut1.textContent = res.shortcutLink1;
    }
  } else {
    shortcut1.style.display = "none";
  }

  if (res.shortcutLink2) {
    if (res.shortcutLink2.includes('kohalibrary.com')) {
      res.shortcutLink2 = res.shortcutLink2.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink2': res.shortcutLink1});
    }

    shortcut2.href = res.shortcutLink2;
    if (shortcut2.textContent == "") {
      shortcut2.textContent = res.shortcutLink2;
    }
  } else {
    shortcut2.style.display = "none";
  }

  if (res.shortcutLink3) {
    if (res.shortcutLink3.includes('kohalibrary.com')) {
      res.shortcutLink3 = res.shortcutLink3.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink3': res.shortcutLink1});
    }

    shortcut3.href = res.shortcutLink3;
    if (shortcut3.textContent == "") {
      shortcut3.textContent = res.shortcutLink3;
    }
  } else {
    shortcut3.style.display = "none";
  }

  if (res.shortcutLink4) {
    if (res.shortcutLink4.includes('kohalibrary.com')) {
      res.shortcutLink4 = res.shortcutLink4.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink4': res.shortcutLink1});
    }

    shortcut4.href = res.shortcutLink4;
    if (shortcut4.textContent == "") {
      shortcut4.textContent = res.shortcutLink4;
    }
  } else {
    shortcut4.style.display = "none";
  }

  if (res.shortcutLink5) {
    if (res.shortcutLink5.includes('kohalibrary.com')) {
      res.shortcutLink5 = res.shortcutLink5.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink5': res.shortcutLink1});
    }

    shortcut5.href = res.shortcutLink5;
    if (shortcut5.textContent == "") {
      shortcut5.textContent = res.shortcutLink5;
    }
  } else {
    shortcut5.style.display = "none";
  }

  if (res.shortcutLink6) {
    if (res.shortcutLink6.includes('kohalibrary.com')) {
      res.shortcutLink6 = res.shortcutLink6.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink6': res.shortcutLink1});
    }

    shortcut6.href = res.shortcutLink6;
  	if (shortcut6.textContent == "") {
  	  shortcut6.textContent = res.shortcutLink6;
  	}
  } else {
    shortcut6.style.display = "none";
  }

  if (res.shortcutLink7) {
    if (res.shortcutLink7.includes('kohalibrary.com')) {
      res.shortcutLink7 = res.shortcutLink7.replace('kohalibrary.com','bibliovation.com');
      chrome.storage.sync.set({'shortcutLink7': res.shortcutLink1});
    }

    shortcut7.href = res.shortcutLink7;
  	if (shortcut7.textContent == "") {
  	  shortcut7.textContent = res.shortcutLink7;
  	}
  } else {
    shortcut7.style.display = "none";
  }
});
