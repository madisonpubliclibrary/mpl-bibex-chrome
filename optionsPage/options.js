const skin = document.getElementById("skin");
const parseAddr = document.getElementById("parseAddr");
const restrictPatronFields = document.getElementById("restrictPatronFields");
const addPatronNotes = document.getElementById("addPatronNotes");
const adultAge = document.getElementById("adultAge");
const mplInternetCards = document.getElementById("mplInternetCards");
const picklistLocColSortName = document.getElementById("picklistLocColSortName");
const avAndOther = document.getElementById("avAndOther");
const cassette = document.getElementById("cassette");
const cd = document.getElementById("cd");
const dap = document.getElementById("dap");
const dvd = document.getElementById("dvd");
const equipment = document.getElementById("equipment");
const ill = document.getElementById("ill");
const software = document.getElementById("software");
const video = document.getElementById("video");
const sepAllAV = document.getElementById("sepAllAV");
const receiptFont = document.getElementById("receiptFont");
const sundayDropbox = document.getElementById("sundayDropbox");
const sundayDropboxPaused = document.getElementById("sundayDropboxPaused");
const shortcutText1 = document.getElementById("shortcutText1");
const shortcutLink1 = document.getElementById("shortcutLink1");
const shortcutText2 = document.getElementById("shortcutText2");
const shortcutLink2 = document.getElementById("shortcutLink2");
const shortcutText3 = document.getElementById("shortcutText3");
const shortcutLink3 = document.getElementById("shortcutLink3");
const shortcutText4 = document.getElementById("shortcutText4");
const shortcutLink4 = document.getElementById("shortcutLink4");
const shortcutText5 = document.getElementById("shortcutText5");
const shortcutLink5 = document.getElementById("shortcutLink5");
const shortcutText6 = document.getElementById("shortcutText6");
const shortcutLink6 = document.getElementById("shortcutLink6");
const avCodes = ["avAndOther", "cassette", "cd", "dap", "dvd", "equipment", "software", "video"];

