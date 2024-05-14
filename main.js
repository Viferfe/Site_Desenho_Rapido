var randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

console.log(quickDrawDataset[randomNumber]);

var sketch = quickDrawDataset[randomNumber];

document.getElementById("esboço").textContent = "Esboço a Ser Desenhado: " + sketch;


var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder = "";
var score = 0;
