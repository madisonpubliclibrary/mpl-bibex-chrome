(function(){
  'use strict';
  // If this is the patron edit frame
  if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location) &&
      !document.getElementById('enableOpts')) {
    let inputs = document.querySelectorAll('input[type=text]');
    const patronForm = document.getElementById('entryform');
    const enableOpts = document.createElement('input');
    const enableOptsLabel = document.createElement('label');
    const enableOptsWrapper = document.createElement('div');
    const patronType = document.getElementById('categorycode');
    const unusedFields = [
      'address2', // Address 2
      'select_city', // City dropdown menu
      'country', // Country
      'mobile', // Phone (cell)
      'fax', // Fax
      'B_address2', // Alternate Address 2
      'B_country', // Alternate Country
      'altcontactaddress2', // Alternate Contact Address 2
      'altcontactcountry', // Alternate Contact Country
      'sort2', // Sort 2
      // Messaging Preferences
      'override_19', //General letter
      'override_17', // General message (sent to me)
      'override_18', // General message (notification)
      'override_102', // New results from scheduled search
      'override_6', // Hold Canceled
      'override_114', // Hold Expired
      'override_7', // Item Check-in
      'override_8', // Item Checkout
      'override_155', // Item Lost
      'override_2', // Item Overdue
      'override_15', // Item Recall Notice
      'override_16', // Outstanding Fines
      'override_120', // Checkout Receipt
      'override_121', // Checkout Receipt Brief
      'override_9', // Proxy Added
      'override_10', // Proxy Changed
      'override_11', // Proxy Deleted
      'override_61', // ILL request approved
      'override_63', // ILL request available
      'override_62', // ILL request ordered
      'override_60', // ILL request rejected
      'override_59', // ILL request submitted
      'override_29', // Purchase request approved
      'override_32', // Purchase request available
      'override_30', // Purchase request ordered
      'override_31', // Purchase request received
      'override_28', // Purchase request rejected
      'override_27', // Purchase request submitted
      'override_105', // Job failed
      'override_104', // Job finished
      'override_106' // Job timed out
    ];
    const unusedForWebUse = [
      'phone',
      'phonepro',
      'email',
      'emailpro',
      'B_address',
      'B_city',
      'B_zipcode',
      'B_phone',
      'B_email',
      'altcontactsurname',
      'altcontactfirstname',
      'altcontactaddress1',
      'altcontactaddress3',
      'altcontactzipcode',
      'altcontactphone'
    ];

    const advNoticeUnused = [
      'popup_user_3',
      'list_user_3',
      'rss_user_3'
    ];

    const holdFilledUnused = [
      'popup_user_5',
      'list_user_5',
      'rss_user_5'
    ];

    function disableUnusedTypes(overrideInput, elementList) {
      overrideInput.addEventListener('click', e=> {
        for (let id of elementList) {
          let elt = document.getElementById(id);
          if (elt && !enableOpts.checked) elt.disabled = true;
        }
      });
    }

    let advNoticeOverride = document.getElementById('override_3');
    let holFilledOverride =  document.getElementById('override_5');
    disableUnusedTypes(advNoticeOverride, advNoticeUnused);
    disableUnusedTypes(holFilledOverride, holdFilledUnused);


    function toggleUnusedFields(fieldIdArr, enable) {
      if (enable) {
        for (let id of fieldIdArr) {
          let elt = document.getElementById(id);
          if (elt) {
            elt.disabled = false;
            elt.style.backgroundColor = '';
          }
        }
      } else {
        for (let id of fieldIdArr) {
          let elt = document.getElementById(id);
          if (elt) {
            elt.disabled = true;
            elt.style.backgroundColor = "#cecece";
          }
        }
      }
    };

    if (patronForm) {
      enableOptsLabel.setAttribute("for", "enableOpts");
      enableOptsLabel.style.display = "inline-block";
      enableOptsLabel.style.fontWeight = "bold";
      enableOptsLabel.textContent = "Enable rarely used input fields:";

      enableOpts.id = "enableOpts";
      enableOpts.type = "checkbox";
      enableOpts.checked = true;
      enableOpts.style.cursor = 'pointer';
      enableOpts.style.marginLeft = "20px";
      enableOpts.style.display = "inline-block";
      enableOpts.addEventListener("click", function() {
        const patronType = document.getElementById('categorycode');

        if (this.checked) {
          // Enable rarely used fields
          toggleUnusedFields(unusedFields, true);

          // Enable rarely used WEB-USE fields
          toggleUnusedFields(unusedForWebUse, true);
        } else {
          // Disable rarely used fields
          toggleUnusedFields(unusedFields, false);

          // Disable rarely used WEB-USE fields
          if (patronType && patronType.value === "WEB") {
            toggleUnusedFields(unusedForWebUse, false);
          }
        }
      });

      enableOptsWrapper.appendChild(enableOptsLabel);
      enableOptsWrapper.appendChild(enableOpts);
      enableOptsWrapper.style.marginLeft = "40px";

      patronForm.insertBefore(enableOptsWrapper, patronForm.children[0]);

      patronType.addEventListener("change", function() {
        if (!enableOpts.checked && patronType.value === "WEB") {
          toggleUnusedFields(unusedForWebUse, false);
        } else if (!enableOpts.checked) {
          toggleUnusedFields(unusedForWebUse, true);
        }
      });

      // Trigger event; disable fields
      enableOpts.click();
    }
  }
})();
