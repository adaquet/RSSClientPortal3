// hide show div button functions
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) =>{
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';
   consoler.log(e.pageX, e.pageY) 
})


var divs2 = ["Section4", "Section5"];
var visibleId2 = null;
function show2(id) {
if(visibleId2 !== id) {
visibleId2 = id;
} 
hide2();
}
function hide2() {
var div, i, id;
for(i = 0; i < divs2.length; i++) {
id = divs2[i];
div = document.getElementById(id);
if(visibleId2 === id) {
div.style.display = "block";
} else {
div.style.display = "none";
}
}
} 


