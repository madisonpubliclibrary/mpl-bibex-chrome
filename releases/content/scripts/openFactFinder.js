chrome.runtime.onMessage.addListener((message, sender, reply) => {
  var geographies = document.getElementById('geo-overlay-btn');
  if (geographies) {
    geographies.click();
    setTimeout(() => {
      var addrTab = document.getElementById('geoaddress_tab');
      if (addrTab) {
        addrTab.click();
        setTimeout(() => {
          var street = document.getElementById('geostreet'),
            city = document.getElementById('geocity'),
            state = document.getElementById('geostateAddress'),
            submit = document.getElementById('as_submit');

          if (street && city && state && submit) {

            street.value = message.address;
            city.value = message.city;
            state.value = "Wisconsin";
            submit.click();
          }
        }, 500);
      }
    }, 300);
  }
});
