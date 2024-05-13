function setup() {
    createCanvas(400, 400);
    background("lightgreen");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 5, 5);
    }
  }
  