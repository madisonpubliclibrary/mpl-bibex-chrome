(function(){
  'use strict';
  const patronInfo = document.getElementsByClassName('patroninfo');
  const data = {};

  if (patronInfo && patronInfo.length > 0) {
    data.patronName = patronInfo[0].children[0].textContent
        .replace(/\s+/g, ' ')
        .replace(/\./g,'').slice(0, -17)
        .replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase()})
        .replace(/ ii/i,' II').replace(/ iii/i,' III');
    data.patronBarcode = patronInfo[0].children[0].textContent.match(/2[0-9]{13}/)[0];
    let phoneWrap = document.querySelector(".patroninfo ul");
    let phoneMatchArr = (!!phoneWrap) ? /(1-)?[0-9]{3}-[0-9]{3}-[0-9]{4}/.exec(phoneWrap.textContent) : null;
    let emailWrap = document.querySelector('.email a');

    data.patronPhone = phoneMatchArr && phoneMatchArr.length > 0 ? phoneMatchArr[0] : '';
    data.patronEmail = emailWrap !== null ? emailWrap.textContent : '';
  }
  return data;
})();