function restoreOptions() {
  chrome.storage.sync.get(null).then(res => {
    skin.value = res.skin;
    parseAddr.checked = res.parseAddr;
    restrictPatronFields.checked = res.restrictPatronFields;
    adultAge.value = res.adultAge;
    mplInternetCards.checked = res.mplInternetCards;
    addPatronNotes.checked = res.addPatronNotes;
    sepAllAV.checked = res.sepAllAV;
    avAndOther.checked = res.avAndOther;
    cassette.checked = res.cassette;
    cd.checked = res.cd;
    dap.checked = res.dap;
    dvd.checked = res.dvd;
    equipment.checked = res.equipment;
    ill.checked = res.ill;
    software.checked = res.software;
    video.checked = res.video;
    receiptFont.value = res.receiptFont;
    sundayDropbox.checked = res.sundayDropbox;
    shortcutText1.value = res.shortcutText1;
    shortcutLink1.value = res.shortcutLink1;
    shortcutText2.value = res.shortcutText2;
    shortcutLink2.value = res.shortcutLink2;
    shortcutText3.value = res.shortcutText3;
    shortcutLink3.value = res.shortcutLink3;
    shortcutText4.value = res.shortcutText4;
    shortcutLink4.value = res.shortcutLink4;
    shortcutText5.value = res.shortcutText5;
    shortcutLink5.value = res.shortcutLink5;
    shortcutText6.value = res.shortcutText6;
    shortcutLink6.value = res.shortcutLink6;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  restoreOptions();
});

// Check whether the class-level switches should be triggered
function checkAllAV() {
  let numChecked = 0;

  for (let id of avCodes) {
    if (document.getElementById(id).checked) numChecked++;
  }

  sepAllAV.checked = numChecked === avCodes.length;
  chrome.storage.sync.set({"sepAllAV": numChecked === avCodes.length});
}

// Listener for Set Default Options Button
document.getElementById("setDefault").addEventListener('click', function() {
  chrome.storage.sync.set({
    "skin": "MAD",
    "parseAddr": true,
    "restrictPatronFields": true,
    "dueDateToggle": true,
    "adultAge": "16",
    "mplInternetCards": false,
    "addPatronNotes": true,
    "sepAllAV": false,
    "avAndOther": false,
    "cassette": false,
    "cd": true,
    "dap": false,
    "dvd": false,
    "equipment": false,
    "ill": true,
    "software": false,
    "video":  false,
    "receiptFont": "36px",
    "sundayDropbox": true,
    "sundayDropboxPaused": false,
    "shortcutText1": "Bibliovation—Checkin",
    "shortcutLink1": "https://scls.kohalibrary.com/app/staff/circ/checkin",
    "shortcutText2": "Bibliovation—Checkout",
    "shortcutLink2": "https://scls.kohalibrary.com/app/staff/circ/checkout",
    "shortcutText3": "TIGERweb",
    "shortcutLink3": "https://tigerweb.geo.census.gov/tigerweb/",
    "shortcutText4": "MPL Home Page",
    "shortcutLink4": "http://madisonpubliclibrary.org",
    "shortcutText5": "MPLnet",
    "shortcutLink5": "http://www.mplnet.org",
    "shortcutText6": "MPL Reference Tools",
    "shortcutLink6": "http://www.madisonpubliclibrary.org/research/referenc2"
  }).then(() => {
    chrome.runtime.sendMessage({"key": "updateExtensionIcon"});
    restoreOptions();
  });
});

// Option update listeners
skin.addEventListener('change', function() {
  chrome.storage.sync.set({"skin": skin.value}).then(() => {
    chrome.runtime.sendMessage({"key": "updateExtensionIcon"});
    chrome.alarms.create("restoreOptions", {"when": Date.now() + 500});
    chrome.alarms.onAlarm.addListener(alarm => {
      if (alarm.name === "restoreOptions") {
        restoreOptions();
        chrome.alarms.clear("restoreOptions");
      }
    });
  });
});
document.getElementById("parseAddrSwitch").addEventListener('click', function() {
  chrome.storage.sync.set({"parseAddr": parseAddr.checked});
});
document.getElementById("restrictPatronFieldsSwitch").addEventListener('click', function() {
  chrome.storage.sync.set({"restrictPatronFields": restrictPatronFields.checked});
});
adultAge.addEventListener('change', function() {
  chrome.storage.sync.set({"adultAge": adultAge.value});
});
document.getElementById("mplInternetCardsSwitch").addEventListener('click', function() {
  chrome.storage.sync.set({"mplInternetCards": mplInternetCards.checked});
});
document.getElementById("addPatronNotesSwitch").addEventListener('click', function() {
  chrome.storage.sync.set({"addPatronNotes": addPatronNotes.checked});
});

document.getElementById('applyPicklistDefaults').addEventListener('click', function() {
  let libDefault = document.getElementById('customPicklistDefaults');
  if (libDefault.value !== "") {
    const parseDefaultLocCol = new Promise((resolve, reject) => {
      Papa.parse("../customPicklistSort/defaultConfig/locColSort/" + libDefault.value + "locColSort.csv", {
        download: true,
        skipEmptyLines: true,
        complete: function(results,file) {
          resolve({
            "file": libDefault.value + "locColSort.csv",
            "data": Papa.unparse(results.data)
          });
        }
      });
    });

    const parseDefaultPBJFI = new Promise((resolve, reject) => {
      Papa.parse("../customPicklistSort/defaultConfig/pbjfiSort/" + libDefault.value + "pbjfiSort.csv", {
        download: true,
        skipEmptyLines: true,
        complete: function(results,file) {
          resolve({
            "file": libDefault.value + "pbjfiSort.csv",
            "data": Papa.unparse(results.data)
          });
        }
      });
    });

    Promise.all([parseDefaultLocCol, parseDefaultPBJFI]).then(values => {
      let currDate = (new Date()).toLocaleString().toLowerCase().replace(/:\d\d /,"");
      chrome.storage.sync.set({
        "picklistLocColSortName": values[0].file,
        "picklistLocColSort": values[0].data,
        "picklistLocColSortUploadDate": currDate,
        "picklistPBJFISortName": values[1].file,
        "picklistPBJFISort": values[1].data,
        "picklistPBJFISortUploadDate": currDate
      }).then(updatePicklistSortConfigText);
    });
  }
});

document.getElementById("sepAllAV").addEventListener('change', function() {
  for (let id of avCodes) {
    document.getElementById(id).checked = this.checked;
    chrome.storage.sync.set({[id]: document.getElementById(id).checked});
  }
});
document.getElementById("avAndOtherSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"avAndOther": avAndOther.checked});
});
document.getElementById("cassetteSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"cassette": cassette.checked});
});
document.getElementById("cdSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"cd": cd.checked});
});
document.getElementById("dapSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"dap": dap.checked});
});
document.getElementById("dvdSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"dvd": dvd.checked});
});
document.getElementById("equipmentSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"equipment": equipment.checked});
});
document.getElementById("illSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"ill": ill.checked});
});
document.getElementById("softwareSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"software": software.checked});
});
document.getElementById("videoSwitch").addEventListener('click', function() {
  checkAllAV();
  chrome.storage.sync.set({"video": video.checked});
});
receiptFont.addEventListener('change', function() {
  chrome.storage.sync.set({"receiptFont": receiptFont.value});
});
document.getElementById("sundayDropboxSwitch").addEventListener('click', function() {
   chrome.storage.sync.set({"sundayDropbox": sundayDropbox.checked});
});
document.getElementById("shortcutText1").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText1": shortcutText1.value});
});
document.getElementById("shortcutLink1").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink1": shortcutLink1.value});
});
document.getElementById("shortcutText2").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText2": shortcutText2.value});
});
document.getElementById("shortcutLink2").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink2": shortcutLink2.value});
});
document.getElementById("shortcutText3").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText3": shortcutText3.value});
});
document.getElementById("shortcutLink3").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink3": shortcutLink3.value});
});
document.getElementById("shortcutText4").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText4": shortcutText4.value});
});
document.getElementById("shortcutLink4").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink4": shortcutLink4.value});
});
document.getElementById("shortcutText5").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText5": shortcutText5.value});
});
document.getElementById("shortcutLink5").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink5": shortcutLink5.value});
});
document.getElementById("shortcutText6").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutText6": shortcutText6.value});
});
document.getElementById("shortcutLink6").addEventListener('blur', function() {
  chrome.storage.sync.set({"shortcutLink6": shortcutLink6.value});
});
/** Update Picklist Sort if Config Saved **/
function updatePicklistSortConfigText() {
  chrome.storage.sync.get([
    "picklistLocColSortName",
    "picklistLocColSortUploadDate",
    "picklistPBJFISortName",
    "picklistPBJFISortUploadDate"
  ]).then(res => {
    if (res && res.picklistLocColSortName && res.picklistLocColSortUploadDate) {
      document.getElementById('locColConfigFile').textContent = res.picklistLocColSortName;
      document.getElementById('locColConfigDate').textContent = res.picklistLocColSortUploadDate;

      document.querySelector('#locColStatus .notSet').style.display = "none";
      document.querySelector('#locColStatus .set').style.display = "block";
    }

    if (res && res.picklistPBJFISortName && res.picklistPBJFISortUploadDate) {
      document.getElementById('pbjfiConfigFile').textContent = res.picklistPBJFISortName;
      document.getElementById('pbjfiConfigDate').textContent = res.picklistPBJFISortUploadDate;

      document.querySelector('#pbjfiStatus .notSet').style.display = "none";
      document.querySelector('#pbjfiStatus .set').style.display = "block";
    }
  });
}
updatePicklistSortConfigText();

