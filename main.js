noseX = 0;
noseY = 0;

function preload(){
 clown_nose = loadImage("https://i.postimg.cc/GhmRCk8Y/clownnose.png");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {   noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-20;
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        
    }
}
function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function draw(){
    image(video,0,0,400,400);
    image(clown_nose,noseX,noseY,40,40);
}
function takesnapshot(){
    save("selfie.png");
}