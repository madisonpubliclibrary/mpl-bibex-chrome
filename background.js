/*** MAIN BACKGROUND SCRIPTS ***/
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

var SCLSLibs = function() {
  this.data = {
    "MPL": {
      "HPB": "733+N+High+Point+Rd,+Madison,+WI+53717",
      "MAD": "201+W+Mifflin+St,+Madison,+WI+53703",
      "HAW": "2707+E+Washington+Ave,+Madison,+WI+53704",
      "LAK": "2845+N+Sherman+Ave,+Madison,+WI+53704",
      "MEA": "5726+Raymond+Rd,+Madison,+WI+53711",
      "MSB": "1705+Monroe+St,+Madison,+WI+53711",
      "PIN": "204+Cottage+Grove+Rd,+Madison,+WI+53716",
      "SEQ": "4340+Tokay+Blvd,+Madison,+WI+53711",
      "SMB": "2222+S+Park+St,+Madison,+WI+53713"
    },
    "otherDCL": {
      "BLV": "130+S+Vine+St,+Belleville,+WI+53508",
      "BER": "1210+Mills+St,+Black+Earth,+WI+53515",
      "CBR": "101+Spring+Water+Alley,+Cambridge,+WI+53523",
      "CSP": "2107+Julius+St,+Cross+Plains,+WI+53528",
      // DCL not included
      "DEE": "12+W+Nelson+St,+Deerfield,+WI+53531",
      "DFT": "203+Library+St,+DeForest,+WI+53532",
      "FCH": "5530+Lacy+Rd,+Fitchburg,+WI+53711",
      "MAR": "605+Waterloo+Rd,+Marshall,+WI+53559",
      "MAZ": "102+Brodhead+St,+Mazomanie,+WI+53560",
      "MCF": "5920+Milwaukee+St,+McFarland,+WI+53558",
      "MID": "7425+Hubbard+Ave,+Middleton,+WI+53562",
      "MOO": "1000+Nichols+Rd,+Monona,+WI+53716",
      "MTH": "105+Perimeter+Rd,+Mount+Horeb,+WI+53572",
      "ORE": "256+Brook+St,+Oregon,+WI+53575",
      "STO": "304+S+4th+St,+Stoughton,+WI+53589",
      "SUN": "1350+Linnerud+Dr,+Sun+Prairie,+WI+53590",
      "VER": "500+Silent+St,+Verona,+WI+53593",
      "WAU": "710+South+St,+Waunakee,+WI+53597"
    },
    "Adams": {
      "ACL": "569+N+Cedar+St,+Adams,+WI+53910",
      "ROM": "1157+Rome+Center+Dr,+Nekoosa,+WI+54457"
    },
    "Columbia": {
      "CIA": "109+W+Edgewater+St,+Cambria,+WI+53923",
      "COL": "223+W+James+St,+Columbus,+WI+53925",
      "LDI": "130+Lodi+St,+Lodi,+WI+53555",
      "PAR": "119+N+Main+St,+Pardeeville,+WI+53954",
      "POR": "253+W+Edgewater+St,+Portage,+WI+53901",
      "POY": "118+N+Main+St,+Poynette,+WI+53955",
      "RAN": "228+N+High+St+Randolph,+WI+53956",
      //"RIO": "324+W+Lyons+St,+Rio,+WI+53960", ** NON LINK LIBRARY **
      "WID": "620+Elm+St,+Wisconsin+Dells,+WI+53965",
      "WYO": "165+E+Dodge+St,+Wyocena,+WI+53969",
    },
    "Green": {
      //"ALB": "200+N+Water+St,+Albany,+WI+53502", ** NON LINK LIBRARY **
      "BRD": "1207+25th+St,+Brodhead,+WI+53520",
      "MRO": "925+16th+Ave,+Monroe,+WI+53566",
      "MNT": "512+E+Lake+Ave,+Monticello,+WI+53570",
      "NGL": "319+Second+St,+New+Glarus,+WI+53574"
    },
    "Portage": {
      "ALM": "122+Main+St,+Almond,+WI+54909",
      //"AMH": "278+N+Main+St,+Amherst,+WI+54406", ** NON LINK LIBRARY **
      "PLO": "2151+Roosevelt+Dr,+Plover,+WI+54467",
      "ROS": "137+N+Main+St,+Rosholt,+WI+54473",
      "STP": "1001+Main+St,+Stevens+Point,+WI+54481"
    },
    "Sauk": {
      "BAR": "230+Fourth+Ave,+Baraboo,+WI+53913",
      "LAV": "101+W+Main+St,+La+Valle,+WI+53941",
      "NOF": "105+N+Maple+St,+North+Freedom,+WI+53951",
      "PLA": "910+Main+St,+Plain,+WI+53577",
      "PDS": "540+Water+St,+Prairie+du+Sac,+WI+53578",
      "REE": "370+Vine+St,+Reedsburg,+WI+53959",
      "RKS": "101+First+St,+Rock+Springs,+WI+53961",
      "SKC": "515+Water+St,+Sauk+City,+WI+53583",
      "SGR": "230+E+Monroe+St,+Spring+Green,+WI+53588"
    },
    "Wood": {
      "ARP": "8091+County+E,+Arpin,+WI+54410",
      "MCM": "490+E+Grand+Ave,+Wisconsin+Rapids,+WI+54494",
      "MFD": "211+E+Second+St,+Marshfield,+WI+54449",
      "NEK": "100+Park+St,+Nekoosa,+WI+54457"
      //"PIT": "5291+Third+Ave,+Pittsville,+WI+54466", ** NON LINK LIBRARY **
      //"VES": "6550+Virginia+St,+Vesper,+WI+54489" ** NON LINK LIBRARY **
    }
  };

  this.getURI = function(scope) {
    if (scope === "SCLS") {
      return Object.values(this.data.MPL).join('|') + '|' +
          Object.values(this.data.otherDCL).join('|') + '|' +
          Object.values(this.data.Adams).join('|') + '|' +
          Object.values(this.data.Columbia).join('|') + '|' +
          Object.values(this.data.Green).join('|') + '|' +
          Object.values(this.data.Portage).join('|') + '|' +
          Object.values(this.data.Sauk).join('|') + '|' +
          Object.values(this.data.Wood).join('|');
    } else if (scope === "Dane") {
      return Object.values(this.data.MPL).join('|') + '|' +
          Object.values(this.data.otherDCL).join('|');
    } else {
      return Object.values(this.data[scope]).join('|');
    }
  };

  this.getOrder = function(scope) {
    if (scope === "SCLS") {
      return Object.keys(this.data.MPL).concat(Object.keys(this.data.otherDCL))
          .concat(Object.keys(this.data.Adams))
          .concat(Object.keys(this.data.Columbia))
          .concat(Object.keys(this.data.Green))
          .concat(Object.keys(this.data.Portage))
          .concat(Object.keys(this.data.Sauk))
          .concat(Object.keys(this.data.Wood));
    } else if (scope === "Dane") {
      return Object.keys(this.data.MPL).concat(Object.keys(this.data.otherDCL));
    } else {
      return Object.keys(this.data[scope]);
    }
  };
};

// Load preference-selected function files
chrome.webNavigation.onCompleted.addListener(details => {
  if (details.parentFrameId <= 0) {
    // Inherent scripts
    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/sortItemCheckoutHistory.js"]

    });

    chrome.scripting.executeScript({
      "target": {"tabId": details.tabId, "allFrames": true},
      "files": ["/content/scripts/selectPSTAT.js"]
    });

    // Optional scripts
    chrome.storage.sync.get(null, res => {
      if (!res.hasOwnProperty('restrictPatronFields') ||
          (res.hasOwnProperty('restrictPatronFields') && res.restrictPatronFields)) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/restrictPatronFields.js"]
        });
      }

      if (!res.hasOwnProperty('parseAddr') ||
          (res.hasOwnProperty('parseAddr') && res.parseAddr)) {
        chrome.scripting.executeScript({
          "target": {"tabId": details.tabId, "allFrames": true},
          "files": ["/content/scripts/opt/parsePatronAddr.js"]
        });
      }

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
    });

    chrome.storage.sync.get(['sundayDropbox','sundayDropboxPaused'], res => {
      if ((!res.hasOwnProperty('sundayDropbox') ||
          (res.hasOwnProperty('sundayDropbox') && res.sundayDropbox)) && (new Date()).getDay() === 0) {
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

  // Inherent scripts
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
    "files": ["/content/scripts/updateAccountType.js"]
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
    "files": ["/content/scripts/separateHSA.js"],
  });

  chrome.scripting.executeScript({
    "target": {"tabId": details.tabId, "allFrames": true},
    "files": ["/content/scripts/betterLogo.js"]
  });
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
    var barcode;

    function sendErrorMsg(msg) {
      chrome.scripting.executeScript({
        "target": {"tabId": tab.id},
        "func": "alert",
        "args": [msg]
      });
    }

    function openPIForm(barcode) {
      if (barcode.match(/[0-9]{14}/g)) {
        if (barcode.match(/[0-9]{14}/g).length === 1) {
          barcode = /[0-9]{14}/.exec(barcode);

          if (barcode) barcode = barcode[0];

          switch (barcode.substr(0, 1)) {
            case "2":
              chrome.tabs.create({
                "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html") + "?patron=" + barcode
              });
              break;
            case "3":
              chrome.tabs.create({
                "url": chrome.runtime.getURL("../problemItemForm/problemItemForm.html") + "?item=" + barcode
              });
              break;
            default:
              sendErrorMsg("ERROR: Unable to determine barcode type.");
              break;
          }
        } else {
          sendErrorMsg("ERROR: Multiple barcodes found in selection.");
        }
      } else {
        sendErrorMsg("ERROR: Barcode not found in selection or link.");
      }
    };

    // Populate barcode based on the particular context type
    if (info.selectionText) {
      openPIForm(info.selectionText);
    } else if (info.linkUrl) {
      chrome.scripting.executeScript({
        "target": {"tabId": tab.id},
        "code": "document.querySelectorAll('a[href=\"" + info.linkUrl.split('kohalibrary.com')[1] + "\"]')[1].textContent.trim();"
      }, function(res) {
        if (res.length > 0) {
          res[0] = res[0].trim();
          if(/^[23]\d{13}$/.test(res[0])) {
            openPIForm(res[0]);
          } else {
            sendErrorMsg("ERROR: Failed to extract link text.");
            return;
          }
        } else {
          sendErrorMsg("ERROR: Failed to extract link text.");
          return;
        }
      });
    } else {
      sendErrorMsg("ERROR: Failed to extract text data.");
      return;
    }
  }
});

