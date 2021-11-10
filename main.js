song1 = "";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
songStatus = "";

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play() {
    song.play();
}

function gotPoses(results) {
    if(results.length > 0) {
       scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
       console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

       leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +"leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist = " + rightWristX +"rightWristY ="+ rightWristY);
    }
}