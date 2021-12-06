(function(){
  'use strict';
  const pstatMsg = new function() {
    this.send = (type, message, altPSTAT) => {
      const pstatNotice = document.getElementById('pstatNotice');
      const pstatNoticeAlt = document.getElementById('pstatNoticeAlt');
      const targetNotice = altPSTAT ? pstatNoticeAlt : pstatNotice;
      const otherNotice = !altPSTAT ? pstatNoticeAlt : pstatNotice;

      targetNotice.style.display = "block";
      otherNotice.style.display = "none";

      targetNotice.style.color = type;
      targetNotice.textContent = message;
    }
  }();

  /**
   * Processes the given address to make it more accurately interpreted by
   * the Census Geocoder API
   *
   * @param {HTMLElement} addrElt The address element to be processed
   * @param {boolean} encodeForURI Whether the returned string should be URI encoded
   * @return {string} The cleaned, URI encoded address
   */
  const cleanAddr = (addrElt, encodeForURI) => {
    let addr = "";

    if (addrElt && addrElt.value) {
      addr = addrElt.value.trim().toLowerCase()
        .replace(/[^#a-z0-9/ ]/g, '')
        .replace(/ave (\d+)/, 'ave #$1')
        .replace(/ave (apt|unit|fl) ?/, 'ave #')
        .replace(/ c(ou)?n?ty /, ' co ')
        .replace(/ n /, ' north ')
        .replace(/ s /, ' south ')
        .replace(/ e /, ' east ')
        .replace(/ w /, ' west ')
        .split('#')[0];
    }

    return encodeForURI ? encodeURI(addr) : addr;
   };

  /**
   * Extracts the city from the city/state input element
   *
   * @param {HTMLElement} cityElt The city/state input HTMLElement
   * @param {boolean} encodeForURI Whether the returned string should be URI encoded
   * @return {string} The URI encoded city
   */
  const getCity = (cityElt, encodeForURI) => {
    if (cityElt && cityElt.value) {
      let cityArr = cityElt.value.replace(/[^a-z0-9 \-]+/ig,'').toLowerCase().split(' ');
      cityArr.pop();
      return encodeForURI ? encodeURI(cityArr.join(' ')) : cityArr.join(' ');
    }

    return "";
  }

  // Message colors
  const MSG_SEARCHING = "#337AB7";
  const MSG_SUCCESS = "#00c000";
  const MSG_ERROR = "#c00c00";

  // Only execute script in the patron edit page
  if (/cgi-bin\/koha\/members\/memberentry\.pl/.test(window.location)) {
    // Variables for PSTAT selection
    const addrElt = document.getElementById('address');
    const addrEltAlt = document.getElementById('B_address');
    const cityElt = document.getElementById('city');
    const cityEltAlt = document.getElementById('B_city');
    const zipElt = document.getElementById('zipcode');
    const zipEltAlt = document.getElementById('B_zipcode');
    const selectList = document.getElementsByName('sort1');
    const pstatNotice = document.createElement('div');
    const pstatNoticeAlt = document.createElement('div');
    const openTIGERwebWrapper = document.createElement('div');
    const openTIGERweb = document.createElement('a');
    const nearestLib = document.createElement('div');
    const mapRegionList = document.createElement('select');
    const gmapResponse = document.createElement('div');
    const lnBrk = document.createElement('br');

    let targetAddr;
    let targetCity;
    let targetZip;

    const branchList = document.getElementById('branchcode');
    const madison = document.createElement('option');
    const counties = document.createElement('optgroup');
    const adams = document.createElement('option');
    const columbia = document.createElement('option');
    const dane = document.createElement('option');
    const green = document.createElement('option');
    const portage = document.createElement('option');
    const sauk = document.createElement('option');
    const wood = document.createElement('option');
    const scls = document.createElement('option');

    // Build Google Map elements
    nearestLib.id = "nearestLib";
    nearestLib.textContent = "Click to find closest location within...";
    nearestLib.style = "margin-top:0.8em;margin-left:118px;cursor:pointer;color:#337AB7;"+
        "font-size:1.25em;font-weight:bold;font-style:italic;display:none";
    nearestLib.onmouseover = function() {
      document.getElementById('nearestLib').style.color = "#4A90D9";
    };
    nearestLib.onmouseout = function() {
      document.getElementById('nearestLib').style.color = "#337AB7";
    };

    mapRegionList.id = "mapRegionList";
    mapRegionList.style = "margin-left:25px;cursor:pointer;display:none;";

    gmapResponse.id = "gmapResponse";
    gmapResponse.style = "margin-top:0.8em;margin-left:118px;font-size:1.25em;" +
        "font-weight:bold;font-style:italic;display:none";

    madison.textContent = "Madison";
    madison.value = "MPL";
    madison.selected = true;
    mapRegionList.appendChild(madison);

    counties.label = "Counties";

    adams.textContent = "Adams County";
    adams.value = "Adams";
    counties.appendChild(adams);

    columbia.textContent = "Columbia County";
    columbia.value = "Columbia";
    counties.appendChild(columbia);

    dane.textContent = "Dane County";
    dane.value = "Dane";
    counties.appendChild(dane);

    green.textContent = "Green County";
    green.value = "Green";
    counties.appendChild(green);

    portage.textContent = "Portage County";
    portage.value = "Portage";
    counties.appendChild(portage);

    sauk.textContent = "Sauk County";
    sauk.value = "Sauk";
    counties.appendChild(sauk);

    wood.textContent = "Wood County";
    wood.value = "Wood";
    counties.appendChild(wood);

    mapRegionList.appendChild(counties);

    scls.textContent = "SCLS";
    scls.value = "SCLS";
    mapRegionList.appendChild(scls);

    nearestLib.onclick = function() {
      let selected = document.getElementById('mapRegionList').selectedOptions[0].value;

      chrome.runtime.sendMessage({
        "key": "findNearestLib",
        "address": encodeURI(cleanAddr(targetAddr, false) + ", " +
            targetCity.value.toLowerCase()),
        "selected": selected
      }, function(result) {
        if (result.key === "failedNearestLib") {
          showGMapResponse(result.rejectMsg, MSG_ERROR);
        } else {
          branchList.value = result[0];
          showGMapResponse("Closest Library: " + result[0], MSG_SUCCESS);
        }
      });
    };

    // Add event listeners to the primary address and city fields
    if (addrElt && addrEltAlt && cityElt && cityEltAlt) {
      addrElt.addEventListener('blur', function() {
        if (addrElt.value && cityElt.value && addrElt.value !== 'NA') {
          queryPSTAT(false);
        }
      });

      cityElt.addEventListener('blur', function() {
        if (addrElt.value && cityElt.value && addrElt.value !== 'NA') {
          queryPSTAT(false);
        }
      });

      // Style the notification elements
      pstatNotice.id = "pstatNotice";
      pstatNoticeAlt.id = "pstatNoticeAlt";
      openTIGERweb.id = "openTIGERweb";
      openTIGERweb.textContent = "Click to open TIGERweb";
      pstatNotice.setAttribute('style', 'margin-top:.5em;margin-left:118px;font-size:1.25em;font-weight:bold;font-style:italic;display:none;');
      pstatNoticeAlt.setAttribute('style', 'margin-top:.5em;margin-left:118px;font-size:1.25em;font-weight:bold;font-style:italic;display:none;');
      openTIGERweb.setAttribute('style', 'margin-top:.5em;margin-left:118px;font-size:1.25em;font-weight:bold;font-style:italic;color:' +
          MSG_SEARCHING + ';outline:0;text-decoration:none;');
      openTIGERweb.setAttribute('href','https://tigerweb.geo.census.gov/tigerweb');
      openTIGERweb.setAttribute('target','_blank');
      openTIGERwebWrapper.appendChild(openTIGERweb);

      // Append notification elements to their respective address fields
      addrElt.parentElement.appendChild(pstatNotice);
      addrEltAlt.parentElement.appendChild(pstatNoticeAlt);
    }

    /**
    * Queries the US Census Geocoder and a database of PSTAT exceptions and
    * aldermanic districts to determine the proper "sort 1" code for a
    * patron's record.
    *
     * @param {boolean} findAltPSTAT Whether the the query should use the patron's
     *   primary or alternate address
     */
    const queryPSTAT = function(findAltPSTAT) {
      let initialRejectMsg = "Unknown error occured.";

      targetAddr = findAltPSTAT ? addrEltAlt : addrElt;
      targetCity = findAltPSTAT ? cityEltAlt : cityElt;
      targetZip = findAltPSTAT ? zipEltAlt : zipElt;

      lnBrk.style.display = 'none';
      openTIGERweb.style.display = 'none';
      gmapResponse.style.display = 'none';
      toggleGMapSearch(false);
      pstatMsg.send(MSG_SEARCHING, "Finding PSTAT...", findAltPSTAT);

      chrome.runtime.sendMessage({
        "key": "getPSTAT",
        "address": targetAddr.value,
        "addressURI": cleanAddr(targetAddr, true),
        "city": getCity(targetCity, true)
      }, function(res) {
        if (res.success) {
          if (res.pstat === "MI-NOLIB" || res.pstat === "MI-LIB") {
            pstatMsg.send(MSG_ERROR, "Ineligible Address Error: Accounts may not be created for Milwaukee County residents.", findAltPSTAT);
          } else {
            selectList[0].value = res.pstat;
            targetZip.value = res.zip;
            pstatMsg.send(MSG_SUCCESS, "PSTAT matched with: " + res.matchAddr, findAltPSTAT);
            toggleGMapSearch(true);
          }
        } else {
          if (res.zip) targetZip.value = res.zip;
          pstatMsg.send(MSG_ERROR, "Error: " + res.error, findAltPSTAT);
          openTIGERwebWrapper.style.display = 'block';

          if (findAltPSTAT) {
            addrEltAlt.parentElement.appendChild(openTIGERwebWrapper);
          } else {
            addrElt.parentElement.appendChild(openTIGERwebWrapper);
          }
        }
      });

      // Append Google Map elements
      if (!document.getElementById('nearestLib')) {
        branchList.parentElement.appendChild(lnBrk);
        branchList.parentElement.appendChild(gmapResponse);
        branchList.parentElement.appendChild(nearestLib);
        branchList.parentElement.appendChild(mapRegionList);
    }
    };

    const toggleGMapSearch = function(display) {
      if (display) {
        lnBrk.style.display = 'block';
        nearestLib.style.display = 'inline-block';
        mapRegionList.style.display = 'inline-block';
      } else {
        lnBrk.style.display = 'none';
        nearestLib.style.display = 'none';
        mapRegionList.style.display = 'none';
      }
    };

    const showGMapResponse = function(msg, msgColor) {
      if (msg) {
        lnBrk.style.display = 'block';
        gmapResponse.textContent = msg;
        gmapResponse.style.color = msgColor;
        gmapResponse.style.display = "block";
        toggleGMapSearch(false);
      }
    };

    // Listen for alternate address PSTAT request
    chrome.runtime.onMessage.addListener(message => {
      if (message.key === "getAlternatePSTAT") {
        queryPSTAT(true);
      }
    })
  }
})();
