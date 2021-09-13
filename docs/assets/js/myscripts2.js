var divs = ["Section4", "Section5"];
var visibleId = null;
function show2(id) {
if(visibleId !== id) {
visibleId = id;
} 
hide2();
}
function hide2() {
var div, i, id;
for(i = 0; i < divs.length; i++) {
id = divs[i];
div = document.getElementById(id);
if(visibleId === id) {
div.style.display = "block";
} else {
div.style.display = "none";
}
}
} 


