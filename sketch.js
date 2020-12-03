var back_IMG;
var play_icon;
var coins =500
var diamonds = 10
var gameState = "LOADING_SCREEN"
var shieldRotation = 0;
var start1Check = false;
var start2Check = false;
var start3Check = false;
var start4Check = false;
var start5Check = false;
var start6Check = false;
var start7Check = false;
var start8Check = false;
var start9Check = false;
var start10Check = false;
var loadEnd = 90;
var tapTextLenth = 13;
var loadCheck = false;
var loadClick;
var check1 = 0;
var shieldPressed = "notPressed";
var blockRow1 = []
var blockSprite1 = []
var blockSprite2 = []
var blockSprite3 = []
var blockSprite4 = []
var blockSprite5 = []
var blockSprite6 = []
var blockSprite7 = []
var blockSprite8 = []
var blockSprite9 = []
var blockSprite10 = []
var shields = []
var shieldDisplay = false


function preload(){
//music and sounds
  theme_music = loadSound('music/battleThemeA.mp3');
  button_click_sound = loadSound('music/button_click_sound.mp3')

//images and animations
  back_IMG = loadImage("backImages/back_image.JPG")
  play_IMG = loadImage("playicon.png")
  rotate_coin = loadAnimation("coinsImages/coin1.png","coinsImages/coin2.png","coinsImages/coin3.png","coinsImages/coin4.png","coinsImages/coin5.png","coinsImages/coin6.png")
  diamondIMG = loadImage("coinsImages/blueDiamond.png")
  level_backIMG = loadImage("backImages/checkerboard_green.png")
  shieldButtonIMG = loadImage("backImages/sheild_button.png")
//========\\
}
function setup(){
  createCanvas(1030,600);

if(gameState === "LOADING_SCREEN"){
    loadClick = createSprite(500,300,1000,700)
    loadClick.visible = false;
}


//creating buttons for weapons and defences

shieldButton = createSprite(170,21)
shieldButton.addImage("shield",shieldButtonIMG)
shieldButton.scale= 0.1
shieldButton.visible = false;


//======================================\\
//======================================\\

  play_icon = createSprite(730,300,80,80)
  play_icon.addImage("play",play_IMG)
  play_icon.scale = 0.9
  play_icon.visible = false;
  
  rotatingCoin = createSprite(900,20)
  rotatingCoin.addAnimation("rotate",rotate_coin)
  rotatingCoin.scale = 0.09
  rotatingCoin.visible = false;
  
  diamondSprite = createSprite(17,18)
  diamondSprite.addImage("img",diamondIMG)
  diamondSprite.scale = 0.1
  diamondSprite.visible = false;

  


  this.startButton1 = createButton("ENTER LEVEL 1")
this.startButton1.mousePressed(()=>{
  this.startButton1.hide();
  button_click_sound.play();
//  theme_music.stop();
})
this.startButton1.hide();

this.startButton2 = createButton("ENTER LEVEL 2")
this.startButton2.mousePressed(()=>{
  this.startButton2.hide();
  start2Check = true;
  button_click_sound.play();
  button_click_sound.play();
})
this.startButton2.hide();
  
this.startButton3 = createButton("ENTER LEVEL 3")
this.startButton3.mousePressed(()=>{
  this.startButton3.hide();
  start3Check=true;
  button_click_sound.play();
})
this.startButton3.hide();
this.startButton4 = createButton("ENTER LEVEL 4")
this.startButton4.mousePressed(()=>{
  this.startButton4.hide();
  start4Check=true;
  button_click_sound.play();
})
this.startButton4.hide();

this.startButton5 = createButton("ENTER LEVEL 5")
this.startButton5.mousePressed(()=>{
  this.startButton5.hide();
  start5Check=true;
  button_click_sound.play();
})
this.startButton5.hide();

this.startButton6 = createButton("ENTER LEVEL 6")
this.startButton6.mousePressed(()=>{
  this.startButton6.hide();
  start6Check=true;
  button_click_sound.play();
})
this.startButton6.hide();

this.startButton7= createButton("ENTER LEVEL 7")
this.startButton7.mousePressed(()=>{
  this.startButton7.hide();
  start7Check=true;
  button_click_sound.play();
})
this.startButton7.hide();

this.startButton8 = createButton("ENTER LEVEL 8")
this.startButton8.mousePressed(()=>{
  this.startButton8.hide();
  start8Check=true;
  button_click_sound.play();
})
this.startButton8.hide();
this.startButton9 = createButton("ENTER LEVEL 9")
this.startButton9.mousePressed(()=>{
  this.startButton9.hide();
  start9Check=true;
  button_click_sound.play();
})
this.startButton9.hide();
this.startButton10 = createButton("ENTER LEVEL 10")
this.startButton10.mousePressed(()=>{
  this.startButton10.hide();
  start10Check = true;
  button_click_sound.play();
})
this.startButton10.hide();

CON = createButton('CONTINUE')
CON.position(430,300)
CON.style('width', '200px')
CON.style('height', '41px')
CON.style('background', 'yellow');
CON.style('color', 'darkblue');
CON.style('font', 'Courier New');
CON.hide();
CON.mousePressed(()=>{
  gameState = "HOME_SCREEN"
 theme_music.play();
 
 button_click_sound.play();
  CON.hide();
})

if(gameState === "LOADING_SCREEN"){
    coins_hide = createSprite(20,20,100,100)
    dia_hide = createSprite(900,20,100,100)
}


}
function draw() {
//console.log(mouseY)
if(gameState==="LOADING_SCREEN"){

  textAlign(CENTER)
  background("grey")
  if(loadEnd<950){
  loadEnd = loadEnd+7;
  }
 
textSize(15)
fill("black")
if(loadEnd<950){
text("Loading...",500,490)
}else{
 if(theme_music.isPlaying()===false){
  //theme_music.play();
 }
  
  textAlign(CENTER)
  textSize(tapTextLenth)
  strokeWeight(5)
  tapTextLenth++;
  if(tapTextLenth >= 21){
    tapTextLenth--;
  }
  text("Tap Anywhere To Continue",521,490)
  if(mousePressedOver(loadClick)){
    gameState = "HOME_SCREEN"
   theme_music.play();
  coins_hide.destroy();
  dia_hide.destroy();
  
  }
}
strokeWeight(21)
stroke("yellow")
loadingLine = line(80,510,loadEnd,510)
if(loadEnd>=950){
 
}
}

  if(gameState === "HOME_SCREEN"){
    check1++;
    background(back_IMG);  
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
  fill("orange")
  textSize(90)
  textFont()
  text("T.O.W.E.R.",290,160)
  play_icon.visible = true;
  if(mousePressedOver(play_icon)&&check1>=10){
    gameState = "LEVEL1"
    play_icon.visible = false
    button_click_sound.play();
  }
  }
  if (gameState=== "LEVEL_CHOOSE"){
    background(back_IMG);  
  }
  if(gameState==="LEVEL1"){
    
      background(level_backIMG)
      rotatingCoin.visible = true;
      diamondSprite.visible = true;
      fill("green")
      ellipseMode(RADIUS)
      ellipse(515,300,90,90)
      shieldButton.visible = true;
      if(mousePressedOver(shieldButton)){
        shieldPressed = "selected"
        //creating the blocks on which player will put defences on
  for(var m =50;m<1300;m = m + 103){

    for(var j = 1;j<10;j++){
      blockRow1.push( blockSprite1[j]=createSprite(m,90,100,57))
      blockSprite1[j].visible = false;
      if(mousePressedOver(blockSprite1[j])){
          shields.push(new Shield(blockSprite1[j].x,blockSprite1[j].y))
        
      }
    }
  
    for(var k = 1;k<10;k++){
      blockRow1.push( blockSprite2[k]=createSprite(m,150,100,57))
      blockSprite2[k].visible = false;
    }

    for(var l = 1;l<10;l++){
      blockRow1.push( blockSprite3[l]=createSprite(m,210,100,57))
      blockSprite3[l].visible = false;
    }

    for(var d = 1;d<10;d++){
      blockRow1.push( blockSprite4[d]=createSprite(m,270,100,57))
      blockSprite4[d].visible = false;
    }

    for(var n = 1;n<10;n++){
      blockRow1.push( blockSprite5[n]=createSprite(m,330,100,57))
      blockSprite5[n].visible = false;
    }

    for(var c = 1;c<10;c++){
      blockRow1.push( blockSprite6[c]=createSprite(m,390,100,57))
      blockSprite6[c].visible = false;
    }

    for(var c = 1;c<10;c++){
      blockRow1.push( blockSprite7[c]=createSprite(m,450,100,57))
      blockSprite7[c].visible = false;
    }

    for(var c = 1;c<10;c++){
      blockRow1.push( blockSprite8[c]=createSprite(m,510,100,57))
      blockSprite8[c].visible = false;
    }

    for(var c = 1;c<10;c++){
      blockRow1.push( blockSprite9[c]=createSprite(m,570,100,57))
      blockSprite9[c].visible = false;
    }

    for(var c = 1;c<10;c++){
      blockRow1.push( blockSprite10[c]=createSprite(m,630,100,57))
      blockSprite10[c].visible = false;
    }

  }
        
      }
      if(shieldPressed==="selected"){
        fill("gold")
      }else if(shieldPressed==="reLoading"){
        fill("red")
      }else{
      fill("#AFEEEE")
      }
      rect(140,0,61.6666666667,50)
          if(start1Check === false){
            this.startButton1.show();
          }
       
        this.startButton1.position(400,300)
        this.startButton1.style('width', '200px')
        this.startButton1.style('height', '30px')
        this.startButton1.style('background', 'skyblue');
        this.startButton1.style('color', 'darkblue');
        this.startButton1.style('font', 'couriernew');
        this.startButton1.mousePressed(()=>{
          this.startButton1.hide();
          start1Check = true;
          theme_music.stop();
          button_click_sound.play();
        })

  }

  if(gameState==="LEVEL2"){
    background(level_backIMG)
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    if(start1Check === false){
      this.startButton2.show();}
      
    this.startButton2.position(400,300)
    this.startButton2.style('width', '200px')
    this.startButton2.style('height', '30')
    this.startButton2.style('background', 'skyblue');
    this.startButton2.style('color', 'darkblue');
    this.startButton2.style('font', 'Courier New');

  }

  if(gameState==="LEVEL3"){
    background(level_backIMG)
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    if(start1Check === false){
      this.startButton3.show();}

    this.startButton3.position(400,300)
    this.startButton3.style('width', '200px')
    this.startButton3.style('height', '30')
    this.startButton3.style('background', 'skyblue');
    this.startButton3.style('color', 'darkblue');
    this.startButton3.style('font', 'Courier New');

  }

  if(gameState==="LEVEL4"){
    background(level_backIMG)
    if(start1Check === false){
    this.startButton4.show();}
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    this.startButton4.position(400,300)
    this.startButton4.style('width', '200px')
    this.startButton4.style('height', '30')
    this.startButton4.style('background', 'skyblue');
    this.startButton4.style('color', 'darkblue');
    this.startButton4.style('font', 'Courier New');

  }

  if(gameState==="LEVEL5"){
    background(level_backIMG)
    if(start1Check === false){
    this.startButton5.show();}
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    this.startButton5.position(400,300)
    this.startButton5.style('width', '200px')
    this.startButton5.style('height', '30')
    this.startButton5.style('background', 'skyblue');
    this.startButton5.style('color', 'darkblue');
    this.startButton5.style('font', 'Courier New');

  }
  rotatingCoin.visible = true;
  diamondSprite.visible = true;
  if(gameState==="LEVEL6"){
    background(level_backIMG)
    this.startButton6.show();
    this.startButton6.position(400,300)
    this.startButton6.style('width', '200px')
    this.startButton6.style('height', '30')
    this.startButton6.style('background', 'skyblue');
    this.startButton6.style('color', 'darkblue');
    this.startButton6.style('font', 'Courier New');

  }

  if(gameState==="LEVEL7"){
    background(level_backIMG)
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    if(start1Check === false){
      this.startButton7.show();
    }
    this.startButton7.position(400,300)
    this.startButton7.style('width', '200px')
    this.startButton7.style('height', '30')
    this.startButton7.style('background', 'skyblue');
    this.startButton7.style('color', 'darkblue');
    this.startButton7.style('font', 'Courier New');

  }

  if(gameState==="LEVEL8"){
    background(level_backIMG)
    if(start1Check === false){
    this.startButton8.show();
    }rotatingCoin.visible = true;
    diamondSprite.visible = true;
    this.startButton8.position(400,300)
    this.startButton8.style('width', '200px')
    this.startButton8.style('height', '30')
    this.startButton8.style('background', 'skyblue');
    this.startButton8.style('color', 'darkblue');
    this.startButton8.style('font', 'Courier New');

  }

  if(gameState==="LEVEL9"){
    background(level_backIMG)
    if(start1Check === false){
    this.startButton9.show();
    }
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    this.startButton9.position(400,300)
    this.startButton9.style('width', '200px')
    this.startButton9.style('height', '30')
    this.startButton9.style('background', 'skyblue');
    this.startButton9.style('color', 'darkblue');
    this.startButton9.style('font', 'Courier New');

  }

  if(gameState==="LEVEL10"){
    background(level_backIMG)
    if(start1Check === false){
    this.startButton10.show();
    }
    rotatingCoin.visible = true;
    diamondSprite.visible = true;
    this.startButton10.position(400,300)
    this.startButton10.style('width', '200px')
    this.startButton10.style('height', '30')
    this.startButton10.style('background', 'skyblue');
    this.startButton10.style('color', 'darkblue');
    this.startButton10.style('font', 'Courier New');

  }
if(gameState!=="LOADING_SCREEN"){
  fill("")
  rect(880,0,150,40)
  textSize(21)
  fill("gold")
  text("  "+coins,920,27)
  fill("grey")
  rect(0,0,140,40)
  fill("#7DF9FF")
  text("   "+diamonds,20,27)
  noFill();
}
if(shieldDisplay=== true){
for(var r = 1;r++;){
shields[r].display();
}
}
  drawSprites();
}

function vibrate(ms){
  navigator.vibrate(ms)
}
