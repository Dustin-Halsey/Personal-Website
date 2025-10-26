//Player prefab

function Player(game, x, y, atlas, frame, health) {

	//Phaser.Sprite.call(this, game, x, y, atlas, frame);
	Phaser.Sprite.call(this,game,x,y,'atlas2', 'Player');
	this.angle=90;
	//add to the game
	game.add.existing(this);

	//enable physics and set some properties
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.collideWorldBounds = false;
	this.anchor.set(0.5);
	this.body.setSize(40,40,12,4); //centers the player's hitbox

	//Player properties
    this.hp = health;
	this.maxHP = health;
    this.movementSpeed = 40;
    this.maxVelSoft = 300; //soft cap on velocity for WASD movement
    this.maxVelHard = 400; //hard cap on velocity that does not allow the player to move faster than
    this.currentRoom = 1;
    this.timeSwitched = 0;
    this.roomsVisited = new Array(0);
    this.shootingStalled = false;
    this.lastRoom = 1;
    this.justSwitched = false;
    this.pickedUpFirstWeapon = false;
    this.showPickup = false;
    this.switchTextShown = false;
    this.dead = false;

    //Player movement properties
    this.movingUp = false;
    this.movingDown = false;
    this.movingLeft = false;
    this.movingRight = false;
    this.body.drag.x = 800; //TESTCODE
    this.body.drag.y = 800; //TESTCODE
    this.canDash = false;
    this.dashTimer = 2000;
    this.nextDash = 0;
    this.dashValue = 700;
    this.dashTextCreated = false;
    this.isDashing = false;

    //Player weapon properties
    this.pistolFireRate = 500;
    this.nextFire = 0;
    this.fireRate = 0;
    this.currentWeapon = 'PISTOL';
    this.secondWeapon = '';
    this.ammo = 0;
    this.pistolUpgraded = false;
    this.shotgunPellets = 15;
    this.rifleROF = 125;
    this.spread = 0;
    this.reticleSpread = 1;
    this.isFiring = false;
    this.smgAmmoCap = 50;
    this.weaponBackground = game.add.sprite(1133, 62, 'collisionImage');
    this.weaponBackground.alpha = 0;
    this.weaponBackground.anchor.setTo(0.5);
    this.weaponBackground.fixedToCamera = true;
    this.weaponWindow = game.add.sprite(1133, 62, 'weaponWindow');
    this.weaponWindow.fixedToCamera = true;
    this.weaponWindow.anchor.setTo(0.5);
    this.weaponGUI = game.add.sprite(1133, 62, 'wall');
    this.weaponGUI.anchor.setTo(0.5);
    this.weaponGUI.fixedToCamera = true;

     barrierText = game.add.text(room_width/2, room_height/2, 'You must clear all enemies before leaving!',
      {font: '25px Aldrich', fill: '#ffffff'});
       barrierText.anchor.set(0.5);
       barrierText.fixedToCamera = true;
       barrierTween = game.add.tween(barrierText.scale).to( { x: 1.2, y: 1.2 }, 800, Phaser.Easing.Linear.None, true);
       barrierTween.loop(true);
       barrierTween.yoyo(true, 0);

       switchText = game.add.text(this.x, this.y - 54, '            Out of Ammo!\r\nPress Q to Switch Weapons!', {font: '20px Aldrich', fill: '#ffffff'});
       switchText.anchor.set(0.5);
       switchTween = game.add.tween(switchText.scale).to( { x: 1.2, y: 1.2 }, 800, Phaser.Easing.Linear.None, true);
       switchTween.loop(true);
       switchTween.yoyo(true, 0);

       pickupText = game.add.text(this.x, this.y-54, 'Press E to Pick Up Weapons', {font: '20px Aldrich', fill: '#ffffff'});
       pickupText.anchor.set(0.5);
       pickupTween = game.add.tween(pickupText.scale).to( { x: 1.2, y: 1.2 }, 800, Phaser.Easing.Linear.None, true);
       pickupTween.loop(true);
       pickupTween.yoyo(true, 0);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
    if(!this.dead) {
        //display switch weapon tutorial
        if(this.ammo == 0 && this.pickedUpFirstWeapon && !this.switchTextShown) {
            switchText.visible = true;
            switchText.x = this.x;
            switchText.y = this.y - 54;
        } else {
            switchText.visible = false;
        }

        //display weapon pickup tutorial
        this.showPickup = false;
        for(var i=0; i<weaponGroup.children.length; i++) {
            var weapon = weaponGroup.children[i];
            if(distance(weapon, this) < 50) {
                this.showPickup = true;
                pickupText.x = this.x;
                pickupText.y = this.y-54;
                break;
            }
        }

        if(this.showPickup && !this.pickedUpFirstWeapon) {
            pickupText.visible = true;
        } else {
            pickupText.visible = false;
        }

        //if the player just switched rooms, stall shooting for 1 second
        if(this.lastRoom != this.currentRoom) {
            stallShooting(this);
            roomSwitchAud.play();

            if(this.body.velocity.x > 0) knockback(this, 200, Math.PI);
            if(this.body.velocity.x < 0) knockback(this, 200, 0);
            if(this.body.velocity.y > 0) knockback(this, 200, (3*Math.PI)/2);
            if(this.body.velocity.y < 0) knockback(this, 200, Math.PI/2);

            this.justSwitched = true;
            game.time.events.add(Phaser.Timer.SECOND * .5, setSwitched, this, this);
        }

        //record the last room
        this.lastRoom = this.currentRoom;

        //update the player movement
        resetMovement(this);

        //WASD movement
        if(game.input.keyboard.isDown(Phaser.Keyboard.W)) moveUp(this);

        if(game.input.keyboard.isDown(Phaser.Keyboard.S)) moveDown(this);

        if(game.input.keyboard.isDown(Phaser.Keyboard.A)) moveLeft(this);

        if(game.input.keyboard.isDown(Phaser.Keyboard.D)) moveRight(this);

        //create dash text
        if(this.canDash && !this.dashTextCreated) createDashText(this);

        //dash ability
        if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && this.canDash) dash(this);
        //dash particle effect
        if(this.isDashing) {
            new DashParticle(game, this);
            if(game.rnd.integerInRange(1,2) == 1) new DashParticle(game, this);
        }
        //Swap weapon
        if (game.input.keyboard.justPressed(Phaser.Keyboard.Q)) swap(this);

        //make the player face the mouse
        this.rotation = game.physics.arcade.angleToPointer(this);

        //shoot on mouse click
        if(game.input.activePointer.isDown) {
            shootWeapon(this);
            this.isFiring = true;
            playMusic.volume = 0.4;
        } else {
            this.isFiring = false;
            playMusic.volume = 0.5;
        }

        //handle collision between bullets and player
        if(!this.isDashing) game.physics.arcade.overlap(this, enemyBullets, bulletsPlayerCollision, null, this);

        //collision between player and missiles
        if(!this.isDashing) game.physics.arcade.overlap(this, enemyMissiles, missilesPlayerCollision, null, this);

        if(this.hp <= 0) {
            this.dead = true;
            playerDead = true;
            var tween = game.add.tween(this).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
            game.time.events.add(Phaser.Timer.SECOND * 2, startLose, this);
        }

        // Spread cooldown
        if (player.spread > 0 && this.isFiring === false) player.spread -= 0.003;
        if (player.spread < 0) player.spread = 0;

        if (this.reticleSpread > 1) this.reticleSpread -= 0.05;

        reticle.scale.setTo(this.reticleSpread, this.reticleSpread);

        barrierText.visible = false;
        for(var i=0; i<barriers.children.length;i++) {
            var barrier = barriers.children[i];
            if(distance(this, barrier) <= 100 && !this.justSwitched) {
            barrierText.visible = true;
            break;
            } 
        }
        this.bringToTop();

        displayWeapon(this);
    }
}

