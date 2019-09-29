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
      'address2',
      'select_city',
      'country',
      'mobile',
      'fax',
      'B_address2',
      'B_country',
      'altcontactaddress2',
      'altcontactcountry',
      'sort2',
      'patron_attr_1',
      'patron_attr_2',
      'patron_attr_3',
      'patron_attr_4',
      'patron_attr_5',
      'patron_attr_6',
      'patron_attr_7',
      'patron_attr_8',
      'patron_attr_9',
      'patron_attr_10',
      'patron_attr_11'
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