chrome.runtime.onMessage.addListener(function(message, sender, reply) {
  const OPEN_CHANNEL = true;
  const CLOSE_CHANNEL = false;
  let result = CLOSE_CHANNEL;

  switch (message.key) {
    case "alternatePSTAT":
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
      var scls = new SCLSLibs();
      const mapURL = "https://maps.googleapis.com/maps/api/distancematrix/json" +
          "?key=AIzaSyAAYcV9I6AAd4EQphC4Ynai5dmOScYBggA&origins=" +
          message.address + "&destinations=" + scls.getURI(message.selected);

      fetch(mapURL, {"method": "GET"}).then(response => {
        if (!response.ok) {
          throw new Error('[maps.googleapis.com] HTTP error, status = ' + response.status);
        }
        return response.json();
      }).then(json => {
        if (json.error_message) {
          throw new Error(json.error_message);
        }

        var distanceData = json.rows[0].elements,
          distanceOrder = scls.getOrder(message.selected);
          distArray = [];

        for (var i = 0; i < distanceData.length; i++) {
          distArray.push([distanceOrder[i], distanceData[i].distance.value])
        }

        return distArray.sort((a,b) => {
          if (a[1] < b[1]) return -1;
          else if (a[1] > b[1]) return 1;
          else return 0;
        })[0];
      }).then(arr => {
        reply(arr);
      }, reject => {
        reply({
          "key": "failedNearestLib",
          "rejectMsg": reject.message
        });
      });
      result = OPEN_CHANNEL;
      break;
    case "parsePatronAddr":
      fetch("https://mplnet.org/bibex/xml/special").then(res => {
        if (!res.ok) {
          throw new Error('[MPLnet] HTTP error, status = ' + res.status);
        }
        return res.text();
      }).then(str => {
        return (new window.DOMParser()).parseFromString(str, "text/xml");
      }).then(data => {
        let cleanedData = [];
        for (let item of data.children[0].children) {
          let i = {};
          for (let tag of item.children) {
            i[tag.tagName] = tag.textContent;
          }
          cleanedData.push(i);
        }
        return reply(cleanedData);
      });
      result = OPEN_CHANNEL;
      break;
    case "updateExtensionIcon":
      setIcon();
      break;
    case "pauseSundayDropbox":
      chrome.storage.sync.set({"sundayDropboxPaused": true});
      setTimeout(() => {
        chrome.storage.sync.set({"sundayDropboxPaused": false});
      }, 180000); // 3min
      break;
    case "resumeSundayDropbox":
        chrome.storage.sync.set({"sundayDropboxPaused": false});
      break;
    case "addrNoteCooldown":
      chrome.storage.sync.set({"addrNoteCooldown": true});
      setTimeout(() => {
        chrome.storage.sync.set({"addrNoteCooldown": false});
      }, 5000);
      break;
    case "addLostCardNote":
      chrome.scripting.executeScript({
        "target": {"allFrames": true},
        "files": ["/browserAction/scripts/addLostCardNote.js"]
      });
      break;
    case "printBarcode":
      chrome.storage.sync.get('receiptFont', res => {
        let receiptFont = res.hasOwnProperty('receiptFont') ? res.receiptFont : "36px";

        chrome.tabs.create({
          "url": "/printBarcode/printBarcode.html?barcode=" + message.barcode + "&fontSize=" + receiptFont,
          "active": false
        }, function(tab) {
          setTimeout(() => {
            chrome.tabs.remove(tab.id);
          }, 1000);
        });
      });
      break;
    case "getPatronData":
      new Promise((resolve, reject) => {
        if (message.hasOwnProperty('patronBarcode')) {
          chrome.tabs.create({
            "url": "https://scls.kohalibrary.com/cgi-bin/koha/members/member.pl?member=" +
                message.patronBarcode,
            "active": false
          }, function(tab) {
            chrome.scripting.executeScript({
              "target": {"tabId": tab.id},
              "code": "document.querySelector('a[href^=\"/app/staff/patron\"]').href.match(/\\d+/)[0]"
            }, function(patronID) {
              chrome.tabs.remove(tab.id);
              if (patronID.length > 0 && /\d+/.test(patronID[0])) {
                resolve(patronID[0]);
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
          "url": "https://scls.kohalibrary.com/cgi-bin/koha/members/moremember.pl?borrowernumber=" +
              patronID,
          "active": false
        }, function(tab) {
          chrome.scripting.executeScript({
            "target": {"tabId": tab.id},
            "files": ["/problemItemForm/getPatronData.js"]
          }, function(res) {
            chrome.tabs.remove(tab.id);
            reply(res);
          });
        });
      });
      result = OPEN_CHANNEL;
      break;
    case "getItemData":
      const data = {};
      let bibNum;
      let itemNum;
      let useThisYear;
      let pastUse;

      chrome.tabs.create({
        "url": "https://scls.kohalibrary.com/app/search/" + message.itemBarcode,
        "active": true
      }, tab => {
        const getBibNumListener = setInterval(() => {
          chrome.scripting.executeScript({
            "target": {"tabId": tab.id},
            "files": ["/problemItemForm/getItemBib.js"]
          }, res => {
            res = res[0];
            if (res && res.hasOwnProperty('found') && res.found) {
              clearInterval(getBibNumListener);
              chrome.tabs.remove(tab.id);

              chrome.storage.sync.get('getItemUse', usePref => {
                let getItemTitleCopiesHolds = new Promise((resolve, reject) => {
                  chrome.tabs.create({
                    "url": "https://scls.kohalibrary.com/app/staff/bib/" +
                        res.bib + "/details" + "?mbxItemBC=" + message.itemBarcode,
                    "active": true
                  }, tab => {
                    const getItemData = setInterval(() => {
                       chrome.scripting.executeScript({
                         "target": {"tabId": tab.id},
                         "files": ["/problemItemForm/getItemTitleCopiesHolds.js"]
                       }, res => {
                         if (res && res[0] && res[0].hasOwnProperty('found') && res[0].found) {
                           clearInterval(getItemData);
                           chrome.tabs.remove(tab.id);
                           resolve(res[0]);
                         }
                      });
                    }, 650);
                  });
                });

                if (!usePref.hasOwnProperty('getItemUse') || (usePref.hasOwnProperty('getItemUse') && usePref.getItemUse)) {
                  let getItemUse = new Promise((resolve, reject) => {
                    chrome.tabs.create({
                      "url": "https://scls.kohalibrary.com/app/staff/bib/" +
                          res.bib + "/items/circstatus?mbxItemBC=" + message.itemBarcode,
                      "active": true
                    }, tab => {
                      const waitForUse = setInterval(() => {
                        chrome.scripting.executeScript({
                          "target": {"tabId": tab.id},
                          "files": ["/problemItemForm/getItemUse.js"]
                        }, useData => {
                          if (useData && useData[0] && useData[0].hasOwnProperty('found') && useData[0].found) {
                            clearInterval(waitForUse);
                            chrome.tabs.remove(tab.id);
                            resolve(useData[0]);
                          }
                        });
                      }, 650);
                    });
                  });

                  let getItemPastUse = new Promise((resolve, reject) => {
                    chrome.tabs.create({
                      "url": "https://scls.kohalibrary.com/app/staff/bib/" +
                          res.bib + "/items?mbxItemBC=" + message.itemBarcode,
                      "active": true
                    }, tab => {
                      const waitForPastUse = setInterval(() => {
                        chrome.scripting.executeScript({
                          "target": {"tabId": tab.id},
                          "files": ["/problemItemForm/getItemPastUse.js"]
                        }, pastUseData => {
                          if (pastUseData && pastUseData[0] && pastUseData[0].hasOwnProperty('found') && pastUseData[0].found) {
                            clearInterval(waitForPastUse);
                            chrome.tabs.remove(tab.id);
                            resolve(pastUseData[0].pastUse);
                          }
                        });
                      }, 650);
                    });
                  });

                  Promise.all([getItemTitleCopiesHolds, getItemUse, getItemPastUse]).then(res => {
                    /**
                     * There is no way to calculate an item's exact total use in Bibliovation if it was
                     * acquired before 2012. If the acquisition date is before 2012, item use should be
                     * calculated by adding Dynix and Koha Past Use and the YTD. If the acquisition date
                     * is after 2012, item use should use only the "total use" value.
                     *
                     * The most accurate use data will always be the larger of these two calculations, which
                     * is what the extension  calculates below.
                     */
                    res[0].use = Math.max(parseInt(res[1].ytd) + parseInt(res[2]), parseInt(res[1].totalUse));
                    reply(res[0]);
                  });
                } else {
                  getItemTitleCopiesHolds.then(res => { reply(res); });
                }
              });
            }
          });
        }, 650);
      });
      result = OPEN_CHANNEL;
      break;
    case "printProblemForm":
      chrome.tabs.create({
        "active": false,
        "url": chrome.runtime.getURL('../problemItemForm/printProblemForm.html')
      }, tab => {
        setTimeout(() => {
          chrome.tabs.sendMessage(tab.id, {
            "key": "printProblemForm",
            "data": message.data
          }, () => {
            chrome.tabs.remove(tab.id);
          });
        }, 500);
      });
      break;
  }
  return result;
});

/**
 * The PSTATS object contains all of the PSTAT codes for
 * every county subdivision in Wisconsin except for Middleton,
 * Sun Prairie, and Verona, which will be queried via
 * https://mpl-bibex.lrschneider.com
 *
 * @constructor
 * @author Lucas Schneider
 * @this {PSTATS}
 * @return {PSTATS} The new PSTATS object
 */
const pstats = new function() {
  this.data = {
    "Adams": {
      "Adams city": "A-ADM-C",
      "Adams town": "A-ADM-T",
      "Big Flats town": "A-BIG-T",
      "Colburn town": "A-COL-T",
      "Dell Prairie town": "A-DEL-T",
      "Easton town": "A-EST-T",
      "Friendship village": "A-FRN-V",
      "Jackson town": "A-JAK-T",
      "Leola town": "A-LEO-T",
      "Lincoln town": "A-LIN-T",
      "Monroe town": "A-MON-T",
      "New Chester town": "A-NCH-T",
      "New Haven town": "A-NHV-T",
      "Preston town": "A-PRS-T",
      "Quincy town": "A-QUI-T",
      "Richfield town": "A-RCH-T",
      "Rome town": "A-ROM-T",
      "Springville town": "A-SPV-T",
      "Strongs Prairie town": "A-STP-T",
      "Wisconsin Dells city": "A-WID-C",
      "__default__": "X-UND"
    },
    "Ashland": { // Default to AS-LIB to include tribal land
      "Agenda town": "AS-NOLIB",
      "Ashland town": "AS-NOLIB",
      "Butternut town": "AS-NOLIB",
      "Chippewa town": "AS-NOLIB",
      "Gingles town": "AS-NOLIB",
      "Gordon town": "AS-NOLIB",
      "Jacobs town": "AS-NOLIB",
      "Marengo town": "AS-NOLIB",
      "Morse town": "AS-NOLIB",
      "Peeksville town": "AS-NOLIB",
      "Sanborn town": "AS-NOLIB",
      "Shanagolden town": "AS-NOLIB",
      "White River town": "AS-NOLIB",
      "__default__": "AS-LIB"
    },
    "Barron": {
      "Barron city": "BA-LIB",
      "Cameron village": "BA-LIB",
      "Chetek city": "BA-LIB",
      "Cumberland city": "BA-LIB",
      "Rice Lake city": "BA-LIB",
      "Turtle Lake town": "BA-LIB",
      "__default__": "BA-NOLIB"
    },
    "Bayfield": { // Default to BY-LIB to include tribal land
      "Barksdale town": "BY-NOLIB",
      "Barnes town": "BY-NOLIB",
      "Bayfield town": "BY-NOLIB",
      "Bayview town": "BY-NOLIB",
      "Bell town": "BY-NOLIB",
      "Clover town": "BY-NOLIB",
      "Delta town": "BY-NOLIB",
      "Eileen town": "BY-NOLIB",
      "Grand View town": "BY-NOLIB",
      "Hughes town": "BY-NOLIB",
      "Kelly town": "BY-NOLIB",
      "Keystone town": "BY-NOLIB",
      "Lincoln town": "BY-NOLIB",
      "Mason town": "BY-NOLIB",
      "Mason village": "BY-NOLIB",
      "Namakagon town": "BY-NOLIB",
      "Orienta town": "BY-NOLIB",
      "Oulu town": "BY-NOLIB",
      "Pilsen town": "BY-NOLIB",
      "Port Wing town": "BY-NOLIB",
      "Russell town": "BY-NOLIB",
      "Tripp town": "BY-NOLIB",
      "Washburn town": "BY-NOLIB",
      "__default__": "BY-LIB"
    },
    "Brown": {
      "__default__": "BR-LIB"
    },
    "Buffalo": {
      "Alma city": "BU-LIB",
      "Mondovi city": "BU-LIB",
      "__default__": "BU-NOLIB"
    },
    "Burnett": {
      "Grantsburg village": "BT-LIB",
      "Webster village": "BT-LIB",
      "__default__": "BT-NOLIB"
    },
    "Calumet": {
      "Appleton city": "CA-LIB",
      "Brillion city": "CA-LIB",
      "Chilton city": "CA-LIB",
      "Kaukauna city": "CA-LIB",
      "Kiel city": "CA-LIB",
      "Menasha city": "CA-LIB",
      "New Holstein city": "CA-LIB",
      "__default__": "CA-NOLIB"

    },
    "Chippewa": {
      "Bloomer city": "CH-LIB",
      "Cadott village": "CH-LIB",
      "Chippewa Falls city": "CH-LIB",
      "Cornell city": "CH-LIB",
      "Eau Claire city": "CH-LIB",
      "Stanley city": "CH-LIB",
      "__default__": "CH-NOLIB"
    },
    "Clark": {
      "Abbotsford city": "CL-ABB-C",
      "Beaver town": "CL-BEA-T",
      "Butler town": "CL-BUT-T",
      "Colby city": "CL-COL-C",
      "Colby town": "CL-COL-T",
      "Curtiss village": "CL-CUR-V",
      "Dewhurst town": "CL-DEW-T",
      "Dorchester village": "CL-DOR-V",
      "Eaton town": "CL-EAT-T",
      "Foster town": "CL-FOS-T",
      "Fremont town": "CL-FRE-T",
      "Grant town": "CL-GRA-T",
      "Green Grove town": "CL-GRG-T",
      "Granton village": "CL-GRN-V",
      "Greenwood city": "CL-GWD-C",
      "Hendren town": "CL-HEN-T",
      "Hewett town": "CL-HEW-T",
      "Hixon town": "CL-HIX-T",
      "Hoard town": "CL-HOA-T",
      "Levis town": "CL-LEV-T",
      "Loyal city": "CL-LOY-C",
      "Loyal town": "CL-LOY-T",
      "Longwood town": "CL-LWD-T",
      "Lynn town": "CL-LYN-T",
      "Mayville town": "CL-MAY-T",
      "Mead town": "CL-MEA-T",
      "Mentor town": "CL-MEN-T",
      "Neillsville city": "CL-NEI-C",
      "Owen city": "CL-OWN-C",
      "Pine Valley town": "CL-PNV-T",
      "Reseburg town": "CL-RES-T",
      "Seif town": "CL-SEI-T",
      "Sherman town": "CL-SHM-T",
      "Sherwood town": "CL-SHW-T",
      "Stanley city": "CL-STA-C",
      "Thorp city": "CL-THP-C",
      "Thorp town": "CL-THP-T",
      "Unity town": "CL-UNI-T",
      "Unity village": "CL-UNI-V",
      "Warner town": "CL-WAR-T",
      "Washburn town": "CL-WAS-T",
      "Weston town": "CL-WES-T",
      "Withee town": "CL-WIT-T",
      "Withee village": "CL-WIT-V",
      "Worden town": "CL-WOR-T",
      "York town": "CL-YOR-T",
      "__default__": "X-UND"
    },
    "Columbia": {
      "Arlington town": "C-ARL-T",
      "Arlington village": "C-ARL-V",
      "Caledonia town": "C-CAL-T",
      "Cambria village": "C-CAM-V",
      "Columbus city": "C-COL-C",
      "Columbus town": "C-COL-T",
      "Courtland town":  "C-COU-T",
      "Dekorra town": "C-DEK-T",
      "Doylestown village": "C-DOY-V",
      "Fountain Prairie town": "C-FP-T",
      "Fall River village": "C-FR-V",
      "Friesland village": "C-FRI-V",
      "Fort Winnebago town": "C-FW-T",
      "Hampden town": "C-HAM-T",
      "Leeds town": "C-LEE-T",
      "Lewiston town": "C-LEW-T",
      "Lodi city": "C-LOD-C",
      "Lodi town": "C-LOD-T",
      "Lowville town": "C-LOW-T",
      "Marcellon town": "C-MARC-T",
      "Newport town": "C-NEW-T",
      "Otsego town": "C-OTS-T",
      "Pacific town": "C-PAC-T",
      "Pardeeville village": "C-PAR-V",
      "Portage city": "C-POR-C",
      "Poynette village": "C-POY-V",
      "Randolph town": "C-RAN-T",
      "Randolph village": "C-RAN-VC",
      "Rio village": "C-RIO-V",
      "Scott town": "C-SCO-T",
      "Springvale town": "C-SPV-T",
      "Wisconsin Dells city": "C-WD-CC",
      "West Point town": "C-WP-T",
      "Wyocena town": "C-WYO-T",
      "Wyocena village": "C-WYO-V",
      "__default__": "X-UND"
    },
    "Crawford": {
      "De Soto village": "CR-LIB",
      "Gays Mills village": "CR-LIB",
      "Prairie du Chien city": "CR-LIB",
      "Soldiers Grove village": "CR-LIB",
      "__default__": "CR-NOLIB"
    },
    "Dane": {
      "Albion town": "D-ALB-T",
      "Black Earth town": "D-BE-T",
      "Black Earth village": "D-BE-V",
      "Belleville village": "D-BEL-VD",
      "Berry town": "D-BERR-T",
      "Blooming Grove town": "D-BG-T",
      "Blue Mounds town": "D-BM-T",
      "Blue Mounds village": "D-BM-V",
      "Bristol town": "D-BRI-T",
      "Brooklyn village": "D-BRO-VD",
      "Burke town": "D-BUR-T",
      "Cambridge village": "D-CAM-VD",
      "Cottage Grove town": "D-CG-T",
      "Cottage Grove village": "D-CG-V",
      "Christiana town": "D-CHR-T",
      "Cross Plains town": "D-CP-T",
      "Cross Plains village": "D-CP-V",
      "Dane town": "D-DAN-T",
      "Dane village": "D-DAN-V",
      "Deerfield town": "D-DEE-T",
      "Deerfield village": "D-DEE-V",
      "DeForest village": "D-DF-V",
      "Dunkirk town": "D-DUNK-T",
      "Dunn town": "D-DUNN-T",
      "Edgerton city": "D-EDG-C",
      "Fitchburg city": "D-FIT-T",
      //"Madison city": "", // Handled separately
      "Madison town": "D-MAD-T",
      "Marshall village": "D-MARS-V",
      "Mazomanie town": "D-MAZ-T",
      "Mazomanie village": "D-MAZ-V",
      "Maple Bluff village": "D-MB-V",
      "McFarland village": "D-MCF-V",
      "Medina town": "D-MED-T",
      "Mount Horeb village": "D-MH-V",
      //"Middleton city": "", // Handled separately
      "Middleton town": "D-MID-T",
      "Monona city": "D-MON-C1",
      "Montrose town": "D-MONT-T",
      "Oregon town": "D-ORE-T",
      "Oregon village": "D-ORE-V",
      "Perry town": "D-PER-T",
      "Primrose town": "D-PRI-T",
      "Pleasant Springs town": "D-PS-T",
      "Rockdale village": "D-ROC-V",
      "Roxbury town": "D-ROX-T",
      "Rutland town": "D-RUT-T",
      "Shorewood Hills village": "D-SH-V",
      //"Sun Prairie city": "", // Handled separately
      "Sun Prairie town": "D-SP-T",
      "Springdale town": "D-SPD-T",
      "Springfield town": "D-SPF-T",
      "Stoughton city": "D-STO-C1",
      "Vermont town": "D-VERM-T",
      //"Verona city": "", // Handled separately
      "Verona town": "D-VERO-T",
      "Vienna town": "D-VIE-T",
      "Waunakee village": "D-WAU-V",
      "Westport town": "D-WESP-T",
      "Windsor village": "D-WIN-T",
      "York town": "D-YOR-TD",
      "__default__": "X-UND"
    },
    "Dodge": {
      "Ashippun town": "DG-ASH-T",
      "Beaver Dam city": "DG-BDM-C",
      "Beaver Dam village": "DG-BDM-T",
      "Brownsville village": "DG-BRO-V",
      "Burnett town":  "DG-BUR-T",
      "Calamus town": "DG-CAL-T",
      "Chester town": "DG-CHE-T",
      "Clyman town": "DG-CLY-T",
      "Clyman village": "DG-CLY-V",
      "Columbus city": "DG-COL-C",
      "Elba town": "DG-ELB-T",
      "Emmet town": "DG-EMM-T",
      "Fox Lake city": "DG-FXL-C",
      "Fox Lake town": "DG-FXL-T",
      "Hartford city": "DG-HAR-T",
      "Herman town": "DG-HER-T",
      "Horicon city": "DG-HOR-C",
      "Hubbard town": "DG-HUB-T",
      "Hustisford town": "DG-HUS-T",
      "Hustisford village": "DG-HUS-V",
      "Iron Ridge village": "DG-IRO-V",
      "Juneau city": "DG-JUN-C",
      "Kekoskee village": "DG-KEK-V",
      "Lebanon town": "DG-LEB-T",
      "Leroy town": "DG-LER-T",
      "Lomira town": "DG-LOM-T",
      "Lomira village": "DG-LOM-V",
      "Lowell town": "DG-LOW-T",
      "Lowell village": "DG-LOW-V",
      "Mayville city": "DG-MAY-C",
      "Neosho village": "DG-NEO-V",
      "Oak Grove town": "DG-OAK-T",
      "Portland town": "DG-POR-T",
      "Randolph village": "DG-RAN-V",
      "Reeseville village": "DG-REE-V",
      "Rubicon town": "DG-RUB-T",
      "Shields town": "DG-SHI-T",
      "Theresa town": "DG-THE-T",
      "Theresa village": "DG-THE-V",
      "Trenton town": "DG-TRE-T",
      "Watertown city": "DG-WAT-C",
      "Waupun city": "DG-WAU-C",
      "Westford town": "DG-WES-T",
      "__default__": "X-UND"
    },
    "Door": {
      "__default__": "DO-LIB"
    },
    "Douglas": {
      "Solon Springs town": "DS-LIB",
      "Superior city": "DS-LIB",
      "__default__": "DS-NOLIB"
    },
    "Dunn": {
      "Boyceville village": "DU-LIB",
      "Colfax town": "DU-LIB",
      "Menomonie city": "DU-LIB",
      "Sand Creek town": "DU-LIB",
      "__default__": "DU-NOLIB"
    },
    "Eau Claire": {
      "Altoona city": "EC-LIB",
      "Augusta city": "EC-LIB",
      "Eau Claire city": "EC-LIB",
      "Fairchild town": "EC-LIB",
      "Fall Creek village": "EC-LIB",
      "__default__": "EC-NOLIB"
    },
    "Florence": {
      "__default__": "FL-LIB"
    },
    "Fond du Lac": {
      "Brandon village": "FO-LIB",
      "Campbellsport village": "FO-LIB",
      "Fond du Lac city": "FO-LIB",
      "Kewaskum village": "FO-LIB",
      "North Fond du Lac village": "FO-LIB",
      "Oakfield town": "FO-LIB",
      "Ripon city": "FO-LIB",
      "Waupun city": "FO-LIB",
      "__default__": "FO-NOLIB"
    },
    "Forest": {
      "Crandon city": "FR-LIB",
      "Laona town": "FR-LIB",
      "Wabeno town": "FR-LIB",
      "__default__": "FR-NOLIB"
    },
    "Grant": {
      "Bloomington town": "GR-LIB",
      "Boscobel city": "GR-LIB",
      "Cassville town": "GR-LIB",
      "Cuba City city": "GR-LIB",
      "Dickeyville village": "GR-LIB",
      "Fennimore city": "GR-LIB",
      "Hazel Green town": "GR-LIB",
      "Lancaster city": "GR-LIB",
      "Livingston village": "GR-LIB",
      "Montfort village": "GR-LIB",
      "Muscoda village": "GR-LIB",
      "Platteville city": "GR-LIB",
      "Potosi town": "GR-LIB",
      "__default__": "GR-NOLIB"
    },
    "Green": {
      "Adams town": "G-ADA-T",
      "Albany town": "G-ALB-T2",
      "Albany village": "G-ALB-V",
      "Belleville village": "G-BEL-VG",
      "Brodhead city": "G-BROD-C",
      "Brooklyn town": "G-BRO-T",
      "Brooklyn village": "G-BRO-VG",
      "Brodhead city": "G-BROD-C",
      "Browntown village": "G-MRO-SD", // Don't use G-BROW-V per SCLS PSTAT spreadsheet
      "Cadiz town": "G-CAD-T",
      "Clarno town": "G-MRO-SD", // Don't use G-CLA-T per SCLS PSTAT spreadsheet
      "Decatur town": "G-DEC-T",
      "Exeter town": "G-EXE-T",
      "Jefferson town": "G-JEF-T",
      "Jordan town": "G-JOR-T",
      "Monroe city": "G-MRO-SD", // Don't use G-MONR-C per SCLS PSTAT spreadsheet
      "Monroe town": "G-MRO-SD", // Don't use G-MONR-T per SCLS PSTAT spreadsheet
      "Monticello village": "G-MONT-V",
      "Mount Pleasant town": "G-MP-T",
      "New Glarus town": "G-NG-T",
      "New Glarus village": "G-NG-V",
      "Spring Grove town": "G-SGO-T",
      "Sylvester town": "G-SYL-T",
      "Washington town": "G-WAS-TG",
      "York town": "G-YOR-TG",
      "__default__": "X-UND"
    },
    "Green Lake": {
      "Berlin city": "GL-BER-C",
      "Berlin town": "GL-BER-T",
      "Brooklyn town": "GL-BRO-T",
      "Green Lake city": "GL-GLK-C",
      "Green Lake town": "GL-GLK-T",
      "Kingston town": "GL-KIN-T",
      "Kingston village": "GL-KIN-V",
      "Mackford town": "GL-MAC-T",
      "Manchester town": "GL-MAN-T",
      "Markesan city": "GL-MKN-C",
      "Marquette town": "GL-MRQ-T",
      "Marquette village": "GL-MRQ-V",
      "Princeton city": "GL-PRI-C",
      "Princeton town": "GL-PRI-T",
      "Seneca town": "GL-SEN-T",
      "St. Marie town": "GL-STM-T",
      "__default__": "X-UND"
    },
    "Iowa": {
      "Arena town": "IO-ARE-T",
      "Arena village": "IO-ARE-V",
      "Avoca village": "IO-AVO-V",
      "Barneveld village": "IO-BAR-V",
      "Blanchardville village": "IO-BLA-V",
      "Brigham town": "IO-BRI-T",
      "Clyde town": "IO-CLY-T",
      "Cobb village": "IO-COB-T",
      "Dodgeville city": "IO-DGV-C",
      "Dodgeville town": "IO-DGV-T",
      "Eden town": "IO-EDN-T",
      "Highland town": "IO-HGH-T",
      "Highland village": "IO-HGH-V",
      "Hollandale village": "IO-HOL-V",
      "Linden town": "IO-LIN-T",
      "Linden village": "IO-LIN-V",
      "Livingston village": "IO-LIV-V",
      "Mifflin town": "IO-MIF-T",
      "Mineral Point city": "IO-MNP-C",
      "Mineral Point town": "IO-MNP-T",
      "Montfort village": "IO-MON-V",
      "Moscow town": "IO-MOS-T",
      "Muscoda village": "IO-MUS-V",
      "Pulaski town": "IO-PUL-T",
      "Rewey village": "IO-REW-V",
      "Ridgeway town": "IO-RDG-T",
      "Ridgeway village": "IO-RDG-V",
      "Waldwick town": "IO-WAL-T",
      "Wyoming town": "IO-WYO-T",
      "__default__": "X-UND"
    },
    "Iron": {
      "Hurley city": "IR-LIB",
      "Mercer town": "IR-LIB",
      "Montreal city": "IR-LIB",
      "__default__": "IR-NOLIB"
    },
    "Jackson": {
      "Adams town": "JK-ADA-T",
      "Albion town": "JK-ALB-T",
      "Alma Center village": "JK-ACT-T",
      "Alma town": "JK-ALM-T",
      "Bear Bluff town": "JK-BBF-T",
      "Black River Falls city": "JK-BRF-C",
      "Brockway town": "JK-BRO-T",
      "City Point town": "JK-CPT-T",
      "Cleveland town": "JK-CLE-T",
      "Curran town": "JK-CUR-T",
      "Franklin town": "JK-FRA-T",
      "Garden Valley town": "JK-GVA-T",
      "Garfield town": "JK-GAR-T",
      "Hixton town": "JK-HIX-T",
      "Hixton village": "JK-HIX-V",
      "Irving town": "JK-IRV-T",
      "Knapp town": "JK-KNA-T",
      "Komensky town": "JK-KOM-T",
      "Manchester town": "JK-MAN-T",
      "Melrose town": "JK-MEL-T",
      "Melrose village": "JK-MEL-V",
      "Merrillan village": "JK-MER-V",
      "Millston town": "JK-MIL-T",
      "North Bend town": "JK-NBD-T",
      "Northfield town": "JK-NOR-T",
      "Springfield town": "JK-SPR-T",
      "Taylor village": "JK-TAY-V",
      "__default__": "X-UND"
    },
    "Jefferson": {
      "Aztalan town": "JF-AZT-T",
      "Cambridge village": "JF-CAM-V",
      "Cold Spring town": "JF-COS-T",
      "Concord town": "JF-CON-T",
      "Farmington town": "JF-FAR-T",
      "Fort Atkinson city": "JF-FTA-C",
      "Hebron town": "JF-HEB-T",
      "Ixonia town": "JF-IXO-T",
      "Jefferson city": "JF-JEF-C",
      "Jefferson town": "JF-JEF-T",
      "Johnson Creek village": "JF-JOC-V",
      "Koshkonong town": "JF-KOS-T",
      "Lac La Belle village": "JF-LLB-V",
      "Lake Mills city": "JF-LKM-C",
      "Lake Mills town": "JF-LKM-T",
      "Milford town": "JF-MIL-T",
      "Oakland town": "JF-OAK-T",
      "Palmyra town": "JF-PAL-T",
      "Palmyra village": "JF-PAL-V",
      "Sullivan town": "JF-SUL-T",
      "Sullivan village": "JF-SUL-V",
      "Sumner town": "JF-SUM-T",
      "Waterloo city": "JF-WTL-C",
      "Waterloo town": "JF-WTL-T",
      "Watertown city": "JF-WAT-C",
      "Watertown town": "JF-WAT-T",
      "Whitewater city": "JF-WHI-C",
      "__default__": "X-UND"
    },
    "Juneau": {
      "Armenia town": "JU-ARM-T",
      "Camp Douglas village": "JU-CAD-V",
      "Clearfield town": "JU-CLR-T",
      "Cutler town": "JU-CUT-T",
      "Elroy city": "JU-ELR-C",
      "Finley town": "JU-FIN-T",
      "Fountain town": "JU-FOU-T",
      "Germantown town": "JU-GER-T",
      "Hustler village": "JU-HUS-V",
      "Kildare town": "JU-KIL-T",
      "Kingston town":"JU-KNG-T",
      "Lemonweir town": "JU-LEM-T",
      "Lindina town": "JU-LIN-T",
      "Lisbon town": "JU-LIS-T",
      "Lyndon Station village": "JU-LST-V",
      "Lyndon town": "JU-LYN-T",
      "Marion town": "JU-MAR-T",
      "Mauston city": "JU-MAU-C",
      "Necedah town": "JU-NEC-T",
      "Necedah village": "JU-NEC-V",
      "New Lisbon city": "JU-NLI-C",
      "Orange town": "JU-ORA-T",
      "Plymouth town": "JU-PLY-T",
      "Seven Mile Creek town": "JU-7MC-T",
      "Summit town": "JU-SUM-T",
      "Union Center village": "JU-UNC-V",
      "Wisconsin Dells city": "JU-WID-C",
      "Wonewoc town": "JU-WON-T",
      "Wonewoc village": "JU-WON-V",
      "__default__": "X-UND"
    },
    "Kenosha": {
      "__default__": "KE-LIB"
    },
    "Kewaunee": {
      "Algoma city": "KW-LIB",
      "Kewaunee city": "KW-LIB",
      "__default__": "KW-NOLIB"
    },
    "La Crosse": {
      "__default__": "LC-LIB"
    },
    "Lafayette": {
      "Argyle town": "LF-ARG-T",
      "Argyle village": "LF-ARG-V",
      "Belmont town": "LF-BEL-T",
      "Belmont village": "LF-BEL-V",
      "Benton town": "LF-BEN-T",
      "Benton village": "LF-BEN-V",
      "Blanchard town": "LF-BLA-T",
      "Blanchardville village": "LF-BLA-V",
      "Cuba City city": "LF-CUB-V",
      "Darlington city": "LF-DAR-C",
      "Darlington town": "LF-DAR-T",
      "Elk Grove town": "LF-ELK-T",
      "Fayette town": "LF-FAY-T",
      "Gratiot town": "LF-GRA-T",
      "Gratiot village": "LF-GRA-V",
      "Hazel Green village": "LF-HZG-V",
      "Kendall town": "LF-KEN-T",
      "Lamont town": "LF-LAM-T",
      "Monticello town": "LF-MON-T",
      "New Diggings town": "LF-NDG-T",
      "Seymour town": "LF-SEY-T",
      "Shullsburg city": "LF-SHU-C",
      "Shullsburg town": "LF-SHU-T",
      "South Wayne village": "LF-SWY-V",
      "Wiota town": "LF-WIO-T",
      "White Oak Springs town": "LF-WOS-T",
      "Willow Springs town": "LF-WSP-T",
      "Wayne town": "LF-WYN-T",
      "__default__": "X-UND"
    },
    "Langlade": {
      "Antigo city": "LN-LIB",
      "Elcho town": "LN-LIB",
      "White Lake village": "LN-LIB",
      "__default__": "LN-NOLIB"
    },
    "Lincoln": {
      "Merrill city": "LI-LIB",
      "Tomahawk city": "LI-LIB",
      "__default__": "LI-NOLIB"
    },
    "Manitowoc": {
      "Kiel city": "MA-LIB",
      "Manitowoc city": "MA-LIB",
      "Two Rivers city": "MA-LIB",
      "__default__": "MA-NOLIB"
    },
    "Marathon": {
      "Abbotsford city": "MN-ABB-C",
      "Athens village": "MN-ATH-V",
      "Berlin town": "MN-BER-T",
      "Bevent town": "MN-BEV-T",
      "Birnamwood village": "MN-BIR-V",
      "Bergen town": "MN-BRG-T",
      "Brighton town": "MN-BRI-T",
      "Bern town": "MN-BRN-T",
      "Cassel town": "MN-CAS-T",
      "Cleveland town": "MN-CLE-T",
      "Colby city": "MN-COL-C",
      "Day town": "MN-DAY-T",
      "Dorchester village": "MN-DOR-V",
      "Easton town": "MN-EAS-T",
      "Eau Pleine town": "MN-EAU-T",
      "Edgar village": "MN-EDG-V",
      "Elderon town": "MN-ELD-T",
      "Elderon village": "MN-ELD-V",
      "Emmet town": "MN-EMM-T",
      "Fenwood village": "MN-FEN-V",
      "Frankfort town": "MN-FRK-T",
      "Franzen town": "MN-FRZ-T",
      "Green Valley town": "MN-GRV-T",
      "Guenther town": "MN-GUE-T",
      "Halsey town": "MN-HAL-T",
      "Hamburg town": "MN-HAM-T",
      "Harrison town": "MN-HAR-T",
      "Hatley village": "MN-HAT-V",
      "Hewitt town": "MN-HEW-T",
      "Holton town": "MN-HOL-T",
      "Hull town": "MN-HUL-T",
      "Johnson town": "MN-JOH-T",
      "Kronenwetter village": "MN-KNN-V",
      "Knowlton town": "MN-KNW-T",
      "Maine village": "MN-MAI-V",
      "Marathon town": "MN-MAR-T",
      "Marathon City village": "MN-MAR-V",
      "Mcmillan town": "MN-MCM-T",
      "Marshfield city": "MN-MFD-C",
      "Mosinee city": "MN-MOS-C",
      "Mosinee town": "MN-MOS-T",
      "Norrie town": "MN-NOR-T",
      "Plover town": "MN-PLO-T",
      "Rib Mountain town": "MN-RBM-T",
      "Reid town": "MN-REI-T",
      "Rib Falls town": "MN-RIB-T",
      "Ringle town": "MN-RIN-T",
      "Rothschild village": "MN-ROT-V",
      "Rietbrock town": "MN-RTB-T",
      "Schofield city": "MN-SCH-C",
      "Spencer town": "MN-SPE-T",
      "Spencer village": "MN-SPE-V",
      "Stettin town": "MN-STE-T",
      "Stratford village": "MN-STR-V",
      "Texas town": "MN-TEX-T",
      "Unity village": "MN-UNI-V",
      "Wausau city": "MN-WAU-C",
      "Wausau town": "MN-WAU-T",
      "Weston town": "MN-WES-T",
      "Weston village": "MN-WES-V",
      "Wien town": "MN-WIE-T",
      "__default__": "X-UND"
    },
    "Marinette": {
      "__default__": "MT-LIB"
    },
    "Marquette": {
      "Buffalo town": "MQ-BUF-T",
      "Crystal Lake town": "MQ-CRL-T",
      "Douglas town": "MQ-DGS-T",
      "Endeavor village": "MQ-END-V",
      "Harris town": "MQ-HAR-T",
      "Mecan town": "MQ-MEC-T",
      "Moundville town": "MQ-MND-T",
      "Montello city": "MQ-MON-C",
      "Montello town": "MQ-MON-T",
      "Neshkoro town": "MQ-NES-T",
      "Neshkoro village": "MQ-NES-V",
      "Newton town": "MQ-NEW-T",
      "Oxford town": "MQ-OXF-T",
      "Oxford village": "MQ-OXF-V",
      "Packwaukee town": "MQ-PCK-T",
      "Shields town": "MQ-SHI-T",
      "Springfield town": "MQ-SPR-T",
      "Westfield town": "MQ-WST-T",
      "Westfield village": "MQ-WST-V",
      "__default__": "X-UND"
    },
    "Menominee": {
      "__default__": "ME-LIB"
    },
    "Milwaukee": {
      "West Milwaukee village": "MI-NOLIB",
      "__default__": "MI-LIB"
    },
    "Monroe": {
      "Cashton village": "MO-LIB",
      "Kendall village": "MO-LIB",
      "Norwalk village": "MO-LIB",
      "Sparta city": "MO-LIB",
      "Tomah city": "MO-LIB",
      "Wilton town": "MO-LIB",
      "__default__": "MO-NOLIB"
    },
    "Oconto": {
      "Bagley town": "OC-LIB",
      "Breed town": "OC-LIB",
      "Gillett town": "OC-LIB",
      "How town": "OC-LIB",
      "Lakewood town": "OC-LIB",
      "Lena town": "OC-LIB",
      "Maple Valley town": "OC-LIB",
      "Oconto city": "OC-LIB",
      "Oconto Falls city": "OC-LIB",
      "Suring village": "OC-LIB",
      "__default__": "OC-NOLIB"
    },
    "Oneida": {
      "Crescent town": "ON-LIB",
      "Minocqua town": "ON-LIB",
      "Newbold town": "ON-LIB",
      "Pelican town": "ON-LIB",
      "Pine Lake town": "ON-LIB",
      "Rhinelander city": "ON-LIB",
      "Three Lakes town": "ON-LIB",
      "__default__": "ON-NOLIB"
    },
    "Outagamie": {
      "Appleton city": "OU-LIB",
      "Black Creek town": "OU-LIB",
      "Hortonville village": "OU-LIB",
      "Kaukauna city": "OU-LIB",
      "Kimberly village": "OU-LIB",
      "Little Chute village": "OU-LIB",
      "New London city": "OU-LIB",
      "Seymour city": "OU-LIB",
      "Shiocton village": "OU-LIB",
      "__default__": "OU-NOLIB"
    },
    "Ozaukee": {
      "Belgium town": "OZ-NOLIB",
      "Belgium village": "OZ-NOLIB",
      "Fredonia town": "OZ-NOLIB",
      "Fredonia village": "OZ-NOLIB",
      "Newburg village": "OZ-NOLIB",
      "Port Washington town": "OZ-NOLIB",
      "Saukville village": "OZ-NOLIB",
      "__default__": "OZ-LIB"
    },
    "Pepin": {
      "Durand city": "PE-LIB",
      "Pepin town": "PE-LIB",
      "__default__": "PE-NOLIB"
    },
    "Pierce": {
      "Ellsworth town": "PI-LIB",
      "Elmwood village": "PI-LIB",
      "Plum City village": "PI-LIB",
      "Prescott city": "PI-LIB",
      "River Falls city": "PI-LIB",
      "Spring Valley village": "PI-LIB",
      "__default__": "PI-NOLIB"
    },
    "Polk": {
      "Amery city": "PO-LIB",
      "Balsam Lake town": "PO-LIB",
      "Centuria village": "PO-LIB",
      "Clear Lake town": "PO-LIB",
      "Dresser village": "PO-LIB",
      "Frederic village": "PO-LIB",
      "Luck town": "PO-LIB",
      "Milltown town": "PO-LIB",
      "Osceola town": "PO-LIB",
      "St. Croix Falls city": "PO-LIB",
      "__default__": "PO-NOLIB"
    },
    "Portage": {
      "Alban town": "P-ALB-T",
      "Almond town": "P-ALM-T",
      "Almond village": "P-ALM-V",
      "Amherst town": "P-AMH-T",
      "Amherst village": "P-AMH-V",
      "Amherst Junction village": "P-AMJ-V",
      "Belmont town": "P-BEL-T",
      "Buena Vista town": "P-BUV-T",
      "Carson town": "P-CAR-T",
      "Dewey town": "P-DEW-T",
      "Eau Pleine town": "P-EPL-T",
      "Grant town": "P-GRT-T",
      "Hull town": "P-HUL-T",
      "Junction City village": "P-JNC-V",
      "Lanark town": "P-LAN-T",
      "Linwood town": "P-LIN-T",
      "Nelsonville village": "P-NEL-V",
      "New Hope town": "P-NHP-T",
      "Pine Grove town": "P-PIN-T",
      "Park Ridge village": "P-PKR-V",
      "Plover town": "P-PLO-T",
      "Plover village": "P-PLO-V",
      "Rosholt village": "P-ROS-V",
      "Sharon town": "P-SHA-T",
      "Stockton town": "P-STO-T",
      "Stevens Point city": "P-STP-C",
      "Whiting village": "P-WHI-V",
      "__default__": "X-UND"
    },
    "Price": {
      "Ogema town": "PR-LIB",
      "Park Falls city": "PR-LIB",
      "Phillips city": "PR-LIB",
      "__default__": "PR-NOLIB"
    },
    "Racine": {
      "Burlington city": "RA-LIB",
      "Racine city": "RA-LIB",
      "Rochester village": "RA-LIB",
      "Union Grove village": "RA-LIB",
      "Waterford town": "RA-LIB",
      "__default__": "RA-NOLIB"
    },
    "Richland": {
      "Akan town": "RI-AKA-T",
      "Bloom town": "RI-BLO-T",
      "Boaz village": "RI-BOA-V",
      "Buena Vista town": "RI-BUV-T",
      "Cazenovia village": "RI-CAZ-V",
      "Dayton town": "RI-DAY-T",
      "Eagle town": "RI-EAG-T",
      "Forest town": "RI-FOR-T",
      "Henrietta town": "RI-HEN-T",
      "Ithaca town": "RI-ITH-T",
      "Lone Rock village": "RI-LOR-V",
      "Marshall town": "RI-MAR-T",
      "Orion town": "RI-ORI-T",
      "Richland Center city": "RI-RCC-C",
      "Richwood town": "RI-RCH-T",
      "Richland town": "RI-RIC-T",
      "Rockbridge town": "RI-ROC-T",
      "Sylvan town": "RI-SYL-T",
      "Viola village": "RI-VIO-V",
      "Westford town": "RI-WES-T",
      "Willow town": "RI-WIL-T",
      "Yuba village": "RI-YUB-V",
      "__default__": "X-UND"
    },
    "Rock": {
      "Avon town": "RO-AVO-T",
      "Beloit city": "RO-BEL-C",
      "Beloit town": "RO-BEL-T",
      "Bradford town": "RO-BRA-T",
      "Brodhead city": "RO-BRD-C",
      "Center town": "RO-CEN-T",
      "Clinton town": "RO-CLI-T",
      "Clinton village": "RO-CLI-V",
      "Edgerton city": "RO-EDG-C",
      "Evansville city": "RO-EVA-C",
      "Footville village": "RO-FOO-V",
      "Fulton town": "RO-FUL-T",
      "Harmony town": "RO-HAR-T",
      "Janesville city": "RO-JAN-C",
      "Janesville town": "RO-JAN-T",
      "Johnstown town": "RO-JOH-T",
      "La Prairie town": "RO-LAP-T",
      "Lima town": "RO-LIM-T",
      "Magnolia town": "RO-MAG-T",
      "Milton city": "RO-MIL-C",
      "Milton town": "RO-MIL-T",
      "Newark town": "RO-NEW-T",
      "Orfordville village": "RO-ORF-V",
      "Plymouth town": "RO-PLY-T",
      "Porter town": "RO-POR-T",
      "Rock town": "RO-ROC-T",
      "Spring Valley town": "RO-SPV-T",
      "Turtle town": "RO-TUR-T",
      "Union town": "RO-UNI-T",
      "__default__": "X-UND"
    },
    "Rusk": {
      "Bruce village": "RU-LIB",
      "Hawkins town": "RU-LIB",
      "Ladysmith city": "RU-LIB",
      "__default__": "RU-NOLIB"
    },
    "Sauk": {
      "Baraboo city": "S-BAR-C1",
      "Baraboo town": "S-BAR-T",
      "Bear Creek town": "S-BC-T",
      "Cazenovia village": "S-CAZ-V",
      "Dellona town": "S-DELL-T",
      "Delton town": "S-DELT-T",
      "Excelsior town": "S-EXC-T",
      "Fairfield town": "S-FAI-T",
      "Franklin town": "S-FRA-T",
      "Freedom town": "S-FRE-T",
      "Greenfield town": "S-GRE-T",
      "Honey Creek town": "S-HC-T",
      "Hillpoint village": "S-HILL-V",
      "Ironton town": "S-IRO-T",
      "Ironton village": "S-IRO-V",
      "Lake Delton village": "S-LD-V",
      "Loganville village": "S-LOG-V",
      "Lime Ridge village": "S-LR-V",
      "La Valle town": "S-LV-T",
      "La Valle village": "S-LV-V",
      "Merrimac town": "S-MER-T",
      "Merrimac village": "S-MER-V",
      "North Freedom village": "S-NF-V",
      "Prairie du Sac town": "S-PDS-T",
      "Prairie du Sac village": "S-PDS-V",
      "Plain village": "S-PLA-V",
      "Reedsburg city": "S-REE-C",
      "Reedsburg town": "S-REE-T",
      "Rock Springs village": "S-RS-V",
      "Sauk City village": "S-SC-V",
      "Spring Green town": "S-SGE-T",
      "Spring Green village": "S-SGE-V",
      "Sumpter town": "S-SUM-T",
      "Troy town": "S-TRO-T",
      "Washington town": "S-WAS-TS",
      "West Baraboo village": "S-WB-V",
      "Wisconsin Dells city": "S-WD-CS",
      "Westfield town": "S-WESF-T",
      "Winfield town": "S-WIN-T2",
      "Woodland town": "S-WOO-T",
      "__default__": "X-UND"
    },
    "Sawyer": { // Default to SA-NOLIB to include tribal land
      "Bass Lake town": "SA-NOLIB",
      "Couderay town": "SA-NOLIB",
      "Couderay village": "SA-NOLIB",
      "Draper town": "SA-NOLIB",
      "Edgewater town": "SA-NOLIB",
      "Exeland village": "SA-NOLIB",
      "Hayward town": "SA-NOLIB",
      "Hunter town": "SA-NOLIB",
      "Lenroot town": "SA-NOLIB",
      "Meadowbrook town": "SA-NOLIB",
      "Meteor town": "SA-NOLIB",
      "Ojibwa town": "SA-NOLIB",
      "Radisson town": "SA-NOLIB",
      "Radisson village": "SA-NOLIB",
      "Round Lake town": "SA-NOLIB",
      "Sand Lake town": "SA-NOLIB",
      "Spider Lake town": "SA-NOLIB",
      "Weirgor town": "SA-NOLIB",
      "__default__": "SA-LIB"
    },
    "Shawano": {
      "Almon town": "SH-ALM-T",
      "Angelica town": "SH-ANG-T",
      "Aniwa town": "SH-ANI-T",
      "Aniwa village": "SH-ANI-V",
      "Bartelme town": "SH-BAT-T",
      "Birnamwood town": "SH-BIR-T",
      "Birnamwood village": "SH-BIR-V",
      "Bonduel village": "SH-BON-V",
      "Bowler village": "SH-BOW-V",
      "Belle Plaine town": "SH-BPL-T",
      "Cecil village": "SH-CEC-V",
      "Eland village": "SH-ELA-V",
      "Fairbanks town": "SH-FRB-T",
      "Germania town": "SH-GER-T",
      "Grant town": "SH-GNT-T",
      "Gresham village": "SH-GRE-V",
      "Green Valley town": "SH-GVY-T",
      "Hartland town": "SH-HAR-T",
      "Herman town": "SH-HER-T",
      "Hutchins town": "SH-HUT-T",
      "Lessor town": "SH-LES-T",
      "Marion city": "SH-MAR-C",
      "Mattoon village": "SH-MAT-V",
      "Maple Grove town": "SH-MGR-T",
      "Morris town": "SH-MOR-T",
      "Navarino town": "SH-NAV-T",
      "Pella town": "SH-PEL-T",
      "Pulaski village": "SH-PUL-V",
      "Richmond town": "SH-RCH-T",
      "Red Springs town": "SH-RSP-T",
      "Seneca town": "SH-SEN-T",
      "Shawano city": "SH-SHW-C",
      "Tigerton village": "SH-TIG-V",
      "Wescott town": "SH-WES-T",
      "Wittenberg town": "SH-WIT-T",
      "Wittenberg village": "SH-WIT-V",
      "Waukechon town": "SH-WKN-T",
      "Washington town": "SH-WSH-T",
      "__default__": "X-UND"
    },
    "Sheboygan": {
      "Adell village": "SB-LIB",
      "Cedar Grove village": "SB-LIB",
      "Elkhart Lake village": "SB-LIB",
      "Kohler village": "SB-LIB",
      "Oostburg village": "SB-LIB",
      "Plymouth city": "SB-LIB",
      "Random Lake village": "SB-LIB",
      "Scott town": "SB-LIB",
      "Sheboygan city": "SB-LIB",
      "Sheboygan Falls city": "SB-LIB",
      "Sherman town": "SB-LIB",
      "__default__": "SB-NOLIB"
    },
    "St. Croix": {
      "Baldwin town": "SC-LIB",
      "Deer Park village": "SC-LIB",
      "Glenwood City city": "SC-LIB",
      "Hammond town": "SC-LIB",
      "Hudson city": "SC-LIB",
      "New Richmond city": "SC-LIB",
      "River Falls city": "SC-LIB",
      "Roberts village": "SC-LIB",
      "Somerset town": "SC-LIB",
      "Spring Valley village": "SC-LIB",
      "Woodville village": "SC-LIB",
      "__default__": "SC-NOLIB"
    },
    "Taylor": {
      "Gilman village": "TA-LIB",
      "Medford city": "TA-LIB",
      "Rib Lake town": "TA-LIB",
      "Stetsonville village": "TA-LIB",
      "Westboro town": "TA-LIB",
      "__default__": "TA-NOLIB"
    },
    "Trempeleau": {
      "Arcadia city": "TR-LIB",
      "Blair city": "TR-LIB",
      "Ettrick town": "TR-LIB",
      "Galesville city": "TR-LIB",
      "Independence city": "TR-LIB",
      "Osseo city": "TR-LIB",
      "Strum village": "TR-LIB",
      "Trempealeau town": "TR-LIB",
      "Whitehall city": "TR-LIB",
      "__default__": "TR-NOLIB"
    },
    "Vernon": {
      "Bergen town": "VE-BRG-T",
      "Chaseburg village": "VE-CHA-V",
      "Christiana town": "VE-CHR-T",
      "Clinton town": "VE-CLI-T",
      "Coon town": "VE-COO-T",
      "Coon Valley village": "VE-CVY-V",
      "De Soto village": "VE-DSO-V",
      "Forest town": "VE-FOR-T",
      "Franklin town": "VE-FRA-T",
      "Genoa town": "VE-GEN-T",
      "Genoa village": "VE-GEN-V",
      "Greenwood town": "VE-GRE-T",
      "Hamburg town": "VE-HAM-T",
      "Harmony town": "VE-HAR-T",
      "Hillsboro city": "VE-HIL-C",
      "Hillsboro town": "VE-HIL-T",
      "Jefferson town": "VE-JEF-T",
      "Kickapoo town": "VE-KIK-T",
      "La Farge village": "VE-LAF-V",
      "Liberty town": "VE-LIB-T",
      "Ontario village": "VE-ONT-V",
      "Readstown village": "VE-REA-V",
      "Sterling town": "VE-STE-T",
      "Stark town": "VE-STK-T",
      "Stoddard village": "VE-STO-V",
      "Union town": "VE-UNI-T",
      "Viola village": "VE-VIO-V",
      "Viroqua city": "VE-VIR-C",
      "Viroqua town": "VE-VIR-T",
      "Webster town": "VE-WEB-T",
      "Westby city": "VE-WES-C",
      "Wheatland town": "VE-WHE-T",
      "Whitetown town": "VE-WHI-T",
      "__default__": "X-UND"
    },
    "Vilas": {
      "Arbor Vitae town": "VI-NOLIB",
      "__default__": "VI-LIB"
    },
    "Walworth": {
      "Burlington city": "WA-LIB",
      "Darien town": "WA-LIB",
      "Delavan city": "WA-LIB",
      "East Troy town": "WA-LIB",
      "Elkhorn city": "WA-LIB",
      "Fontana-on-Geneva Lake village": "WA-LIB",
      "Genoa City village": "WA-LIB",
      "Lake Geneva city": "WA-LIB",
      "Sharon town": "WA-LIB",
      "Walworth town": "WA-LIB",
      "Williams Bay village": "WA-LIB",
      "__default__": "WA-NOLIB"
    },
    "Washburn": {
      "Shell Lake city": "WB-LIB",
      "Spooner city": "WB-LIB",
      "__default__": "WB-NOLIB"
    },
    "Washington": {
      "Germantown town": "WG-LIB",
      "Hartford city": "WG-LIB",
      "Kewaskum town": "WG-LIB",
      "Kewaskum village": "WG-LIB",
      "Milwaukee city": "WG-LIB",
      "Slinger village": "WG-LIB",
      "West Bend city": "WG-LIB",
      "__default__": "WG-NOLIB"
    },
    "Waukesha": {
      "Big Bend village": "WK-LIB",
      "Brookfield city": "WK-LIB",
      "Butler village": "WK-LIB",
      "Delafield city": "WK-LIB",
      "Eagle town": "WK-LIB",
      "Eagle village": "WK-LIB",
      "Elm Grove village": "WK-LIB",
      "Hartland village": "WK-LIB",
      "Lisbon town": "WK-LIB",
      "Menomonee Falls village": "WK-LIB",
      "Merton town": "WK-LIB",
      "Milwaukee city": "WK-LIB",
      "Mukwonago town": "WK-LIB",
      "Muskego city": "WK-LIB",
      "New Berlin city": "WK-LIB",
      "Oconomowoc city": "WK-LIB",
      "Pewaukee city": "WK-LIB",
      "Sussex village": "WK-LIB",
      "Waukesha city": "WK-LIB",
      "__default__": "WK-NOLIB"
    },
    "Waupaca": {
      "Bear Creek town": "WP-BCR-T",
      "Big Falls village": "WP-BIF-V",
      "Caledonia town": "WP-CAL-T",
      "Clintonville city": "WP-CLI-C",
      "Dayton town": "WP-DAY-T",
      "Dupont town": "WP-DUP-T",
      "Embarrass village": "WP-EMB-V",
      "Farmington town": "WP-FAR-T",
      "Fremont town": "WP-FRE-T",
      "Fremont village": "WP-FRE-V",
      "Harrison town": "WP-HAR-T",
      "Helvetia town": "WP-HEL-T",
      "Iola town": "WP-IOL-T",
      "Iola village": "WP-IOL-V",
      "Larrabee town": "WP-LAR-T",
      "Lebanon town": "WP-LEB-T",
      "Lind town": "WP-LIN-T",
      "Little Wolf town": "WP-LWO-T",
      "Manawa city": "WP-MAN-C",
      "Marion city": "WP-MAR-C",
      "Matteson town": "WP-MAT-T",
      "Mukwa town": "WP-MUK-T",
      "New London city": "WP-NLO-C",
      "Ogdensburg village": "WP-OGD-V",
      "Royalton town": "WP-ROY-T",
      "Scandinavia town": "WP-SCA-T",
      "Scandinavia village": "WP-SCA-V",
      "St. Lawrence town": "WP-STL-T",
      "Union town": "WP-UNI-T",
      "Waupaca city": "WP-WAU-C",
      "Waupaca town": "WP-WAU-T",
      "Weyauwega city": "WP-WEY-C",
      "Weyauwega town": "WP-WEY-T",
      "Wyoming town": "WP-WYO-T",
      "__default__": "X-UND"
    },
    "Waushara": {
      "Aurora town": "WS-AUR-T",
      "Berlin city": "WS-BER-C",
      "Bloomfield town": "WS-BLO-T",
      "Coloma town": "WS-COL-T",
      "Coloma village": "WS-COL-V",
      "Dakota town": "WS-DAK-T",
      "Deerfield town": "WS-DEE-T",
      "Hancock town": "WS-HAN-T",
      "Hancock village": "WS-HAN-V",
      "Leon town": "WS-LEO-T",
      "Lohrville village": "WS-LOH-V",
      "Marion town": "WS-MAR-T",
      "Mount Morris town": "WS-MMO-T",
      "Oasis town": "WS-OAS-T",
      "Plainfield town": "WS-PLA-T",
      "Plainfield village": "WS-PLA-V",
      "Poy Sippi town": "WS-PSI-T",
      "Redgranite village": "WS-RED-V",
      "Richford town": "WS-RIC-T",
      "Rose town": "WS-ROS-T",
      "Saxeville town": "WS-SAX-T",
      "Springwater town": "WS-SPR-T",
      "Warren town": "WS-WAR-T",
      "Wautoma city": "WS-WAU-C",
      "Wautoma town": "WS-WAU-T",
      "Wild Rose village": "WS-WRO-V",
      "__default__": "X-UND"
    },
    "Winnebago": {
      "Appleton city": "WI-LIB",
      "Menasha city": "WI-LIB",
      "Neenah city": "WI-LIB",
      "Omro city": "WI-LIB",
      "Oshkosh city": "WI-LIB",
      "Winneconne town": "WI-LIB",
      "__default_": "WI-NOLIB"
    },
    "Wood": {
      "Arpin town": "W-ARP-T",
      "Arpin village": "W-ARP-V",
      "Auburndale town": "W-AUB-T",
      "Auburndale village": "W-AUB-V",
      "Biron village": "W-BIR-V",
      "Cameron town": "W-CAM-T",
      "Cary town": "W-CAR-T",
      "Cranmoor town": "W-CRAN-T",
      "Dexter town": "W-DEX-T",
      "Grand Rapids town": "W-GRAP-T",
      "Hansen town": "W-HAN-T",
      "Hewitt village": "W-HEW-V",
      "Hiles town": "W-HIL-T",
      "Lincoln town": "W-LIN-T",
      "Marshfield city": "W-MAR-C",
      "Marshfield town": "W-MAR-T",
      "Milladore town": "W-MILL-T",
      "Milladore village": "W-MILL-V",
      "Nekoosa city": "W-NEK-C",
      "Port Edwards town": "W-PE-T",
      "Port Edwards village": "W-PE-V",
      "Pittsville city": "W-PIT-C",
      "Richfield town": "W-RCH-T",
      "Remington town": "W-REM-T",
      "Rock town": "W-ROC-T",
      "Rudolph town": "W-RUD-T",
      "Rudolph village": "W-RUD-V",
      "Saratoga town": "W-SARA-T",
      "Seneca town": "W-SENE-T",
      "Sherry town": "W-SHR-T",
      "Sigel town": "W-SIG-T",
      "Vesper village": "W-VESP-V",
      "Wisconsin Rapids city": "W-WSRP-C",
      "Wood town": "W-WOD-T",
      "__default__": "X-UND"
    },
    "__default__": "X-UND"
  };

  this.madTracts = ["1","2.01","2.02","2.04","2.05","3.01","3.02","4.01","4.02",
      "4.06","4.07","4.08","4.09","4.10","5.01","5.04","5.05","5.06","6","7","8",
      "9.01","9.02","10","11.01","11.02","12","13","14.01","14.02","14.05",
      "15.01","15.02","16.03","16.04","16.05","16.06","17.04","17.06","17.07",
      "18.02","18.04","19.01","19.02","20","21","22","23.01","23.02","24.01",
      "24.02","25","26.01","26.02","26.03","27","28","29","30.01","30.02","31",
      "32","105.01","107.02","108.01","109.03","109.05","109.06","110","112.01",
      "114.03","114.04","114.05","114.06","114.07"];

  /**
   * Passes the county and county subdivision arguments to PSTATS.find()
   * with an empty string for the census tractNotice
   *
   * @param {string} county The name of the county
   * @param {string} countySub The name of the county subdivision
   */
  this.find = function(county, countySub) {this.find(county, countySub, "")};

  /**
   *
   * @param {string} county The name of the county
   * @param {string} countySub The name of the county subdivision
   * @param {string} censusTract The census tract number
   * @return {string} The SCLS PSTAT code corresponding to the provided county,
   * sounty subdivision, and, if needed, census tract number
   */
  this.find = function(county, countySub, censusTract) {
    if (county === "Dane" && countySub === "Madison city") {
      return censusTract && this.madTracts.includes(censusTract) ? "D-" + censusTract : "D-X-MAD";
    } else {
      return this.data[county][countySub] || this.data[county].__default__ ||
          this.data.__default__;
    }
  };
}();

function queryGeocoder(addressURI,city) {
  const baseURL = "https://geocoding.geo.census.gov/geocoder/geographies/address?street="
    countyURL = baseURL + addressURI + "&city=" + city
        + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=Counties&format=json",
    countySubdivisionURL = baseURL + addressURI + "&city=" + city
        + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=County+Subdivisions&format=json",
    censusTractURL = baseURL + addressURI + "&city=" + city
        + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=Census Tracts&format=json";

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

  return Promise.all([getCounty,getCountySub,getCensusTract]).then(vals => {
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
  });
}

/**
 * Query database of PSTATs for MID, SUN, VER, and Madison-area exceptions
 * @param {string} libCode Case-insensitive library code; must be one of:
 *                         MID, VER, SUN, Exception
 * @param {string} address The address for which to find a PSTAT
 * @return {Promise} A Promise that will resolve the query results
**/
function queryAlderExceptions(libCode, address) {
  return fetch("https://mplnet.org/bibex/xml/pstats/" + libCode).then(res => {
    if (!res.ok) {
      throw new Error('[MPLnet] HTTP error, status = ' + res.status);
    }
    return res.text();
  }).then(str => {
    return (new window.DOMParser()).parseFromString(str, "text/xml");
  }).then(data => {
    if (data && data.getElementsByTagName('address').length > 0) {
      for (let item of data.getElementsByTagName('address')) {
        let regex = new RegExp(item.getElementsByTagName('regex')[0].textContent, "i");
        if (regex.test(address)) {
          return {
            "pstat": item.getElementsByTagName('value')[0].textContent,
            "zip": item.getElementsByTagName('zip')[0].textContent
          };
        }
      }

      if (libCode === "exception") {
        throw new Error("Address not found in database of PSTAT exceptions");
      } else {
        throw new Error("Address not found in database of " + libCode.toUpperCase() + " aldermanic districts.");
      }
    } else {
      throw new Error("Error retrieving XML data from MPLnet.");
    }
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, reply) {
  if (message.key === "getPSTAT") {
    let payload = {
      "matchAddr": undefined,
      "pstat": "X-UND",
      "zip": undefined,
      "error": "Unknown error occured.",
      "success": false
    },
    countySubCode = ""; // In case, e.g., a Madison, WI address has the county subdivision "Middleton city"

    queryGeocoder(message.addressURI, message.city).then(res => {
      payload.success = true;
      payload.matchAddr = res.matchAddr;
      payload.zip = res.zip;
      payload.pstat = pstats.find(res.county,res.countySub,res.censusTract);
      countySubCode = res.countySub.substring(0,3);
    }, reject => {
      payload.error = reject.message;
    }).then(res => {
      if (/^mid|ver|sun$/i.test(countySubCode)) {
        return queryAlderExceptions(countySubCode, message.address);
      } else if (/^mid|ver|sun$/i.test(message.city.substring(0,3))) {
        return queryAlderExceptions(message.city.substring(0,3), message.address);
      } else {
        // Pass along previous error message
        throw new Error(payload.error);
      }
    }).then(res => {
      payload.success = true;
      if (!payload.matchAddr) payload.matchAddr = message.address;
      if (!payload.zip) payload.zip = res.zip;
      payload.pstat = res.pstat;
    }, reject => {
      payload.error = reject.message;
    }).then(res => {
      if (/madison|middleton|verona|monona|fitchburg/i.test(message.city)) {
        return queryAlderExceptions("exception", message.address);
      }
      // Pass along previous error message
      throw new Error(payload.error);
    }).then(res => {
      payload.success = true;
      // Overwrite Census matched address in case of incorrect data, as with
      // 822 E Washington Ave (Census returns W Washington Ave)
      payload.matchAddr = message.address;
      payload.zip = res.zip;
      payload.pstat = res.pstat;
    }, reject => {
      payload.error = reject.message;
    }).then(res => {
      if (!payload.success && /^sun prairie/i.test(message.city.replace('%20',' '))) payload.pstat = "D-X-SUN";
      else if (!payload.success && /^madison/i.test(message.city)) payload.pstat = "D-X-MAD";
      reply(payload);
    });
  } else if (message.key === "getAlternatePSTAT") {
    chrome.tabs.query({
      "currentWindow": true,
      "active": true
    }, function(tabs) {
      for (let tab of tabs) {
        chrome.tabs.sendMessage(tab.id, {
          "key": "getAlternatePSTAT"
        });
      }
    });
  }
  return true;
});

/*** SET DEFAULT PREFERENCES ***/
chrome.storage.sync.get(null, function (res)  {
  // Increment the resetCounter to trigger the extension to restore defalt settings
  // next time it loads
  let resetCounter = 1;
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
  if (!res.hasOwnProperty('adultAge') || performReset) {
    chrome.storage.sync.set({"adultAge": "16"});
  }
  if (!res.hasOwnProperty('mplInternetCards') || performReset) {
    chrome.storage.sync.set({"mplInternetCards": false});
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
      "shortcutText3": "TIGERweb",
      "shortcutLink3": "https://tigerweb.geo.census.gov/tigerweb/"
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
