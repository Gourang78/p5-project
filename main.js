function preload(){}

function setup(){

    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video,200,140,240,210);

    fill(100,200,30);
    stroke(100,200,30);

    circle(46,50,70);
    circle(594,50,70);
    circle(46,400,70);
    circle(595,400,70);

    fill(0,0,200);
    stroke(0,0,200);
    
    rect(80,40,480,20);
    rect(35,85,20,280);
    rect(585,85,20,280);
    rect(80,390,480,20);

}

function take_snapshot(){

    save("border_shape.png");

}