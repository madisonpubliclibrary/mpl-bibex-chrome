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
      "shortcutText6": "",
      "shortcutLink6": ""
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
    }
  };

  chrome.storage.sync.get('skin', function(res) {
    var skin = res.hasOwnProperty('skin') ? res.skin : 'MAD';

    switch (skin) {
      case "MID":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/mid-icon-16.png",
            "32": "/content/img/mid-icon-32.png",
            "48": "/content/img/mid-icon-48.png",
            "64": "/content/img/mid-icon-64.png",
            "128": "/content/img/mid-icon-128.png"
          }
        });

        browser.storage.sync.set(defaultLinks['MID']);
        break;
      case "PCPL":
        chrome.browserAction.setIcon({
          "path": {
            "16": "content/img/pcpl-icon-16.png",
            "32": "content/img/pcpl-icon-32.png",
            "48": "content/img/pcpl-icon-48.png",
            "64": "content/img/pcpl-icon-64.png",
            "128": "content/img/pcpl-icon-128.png"
          }
        });

        browser.storage.sync.set(defaultLinks['PCPL']);
        break;
      case "SCLS":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/scls-icon-16.png",
            "32": "/content/img/scls-icon-32.png",
            "48": "/content/img/scls-icon-48.png",
            "64": "/content/img/scls-icon-64.png",
            "128": "/content/img/scls-icon-128.png"
          }
        });

        browser.storage.sync.set(defaultLinks['SCLS']);
        break;
      case "SUN":
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/sun-icon-16.png",
            "32": "/content/img/sun-icon-32.png",
            "48": "/content/img/sun-icon-48.png",
            "64": "/content/img/sun-icon-64.png",
            "128": "/content/img/sun-icon-128.png"
          }
        });

        browser.storage.sync.set(defaultLinks['SUN']);
        break;
      default:
        chrome.browserAction.setIcon({
          "path": {
            "16": "/content/img/mpl-icon-16.png",
            "32": "/content/img/mpl-icon-32.png",
            "48": "/content/img/mpl-icon-48.png",
            "64": "/content/img/mpl-icon-64.png",
            "128": "/content/img/mpl-icon-128.png"
          }
        });

        browser.storage.sync.set(defaultLinks['MAD']);
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
      //"MNT": "512+E+Lake+Ave,+Monticello,+WI+53570", ** NON LINK LIBRARY **
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
      //"MFD": "211+E+Second+St,+Marshfield,+WI+54449", ** NON LINK LIBRARY **
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
    chrome.tabs.executeScript(details.tabId, {
      "file": "/content/scripts/sortItemCheckoutHistory.js",
      "allFrames": true
    });

    chrome.tabs.executeScript(details.tabId, {
      "file": "/content/scripts/selectPSTAT.js",
      "allFrames": true
    });

    // Optional scripts
    chrome.storage.sync.get(null, res => {
      if (!res.hasOwnProperty('restrictPatronFields') ||
          (res.hasOwnProperty('restrictPatronFields') && res.restrictPatronFields)) {
        chrome.tabs.executeScript(details.tabId, {
          "file": "/content/scripts/opt/restrictPatronFields.js",
          "allFrames": true
        });
      }

      if (!res.hasOwnProperty('parseAddr') ||
          (res.hasOwnProperty('parseAddr') && res.parseAddr)) {
        chrome.tabs.executeScript(details.tabId, {
          "file": "/content/scripts/opt/parsePatronAddr.js",
          "allFrames": true
        });
      }

      if (!res.hasOwnProperty('updateAccountType') ||
          (res.hasOwnProperty('updateAccountType') && res.updateAccountType)) {
        chrome.tabs.executeScript(details.tabId, {
          "file": "/content/scripts/opt/updateAccountType.js",
          "allFrames": true
        });
      }

      if (!res.hasOwnProperty('addPatronNotes') ||
          (res.hasOwnProperty('addPatronNotes') && res.addPatronNotes)) {
        chrome.tabs.executeScript(details.tabId, {
          "file": "/content/scripts/opt/patronMessages.js",
          "allFrames": true
        });
      }
    });

    chrome.storage.sync.get(['sundayDropbox','sundayDropboxPaused'], res => {
      if ((!res.hasOwnProperty('sundayDropbox') ||
          (res.hasOwnProperty('sundayDropbox') && res.sundayDropbox)) && (new Date()).getDay() === 0) {
        // If sundayDropbox is not paused
        if (!res.hasOwnProperty('sundayDropboxPaused') ||
            (res.hasOwnProperty('sundayDropboxPaused') && !res.sundayDropboxPaused)) {
          chrome.tabs.executeScript(details.tabId, {
            "file": "/content/scripts/opt/sundayDropbox.js",
            "allFrames": true
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
  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/fastaddWarning.js",
    "allFrames": true
  });

  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/formatPatronRecord.js",
    "allFrames": true
  });

  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/patronQuickSave.js",
    "allFrames": true
  });

  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/printPatronBarcode.js",
    "allFrames": true
  });

  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/separateHSA.js",
    "allFrames": true
  });

  chrome.tabs.executeScript(details.tabId, {
    "file": "/content/scripts/betterLogo.js",
    "allFrames": true
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
      chrome.tabs.executeScript(tab.id, {
        "code": "alert('" + msg + "');"
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
      chrome.tabs.executeScript(tab.id, {
        "code": "document.getElementById('staff-iframe').contentWindow.document.querySelector('a[href=\"" + info.linkUrl.split('bibliovation.com')[1] + "\"]').textContent;"
      }, function(res) {
        res[0] = res[0].trim();
        if(/^[23]\d{13}$/.test(res[0])) {
          openPIForm(res[0]);
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
    case "queryGeocoder":
      var matchAddr, county, countySub, censusTract, zip;

      const baseURL = "https://geocoding.geo.census.gov/geocoder/geographies/address?street="
        countyURL = baseURL + message.addressURI + "&city=" + message.city
            + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=Counties&format=json",
        countySubdivisionURL = baseURL + message.addressURI + "&city=" + message.city
            + "&state=wi&benchmark=Public_AR_Current&vintage=Current_Current&layers=County+Subdivisions&format=json",
        censusTractURL = baseURL + message.addressURI + "&city=" + message.city
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

      Promise.all([getCounty,getCountySub,getCensusTract]).then(vals => {
        var countyData = vals[0], countySubData = vals[1],
            censusTractData = vals[2];

        if (countyData.errors) {
          throw new Error(countyData.errors.join("; "));
        } else if (!countyData || !countyData.result || countyData.result.addressMatches.length === 0) {
          throw new Error("No county data matched given address.");
        } else if (countySubData.errors) {
          throw new Error(countySubData.errors.join("; "));
        } else if (!countySubData || !countySubData.result || countySubData.result.addressMatches.length === 0) {
          throw new Error("No county subdivision data matched given address.");
        } else if (censusTractData.errors) {
          throw new Error(censusTractData.errors.join("; "));
        } else if (!censusTractData || !censusTractData.result || censusTractData.result.addressMatches.length === 0) {
          throw new Error("No census tract data matched given address.");
        } else {
          countyData = countyData.result.addressMatches[0];
          countySubData = countySubData.result.addressMatches[0];
          censusTractData = censusTractData.result.addressMatches[0];

          matchAddr = countyData.matchedAddress.split(',')[0].toUpperCase();
          county = countyData.geographies.Counties[0].BASENAME;
          countySub = countySubData.geographies['County Subdivisions'][0].NAME;
          zip = countyData.addressComponents.zip;
          censusTract = censusTractData.geographies['Census Tracts'];
          if (censusTract) censusTract = censusTract[0].BASENAME;

          if (matchAddr && county && countySub && censusTract && zip) {
            if (county === "Dane" && /^(Middleton|Sun Prairie|Verona) (city|village)$/.test(countySub)) {
              const libCode = countySub.substring(0,3).toLowerCase(),
                alderURL = "https://mpl-bibex.lrschneider.com/pstats/" + libCode +
                  "?val=all&regex=true";

              return fetch(alderURL, {"method": "GET"}).then(response => {
                return response.json();
              }).then(json => {
                var value = "";

                for (var i = 0; i < json.length; i++) {
                  var regex = new RegExp(json[i].regex, "i");
                  if (regex.test(matchAddr)) {
                    value = json[i].value;
                  }
                }

                return Promise.resolve({
                  "key": "returnCensusData",
                  "matchAddr": matchAddr,
                  "county": county,
                  "countySub": countySub,
                  "censusTract": censusTract,
                  "zip": zip,
                  "value": value
                });
              });
            } else {
              return Promise.resolve({
                "key": "returnCensusData",
                "matchAddr": matchAddr,
                "county": county,
                "countySub": countySub,
                "censusTract": censusTract,
                "zip": zip
              });
            }
          }
        }
      }).then(res => {
        reply(res);
      }, reject => {
        reply({
          "key": "failedCensusData",
          "rejectMsg": reject.message
        });
      });
      result = OPEN_CHANNEL;
      break;
    case "queryAlderDists":
      const alderURL = "https://mpl-bibex.lrschneider.com/pstats?library="
          + message.code;

      fetch(alderURL, {"method": "GET"}).then(response => {
        if(!response.ok) {
          throw new Error('[lrschneider.com] HTTP error, status = ' + response.status);
        }
        return response.json();
      }).then(json => {
        var value, zip;
        for (var i = 0; i < json.length; i++) {
          var regex = new RegExp(json[i].regex, "i");

          if (regex.test(message.address)) {
            value = json[i].value;
            zip = json[i].zip
            break;
          }
        }

        if (value && zip) {
          reply({
            "key": "returnAlderDists",
            "value": value,
            "zip": zip
          });
        } else if (value) {
          reply({
            "key": "returnAlderDists",
            "value": value
          });
        } else {
          reply({"key": "failedAlderDists"});
        }
      });
      result = OPEN_CHANNEL;
      break;
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
    case "openFactFinder":
      chrome.tabs.create({
        "url": "https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml",
        "active": true
      }, function(tab) {
        chrome.tabs.executeScript(tab.id, {
          "file": "/content/scripts/openFactFinder.js",
          "allFrames": true
        }, function() {
          chrome.tabs.sendMessage(tab.id, {
            "key": "addressData",
            "address": message.address,
            "city": message.city
          });
        });
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

        return Promise.resolve(distArray.sort((a,b) => {
          if (a[1] < b[1]) return -1;
          else if (a[1] > b[1]) return 1;
          else return 0;
        })[0]);
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
      const madAddrURL = "https://mpl-bibex.lrschneider.com/madAddr";

      fetch(madAddrURL, {"method": "GET"}).then(response => {
        if (!response.ok) {
          throw new Error('[lrschneider.com] HTTP error, status = ' + response.status);
        }
        response.json().then(json => {
          reply(json);
        });
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
      chrome.tabs.executeScript({
        "file": "/browserAction/scripts/addLostCardNote.js",
        "allFrames": true
      });
      break;
    case "addPaymentPlanNote":
      chrome.tabs.executeScript({
        "file": "/browserAction/scripts/addPaymentPlanNote.js",
        "allFrames": true
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
            chrome.tabs.executeScript(tab.id, {
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
          chrome.tabs.executeScript(tab.id, {
            "file": "/problemItemForm/getPatronData.js"
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
          chrome.tabs.executeScript(tab.id, {
            "file": "/problemItemForm/getItemBib.js"
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
                      chrome.tabs.executeScript(tab.id, {
                         "file": "/problemItemForm/getItemTitleCopiesHolds.js"
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
                        chrome.tabs.executeScript(tab.id, {
                          "file": "/problemItemForm/getItemUse.js"
                        }, useData => {
                          if (useData && useData[0] && useData[0].hasOwnProperty('found') && useData[0].found) {
                            clearInterval(waitForUse);
                            chrome.tabs.remove(tab.id);
                            resolve(useData[0].use);
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
                        chrome.tabs.executeScript(tab.id, {
                          "file": "/problemItemForm/getItemPastUse.js"
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
                    res[0].use = parseInt(res[1]) + parseInt(res[2]);
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
