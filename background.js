// Set Default Preferences on install/update
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get().then(res => {
    if (!res.hasOwnProperty('skin')) {
      chrome.storage.sync.set({"skin": "MAD"});
    }
    if (!res.hasOwnProperty('parseAddr')) {
      chrome.storage.sync.set({"parseAddr": true});
    }
    if (!res.hasOwnProperty('restrictPatronFields')) {
      chrome.storage.sync.set({"restrictPatronFields": true});
    }
    if (!res.hasOwnProperty('adultAge')) {
      chrome.storage.sync.set({"adultAge": "16"});
    }
    if (!res.hasOwnProperty('mplInternetCards')) {
      chrome.storage.sync.set({"mplInternetCards": false});
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
        "shortcutText1": "Bibliovation—Checkin",
        "shortcutLink1": "https://scls.bibliovation.com/app/staff/circ/checkin"
      });
    }
    if (!res.hasOwnProperty('shortcutText2') || !res.hasOwnProperty('shortcutLink2')) {
      chrome.storage.sync.set({
        "shortcutText2": "Bibliovation—Checkout",
        "shortcutLink2": "https://scls.bibliovation.com/app/staff/circ/checkout"
      });
    }
    if (!res.hasOwnProperty('shortcutText3') || !res.hasOwnProperty('shortcutLink3')) {
      chrome.storage.sync.set({
        "shortcutText3": "TIGERweb",
        "shortcutLink3": "https://tigerweb.geo.census.gov/tigerweb/"
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
});

// Set default extension icons
function setIcon() {
  let defaultLinks = {
    "MAD": {
      "shortcutText4": "MPL Home Page",
      "shortcutLink4": "http://madisonpubliclibrary.org",
      "shortcutText5": "MPLnet",
      "shortcutLink5": "http://www.mplnet.org",
      "shortcutText6": "MPL Reference Tools",
      "shortcutLink6": "http://www.madisonpubliclibrary.org/research/referenc2"
    },
    "MID": {
      "shortcutText4": "MID Home Page",
      "shortcutLink4": "https://www.midlibrary.org",
      "shortcutText5": "MID Staff Page",
      "shortcutLink5": "https://www.midlibrary.org/library/staff/login.asp",
      "shortcutText6": "iSolved HCM",
      "shortcutLink6": "https://payrollcompany.myisolved.com/UserLogin.aspx"
    },
    "SUN": {
      "shortcutText4": "SUN Home Page",
      "shortcutLink4": "https://www.sunprairiepubliclibrary.org",
      "shortcutText5": "",
      "shortcutLink5": "",
      "shortcutText6": "",
      "shortcutLink6": ""
    },
    "PCPL": {
      "shortcutText4": "PCPL Home Page",
      "shortcutLink4": "https://www.pocolibrary.org",
      "shortcutText5": "",
      "shortcutLink5": "",
      "shortcutText6": "",
      "shortcutLink6": ""
    },
    "SCLS": {
      "shortcutText4": "SCLS Home Page",
      "shortcutLink4": "https://www.scls.info",
      "shortcutText5": "SCLS Login Page",
      "shortcutLink5": "https://www.scls.info/user",
      "shortcutText6": "",
      "shortcutLink6": ""
    },
    "STO": {
      "shortcutText4": "STO Home Page",
      "shortcutLink4": "https://www.stoughtonpubliclibrary.org",
      "shortcutText5": "",
      "shortcutLink5": "",
      "shortcutText6": "",
      "shortcutLink6": ""
    }
  };

  chrome.storage.sync.get('skin', function(res) {
    var skin = res.hasOwnProperty('skin') ? res.skin : 'MAD';

    switch (skin) {
      case "MID":
        chrome.action.setIcon({
          "path": {
            "16": "/content/img/mid-icon2-16.png",
            "32": "/content/img/mid-icon2-32.png",
            "48": "/content/img/mid-icon2-48.png",
            "64": "/content/img/mid-icon2-64.png",
            "128": "/content/img/mid-icon2-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['MID']);
        break;
      case "PCPL":
        chrome.action.setIcon({
          "path": {
            "16": "content/img/pcpl-icon-16.png",
            "32": "content/img/pcpl-icon-32.png",
            "48": "content/img/pcpl-icon-48.png",
            "64": "content/img/pcpl-icon-64.png",
            "128": "content/img/pcpl-icon-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['PCPL']);
        break;
      case "SCLS":
        chrome.action.setIcon({
          "path": {
            "16": "/content/img/scls-icon-16.png",
            "32": "/content/img/scls-icon-32.png",
            "48": "/content/img/scls-icon-48.png",
            "64": "/content/img/scls-icon-64.png",
            "128": "/content/img/scls-icon-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['SCLS']);
        break;
      case "STO":
        chrome.action.setIcon({
          "path": {
            "16": "/content/img/sto-icon-16.png",
            "32": "/content/img/sto-icon-32.png",
            "48": "/content/img/sto-icon-48.png",
            "64": "/content/img/sto-icon-64.png",
            "128": "/content/img/sto-icon-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['STO']);
        break;
      case "SUN":
        chrome.action.setIcon({
          "path": {
            "16": "/content/img/sun-icon-16.png",
            "32": "/content/img/sun-icon-32.png",
            "48": "/content/img/sun-icon-48.png",
            "64": "/content/img/sun-icon-64.png",
            "128": "/content/img/sun-icon-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['SUN']);
        break;
      default:
        chrome.action.setIcon({
          "path": {
            "16": "/content/img/mpl-icon-16.png",
            "32": "/content/img/mpl-icon-32.png",
            "48": "/content/img/mpl-icon-48.png",
            "64": "/content/img/mpl-icon-64.png",
            "128": "/content/img/mpl-icon-128.png"
          }
        });

        chrome.storage.sync.set(defaultLinks['MAD']);
    }
  });
};

setIcon();

// Load preference-selected function files
chrome.webNavigation.onCompleted.addListener(details => {
  if (details.parentFrameId <= 0) {
    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/betterLogo.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/fastaddWarning.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/formatPatronRecord.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/patronQuickSave.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/printPatronBarcode.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/selectPSTAT.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/separateHSA.js"],
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/sortItemCheckoutHistory.js"]
    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/updateAccountType.js"]
    });

    // Optional scripts
    chrome.storage.sync.get(['restrictPatronFields','parseAddr','mplInternetCards',
                             'addPatronNotes','sundayDropbox','sundayDropboxPaused']).then(res => {
      if (res.hasOwnProperty('mplInternetCards') && res.mplInternetCards) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/mplInternetCards.js"]
        });
      }

      if (!res.hasOwnProperty('addPatronNotes') ||
          (res.hasOwnProperty('addPatronNotes') && res.addPatronNotes)) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/patronMessages.js"]
        });
      }

      if (!res.hasOwnProperty('parseAddr') ||
          (res.hasOwnProperty('parseAddr') && res.parseAddr)) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/parsePatronAddr.js"]
        });
      }

      if (!res.hasOwnProperty('restrictPatronFields') ||
          (res.hasOwnProperty('restrictPatronFields') && res.restrictPatronFields)) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/restrictPatronFields.js"]
        });
      }

      if ((!res.hasOwnProperty('sundayDropbox') ||
          (res.hasOwnProperty('sundayDropbox') && res.sundayDropbox)) && (new Date()).getDay() === 6) {
        // If sundayDropbox is not paused
        if (!res.hasOwnProperty('sundayDropboxPaused') ||
            (res.hasOwnProperty('sundayDropboxPaused') && !res.sundayDropboxPaused)) {
          chrome.scripting.executeScript({
            "target": {"tabId": details.tabId, "allFrames": true},
            "files": ["/content/scripts/opt/sundayDropbox.js"]
          });
        }
      } else {
        if (res.hasOwnProperty('sundayDropboxPaused') && res.sundayDropboxPaused) {
          chrome.storage.sync.set({"sundayDropboxPaused": false});
        }
      }
    });
  }
});

// Return true to send an asynchronous response
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    switch (message.key) {
    case "updateExtensionIcon":
      setIcon();
      break;
    case "addLostCardNote":
      chrome.tabs.query({"currentWindow": true, "active": true}).then(tabs => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            "target": {"tabId": tab.id, "allFrames": true},
            "files": ["/browserAction/scripts/addLostCardNote.js"]
          });
        }
      });
      break;
    case "getPatronAddrXML":
      fetch("https://mplnet.org/bibex/xml/special").then(res => {
        if (!res.ok) {
          throw new Error('[MPLnet] HTTP error, status = ' + res.status);
        }
        return res.text();
      }).then(text => {
        sendResponse(text);
      }, rej => {
        sendResponse({"error": rej.message});
      });
      return true;
      break;
    case "addrNoteCooldown":
      chrome.storage.sync.set({"addrNoteCooldown": true});
      chrome.alarms.create("addrNoteCooldown", {"when": Date.now() + 5000});
      chrome.alarms.onAlarm.addListener(alarm => {
        chrome.storage.sync.set({"addrNoteCooldown": false});
        chrome.alarms.clear("addrNoteCooldown")
      });
      break;
    case "printBarcode":
      let receiptFont = "36px"; // Default value
      chrome.storage.sync.get('reeciptFont').then(res => {
        if (res.hasOwnProperty('receiptFont')) {
          receiptFont = res.receiptFont; // Update receipt font size with stored value
        } else {
          chrome.storage.sync.set({"receiptFont": receiptFont}); // Store the default value in sync storage
        }

        chrome.tabs.create({
          "url": "/printBarcode/printBarcode.html?barcode=" + message.barcode + "&fontSize=" + receiptFont,
          "active": false
        }).then(tab => {
          chrome.alarms.create("printBarcode", {"when": Date.now() + 1000});
          chrome.alarms.onAlarm.addListener(alarm => {
            if (alarm.name === "printBarcode") {
              chrome.tabs.remove(tab.id);
              chrome.alarms.clear("printBarcode");
            }
          });
        });
      });
      break;
    case "pauseSundayDropbox":
      chrome.storage.sync.set({"sundayDropboxPaused": true});
      chrome.alarms.create("resumeSundayDropbox", {"when": Date.now() + 180000});
      chrome.alarms.onAlarm.addListener(alarm => {
        chrome.storage.sync.set({"sundayDropboxPaused": false});
        chrome.alarms.clear("resumeSundayDropbox")
      });
      break;
    case "resumeSundayDropbox":
        chrome.storage.sync.set({"sundayDropboxPaused": false});
      break;
    case "queryGeocoder":
      const baseURL = "https://geocoding.geo.census.gov/geocoder/geographies/address?street="
                      + message.addressURI + "&city=" + message.city + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=",
            countyURL = baseURL + "Counties&format=json",
            countySubdivisionURL = baseURL + "County+Subdivisions&format=json",
            censusTractURL = baseURL + "Census+Tracts&format=json";
      
      const getCounty = fetch(countyURL, {"method": "GET"}).then(response => {
        if(!response.ok && response.status != '400') {
          throw new Error('[census.gov] HTTP error, status = ' + response.status);
        }
        return response.json();
      });
    
      const getCountySub = fetch(countySubdivisionURL, {"method": "GET"}).then(response => {
        if(!response.ok && response.status != '400') {
          throw new Error('[census.gov] HTTP error, status = ' + response.status);
        }
        return response.json();
      });
    
      const getCensusTract = fetch(censusTractURL, {"method": "GET"}).then(response => {
        if(!response.ok && response.status != '400') {
          throw new Error('[census.gov] HTTP error, status = ' + response.status);
        }
        return response.json();
      });

      Promise.all([getCounty,getCountySub,getCensusTract]).then(vals => {
        let countyData = vals[0],
          countySubData = vals[1],
          censusTractData = vals[2];
    
        if (countyData.errors) {
          throw new Error(countyData.errors.join("; "));
        } else if (!countyData || !countyData.result || countyData.result.addressMatches.length === 0) {
          throw new Error("[census.gov] No county data matched given address.");
        } else if (countySubData.errors) {
          throw new Error(countySubData.errors.join("; "));
        } else if (!countySubData || !countySubData.result || countySubData.result.addressMatches.length === 0) {
          throw new Error("[census.gov] No county subdivision data matched given address.");
        } else if (censusTractData.errors) {
          throw new Error(censusTractData.errors.join("; "));
        } else if (!censusTractData || !censusTractData.result || censusTractData.result.addressMatches.length === 0) {
          throw new Error("[census.gov] No census tract data matched given address.");
        } else if (!message.addressURI.replaceAll('%20',' ').includes(countyData.result.addressMatches[0].addressComponents.streetName.toLowerCase())) {
          throw new Error("[census.gov] Matched wrong address: " + countyData.result.addressMatches[0].matchedAddress + ".");
        } else {
          countyData = countyData.result.addressMatches[0];
          countySubData = countySubData.result.addressMatches[0];
          censusTractData = censusTractData.result.addressMatches[0];

          return {
            "matchAddr": countyData.matchedAddress.split(',')[0].toUpperCase(),
            "county": countyData.geographies.Counties[0].BASENAME,
            "countySub": countySubData.geographies['County Subdivisions'][0].NAME,
            "censusTract": censusTractData.geographies['Census Tracts'][0].BASENAME,
            "zip": countyData.addressComponents.zip
          };
        }
      }).then(res => {
        sendResponse(res);
      }, rej => {
        sendResponse({"error": rej.message});
      });
      return true;
      break;
    case "getAlderExceptionXML":
      fetch("https://mplnet.org/bibex/xml/pstats/" + message.libCode).then(res => {
        if (!res.ok) {
          throw new Error('[MPLnet] HTTP error, status = ' + res.status);
        }
        return res.text();
      }).then(res => {
        sendResponse(res);
      }, rej => {
        sendResponse({"error": rej.message});
      });
      return true;
      break;
    case "getGeneralExceptionsXML":
      fetch("https://mplnet.org/bibex/xml/pstats/exception").then(res => {
        if (!res.ok) {
          throw new Error('[MPLnet] HTTP error, status = ' + res.status);
        }
        return res.text();
      }).then(res => {
        sendResponse(res);
      }, rej => {
        sendResponse({"error": rej.message});
      });
      return true;
      break;
    case "getAlternatePSTAT":
      chrome.tabs.query({
        "currentWindow": true,
        "active": true
      }, function(tabs) {
        for (let tab of tabs) {
          chrome.tabs.sendMessage(tab.id, {
            "key": "findAlternatePSTAT"
          });
        }
      });
      break;
    case "findNearestLib":
      const mapURL = "https://maps.googleapis.com/maps/api/distancematrix/json" +
          "?key=AIzaSyAAYcV9I6AAd4EQphC4Ynai5dmOScYBggA&origins=" +
          message.address + "&destinations=" + message.destinationURI;
      
      fetch(mapURL, {"method": "GET"}).then(response => {
        if (!response.ok) {
          throw new Error('[maps.googleapis.com] HTTP error, status = ' + response.status);
        }
        return response.json();
      }).then(json => {
        if (json.error_message) {
          throw new Error(json.error_message);
        }

        sendResponse(json.rows[0].elements)
      });
      return true;
      break;
    case "getPatronData":
      new Promise((resolve, reject) => {
        if (message.hasOwnProperty('patronBarcode')) {
          chrome.tabs.create({
            "url": "https://scls.bibliovation.com/cgi-bin/koha/members/member.pl?member=" +
                message.patronBarcode,
            "active": false
          }).then(tab => {
            chrome.scripting.executeScript({
              "target": {"tabId": tab.id},
              "files": ["/problemItemForm/getPatronID.js"]
            }).then(patronID => {
              chrome.tabs.remove(tab.id);
              if (patronID && patronID.length > 0 && /\d+/.test(patronID[0].result[0])) {
                resolve(patronID[0].result);
              } else {
                throw new Error('Failed to get patron ID number.');
              }
            });
          });
        } else if (message.hasOwnProperty('patronID')) {
          resolve(message.patronID);
        } else {
          throw new Error('Failed to get patron ID number.');
        }
      }).then(patronID => {
        chrome.tabs.create({
          "url": "https://scls.bibliovation.com/cgi-bin/koha/members/moremember.pl?borrowernumber=" +
              patronID,
          "active": false
        }).then(tab =>{
          chrome.scripting.executeScript({
            "target": {"tabId": tab.id},
            "files": ["/problemItemForm/getPatronData.js"]
          }).then(res => {
            chrome.tabs.remove(tab.id);
            sendResponse(res);
          });
        });
      });
      return true;
      break;
    case "getItemData":
      const data = {};
      let tabID;

      // Function to wait during then execution
      function wait(ms) {
        return function(x) {
          return new Promise(resolve => setTimeout(() => resolve(x), ms));
        };
      }

      new Promise((resolve,reject) => {
        if (message.hasOwnProperty("itemBarcode")) {
          chrome.tabs.create({
            "url": "https://scls.bibliovation.com/app/search/" + message.itemBarcode,
            "active": true
          }).then(tab => {
            tabID = tab.id;
    
            return chrome.scripting.executeScript({
              "target": {"tabId": tabID},
              "files": ["/problemItemForm/getItemBib.js"]
            });
          }).then(res => {
            chrome.tabs.remove(tabID);
            if (res.length > 0) {
              resolve(res[0].result);
            } else {
              throw new Error('Bib number not found.');
            }
          });
        } else if (message.hasOwnProperty('itemBib')) {
          resolve(message.itemBib);
        } else {
          throw new Error('Bad item data request');
        }
      }).then(bibNum => {
        data.bibNum = bibNum;
      }).then(() => {
        return chrome.tabs.create({
          "url": "https://scls.kohalibrary.com/app/staff/bib/" +
              data.bibNum + "/details?mbxItemBC=" + message.itemBarcode,
          "active": true
        });
      }).then(wait(500)).then(tab => {
        tabID = tab.id;
        return chrome.scripting.executeScript({
          "target": {"tabId": tabID},
          "files": ["/problemItemForm/getItemTitleCopiesHolds.js"]
        });
      }).then(res => {
        chrome.tabs.remove(tabID);
        if (res.length > 0) {
          data.title = res[0].result.title;
          data.copies = res[0].result.copies;
          data.holds = res[0].result.holds;
          data.cCode = res[0].result.cCode;

          if (res[0].result.hasOwnProperty('patronID')) data.patronID = res[0].result.patronID;
        } else {
          throw new Error('Item title, copies, and/or holds not found.');
        }
      }).then(() => {
        return chrome.tabs.create({
          "url": "https://scls.kohalibrary.com/app/staff/bib/" +
              data.bibNum + "/items/circstatus?mbxItemBC=" + message.itemBarcode,
          "active": true
        });
      }).then(wait(500)).then(tab => {
        tabID = tab.id;

        return chrome.scripting.executeScript({
          "target": {"tabId": tab.id},
          "files": ["/problemItemForm/getItemUse.js"]
        });
      }).then(res => {
        chrome.tabs.remove(tabID);
        if (res.length > 0) {
          data.totalUse = res[0].result.totalUse;
          data.ytd = res[0].result.ytd;
        } else {
          throw new Error('Total use and/or YTD not found.')
        }
      }).then(() => {
        return chrome.tabs.create({
          "url": "https://scls.kohalibrary.com/app/staff/bib/" +
              data.bibNum + "/items?mbxItemBC=" + message.itemBarcode,
          "active": true
        });
      }).then(wait(500)).then(tab => {
        tabID = tab.id;

        return chrome.scripting.executeScript({
          "target": {"tabId": tabID},
          "files": ["/problemItemForm/getItemPastUse.js"]
        });
      }).then(res => {
        chrome.tabs.remove(tabID);
        if (res.length > 0) {
          /**
           * There is no way to calculate an item's exact total use in Bibliovation if it was
           * acquired before 2012. If the acquisition date is before 2012, item use should be
           * calculated by adding Dynix and Koha Past Use and the YTD. If the acquisition date
           * is after 2012, item use should use only the "total use" value.
           *
           * The most accurate use data will always be the larger of these two calculations, which
           * is what the extension  calculates below.
           */
          data.use = Math.max(parseInt(data.ytd) + parseInt(res[0].result), parseInt(data.totalUse));
        } else {
          throw new Error('Past item use not found.')
        }

        sendResponse(data);
      });
      return true;
      break;
    case "printProblemForm":
      chrome.tabs.create({
        "active": false,
        "url": chrome.runtime.getURL('../problemItemForm/printProblemForm.html')
      }).then(tab => {
        chrome.alarms.create("printProblemForm", {"when": Date.now() + 500});
        chrome.alarms.onAlarm.addListener(alarm => {
          chrome.tabs.sendMessage(tab.id, {
            "key": "printProblemForm",
            "data": message.data
          }).then(() => {
            chrome.tabs.remove(tab.id);
          });
          chrome.alarms.clear("printProblemForm")
        });
      });
      break;
  }
});

