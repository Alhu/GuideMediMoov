function w3IncludeHTML() {
  var z, i, elmnt, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      elmnt = z[i];
      break;
    }
  }
  if (elmnt) {
    a = z[i].cloneNode(false);
    file = elmnt.getAttribute("w3-include-html");
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        a.removeAttribute("w3-include-html");
        a.innerHTML = this.responseText;
        elmnt.parentNode.replaceChild(a, elmnt);
        w3IncludeHTML();
      }
    }      
    xhttp.open("GET", file, true);
    xhttp.send();
  }
}