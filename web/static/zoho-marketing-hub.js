// zoho-marketing-hub.js
var w = window;
var p = w.location.protocol;

if (p.indexOf("http") < 0) {
  p = "http" + ":";
}

var d = document;
var f = d.getElementsByTagName("script")[0],
  s = d.createElement("script");
s.type = "text/javascript";
s.async = false;

if (s.readyState) {
  s.onreadystatechange = function () {
    if (s.readyState == "loaded" || s.readyState == "complete") {
      s.onreadystatechange = null;
      try {
        loadwaprops(
          "27218d28c96aa859e6566b9dfdc7ff8ab",
          "275e8b732017186311185630859ca1fd0",
          "2d4ab4ffde9467e19d8393ff7ab5e1e1247f0687152a57575",
          "25b51bedc7825c5cb78a5bc01b81b0050",
          0.0,
        );
      } catch (e) {}
    }
  };
} else {
  s.onload = function () {
    try {
      loadwaprops(
        "27218d28c96aa859e6566b9dfdc7ff8ab",
        "275e8b732017186311185630859ca1fd0",
        "2d4ab4ffde9467e19d8393ff7ab5e1e1247f0687152a57575",
        "25b51bedc7825c5cb78a5bc01b81b0050",
        0.0,
      );
    } catch (e) {}
  };
}

s.src = p + "//mh.zoho.com/hub/js/WebsiteAutomation.js";
f.parentNode.insertBefore(s, f);
