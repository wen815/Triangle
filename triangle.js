var c=document.getElementById("c");
var cxt=c.getContext("2d");

cxt.beginPath();
cxt.moveTo(30,0);
cxt.lineTo(50,30);
cxt.lineTo(10,30);
cxt.fillStyle="white";
cxt.fill();
cxt.closePath();