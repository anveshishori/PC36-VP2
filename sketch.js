//Create variables here

var dog, happyDog, database, foodS, foodStock, foodStockRef;
var dogImage, doghImg, lastfed, fedTime, foodObj

var button1, button2;

function preload()
{
  //load images here
  
dogImage = loadAnimation("images/dogImg.png")
doghImg = loadAnimation("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
database = firebase.database();
dog = createSprite(250,300,20,20)
dog.addAnimation("doggie", dogImage)
dog.addAnimation("happy doggie", doghImg)
dog.scale = 0.1




  button1 = createButton("Add Food")
  button2 = createButton("Feed Doggie")
  button1.position(200,80)
  button2.position(300,80)

  foodObj = new Food();

fedTime = database.ref('FeedTime')
fedTime.on("value",function(data){

  lastfed = data.val();
})

}


function draw() {  
background(rgb(46, 139, 87))


button1.mousePressed(function(){
foodObj.addFood(1);
foodObj.updateFoodStock()
})


button2.mousePressed(function(){

  
  dog.changeAnimation("happy doggie",doghImg)

  foodObj.deductFood(1);
  foodObj.updateFoodStock()

    })

    button2.mouseReleased(function(){
      dog.changeAnimation("doggie",dogImage)

    })

   


foodObj.display();

  drawSprites();
  //add styles here
  fill("white")
text("Press Feed Button to feed the Doggie",150,20);
  textSize(20)
  text("FOOD REMAINING : " + foodObj.foodStock, 250,400)
  text("LAST FED AT : " + foodObj.lastfed + " hrs", 10,400)
}

