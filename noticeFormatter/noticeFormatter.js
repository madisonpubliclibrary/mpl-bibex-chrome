(function(){
  document.getElementById('format').addEventListener('click', e => {
    let text = document.getElementById('text');
    let format = document.getElementById('format');
    let print = document.getElementById('print');

    print.innerHTML = text.value.replace(/(\d{3}-\d{3}-\d{4})|Dream Bus/g, (i => m => !i++ ? "<div>" + m : "<div style=\"page-break-before: always\">" + m)(0)) // All notices
                                .replace(/[A-Z][a-z][a-zA-Z' ]+,? WI( \d{5}(-\d{4})?)?/g, "$&</div>\n\n") // All notices
                                .replace(/Dear /g, "\n\n\n\n\n\n$&") // Hold notices
                                .replace(/These items are/g, "\n\n$&") // Hold notices
                                .replace(/Title:/g, "\n$&") // Hold notices
                                .replace(/If\s+you\s+received\s+this\s+notice\s+via\s+email,?\s+it\s+was\s+sent\s+from\s+a\s+notification-only\s+address\s+that\s+cannot\s+accept\s+incoming\s+mail\.\s+Please\s+Do\s+Not\s+Reply\s+to\s+this\s+message\s+but\s+contact\s+your\s+local\s+library\s+directly\./g,
                                         "\n\nIf you received this notice via email, it was sent from a notification-only address that cannot accept incoming mail. Please Do Not Reply to this message but contact your local library directly.") // All notices
                                .replace(/Notice of (Item\(s\) Overdue|Overdue Item\(s\)) - \d+ day/g, "\n\n\n\n\n\n$&") // Overdue notices
                                .replace(/2[0-9]{13}/g, "\n$&\n\n") // Overdue and >$50 notices
                                .replace(/Library\s+records\s+show\s+the\s+following\s+item\(s\)\s+overdue\.\s+Please\s+return\s+them\s+soon\s+so\s+that\s+others\s+may\s+borrow\s+them,\s+and\s+to\s+avoid\s+further\s+charges\.\s+If\s+you\s+would\s+like\s+to\s+renew\s+your\s+items,\s+please\s+log\s+into\s+our\s+catalog\s+at\s+https:\/\/www\.linkcat\.info\/\s+Call\s+your\s+local\s+library\s+if\s+you\s+have\s+questions\s+regarding\s+this\s+notice\./g,
                                        "Library records show the following item(s) overdue. Please return them soon so that others may borrow them, and to avoid further charges. If you would like to renew your items, please log into our catalog at https://www.linkcat.info/ Call your local library if you have questions regarding this notice.\n\n")
                                .replace(/Thank you for your prompt attention to this matter\./g, "\n\n$&") // Overdue notices
                                .replace(/NOTICE OF UNRESOLVED CHARGES/g, "\n\n\n\n\n\n$&\n\n") // >$50 notices
                                .replace(/Returning lost materials may reduce your charges\. Thank you\./g, "\n$&\n") // > $50 notices
                                .replace(/\n/g,'<br>'); // All notices
    window.print();
  });
})();
