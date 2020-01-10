(function(){
  'use strict';
  if (/\/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
    function calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime(),
        ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getFullYear() - 1970);
    }

    const birthdayField = document.getElementById('dateofbirth');
    let birthday;
    let patronCategory = document.getElementById('categorycode');
    let saveButtonWrapper = document.getElementsByClassName('action')[0];
    let saveButton = document.getElementsByName('save')[0];
    const updateButton = document.createElement('input');

    updateButton.id = "updateAndSave";
    updateButton.type = "button";
    updateButton.value = "Save & update patron type";
    updateButton.style = "cursor:pointer; margin-right: 20px;";
    updateButton.addEventListener('click', function () {
      if (patronCategory.value === 'JU') {
        patronCategory.value = 'AD';
      } else if (patronCategory.value === 'LUJ') {
        patronCategory.value = 'LU';
      }
      saveButton.click();
    });

    if (birthdayField && birthdayField.value && patronCategory && (patronCategory.value === 'LUJ' || patronCategory.value === 'JU')) {
      birthday = new Date(birthdayField.value);
      if (saveButtonWrapper && calculateAge(birthday) >= 16) {
        saveButtonWrapper.insertBefore(updateButton, saveButtonWrapper.children[0]);
      }
    }
  }
})();
