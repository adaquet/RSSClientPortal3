var divs = ["Section1", "Section2", "Section3"];
var visibleId = null;
function show1(id) {
if(visibleId !== id) {
visibleId = id;
} 
hide1();
}
function hide1() {
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