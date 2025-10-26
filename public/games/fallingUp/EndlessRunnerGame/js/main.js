//main.js
//The Core Game Loop


var pVelocityY = 1000; //fall speed of the player
var player;
var canJump,keyHoldSpace=false; //canjump=player is touching a platform, keyholdspace=if the player is still holding space
var sJump,sDie; //player sound effects

var platforms;
var bounds;

var nextPattern = 0; //next pattern ID
var waitPattern = 0; //time untill next pattern
var scrollSpeed, startScroll; //scrollspeed=the speed of platforms, startScroll = the last frame's speed
var time; //deltatime

//core game loop
var mainState = {
	
	preload: function(){
		console.log("In Main"); //Debug Message to show we are in mainState
	},
	create: function(){
		init();
		
		game.physics.startSystem(Phaser.Physics.ARCADE); //enables arcade physics
		time = game.time.elapsed/1000; //deltatime
		
		clouds = game.add.tileSprite(0,0, 1200, 704, 'cloud');
		

		sJump = game.add.audio('sJump');
		sDie = game.add.audio('sDie');
		mainTheme.volume = 0.4;
		sDie.volume = 0.4;
		sJump.volume = 0.4;
		sJump.volume = 0.3;

		platforms = game.add.group(); //group to control the platforms
		platforms.enableBody = true;

		addPlatform(-18,0,'platform1',true,20); //starting platforms

		/*
		//Illustrates a collision issue
		addPlatform(-10,1,'platform1',true,20);
		addPlatform(-10,2,'platform1',true,20);
		addPlatform(-10,3,'platform1',true,20);
		addPlatform(-10,4,'platform1',true,20);
		*/

		textScore = game.add.text(10,10,"Score: " + score,{ font: "24px Arial", fill: "#ffffff", align: "center" });
		textPattern = game.add.text(500,10,"",{ font: "24px Arial", fill: "#ffffff", align: "center" });
		textpVelocityY = game.add.text(500,30,"",{ font: "24px Arial", fill: "#ffffff", align: "center" });

		//initializes player values
		player = game.add.sprite(100,game.world.height-256,'player');
		player.scale.setTo(2,2);
		player.anchor.setTo(0.5,0.6);
		game.physics.arcade.enable(player);
		player.animations.add('run', [3,7,11,15], 10, true);
		player.body.velocity.y = pVelocityY
		player.body.setSize(30,20,-10,5);
		
		game.sound.stopAll();
	},

	update: function(){
		menuTheme.stop();
		time = game.time.elapsed/1000; //TESTCODE
		clouds.tilePosition.x -=scrollSpeed/300;
		
		scoreUpdate(); //constantly runs for debugging
		jump(); //controls the players jump
		movePlayer(); //moves the player
		createPlatform(); //creates platforms
		//debug(); //shows developer info
		game.physics.arcade.collide(player,platforms);
		game.physics.arcade.collide(player,bounds);
		player.body.velocity.y = pVelocityY //vertical player movement
		scrollSpeed+=0.1;
		platforms.setAll('body.velocity.x',-scrollSpeed); //slowly increases the game speed
		
		if (game.input.keyboard.isDown(Phaser.Keyboard.ESC)){ //quit to menu 
			game.state.start('menu');
		}
		if (!mainTheme.isPlaying) mainTheme.play(); //loops audio
		pVelocityY = (800+scrollSpeed)*Math.sign(pVelocityY); //scales gravity based upon scroll speed

	}

};


//PARAMETERS Xposition,yposition,object,mirror(boolean),length
function addPlatform(x,y,object,mirror,length){
	for(var i=0; i<length;i++){
		var s = game.world.width; //the starting x location of oncoming platforms
		platform = platforms.create(((x+i)*64)+s,y*64,object);
		platform.body.immovable = true;
		platform.body.velocity.x= - scrollSpeed;
		//mirros the platforms along the opposite side if true
		if (mirror){
			platform = platforms.create(((x+i)*64)+s,(10-y)*64,object);
			platform.body.immovable = true;
			platform.body.velocity.x= - scrollSpeed;
		}
	}
}

//increases the score
function scoreUpdate(){
	//if on screen, increment score
	if (!(player.body.x<-64 || player.body.y>game.world.height || player.body.y<-64)) score+=0.05;
	textScore.setText("Score: "+Math.floor(score));
}

