(function(){
  'use strict';
  if (/\/cgi-bin\/koha\/circ\/circulation\.pl/.test(window.location) &&
      !document.getElementById('bibexNotes')) {

    chrome.storage.sync.get('skin').then(res => {
      const bn = document.getElementById('borrower_notes');
      const bnMsg = document.getElementById('borrower_note');
      const bibNotes = document.getElementById('type');
      const wrapper = document.createElement('p');
      const msgLabel = document.createElement('label');
      const msgSelect = document.createElement('select');
      const defaultOpt  = document.createElement('option');
      const onlineReg = document.createElement('option');
      const easyAccessJU = document.createElement('option');
      const easyAccess = document.createElement('option');
      const lostCko = document.createElement('option');
      const cardAtNxtCko = document.createElement('option');
      const laptopAgreement = document.createElement('option');
      const rtdMailGroup = document.createElement('optgroup');
      const poRtd = document.createElement('option');
      const cardRtd = document.createElement('option');
      const badEmailGroup = document.createElement('optgroup');
      const badEmail = document.createElement('option');
      const fullEmail = document.createElement('option');

      const date = new Date();
      const currDate = date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear();

      msgSelect.id = "bibexNotes";
      msgLabel.setAttribute('for', 'bibexNotes');
      msgLabel.style.display = "inline-block";
      msgLabel.textContent = "MPL BibEx Notes: ";

      msgSelect.addEventListener('change', function() {
        bibNotes.value = "";
        bnMsg.value = this.options[this.selectedIndex].value;
        if (this.selectedOptions[0].value.includes("Patron has signed Laptop/iPad")) {
          let staffInit = prompt("Enter your initials and library location (e.g. LS/MAD)");
          if (staffInit) bnMsg.value += "(" + staffInit + ")";
        }
      });

      bibNotes.addEventListener('change', function() {
        msgSelect.value = "";
      });

      defaultOpt.value = "";
      defaultOpt.textContent = "Select BibEx Note";
      onlineReg.value = "This account has been created from an online application. The card will be mailed to the address provided. ";
      onlineReg.textContent = "Online Registration";
      easyAccessJU.value = "Juvenile Easy Access Card - Parent or Guardian signature required to change patron category from LUJ to JU (full use card).";
      easyAccessJU.textContent = "Easy Access Card (<16)"
      easyAccess.value = "Easy Access Card - Patron must show proof of acceptable address to change patron category from LU to AD (full use card).";
      easyAccess.textContent = "Easy Access Card (16+)";
      lostCko.value = "CKO allowed with lost items on " + currDate + ". ";
      lostCko.textContent = "Allowed CKO w/ Lost Items";
      cardAtNxtCko.value = "Patron must have library card at next checkout. ";
      cardAtNxtCko.textContent = "Have card at next checkout"
      laptopAgreement.value = "Patron has signed Laptop/iPad Loan Agreement form. Form on file. ";
      laptopAgreement.textContent = "Patron signed laptop agreement";
      rtdMailGroup.label = "Returned Mail";
      poRtd.value = "Mail returned by PO. Holds, if any, are suspended and notices are deactivated. ";
      poRtd.textContent = "Mail returned by post office";
      cardRtd.value = "Card was mailed to patron to establish proof of address, but was ret'd by PO. Card is now at MAD. When patron provides new address, please contact MAD-CIRC so card can be mailed again. ";
      cardRtd.textContent = "Library card returned by post office";
      badEmailGroup.label = "Bad Email Address";
      badEmail.value = "Email address not recognized, unable to send notices. Verify that mailing address and phone are correct. Enter new email address. Holds, if any, are suspended. Previous email was: ";
      badEmail.textContent = "Email address not recognized";
      fullEmail.value = "Email box is full; unable to send notices by email. Holds, if any, are suspended. Email was: ";
      fullEmail.textContent = "Email box is full";

      bn.insertBefore(wrapper, bn.children[3]);
      wrapper.appendChild(msgLabel);
      wrapper.appendChild(msgSelect);
      msgSelect.appendChild(defaultOpt);
      msgSelect.appendChild(onlineReg);
      msgSelect.appendChild(easyAccessJU);
      msgSelect.appendChild(easyAccess);
      msgSelect.appendChild(lostCko);
      msgSelect.appendChild(laptopAgreement);
      msgSelect.appendChild(cardAtNxtCko);

      // Canned notes requested by MID
      if (res.hasOwnProperty('skin') && res.skin === 'MID') {
        const midGroup = document.createElement('optgroup');
		    const allowOverride = document.createElement('option');
        const remoteRenewal = document.createElement('option');
        const onlineRegMID = document.createElement('option');

        midGroup.label = "MID";
		    allowOverride.textContent = "One-time Override";
	      allowOverride.value = "Allowed one-time override for ";
        remoteRenewal.textContent = "Remote Account Renewal";
        remoteRenewal.value = "Account renewed remotely, please verify photo ID and address info. ";
        onlineRegMID.textContent = "Online Registration";
        onlineRegMID.value = "Online registration. Please check patron ID.";

        msgSelect.appendChild(midGroup);
		    midGroup.appendChild(allowOverride);
        midGroup.appendChild(remoteRenewal);
        midGroup.appendChild(onlineRegMID);
        midGroup.appendChild(curbsideNoShow);
      }

      msgSelect.appendChild(rtdMailGroup);
      rtdMailGroup.appendChild(poRtd);
      rtdMailGroup.appendChild(cardRtd);
      msgSelect.appendChild(badEmailGroup);
      badEmailGroup.appendChild(badEmail);
      badEmailGroup.appendChild(fullEmail);
    });
  }
})();
