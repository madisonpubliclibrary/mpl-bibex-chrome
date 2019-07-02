(function(){
  'use strict';
  var img = document.querySelector('.koha-logo img');

  if (img && !img.classList.contains('bibex-hires')) {
    img.classList.add('bibex-hires');
    img.src = chrome.runtime.getURL("content/img/BibliovationLogo.png");
  }
})();
