(function(){
  'use strict';

  let waitForLogo = setInterval(() => {
    let img = document.querySelector('.koha-logo img');

    if (img) {
      clearInterval(waitForLogo);

      if (!img.classList.contains('bibex-hires')) {
        img.classList.add('bibex-hires');
        img.src = chrome.runtime.getURL("content/img/BibliovationLogo.png");
      }
    }
  }, 350);
})();
