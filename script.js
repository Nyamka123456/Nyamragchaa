const body=document.querySelector('body');
const button=document.getElementById("button");
const color=['red','blue','yellow'];
const text=document.getElementById("text");
let currentShape = 1;
var fontSizeValues = [12, 16, 24];
        var currentSizeIndex = 0;
function change(){
    //color
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.background=color[colorIndex];
    //shape
    const shape = document.getElementById('shape');

   if (currentShape === 1) {
      shape.style.borderRadius = '50%';
      shape.style.border = '2px solid';
      shape.style.width = '100px';
      shape.style.height = '100px';
    } else if (currentShape === 2) {
      shape.style.borderRadius = '0';
      shape.style.borderLeft = '50px solid transparent';
      shape.style.borderRight = '50px solid transparent';
      shape.style.borderBottom = '100px solid white';
      shape.style.width = '0';
      shape.style.height = '0';
    } else if (currentShape === 3) {
      shape.style.borderRadius = '0';
      shape.style.border = '2px solid';
      shape.style.width = '100px';
      shape.style.height = '100px';
    }
  

    currentShape = (currentShape % 3) + 1;
//text
    var textElement = document.getElementById('text');
            currentSizeIndex = (currentSizeIndex + 1) % fontSizeValues.length;
            var newSize = fontSizeValues[currentSizeIndex];
            textElement.style.fontSize = newSize + 'px';
}