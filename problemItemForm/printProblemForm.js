chrome.runtime.onMessage.addListener(message => {
  if (message.key === "printProblemForm" ) {
    for (let d of message.data) {
      var elt = document.getElementById(d[0]);

      if (elt) {
        if (d[0] === "ckiBySorter" && d[1] === "true") {
          elt.classList.remove("hide");
        } else {
          if (/cCode|holds|copies|use|patronName|patronBarcode|patronPhone|patronEmail/.test(d[0]) && d[1] == "") {
            document.getElementById(d[0]+"Wrap").classList.add("hide");
          } else {
            elt.textContent = d[1];
          }
        }
      }
    }

    window.print();
  }
});
