var r;
var g;
var b;
var graph1;
var graph2;
var graph3;
var graph4;
var graph5;
var erase;
var explanation;

function setup(){
    createCanvas(401,401); 
    createP(""); //moves button below grid
    //buttons to call the graphs

    graph1 = createButton("Graph #1");
    graph1.mousePressed(graphOne);
    
    graph2 = createButton("Graph #2");
    graph2.mousePressed(graphTwo);
    
    graph3 = createButton("Graph #3");
    graph3.mousePressed(graphThree);
    
    graph4 = createButton("Graph #4");
    graph4.mousePressed(graphFour);
    
    graph5 = createButton("Graph #5");
    graph5.mousePressed(graphFive);
    
    erase = createButton("Clear Grid");
    erase.mousePressed(eraseGrid);
    
    createP(""); //moves explanation below buttons
    explanation = createElement('p1','');
}

//calls the first graph
function graphOne() {
    var shape = -25.99; //shape of parabola/sine wave
    var inc = TWO_PI/22; //incrament "a" increases by
    stroke('#ed7e38');
    strokeWeight(5);
    translate(166.5,108); //moves parabola
    for (var i = 0; i <= 16; i++) { //create parabola
        line(i*4,50+sin(shape)*40,i*4+4,50+sin(shape+inc)*40);
        shape = shape + inc
}
    explanation.html("This is the most basic parabola. You may be wondering why there is no 'b' or 'c' in the equation, and that is because they are both zero. Because they are both zero, there is no shifting in location, and the y-intercept is at the orgin, (0,0).");
}

//calls second graph
function graphTwo() {
    var shape = -25.99; //shape of parabola/sine wave
    var inc = TWO_PI/22; //incrament "a" increases by
    stroke('#ed7e38');
    strokeWeight(5);
    translate(235,294); //moves parabola
    rotate(PI); //rotates parabola
    for (var i = 0; i <= 16; i++) { //create parabola
        line(i*4,50+sin(shape)*40,i*4+4,50+sin(shape+inc)*40);
        shape = shape + inc
}
    explanation.html("This parabola is just the first one reflected across the x-axis. It opens downward because the negative sign in front of 'a' makes all values negative. The y-intercept is still at the origin.");
}

//calls third graph
function graphThree() {
    var shape = -25.99; //shape of parabola/sine wave
    var inc = TWO_PI/22; //incrament "a" increases by
    stroke('#ed7e38');
    strokeWeight(5);
    translate(183,108); //moves parabola
    for (var i = 0; i <= 16; i++) { //create parabola
        line(i*4,50+sin(shape)*40,i*4+4,50+sin(shape+inc)*40);
        shape = shape + inc
}
    explanation.html("In this parabola, we now see coefficients 'b' and 'c' in action. Because 'b' is negative, the parabola is shifted to the right of the y-axis. In addition, 'c', the y-intercept, is now at (0,1).");
}

//calls fourth graph
function graphFour() {
    var shape = -25.99; //shape of parabola/sine wave
    var inc = TWO_PI/22; //incrament "a" increases by
    stroke('#ed7e38');
    strokeWeight(5);
    translate(150,108); //moves parabola
    for (var i = 0; i <= 16; i++) { //create parabola
        line(i*4,50+sin(shape)*40,i*4+4,50+sin(shape+inc)*40);
        shape = shape + inc
}
    explanation.html("This parabola is very similar to the third one, but instead of negative 'b', it is now positive. As a result, the parabola shifts to the left of the y-axis. You may notice that 'c' is still 1, meaning the y-intercept is still at (0,1).");
}

//calls fifth graph
function graphFive() {
    var shape = -25.99; //shape of parabola/sine wave
    var inc = TWO_PI/22; //incrament "a" increases by
    stroke('#ed7e38');
    strokeWeight(5);
    translate(183,91.5); //moves parabola
    for (var i = 0; i <= 16; i++) { //create parabola
        line(i*4,50+sin(shape)*40,i*4+4,50+sin(shape+inc)*40);
        shape = shape + inc
}
    explanation.html("This final parabola introduces a whole new concept, the imaginary number. If we look closely, then we notice that the parabola is the same as the third one, but the y-intercept is one unit higher. This results in the parabola not having any x-intercepts (where the parabola crosses the x-axis) as it did in the previous parabolas. This property is due to negative square roots in the equation. Negative square roots do not exist in the set of 'Real numbers,' but rather the set of 'Imaginary numbers.' When we solve for 'x' in 0 = x^2 - 2x + 1, we end up with numbers we know how to graph. In the equation 0 = x^2 - 2x + 2, we end up with imaginary x-intercepts that are much harder to graph.");
}

//clears grid
function eraseGrid() {
    background(255);
    explanation.html("");
}

//draws grid
function draw(){
    grid();
}

//when spacebar is pressed, random r, g, and b
function keyPressed() {
    if (key == " "){ 
        r = random(255);
        g = random(255);
        b = random(255);
    }
    else {
    }
}

//blue gridlines
function grid(){
    strokeWeight(1);
    stroke(0,255,255);
    for (v=0;v<=width;v+=20){
      for(h=0;h<=height;h+=20){
        line(v,0,v,height); //vertical lines
        line(0,h,width,h); //horizontal lines
      }
    }
    stroke(0);
    axes();
  }

//axes and "x" and "y"
function axes(){
    strokeWeight(1);
    line(width/2,0,width/2,height);	//y-axis
    text("y",width/2+10,10); //label y-axis
    line(0,height/2,width,height/2); //x-axis
    text("x",width-10,height/2-10); //label x-axis
  }

//drawing tool
function mouseDragged() {
    strokeWeight(5);
    stroke(r,g,b);
    line(mouseX,mouseY,pmouseX,pmouseY); //draws continuous
}