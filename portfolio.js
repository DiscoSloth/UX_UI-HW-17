window.onload = function() {
const btn = document.getElementById("btn");  

btn.addEventListener('mousedown',function() {
    this.style.backgroundColor = '#755A30';
    this.style.color = 'white';
});

btn.addEventListener('mouseup',function() {
    this.style.backgroundColor = '#AD956E';
    this.style.color = 'white';
});

}