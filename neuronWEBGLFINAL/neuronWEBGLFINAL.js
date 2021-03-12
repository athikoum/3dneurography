let neuron;



function preload() {
  neuron = loadModel('data/neuron.obj', true);
 
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
}


function draw() {

  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;


  ambientLight(600, 600, 600);
  specularColor (200,20,20);
  pointLight(255, 255, 255, 100);
  specularColor (200,20,20);

  orbitControl();


  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(0.5);
  rotateX(1);
  rotateZ(1);
  normalMaterial();
  fill (200,0,50);
   scale(3);
  model(neuron);
  pop();


  push();
  translate(-width / 4, -height / 4, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(0.5);
  rotateX(1);
  rotateZ(1);
  normalMaterial();
  fill(100, 200, 250);
  scale(3);
  model(neuron, 80, 220, 264, 64);
  pop();

  push();
  translate(-width / 10, -height / 5, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(3);
  rotateX(100);
  rotateZ(100);
  normalMaterial();
  fill(10, 100, 250);
  scale(3);
  model(neuron, 80, 20, 164, 164);
  pop();

  push();
  translate(-width / 6, -height / 9, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(10.05);
  rotateX(10);
  rotateZ(10);
  normalMaterial();
  fill(100, 20, 200);
  scale(3);
  model(neuron, 480, 120, 64, 64);
  pop();

  push();
  translate(-width / 2, -height / 5, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(1.05);
  rotateX(100);
  rotateZ(30);
  normalMaterial();
  fill(200, 200, 200);
  scale(3);
  model(neuron, 480, 120, 64, 64);
  pop();

  push();
  translate(-width / 3, -height / 6, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(1.05);
  rotateX(100);
  rotateZ(30);
  normalMaterial();
  fill(30, 250, 250);
  scale(3);
  model(neuron, 480, 120, 64, 64);
  pop();

  push();
  translate(-width * 5/9, -height / 3, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //orbitControl();
  rotateY(5);
  rotateX(10);
  rotateZ(300);
  normalMaterial();
  fill(300, 50, 100);
  scale(3);
  model(neuron, 480, 120, 64, 64);
  pop();
}
