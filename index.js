// Write your code here!
document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "KYLE is the champion";
document.body.appendChild(newHeader);