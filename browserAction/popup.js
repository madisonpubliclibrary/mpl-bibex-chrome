const lostcard = document.getElementById('lostCard');
const altPSTAT = document.getElementById('PSTAT2');
const problemItem = document.getElementById('problemItem');
const noticeFormatter = document.getElementById('noticeFormatter');
const shortcut1 = document.getElementById('shortcut1');
const shortcut2 = document.getElementById('shortcut2');
const shortcut3 = document.getElementById('shortcut3');
const shortcut4 = document.getElementById('shortcut4');
const shortcut5 = document.getElementById('shortcut5');
const shortcut6 = document.getElementById('shortcut6');
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

prefs.addEventListener('click', function() {
  chrome.runtime.openOptionsPage()
});

/** Generate shortcut options **/
chrome.storage.sync.get(['shortcutText1','shortcutLink1','shortcutText2','shortcutLink2','shortcutText3','shortcutLink3','shortcutText4','shortcutLink4','shortcutText5','shortcutLink5','shortcutText6','shortcutLink6',], function(res) {
  shortcut1.textContent = res.shortcutText1;
  shortcut2.textContent = res.shortcutText2;
  shortcut3.textContent = res.shortcutText3;
  shortcut4.textContent = res.shortcutText4;
  shortcut5.textContent = res.shortcutText5;
  shortcut6.textContent = res.shortcutText6;

  if (res.shortcutLink1) {
    shortcut1.href = res.shortcutLink1;
    if (shortcut1.textContent == "") {
      shortcut1.textContent = res.shortcutLink1;
    }
  } else {
    shortcut1.style.display = "none";
  }

  if (res.shortcutLink2) {
    shortcut2.href = res.shortcutLink2;
    if (shortcut2.textContent == "") {
      shortcut2.textContent = res.shortcutLink2;
    }
  } else {
    shortcut2.style.display = "none";
  }

  if (res.shortcutLink3) {
    shortcut3.href = res.shortcutLink3;
    if (shortcut3.textContent == "") {
      shortcut3.textContent = res.shortcutLink3;
    }
  } else {
    shortcut3.style.display = "none";
  }

  if (res.shortcutLink4) {
    shortcut4.href = res.shortcutLink4;
    if (shortcut4.textContent == "") {
      shortcut4.textContent = res.shortcutLink4;
    }
  } else {
    shortcut4.style.display = "none";
  }

  if (res.shortcutLink5) {
    shortcut5.href = res.shortcutLink5;
    if (shortcut5.textContent == "") {
      shortcut5.textContent = res.shortcutLink5;
    }
  } else {
    shortcut5.style.display = "none";
  }

  if (res.shortcutLink6) {
    shortcut6.href = res.shortcutLink6;
	if (shortcut6.textContent == "") {
	  shortcut6.textContent = res.shortcutLink6;
	}
  } else {
    shortcut6.style.display = "none";
  }
});
