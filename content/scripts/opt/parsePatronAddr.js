(function(){
  'use strict';
  if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
    const addr = document.getElementById('address');
    const addr2 = document.getElementById('address2');
    const city = document.getElementById('city');
    const expDate = document.getElementById('dateexpiry');
    const bn = document.getElementById('borrowernotes');
    const cc = document.getElementById('categorycode');
    const dob = document.getElementById('dateofbirth');
    const date = new Date();
    let patronActions = document.getElementsByClassName('action');

    let year;
    let month = date.getMonth();
    let staffInit;

    if (month < 4) {
      year = date.getFullYear();
    } else if (month > 4) {
      year = date.getFullYear() + 1;
    } else {
      if (date.getDate() < 15) {
        year = date.getFullYear();
      } else {
        year = date.getFullYear() + 1;
      }
    }

    function currDate() {
      const year = date.getFullYear();
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return month + '/' + day + '/' + year;
    }

    /**
     * Restore the save button and remove the override button
     */
    function restoreSave() {
      let patronActions = document.getElementsByClassName('action');

      if (patronActions.length > 0) {
        patronActions = patronActions[0];

        if (patronActions.childElementCount === 3) {
          patronActions.replaceChild(patronActions.children[2], patronActions.children[0]);
          patronActions.children[0].style = "cursor:pointer;";
        } else {
          alert('Unable to save. Please reload the page.')
        }
      }
    }

    /**
     * Replace the save button at the bottom of the screen with an
     * override button
     */
    function blockSubmit() {
      let patronActions = document.getElementsByClassName('action');
      const button = document.createElement('input');

      if (patronActions.length > 0) {
        patronActions = patronActions[0];
        button.type = 'button';
        button.value = 'Override Block';
        button.style = 'cursor:pointer;';

        button.addEventListener('click', restoreSave);

        patronActions.appendChild(button);
        patronActions.appendChild(patronActions.children[1]);
        patronActions.appendChild(patronActions.children[0]);
        patronActions.children[2].style = "display:none;";
      }
    }

    function deleteLUNotice() {
      chrome.storage.sync.get('addrNoteCooldown').then(res => {
        if ((res.hasOwnProperty('addrNoteCooldown') && !res.addrNoteCooldown) || !res.hasOwnProperty('addrNoteCooldown')) {
          chrome.runtime.sendMessage({"key": "addrNoteCooldown"}, () => {
            alert('Please delete the circulation note regarding the patron\'s previous limited use address');
          });
        }
      });
    }

    function deleteDormNotice() {
      chrome.storage.sync.get('addrNoteCooldown').then(res => {
        if ((res.hasOwnProperty('addrNoteCooldown') && !res.addrNoteCooldown) || !res.hasOwnProperty('addrNoteCooldown')) {
          chrome.runtime.sendMessage({"key": "addrNoteCooldown"}, () => {
            alert('Please delete the circulation note regarding the patron\'s previous dorm address');
          });
        }
      });
    }

    let parseAddr = function() {
      if (addr.value && city.value) {
        chrome.runtime.sendMessage({"key": "getPatronAddrXML"}).then(str => {
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
          return cleanedData;
        }).then(result => {
          for (let item of result) {
            let fullAddr = (addr.value + ' ' + addr2.value).trim().replace(/[^\w\s]|_/g, "");
            let regex = new RegExp(item['address_regex'], 'i');
            let cityMatch = (new RegExp(item['city_regex'], 'i')).test(city.value);

            if (regex.test(fullAddr) && cityMatch) {
              if (item['type'] === "dorm") {
                let noteBody = "Special expiration date of 05/15/" + year +
                    " set due to residence at " + item['name'] + ", a university dorm." +
                    " Patron must verbally update address before account renewal (proof of address not necessary).",
                  msg = noteBody;

                if (bn && !bn.value.includes(noteBody)) {
                  expDate.value = "05/15/" + year;
                  if (bn.value !== "") {
                    if (/Special expiration date of 05\/15\/20[0-9]{2} set due to residence at/.test(bn.value)) {
                      msg = "Please remove old dorm expiration note.\n\n" + noteBody;
                    }
                    bn.value += "\n\n";
                  }

                  alert(msg);
                  bn.value += noteBody;
                }
                return;
              } else if (item['type'] === "unacceptable") {
                if (patronActions[0].children[0].value !== "Override Block") {
                  let msg = "--- STOP ---\nA library card CANNOT be issued to this address.\n" + item['address'] + " (" + item['name'] + ") is NOT a valid residential address.\n\nInform any patron providing this address that they must provide proof of a valid residential address in order to get a library card. (You could offer them an internet access card.)";
                  if (item['city_regex'] === 'madison') {
                    msg += "\n\nFor more info refer to the list of unacceptable addresses on the staff wiki:\nhttps://www.mplnet.org/wiki/bad-addresseslimited-use-addresses";
                  }
                  alert(msg);
                  blockSubmit();
                }
                return;
              } else if (item['type'] === "restricted" || item['type'] === "unique") {
                // Make account limited use
                if (cc) {
                  if (cc.value === "AD") {
                    cc.value = "LU";
                  } else if (cc.value === "JU") {
                    cc.value = "LUJ";
                  } else if (cc.value === "WEB") {
                    if (dob && dob.value !== '') {
                      dob = new Date(dob.value);

                      chrome.storage.sync.get('adultAge', function(res) {
                        let ageAD = res.hasOwnProperty('adultAge') && /^1[6-8]$/.test(res.adultAge) ?
                                  parseInt(res.adultAge) : 16;

                        if (((Date.now() - dob)/31556952000) >= ageAD) {
                          cc.value = "LU";
                        } else {
                          cc.value = "LUJ"
                        }
                      });
                    }
                  }
                }

                // Enable save button if necessary
                if (patronActions && patronActions[0].children[0].value === "Override Block") {
                  restoreSave();
                }

                if (!bn.value.includes("Patron's account is Limited Use due to temporary residence at "
                    + item['name'] + ' (' + item['address'] + ')')) {
                  if (item['type'] === "restricted") {
                    let promptText = "--- NOTE ---\nA library card issued to " + item['address'] + " (" +item['name'] + ") must be LIMITED USE.\n\nIn order to have the limited use restrictions removed from their account, a patron must first provide proof that they are living at a valid residential address."
                    promptText += item['city_regex'] === 'madison' ? "\n\nFor more info refer to the list of unacceptable addresses on the staff wiki:\nhttps://www.mplnet.org/wiki/limited-use-addresses\n\nIf this is a new address, enter your initials and library code to confirm: (e.g. LS/MAD)"
                                                                       : "\n\nIf this is a new address, enter your initials and library code to confirm: (e.g. LS/MAD)";
                    staffInit = prompt(promptText);
                  } else if (item['type'] === "unique") {
                    staffInit = prompt(item['note'].replace(/\\n/g, "\n"));
                  }

                  if (!staffInit) staffInit = "";
                  if (bn.value !== '') bn.value += "\n\n";

                  bn.value += "Patron's account is Limited Use due to temporary residence at " + item['name'] + " (" + item['address'] + "). Patron must show proof of valid residential address in order to remove restrictions. " + currDate() + " " + staffInit;
                }

                if (bn.value.match(/Patron's account is Limited Use due to temporary residence/g).length > 1) {
                  deleteLUNotice();
                }
                return;
              } else if (item['type'] === "SaH") {
                alert(item['note'].replace(/\\n/g, "\n"));
              } else if (item['type'] === "WUO") { /*** Requested by STP ***/
                if (cc) {
                  cc.value = "WEB";
                    alert("--- NOTE ---\nA library card CANNOT be issued to this address.\n" + item['address'] + " (" + item['name'] + ") is NOT a valid residential address.\n\nInform any patron providing this address that they must provide proof of a valid residential address in order to get a library card. They may otherwise sign up for a Web-use Only account.");
                }
                return;
              }
            }
          }

          // Enable save button if necessary
          if (patronActions && patronActions[0].children[0].value === "Override Block") {
            restoreSave();
          }

          if (bn.value.includes("Patron's account is Limited Use due to temporary residence")) {
            deleteLUNotice();
          }
          if (bn.value.includes("Special expiration date of 05/15/")) {
            deleteDormNotice();
          }
        });
      }
    };

    if (addr && addr2 && city) {
      addr.addEventListener('blur', parseAddr);
      city.addEventListener('blur', parseAddr);
    }
  }
})();