//logic to control the player's jump
function jump(){
	//allows jumping if the player is touching the top or bottom of something
	if (game.physics.arcade.collide(player,platforms) && (player.body.touching.up || player.body.touching.down)){
		canJump = true;
		if(player.body.x<500){ //if the player isnt in the center of the screen
			player.body.velocity.x =scrollSpeed+100; //speeds up the player
		} else{ //if the player is in the center of the screen
			player.body.velocity.x =scrollSpeed; //keeps the player from sliding back
		}
	} else {
		if(player.body.x<500){ //if the player isnt in the center of the screen
			player.body.velocity.x = 100; //moves the player towards the center of the screen
		} else {//if the player is in the center of the screen
			player.body.velocity.x = 0;
		}
		canJump = false;
	}

	//if jump (only allows a jump on press, not down)
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && canJump && !keyHoldSpace){
		sJump.play();
		pVelocityY=-pVelocityY;
		canJump=false;
		keyHoldSpace=true;
		player.scale.setTo(2,Math.sign(pVelocityY)*2); //HC
	} else if (!game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
		keyHoldSpace=false;
	}
}

function movePlayer(){
	player.animations.play('run');
	//ends the game if the player falls off the screen
	if (player.body.x<-64 || player.body.y>game.world.height || player.body.y<-64){
		if (player.body.x>-70) sDie.play();
			scrollSpeed-=3; //slows the screen
			player.body.x=-1000
			if(mainTheme.volume>0) mainTheme.volume -=0.02; //quiets the music
			if (scrollSpeed<=0){ //ends the game once the screen has stopped
				scrollSpeed=0;
				game.state.start('gameOver');
			}
		}
}
//resets values for a new playthrough
function init(){
	scrollSpeed = 200;
	pVelocityY = 1000;
	canJump = false;
	keyHoldSpace = false;
	nextPattern = 0; //next pattern ID
	waitPattern = 0; //time untill next pattern
	score = 0;
}

