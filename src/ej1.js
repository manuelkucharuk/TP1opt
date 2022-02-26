"use strict"

window.onload = () => {
    setInterval(reloj,1000);
}

function reloj(){
    var date = new Date();
    var h = date.getHours().toString();
    if (h.length==1) h = "0"+h;
    var m = date.getMinutes().toString();
    if (m.length==1) m = "0"+m;
    var s = date.getSeconds().toString();
    if (s.length==1) s = "0"+s

    document.getElementById("reloj").innerHTML = h+":"+m+":"+s;
}