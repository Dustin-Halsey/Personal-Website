//enemy bullet prefab
function EnemyBullet(game, x, y, atlas, frame, damage) {
	Phaser.Sprite.call(this, game, x, y, 'bulletLine');

	//add to the game
	game.add.existing(this);

	//enable physics and set some properties
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.set(0.5);

    //properties that allow bullets to be destroyed at world bounds
    this.body.collideWorldBounds = true;
    this.body.onWorldBounds = new Phaser.Signal();
    this.body.onWorldBounds.add(destroyBullet, this);

	//set additional properties
	this.movementSpeed = 1000;
	this.damage = damage;

	//add to the bullets group
	enemyBullets.add(this);

	//make the bullet fire at the player
	game.physics.arcade.moveToObject(this, player, this.movementSpeed);

	//set the bullet rotation so knockback works correctly
	//make bullet face the player
    this.rotation = angleToSprite(this, player);

    this.alpha = .5;
}
    

EnemyBullet.prototype = Object.create(Phaser.Sprite.prototype);
EnemyBullet.prototype.constructor = EnemyBullet;

EnemyBullet.prototype.update = function() {
    	
}

function destroyBullet(bullet) {
   bullet.destroy();
}