//creates new platforms patterns
function createPlatform(){
	
	//chooses a new pattern after the previous pattern has finished
	if (waitPattern<=0){ 
		nextPattern = game.rnd.integerInRange(1,7); //Next Pattern Choice
		console.log(nextPattern);
		startScroll = scrollSpeed;

	}
	//PLATFORM CREATION (Note the x&y parameters are multiplied by 64 for the size of a block)
	//1st platform pattern
	if (nextPattern == 1){ 
		nextPattern = 0;
		waitPattern = (64*8)/scrollSpeed; //length until next pattern (8)
		addPlatform(0,1,'platform1',true,1);
		addPlatform(1,1,'platform1',true,1);
		addPlatform(2,1,'platform1',true,1);
		addPlatform(3,1,'platform1',true,1);
		addPlatform(4,1,'platform1',true,1);
		addPlatform(4,2,'platform1',true,1);
		addPlatform(4,3,'platform1',true,1);
		addPlatform(4,4,'platform1',true,1);
		addPlatform(5,4,'platform1',true,1);
		addPlatform(6,4,'platform1',true,1);
		addPlatform(7,4,'platform1',true,1);
		addPlatform(7,3,'platform1',true,1);
		addPlatform(7,2,'platform1',true,1);
		addPlatform(7,1,'platform1',true,1);	
	}else if (nextPattern == 2){ //pattern 2
		nextPattern = 0;
		waitPattern = (64*10)/scrollSpeed; //length until next pattern (10)
		addPlatform(0,0,'platform1',true,3);
		addPlatform(2,1,'platform1',true,3);
		addPlatform(4,2,'platform1',true,3);
		addPlatform(6,3,'platform1',true,3);
		addPlatform(8,4,'platform1',true,3);		
	} else if(nextPattern==3){ //pattern 3
		nextPattern=0;
		waitPattern = (64*13)/scrollSpeed; //length until next pattern (13)
		addPlatform(0,1,'platform1',true,1);
		addPlatform(1,1,'platform1',true,1);
		addPlatform(2,1,'platform1',true,1);
		addPlatform(3,1,'platform1',true,1);
		addPlatform(4,5,'platform1',false,1);
		addPlatform(5,5,'platform1',false,1);
		addPlatform(6,5,'platform1',false,1);
		addPlatform(7,5,'platform1',false,1);
		addPlatform(8,5,'platform1',false,1);
		addPlatform(8,3,'platform1',true,1);
		addPlatform(9,3,'platform1',true,1);
		addPlatform(10,3,'platform1',true,1);
		addPlatform(11,3,'platform1',true,1);
		addPlatform(12,3,'platform1',true,1);	
	} else if(nextPattern==4){ //pattern 4
		nextPattern=0;
		waitPattern = (64*21)/scrollSpeed; //length until next pattern (21)
		addPlatform(2,5,'platform1',false,4);
		addPlatform(0,2,'platform1',true,3);
		addPlatform(6,0,'platform1',false,8);
		addPlatform(9,6,'platform1',false,4);
		addPlatform(12,4,'platform1',false,3);
		addPlatform(15,9,'platform1',false,6);
	} else if(nextPattern==5){ //pattern 5
		nextPattern=0;
		waitPattern = (64*34)/scrollSpeed; //length until next pattern (34)
		addPlatform(0,4,'platform1',false,4);
		addPlatform(4,10,'platform1',false,8);
		addPlatform(10,8,'platform1',false,3);
		addPlatform(12,7,'platform1',false,2);
		addPlatform(13,6,'platform1',false,2);
		addPlatform(14,5,'platform1',false,2);
		addPlatform(15,4,'platform1',false,2);
		addPlatform(16,3,'platform1',false,2);
		addPlatform(17,2,'platform1',false,2);
		addPlatform(18,1,'platform1',false,2);
		addPlatform(19,0,'platform1',false,4);
		addPlatform(22,2,'platform1',false,2);
		addPlatform(23,3,'platform1',false,2);
		addPlatform(24,4,'platform1',false,2);
		addPlatform(25,5,'platform1',false,2);
		addPlatform(26,6,'platform1',false,4);
		addPlatform(29,2,'platform1',false,5);
	} else if(nextPattern==6){ //pattern 6
		nextPattern=0;
		waitPattern = (64*33)/scrollSpeed; //length until next pattern (33)
		//addPlatform(1,1,'platform1',true,1);
		addPlatform(0,2,'platform1',true,6);
		addPlatform(4,5,'platform1',false,5);
		addPlatform(8,3,'platform1',false,7);
		addPlatform(13,5,'platform1',false,5);
		addPlatform(16,3,'platform1',false,7);
		addPlatform(22,7,'platform1',false,5);
		addPlatform(26,5,'platform1',false,2);
		addPlatform(27,4,'platform1',false,2);
		addPlatform(28,3,'platform1',false,2);
		addPlatform(29,2,'platform1',false,4);
	} else if(nextPattern==7){ //pattern 7
		nextPattern=0;
		waitPattern = (64*31)/scrollSpeed; //length until next pattern (31)
		addPlatform(0,0,'platform1',true,31);
		addPlatform(2,9,'platform1',true,3);
		addPlatform(5,7,'platform1',false,2);
			addPlatform(4,5,'platform1',false,3);
			addPlatform(6,6,'platform1',false,2);
		addPlatform(11,2,'platform1',false,2);
			addPlatform(12,1,'platform1',false,2);
		addPlatform(15,5,'platform1',false,2);
			addPlatform(15,3,'platform1',false,2);
			addPlatform(16,4,'platform1',false,2);
		addPlatform(10,6,'platform1',false,6);
		addPlatform(12,9,'platform1',false,2);
		addPlatform(17,0,'platform1',true,2);
			addPlatform(16,1,'platform1',true,2);
		addPlatform(23,6,'platform1',false,8);
			addPlatform(20,3,'platform1',false,11);
			addPlatform(22,9,'platform1',false,2);
			addPlatform(24,4,'platform1',false,1);
			addPlatform(26,5,'platform1',false,1);
			addPlatform(28,4,'platform1',false,1);
	}

	waitPattern-=game.time.elapsed/1000*(scrollSpeed/startScroll); //calculates when the next pattern should start

	//deletes platforms off the screen
	platforms.forEach(function(platform){
		if(platform.x<-64){
			platform.kill();
		}
	});
}

//USED SOLELY FOR DEBUGGING
function debug(){
	game.debug.body(player);
	textPattern.setText("Next Pattern: " + waitPattern);
	textpVelocityY.setText("pVelocityY: " + pVelocityY);
}