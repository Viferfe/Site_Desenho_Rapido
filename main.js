var randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

// Imprimindo o nome do esboço aleatório no console
console.log(quickDrawDataset[randomNumber]);

// Armazenando o nome do esboço aleatório na variável sketch
var sketch = quickDrawDataset[randomNumber];

// Atualizando o texto da tag span com o nome do esboço
document.getElementById("esboço").textContent = "Esboço a Ser Desenhado: " + sketch;

// Definindo as variáveis adicionais
var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder = "";
var score = 0;
