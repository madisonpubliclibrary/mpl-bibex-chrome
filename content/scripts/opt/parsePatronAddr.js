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

    // Set Adult as defualt patorn type
    if (window.location.toString().includes("op=add") && cc) {
      cc.value = "AD";
    }

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
      chrome.storage.sync.get('addrNoteCooldown', res => {
        if (res.hasOwnProperty('addrNoteCooldown') && !res.addrNoteCooldown) {
          chrome.runtime.sendMessage({"key": "addrNoteCooldown"}, result => {

          });
          alert('Please delete the circulation note regarding the patron\'s pervious limited use address');
        }
      });

    }

    function deleteDormNotice() {
      alert('Please delete the circulation note regarding the patron\'s previous dorm address')
    }

    var parseAddr = function() {
      if (addr.value && city.value) {
        chrome.runtime.sendMessage({
          "key": "parsePatronAddr"
        }, function(result) {
          for (let item of result) {
            var fullAddr = (addr.value + ' ' + addr2.value).trim().replace(/[^\w\s]|_/g, "");
            var regex = new RegExp('^' + item.regex, 'i');

            if (regex.test(fullAddr)) {
              if (item.type === "dorm") {
                let noteBody = "Special expiration date of 05/15/" + year +
                    " set due to residence at " + item.name + ", a university dorm." +
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
              } else if (item.type === "unacceptable") {
                if (patronActions[0].children[0].value !== "Override Block") {
                  alert("--- STOP ---\nA library card CANNOT be issued to this address.\n" + item.address + " (" + item.name + ") is NOT a valid residential address.\n\nInform any patron providing this address that they must provide proof of a valid residential address in order to get a library card. (You could offer them an internet access card.)\n\nFor more info refer to the list of unacceptable addresses on the staff wiki:\nhttp://www.mplnet.org/system/files/UNACCEPTABLE%20ADDRESSES.pdf");
                  blockSubmit();
                }
                return;
              } else if (item.type === "restricted" || item.type === "unique") {
                // Make account limited use
                if (cc) {
                  if (cc.value === "AD") {
                    cc.value = "LU";
                  } else if (cc.value === "JU") {
                    cc.value = "LUJ";
                  } else if (cc.value === "WEB") {
                    if (dob && dob.value !== '') {
                      dob = new Date(dob.value);

                      if (((Date.now() - dob)/31556952000) >= 16) {
                        cc.value = "LU";
                      } else {
                        cc.value = "LUJ"
                      }
                    }
                  }
                }

                // Enable save button if necessary
                if (patronActions && patronActions[0].children[0].value === "Override Block") {
                  restoreSave();
                }

                if (!(bn.value.includes("Patron's account is Limited Use due to temporary residence at "
                    + item.name + ' (' + item.address + ')') && bn.value.includes(currDate()))) {
                  if (item.type === "restricted") {
                    staffInit = prompt("--- NOTE ---\nA library card issued to " + item.address + " (" +item.name + ") must be LIMITED USE.\n\nIn order to have the limited use restrictions removed from their account, a patron must first provide proof that they are living at a valid residential address.\n\nFor more info refer to the list of unacceptable addresses on the staff wiki:\nhttp://www.mplnet.org/system/files/UNACCEPTABLE%20ADDRESSES.pdf\n\nIf this is a new address, enter your initials and library code to confirm: (e.g. LS/MAD)");
                  } else if (item.type === "unique") {
                    staffInit = prompt(item.note.replace(/\\n/g, "\n"));
                  }

                  if (!staffInit) staffInit = "";
                  if (bn.value !== '') bn.value += "\n\n";

                  bn.value += "Patron's account is Limited Use due to temporary residence at " + item.name + " (" + item.address + "). Patron must show proof of valid residential address in order to remove restrictions. " + currDate() + " " + staffInit;
                }

                if (bn.value.match(/Patron's account is Limited Use due to temporary residence/g).length > 1) {
                  deleteLUNotice();
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