Player.prototype.logRoomSwitch = function(room) {
    if(!this.roomVisited(room)) {
        this.timeSwitched = game.time.now;
        this.roomsVisited.push(room);
    }
    if(this.currentRoom != room) this.currentRoom = room;
}

Player.prototype.roomVisited = function(room) {
    var returnValue = false;
    for(var i=0; i<this.roomsVisited.length; i++) {
        if(this.roomsVisited[i] == room) {
            return true;
        }
    }
    return false;
}

function resetMovement(player) {
	//player.body.velocity.x = 0;
	//player.body.velocity.y = 0;

	player.movingUp = false;
	player.movingDown = false;
	player.movingLeft = false;
	player.movingRight = false;
}

function moveUp(player) {
	//accelerates player up to a cap (this implementation allows knockback to occur while moving)
	if (player.body.velocity.y>-player.maxVelSoft){
		player.body.velocity.y -= player.movementSpeed;
	}
	player.movingUp = true;
	player.movingDown = false;
}

function moveDown(player) {
	//accelerates player up to a cap (this implementation allows knockback to occur while moving)
	if (player.body.velocity.y<player.maxVelSoft){
		player.body.velocity.y += player.movementSpeed;
	}
	player.movingDown = true;
	player.movingUp = false;
}

function moveLeft(player) {
	//accelerates player up to a cap (this implementation allows knockback to occur while moving)
	if (player.body.velocity.x>-player.maxVelSoft){
		player.body.velocity.x -= player.movementSpeed;
	}
	player.movingLeft = true;
	player.movingRight = false;
}

