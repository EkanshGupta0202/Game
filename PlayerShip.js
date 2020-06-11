class Ship{
 constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;  
    this.x=displayHeight/2;  
}

getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
      console.log(playerCount);
    })
  }
updateCount(count){
    database.ref('/').update({
        playerCount: count
    })
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      x:this.x
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
