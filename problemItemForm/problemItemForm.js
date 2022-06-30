(function(){
  'use strict';

  const to = document.getElementById("to");
  const date = document.getElementById("date");
  const from = document.getElementById("from");
  const staffName = document.getElementById("staffInit");
  const type = document.getElementById("problem");
  const idBy = document.getElementById("idBy");
  const receivedBy = document.getElementById("receivedBy");
  const ckiBySorter = document.getElementById("ckiBySorter");
  const details = document.getElementById("details");
  const itemTitle = document.getElementById("itemTitle");
  const itemBarcode = document.getElementById("itemBarcode");
  const cCode = document.getElementById("cCode");
  const holds = document.getElementById("holds");
  const copies = document.getElementById("copies");
  const use = document.getElementById("use");
  const patron = document.getElementById("name");
  const patronBarcode = document.getElementById("patronBarcode");
  const patronPhone = document.getElementById("phone");
  const patronEmail = document.getElementById("email");
  const notified = document.getElementById("dateNotified");
  const staffInit = document.getElementById("notifiedBy");
  const contactedVia = document.getElementById("contactedVia");
  const instructions = document.getElementById("instructions");
  const startOver = document.getElementById("startOver");
  const nonDefectNonHold = document.getElementById("nonDefectNonHold");
  const nonDefectHold = document.getElementById("nonDefectHold");
  const defect = document.getElementById("defect");

  const prepareItemData = document.getElementById("prepareItemData");
  const getPatronData = document.getElementById("getPatronData");
  const printForm = document.getElementById("printForm");

  let getCurrDate = function() {
    const d = new Date();

    let month = (d.getMonth()+1).toString();
    let day = d.getDate().toString();

    if (month.length == 1) {
       month = "0" + month;
    }

    if (day.length == 1) {
      day = "0" + day;
    }

    return d.getFullYear() + "-" + month + "-" + day;
  };

  let formatDateForDisplay = function(date) {
    if (date && date !== "") {
      var d = new Date(date+"T00:00:00");
      return (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    } else {
      return "";
    }
  };

  date.value = getCurrDate();

  // Trigger getPatronData() when enter is pressed in patronBarcode input
  patronBarcode.addEventListener("keyup", evt => {
    if (evt.key !== "Enter") return;
    getPatronData.click();
    evt.preventDefault();
  });

  getPatronData.addEventListener("click", function() {
    patron.value = "";
    patronPhone.value = "";
    patronEmail.value = "";

    if (patronBarcode.value.length === 8) {
      patronBarcode.value = "290780" + patronBarcode.value;
    }

    if (/^2\d{13}$/.test(patronBarcode.value)) {
      if (patronBarcode.classList.contains("invalidInput")) {
        patronBarcode.classList.remove("invalidInput");
      }
      chrome.runtime.sendMessage({
        "key": "getPatronData",
        "patronBarcode": patronBarcode.value
      }).then(resArr => {
        if (resArr.length > 0) {
          let res = resArr[0].result;

          patron.value = res.patronName;
          patronBarcode.value = res.patronBarcode;
          patronPhone.value = res.patronPhone;
          patronEmail.value = res.patronEmail;
        }
      });
    } else {
      if (!patronBarcode.classList.contains("invalidInput")) {
        patronBarcode.classList.add("invalidInput");
      }
    }
  });

  // Trigger prepareItemData() when enter is pressed in itemBarcode input
  itemBarcode.addEventListener("keyup", evt => {
    if (evt.key !== "Enter") return;
    prepareItemData.click();
    evt.preventDefault();
  });

  prepareItemData.addEventListener("click", function () {
    // Clear patorn data
    patron.value = "";
    patronBarcode.value = "";
    patronPhone.value = "";
    patronEmail.value = "";

    // Clear item data
    itemTitle.value = "";
    cCode.value = "";
    holds.value = "";
    copies.value = "";
    use.value = "";

    if (itemBarcode.value.length === 8) {
      itemBarcode.value = "390780" + itemBarcode.value;
    } else if (itemBarcode.value.length === 9) {
      itemBarcode.value = "39078" + itemBarcode.value;
    }

    if (/^3\d{13}$/.test(itemBarcode.value)) {
      if (itemBarcode.classList.contains("invalidInput")) {
        itemBarcode.classList.remove("invalidInput");
      }
      chrome.runtime.sendMessage({
        "key": "getItemData",
        "itemBarcode": itemBarcode.value
      }).then(res => {
        itemTitle.value = res.title;
        cCode.value = res.cCode;
        holds.value = res.holds;
        copies.value = res.copies;
        if (res.hasOwnProperty('use')) use.value = res.use;

        if (res.hasOwnProperty('patronID')) {
          chrome.runtime.sendMessage({
            "key": "getPatronData",
            "patronID": res.patronID
          }).then(resArr => {
            if (resArr.length > 0) {
              let res = resArr[0].result;
    
              patron.value = res.patronName;
              patronBarcode.value = res.patronBarcode;
              patronPhone.value = res.patronPhone;
              patronEmail.value = res.patronEmail;
            }
          });
        }

      });
    } else {
      if (!itemBarcode.classList.contains("invalidInput")) {
        itemBarcode.classList.add("invalidInput");
      }
    }
  });

  printForm.addEventListener("click", function() {
    if (to.value == "" | date.value == "" | from.value == "" | staffName.value == "" | type.value == "" | idBy.value == "" |receivedBy.value == "" | details.value == "" | itemTitle.value == "" | itemBarcode.value == "") {
      alert("Please check that all required fields have been filled in.");
    } else {
      instructions.style.display = "";

      if (type.value === "Defect Reported") {
          nonDefectNonHold.style.display = "none";
          nonDefectHold.style.display = "none";
          defect.style.display = "";
      } else {
        if (receivedBy.value === "Transit Hold") {
          nonDefectNonHold.style.display = "none";
          nonDefectHold.style.display = "";
          defect.style.display = "none";
        } else {
          nonDefectNonHold.style.display = "";
          nonDefectHold.style.display = "none";
          defect.style.display = "none";
        }
      }

      window.location.hash = "instructions";

      chrome.runtime.sendMessage({
        "key": "printProblemForm",
        "data": [
          ["to", to.value.toUpperCase()],
          ["date", formatDateForDisplay(date.value)],
          ["from", from.value.toUpperCase()],
          ["staffName", staffName.value.toUpperCase()],
          ["type", type.value],
          ["idBy", idBy.value],
          ["receivedBy", receivedBy.value],
          ["ckiBySorter", ckiBySorter.checked.toString()],
          ["details", details.value],
          ["itemTitle", itemTitle.value],
          ["itemBarcode", itemBarcode.value],
          ["cCode", cCode.value],
          ["holds", holds.value],
          ["copies", copies.value],
          ["use", use.value],
          ["patron", patron.value],
          ["patronBarcode", patronBarcode.value],
          ["patronPhone", patronPhone.value],
          ["patronEmail", patronEmail.value],
          ["notified", formatDateForDisplay(notified.value)],
          ["staffInit", staffInit.value],
          ["contactedVia", contactedVia.value]
        ]
      });
    }
  });

  startOver.addEventListener('click', function() {
    // Scroll to top of page
    window.scrollTo(0,0);

    // Clear all fields
    to.value = "";
    date.value = getCurrDate();
    from.value = "";
    staffName.value = "";
    type.value = "";
    idBy.value = "";
    receivedBy.value = "";
    ckiBySorter.checked = false;
    details.value = "";
    itemTitle.value = "";
    itemBarcode.value = "";
    cCode.value = "";
    holds.value = "";
    copies.value = "";
    use.value = "";
    patron.value = "";
    patronBarcode.value = "";
    patronPhone.value = "";
    patronEmail.value = "";
    notified.value = "";
    staffInit.value = "";
    contactedVia.value = "";

    // Hide instructions
    instructions.style.display = "none";
    nonDefectNonHold.style.display = "none";
    nonDefectHold.style.display = "none";
    defect.style.display = "none";
  });

  // Handle cases when we're loading the problem form with barcode data
  if (location.search.length > 0) {
    const data = location.search.substring(1).split("=");
    console.log(data);

    if (data && data.length === 2) {
      if (data[0] === "item") {
        itemBarcode.value = data[1];
        prepareItemData.click();
      } else if (data[0] === "patron") {
        patronBarcode.value = data[1];
        getPatronData.click();
      } else if (data[0] === "itemBib") {
        chrome.runtime.sendMessage({
          "key": "getItemData",
          "itemBib": data[1]
        });
      } else if (data[0] === "patronID") {
        chrome.runtime.sendMessage({
          "key": "patronID",
          "patronID": data[1]
        });
      }
    }
  }

  chrome.runtime.onMessage.addListener(msg => {
    if (msg.key === "patronData") {
      patron.value = msg.data.patronName;
      patronBarcode.value = msg.data.patronBarcode;
      patronPhone.value = msg.data.patronPhone;
      patronEmail.value = msg.data.patronEmail;
    }
  });
})();
