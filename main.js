function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(420,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw(){
    image(video,230,150,210,210);

    fill(200,0,0);
    stroke(200,12,0);
    circle(55,55,90);

    fill(200,0,0);
    stroke(200,12,0);
    circle(585,425,90);

    fill(200,0,0);
    stroke(200,12,0);
    circle(585,55,90);

    fill(200,0,0);
    stroke(200,12,0);
    circle(55,425,90);

    fill(0,180,0);
    stroke(0,200,0);
    rect(38,98,38,290);

    fill(0,180,0);
    stroke(0,200,0);
    rect(568,92,38,290);

    fill(0,180,0);
    stroke(0,200,0);
    rect(92,43,451,38);

    fill(0,180,0);
    stroke(0,200,0);
    rect(92,412,451,38);

}
function take_snapshot(){
    save("newBirthdayImage.png")
}

