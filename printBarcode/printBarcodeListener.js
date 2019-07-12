window.onload = function() {
  var data = location.toString().split('?')[1].split('&');

  if (data) {
    var barcode = data[0].split('=')[1],
      fontSize = data[1].split('=')[1];

    document.getElementById("barcode").style.fontSize = fontSize;
    document.getElementById("barcode").textContent = barcode;
  }
  window.print();
}
