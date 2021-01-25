class Food{
constructor(){


this.lastfed = 0
this.foodStock = 20
this.image = loadImage("images/Milk.png");

}

display(){
var x = 80, y=100;
imageMode(CENTER)
//image(this.image,720,220,70,70)

    if(this.foodStock!=null){
        for(var i=0; i<this.foodStock;i++){
            if(i%10===0){
                x=80
                y=y+50
            }
            image(this.image,x,y,50,50)
            x = x+30
        }
    }  
    }

getFoodStock(){

    foodStockRef = database.ref('food')

    foodStockRef.on("value",function(data){
        this.foodStock = data.val();
    })
    
    feedTimeRef = database.ref('FeedTime')

    feedTimeRef.on("value", function(data){
        this.lastfed = data.val();
    })

}


updateFoodStock(){
    
    database.ref('/').update({
        'food': this.foodStock
    } )

    database.ref('/').update({
        'FeedTime': this.lastfed
    } )
}

deductFood(data){
if(this.foodStock>0){
    this.foodStock -=data;
}
this.lastfed = hour();

}

addFood(data){

    this.foodStock += data;
}


}