function moveRight(player) {
	//accelerates player up to a cap (this implementation allows knockback to occur while moving)
	if (player.body.velocity.x<player.maxVelSoft){
		player.body.velocity.x += player.movementSpeed;
	}
	player.movingRight = true;
	player.movingLeft = false;
}

function swap(player) {
	if (player.secondWeapon != '') {
		var temp = player.currentWeapon;
		player.currentWeapon = player.secondWeapon;
		player.secondWeapon = temp;
        player.switchTextShown = true;
		console.log('Weapon: ' + player.currentWeapon);
	}

}

function shootWeapon(player) {
    if(!player.shootingStalled) {
        if (player.currentWeapon === 'PISTOL' && game.time.now > player.nextFire) {
            knockback(player,150,player.rotation);
            pistolAud.play();
            player.nextFire = game.time.now + player.pistolFireRate;
            game.camera.shake(0.008, 100);
            player.reticleSpread += 1;
            new Bullet(game, player.x, player.y, 'atlas', 'bullet0001', 1, player, 400, 0);
            muzzleParticleExplosion();
            if(player.pistolUpgraded) {
                game.time.events.add(Phaser.Timer.SECOND * .1, twoRoundBurst, this, player);
            }
        }   

        if (player.currentWeapon === 'RIFLE') {
            shootRifle(player);
        }
        if (player.currentWeapon === 'SHOTGUN') {
            shootShotgun(player);
        }
        if(player.currentWeapon === 'SMG') {
            shootSMG(player); 
        }
    }
}

function twoRoundBurst(player) {
    new Bullet(game, player.x, player.y, 'atlas', 'bullet0001', 1, player, 400, 0);
    pistolAud.play();
}

function shootRifle(player) {
    if (game.time.now > player.nextFire) {
            if(player.ammo > 0){
            knockback(player, 150, player.rotation); //200
            player.nextFire = game.time.now + player.fireRate;
            game.camera.shake(0.01, 100);
            rifleAud.play();
            new Bullet(game, player.x, player.y, 'atlas', 'bullet0001', 1.5, player, 200, player.spread);
            player.ammo--;
            if (player.spread < 0.05) player.spread += 0.007;
            player.reticleSpread += 0.5;
            muzzleParticleExplosion();
        }
        else if(player.ammo <= 0)
            noAmmo.play();
    }
    
}

function shootShotgun(player) {
    if (game.time.now > player.nextFire) {
        if(player.ammo > 0){
            knockback(player, 400, player.rotation);
            player.nextFire = game.time.now + player.fireRate;
            game.camera.shake(0.015, 100);
            shotgunAud.play();

            for(var i=0; i< player.shotgunPellets; i++) {
                new Bullet(game, player.x, player.y, 'atlas', 'bullet0001', 0.5, player, 800, 0.15);
                muzzleParticleExplosion();
            }
            
            player.ammo--;
            player.reticleSpread += 2.5;
        }
        else if (player.ammo <= 0)
            noAmmo.play();
    }
}

