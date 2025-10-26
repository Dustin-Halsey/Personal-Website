//RoomBarrier.js

//RoomBarrier constructor
//Usage: exampleBarrier = new RoomBarrier(game, tile-x-coordinate, tile-y-coordinate, player, spawner)
//You must tie each barrier with an enemy spawner object
//The barriers will despawn once all enemies associeated with that spawner have been killed
//NOTE: THIS OBJECT WILL TRACK THE ENEMIES FROM UP TO 5 SPAWNERS.
function RoomBarrier(game, x, y, player, spawner1, spawner2, spawner3, spawner4, spawner5, spawner6) {

	Phaser.Sprite.call(this, game, x*64+32, y*64+32, 'barrier');

	//add to the game
	game.add.existing(this);

	//enable physics and set some properties
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.set(0.5);
    this.playerSprite = player;
    this.enemySpawner1 = spawner1;
    this.enemySpawner2 = spawner2;
    this.enemySpawner3 = spawner3;
    this.enemySpawner4 = spawner4;
    this.enemySpawner5 = spawner5;
    this.enemySpawner6 = spawner6;


    //properties
    this.body.immovable = true;

    //add to barriers group
    barriers.add(this);
}

RoomBarrier.prototype = Object.create(Phaser.Sprite.prototype);
RoomBarrier.prototype.constructor = RoomBarrier;

RoomBarrier.prototype.update = function() {
    if(!this.visible) {
        game.time.events.add(Phaser.Timer.SECOND * .5, makeVisible, this, this);
    }
    //collision with player
    game.physics.arcade.collide(this.playerSprite, this);

    //collision with enemies
    game.physics.arcade.collide(this, enemyGroup);

    //destroy once all enemies are dead
	if(checkSpawner(this.enemySpawner1) && checkSpawner(this.enemySpawner2) && checkSpawner(this.enemySpawner3) && checkSpawner(this.enemySpawner4) && checkSpawner(this.enemySpawner5) && checkSpawner(this.enemySpawner6)) {
        this.destroy();
    } 
}

//this function checks if all of the enemies from a spawner have died
//if all its enemies are dead, this function returnse true, else it returns false
function checkSpawner(spawner) {
    if(spawner == undefined || spawner.enemiesAlive <= 0)
        return true;
    else
        return false;
}

function makeVisible(barrier) {
    this.visible = true;
}

function createBarrierText() {
      barrierText = game.add.text(room_width/2, room_height/4, 'You must clear all enemies before leaving!',
      {font: '25px Arial', fill: '#ffffff'});
       barrierText.anchor.set(0.5);
       barrierTween = game.add.tween(barrierText.scale).to( { x: 1.2, y: 1.2 }, 800, Phaser.Easing.Linear.None, true);
       barrierTween.loop(true);
       barrierTween.yoyo(true, 0);
}