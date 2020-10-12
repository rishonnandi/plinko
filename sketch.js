const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle;
var turn=0;
var gameState="PLAY";


var  engine,world;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 text("Score : "+score,20,30);
  
  text("500 " , 25, 540)
  text("500 " , 105, 540)
  text("500  " , 185, 540)
  text("500  ", 263, 540)
  text("100 ", 340, 540)
  text("100  ", 420, 540)
  text("100 ", 500, 540)
  text("200  ", 580, 540)
  text("200  " , 660, 540)
  text("200  ", 740, 540)
  ground.display();
  

  if(gameState==="END"){
    textSize(100);
    text("GameOver",150,250);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( turn >= 5) gameState ="END";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( turn >= 5) gameState ="END";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( turn >= 5)  gameState ="END";

             }      
             
       }
 
     }


}



  function keyPressed() {
    if(keyCode === 32){
    if(gameState==="PLAY"){
    particle=new Particle(mouseX,10,10,10);
      turn ++;
    }
    }
  }