function shootSMG(player) {
    if (game.time.now > player.nextFire) {
        if(player.ammo > 0){
            knockback(player, 75, player.rotation);
            player.nextFire = game.time.now + player.fireRate;
            game.camera.shake(0.008, 100);
            smgAud.play();
            new Bullet(game, player.x, player.y, 'atlas', 'bullet0001', 0.5, player, 100, player.spread);
            player.ammo--;
            if (player.spread < 0.1) player.spread += 0.01;
            if (player.reticleSpread < 3.5) player.reticleSpread += 0.4;
            muzzleParticleExplosion();
        }
        else
            noAmmo.play();
    }
}

//handle collision between bullets group and player
function bulletsPlayerCollision(player, bullet) {
    bullet.destroy();
    player.hp -= bullet.damage;
    playerHit.play();
    game.camera.shake(0.016, 100);

    //knock back the player based on the bullet's trajectory
    player.knockedBack = true;
    knockback(player, 300, bullet.rotation - Math.PI);
    console.log('Player HP: ' + player.hp);
}

//handle collision between bullets group and player
function missilesPlayerCollision(player, missile) {
    player.hp -= game.rnd.integerInRange(1,3);
    playerHit.play();
    game.camera.shake(0.016, 100);

    //knock back the player based on the bullet's trajectory
    player.knockedBack = true;
    knockback(player, 600, missile.rotation - Math.PI);
    console.log('Player HP: ' + player.hp);

    destroyMissile(missile);
}

function dash(player) {
    if(game.time.now > player.nextDash) {
        player.nextDash = game.time.now + player.dashTimer;

        if(!player.movingUp && !player.movingDown && !player.movingRight && !player.movingLeft)
            knockback(player, player.dashValue, player.rotation - Math.PI);

        //dash up
        else if(player.movingUp && !player.movingDown && !player.movingLeft && !player.movingRight)
            knockback(player, player.dashValue, Math.PI/2);

        //dash down
        else if(!player.movingUp && player.movingDown && !player.movingLeft && !player.movingRight)
            knockback(player, player.dashValue, (3*Math.PI)/2);

        //dash left
        else if(!player.movingUp && !player.movingDown && player.movingLeft && !player.movingRight)
            knockback(player, player.dashValue, 0);

        //dash right
        else if(!player.movingUp && !player.movingDown && !player.movingLeft && player.movingRight)
            knockback(player, player.dashValue, Math.PI);

        //dash up and right
        else if(player.movingUp && !player.movingDown && !player.movingLeft && player.movingRight)
            knockback(player, player.dashValue, (3*Math.PI)/4);

        //dash up left
        else if(player.movingUp && !player.movingDown && player.movingLeft && !player.movingRight)
            knockback(player, player.dashValue, (Math.PI)/4);

        //dash down left
        else if(!player.movingUp && player.movingDown && player.movingLeft && !player.movingRight)
            knockback(player, player.dashValue, (7*Math.PI)/4);

        else //dash down right
            knockback(player, player.dashValue, (5*Math.PI)/4);

        dashAud.play();
        player.isDashing = true;
        game.time.events.add(Phaser.Timer.SECOND * .5, notDashing, this, player);
        startDashCooldown();
    }
}

function notDashing(player) {
    player.isDashing = false;
}

function stallShooting(player) {
    player.shootingStalled = true;
    game.time.events.add(Phaser.Timer.SECOND * 1.5, resumeShooting, this, player);
}

function resumeShooting(player) {
    player.shootingStalled = false;
}

function setSwitched(player) {
    player.justSwitched = false;
}

function startLose() {
    game.camera.fade('#000000');
    game.time.events.add(Phaser.Timer.SECOND * .5, loseState, this);
}

function loseState() {
    game.state.start('Lose');
}