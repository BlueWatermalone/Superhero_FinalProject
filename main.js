var canvas=new fabric.Canvas('myCanvas');
block_image_width=60;
block_image_height=60;
player_x=10;
player_y=10;
var player_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_Image) {
    fabric.Image.fromURL(get_Image,function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed=e.keyCode;
console.log(keyPressed);
if (e.shiftKey==true && keyPressed=='80') {
    console.log("p and shift pressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (e.shiftKey==true && keyPressed=='77') {
    console.log("m and shift pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if (keyPressed=='38') {
    goingUp();
    console.log("up");
}
if (keyPressed=='40') {
    goingDown();
    console.log("down");
}
if (keyPressed=='37') {
    goingLeft();
    console.log("left");
}
if (keyPressed=='39') {
    goingRight();
    console.log("right");
}
if (keyPressed=='65') {
    new_image('captain_america_left_hand.png');
    console.log("a");
}
if (keyPressed=='66') {
    new_image('hulk_face.png');
    console.log("b");
}
if (keyPressed=='67') {
    new_image('hulk_left_hand.png');
    console.log("c");
}
if (keyPressed=='68') {
    new_image('hulk_legs.png');
    console.log("d");
}
if (keyPressed=='69') {
    new_image('hulk_right_hand.png');
    console.log("e");
}
if (keyPressed=='70') {
    new_image('hulkd_body.png');
    console.log("f");
}
if (keyPressed=='71') {
    new_image('ironman_body.png');
    console.log("g");
}
if (keyPressed=='72') {
    new_image('ironman_face.png');
    console.log("h");
}
if (keyPressed=='73') {
    new_image('ironman_left_hand.png');
    console.log("i");
}
if (keyPressed=='74') {
    new_image('ironman_legs.png');
    console.log("j");
}
if (keyPressed=='75') {
    new_image('ironman_right_hand.png');
    console.log("k");
}
}
function goingUp() {
    if(player_y>=0) {
        player_y=player_y-block_image_height;
        console.log("blockImageHeight="+block_image_height);
        console.log("When up arrow key is pressed, x= "+player_x + " y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function goingDown() {
    if(player_y<=500) {
        player_y=player_y+block_image_height;
        console.log("blockImageHeight="+block_image_height);
        console.log("When down arrow key is pressed, x= "+player_x + " y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function goingLeft() {
    if(player_x>0) {
        player_x=player_x-block_image_width;
        console.log("blockImageWidth="+block_image_width);
        console.log("When left arrow key is pressed, x= "+player_x + " y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function goingRight() {
    if(player_x<=850) {
        player_x=player_x+block_image_width;
        console.log("blockImageWidth="+block_image_width);
        console.log("When right arrow key is pressed, x= "+player_x + " y= " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