/** Upload single config files **/
document.getElementById('updateLocColSort').addEventListener('click',function() {
  let locColFile = document.getElementById('locColSortUpload');
  if (locColFile !== '') {
    Papa.parse(locColFile.files[0],{
      skipEmptyLines: true,
      complete: function(results,file) {
        let locColNote = document.getElementById('updateLocColSortStatus');

        if (results.data[0].includes('location') && results.data[0].includes('collection')
              && results.data[0].includes('merge_below')) {
          let currDate = (new Date()).toLocaleString().toLowerCase().replace(/:\d\d /,"");
          chrome.storage.sync.set({
            "picklistLocColSortName": file.name,
            "picklistLocColSort": Papa.unparse(results.data),
            "picklistLocColSortUploadDate": currDate
          }).then(() => {
            updatePicklistSortConfigText();
            locColNote.className = 'success';
            locColNote.textContent = 'Successfully updated.'
          });
        } else {
          locColNote.className = 'error';
          locColNote.textContent = 'Invalid CSV.'
        }
      }
    });
  }
});

document.getElementById('updatePBJFISort').addEventListener('click',function() {
  let locColFile = document.getElementById('pbjfiSortUpload');
  if (locColFile !== '') {
    Papa.parse(locColFile.files[0],{
      skipEmptyLines: true,
      complete: function(results,file) {
        let pbjfiNote = document.getElementById('updatePBJFISortStatus');

        if (results.data[0].includes('category') && results.data[0].includes('code')) {
          let currDate = (new Date()).toLocaleString().toLowerCase().replace(/:\d\d /,"");
          chrome.storage.sync.set({
            "picklistPBJFISortName": file.name,
            "picklistPBJFISort": Papa.unparse(results.data),
            "picklistPBJFISortUploadDate": currDate
          }).then(() => {
            updatePicklistSortConfigText();
            pbjfiNote.className = 'success';
            pbjfiNote.textContent = 'Successfully updated.'
          });
        } else {
          pbjfiNote.className = 'error';
          pbjfiNote.textContent = 'Invalid CSV.'
        }
      }
    });
  }
});

/** Download config csv **/
function saveCSV(filename,data) {
  let csv = "";
  for (let i = 0; i < data.length; i++) {
    csv += data[i].join(',');
    csv += "\n";
  }

  let a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  a.target = '_blank';
  a.download = filename;
  a.click();
}

document.getElementById('downloadLocColConfig').addEventListener('click', function() {
  chrome.storage.sync.get(['picklistLocColSortName','picklistLocColSort']).then(vals => {
    Papa.parse(vals.picklistLocColSort,{
      skipEmptyLines: true,
      complete: function(results,file) {
        saveCSV(vals.picklistLocColSortName.split('/').at(-1),results.data);
      }
    });
  });
});

document.getElementById('downloadPBJFIConfig').addEventListener('click', function() {
  chrome.storage.sync.get(['picklistPBJFISortName','picklistPBJFISort']).then(vals => {
    Papa.parse(vals.picklistPBJFISort,{
      skipEmptyLines: true,
      complete: function(results,file) {
        chrome.storage.sync.set({
        });
        saveCSV(vals.picklistPBJFISortName.split('/').at(-1),results.data);
      }
    });
  });
});