// Create and handle context menu item for problem item form
chrome.contextMenus.create({
  "id": "start-pi-form",
  "title": "Use Barcode in Problem Item Form",
  "contexts": ["link", "selection"],
  "visible": true
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "start-pi-form") {
    /*
     * obj.barcode = item or patron barcode
     * obj.itemBib = item bib number
     * obj.patronID = patron ID number
     */
    function openPIForm(obj) {
      console.log(obj);
      if (obj.hasOwnProperty('barcode')) {
        if (obj.barcode.substring(0,1) === "2") {
          chrome.tabs.create({
            "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html") + "?patron=" + obj.barcode
          });
        } else if (obj.barcode.substring(0,1) === "3") {
          chrome.tabs.create({
            "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html") + "?item=" + obj.barcode
          });
        }
      } else if (obj.hasOwnProperty('itemBibURL')) {
        let tabID;

        chrome.tabs.create({"url": obj.itemBibURL}).then(tab => {
          tabID = tab.id;
          chrome.scripting.executeScript({
            "target": {"tabId": tabID},
            "files": ["/problemItemForm/getBarcodeFromItemID.js"]
          }).then(res => {
            chrome.tabs.remove(tabID);
            console.log(res);
            openPIForm({"barcode": res[0].result});
          });
        });
      } else if (obj.hasOwnProperty('patronIdURL')) {
        let tabID;

        chrome.tabs.create({"url": obj.patronIdURL}).then(tab => {
          tabID = tab.id;
          chrome.scripting.executeScript({
            "target": {"tabId": tabID},
            "files": ["/problemItemForm/getBarcodeFromPatronID.js"]
          }).then(res => {
            chrome.tabs.remove(tabID);
            openPIForm({"barcode": res[0].result});
          });
        });
      }
    };

    // Populate barcode based on the particular context type
    if (info.selectionText) {
      // Only expect item or patron barcodes
      if (info.selectionText.match(/[23][0-9]{13}/g)) {
        if (info.selectionText.match(/[23][0-9]{13}/g).length === 1) {
          openPIForm({"barcode": /[23][0-9]{13}/g.exec(info.selectionText)[0]});
        }
      }
    } else if (info.linkUrl) {
      if (info.linkUrl.split('?itemid=').length === 2) {
        openPIForm({"itemBibURL": info.linkUrl});
      } else if (/https:\/\/scls\.bibliovation\.com\/app\/staff\/patron\/\d+\/details/i.test(info.linkUrl)) {
        let patronID = info.linkUrl.match(/https?:\/\/scls\.bibliovation\.com\/app\/staff\/patron\/(?<patronID>\d+)\/details/i).groups.patronID;
        openPIForm({"patronIdURL": info.linkUrl});
      }
    }
  }
});