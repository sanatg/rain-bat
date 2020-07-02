const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var canvas;
var batman,batman_Img;
var umbrella;
var drop1;
var drop2;
var drop3;
var drop3;
var drop4;
var drop5;
var drop6;
var drop7;
var drop8;
var drop9;
var drop10;
var drop11;
var drop12;
var drop13;
var drop14;
var drop15;
var drop16;
var drop17;
var drop18;
var drop19;
var drop20;
var drop21;
var drop22;
var drop23;
var drop24;
var drop25;
var drop26;
var drop27;
var drop28;
var drop29;
var drop30;
var drop31;
var drops = [];
var maxDrops = 100;
var cloud,cloud_Img;
function preload(){
 batman_Img = loadImage("./img/hello.png");   
 cloud_Img  = loadImage("./img/cloud.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   canvas = createCanvas(400,600);
   umbrella = new Umbrella(145,450,90,260);
   batman = createSprite(150,460,100,100);
   batman.addImage(batman_Img);
  // drop = new Drop(150,100,10,10);
  drop1 = new Drop(150,100,3,30);
  drop2 = new Drop(120,120,3,30);
  drop3 = new Drop(200,130,3,50);
  drop4 = new Drop(300,140,3,70);
  drop5 = new Drop(100,50,3,80);
  drop6 = new Drop(110,10,3,30);
  drop7 = new Drop(140,200,3,10);
  drop8 = new Drop(160,400,3,14);
  drop9 = new Drop(180,250,3,40);
  drop10 = new Drop(250,190,3,70);
  drop11 = new Drop(151,123,3,90);
  drop12 = new Drop(123,147,3,100);
  drop13 = new Drop(123,139,3,20);
  drop14 = new Drop(234,154,3,100);
  drop15 = new Drop(191,133,3,109);
  drop16 = new Drop(122,198,3,80);
  drop17 = new Drop(111,144,3,100);
  drop18 = new Drop(200,248,3,60);
  drop19 = new Drop(172,123,3,70);
  drop20 = new Drop(132,278,3,30);
  drop21 = new Drop(199,334,3,90);
  drop22 = new Drop(300,334,3,30);
  drop23 = new Drop(133,234,3,40);
  drop24 = new Drop(189,133,3,50); 
  drop25 = new Drop(304,143,3,60);
  drop26 = new Drop(344,144,3,70);
  drop27 = new Drop(422,154,3,80);
  drop28 = new Drop(222,134,3,100);
  drop29 = new Drop(134,181,3,100);
  drop30 = new Drop(234,179,3,70);
  drop31 = new Drop(222,101,3,60);
  cloud = createSprite(150,70,10,10);
  cloud.addImage(cloud_Img)
}

function draw(){
    Engine.update(engine);
    background(0);
    umbrella.display();
    drop1.display();
    drop2.display(); 
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();
    drop21.display();
    drop22.display();
    drop23.display();
    drop24.display();
    drop25.display();
    drop26.display();
    drop27.display();
    drop28.display();
    drop28.display();
    drop29.display();
    drop30.display();
    drop31.display();


    drawSprites();
    batman.scale = 1.5;
    cloud.scale = 0.5;
}   

