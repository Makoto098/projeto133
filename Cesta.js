var img = "";
let status = "";

function preload() {
  img = loadImage("cesta.jpeg");
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecção de objetos";
}
function draw() {
  image(img, 0, 0, 640, 420);
  fill("#FF0000");
  text("pessoa", 45, 75);
  noFill();
  stroke("#FF0000");
  rect(30, 60, 450, 350);
  text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
}
function start() {
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecção de objetos";
}
function modelLoaded() {
  console.log("Model Loaded!");
  Status = true;
  objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}
function voltar() {
  window.location = "index.html";
}
