function frameWidget() {
    var t = document.getElementsByTagName("script");
    (t = (t = t[t.length - 1]).parentNode).style.textAlign = "right";
    var e = t.getElementsByTagName("a")[0]
      , i = e.getAttribute("data-weight")
      , n = e.getAttribute("data-height")
      , a = e.href
      , r = a.lastIndexOf("/")
      , g = a.lastIndexOf("/", r - 1)
      , s = a.substring(r + 1, a.length);
    a = a.substring(0, g),
    (e = e.style).fontFamily = "'Open Sans', sans-serif",
    e.fontSize = "12px",
    e.color = "black",
    e.paddingRight = "10px",
    e.paddingTop = "5px",
    e.paddingBottom = "10px",
    e.textDecoration = "none";
    var d = document.createElement("iframe");
    d.src = a + "/widgets/" + s + ".php",
    d.style.borderWidth = 0,
    d.style.width = i,
    d.style.height = n,
    d.style.display = "block",
    d.style.margin = "0 auto",
    t.insertBefore(d, t.firstChild)
}
frameWidget();