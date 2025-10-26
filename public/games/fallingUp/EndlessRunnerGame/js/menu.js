//menu.js
var menuTheme;
var mainTheme;
var clouds;
var waitForFocus = true;
var loadState = {
	//loads many of the audios and images before the game begins
	preload: function(){
		game.load.audio('menuTheme',"assets/sound/Harp.mp3");
		game.load.audio('mainTheme',"assets/sound/HeroicMinority.mp3");
		game.load.audio('sJump',"assets/sound/foom_0.wav");
		game.load.audio('gameOverTheme',"assets/sound/contemplation.wav");
		game.load.audio('sDie',"assets/sound/acid5.wav");
		game.load.image('cloud','assets/img/clouds2.png');
		game.load.image('platform1','assets/img/platform001.png');
		game.load.spritesheet('player','assets/img/george.png',48,48);

	},
	update: function(){
		game.state.start('menu');
	}
};

var menuState = {
	preload: function(){
  		
	},

	create: function(){
		console.log("In Menu"); //debug message to show we are in menuState
		menuTheme = game.add.audio('menuTheme');
		mainTheme = game.add.audio('mainTheme');
		clouds = game.add.tileSprite(0,0, 1200, 704, 'cloud');
		var text = "MAIN MENU \n Press Enter to Begin";
    	var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    	game.add.text(game.world.centerX-300, game.world.centerY-100, "FALLING UP", { font: "80px Arial Black", fill: "#253a3f", align: "center" });
    	game.add.text(game.world.centerX-315, game.world.centerY+20, "Press ENTER to Play", { font: "60px Arial", fill: "#588c99", align: "center" });
    	game.add.text(game.world.centerX-400, game.world.centerY+100, "Controls: Press SPACE to invert gravity", { font: "42px Arial", fill: "#588c99", align: "center" });
    	game.add.text(game.world.width-550, game.world.height-40, "Game Created by: Dustin Halsey", { font: "32px Arial", fill: "#588c99", align: "center" });
		game.sound.stopAll();
		//Scale game to fit screen
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.setScreenSize(true);

		game.input.onDown.add(unpause, self);
		pause();
		//Pause game until focus is brought to game	

	},
	update: function(){

		//starts game if enter
		if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
			menuTheme.stop();
			game.state.start('main');
		}
		if (!menuTheme.isPlaying) menuTheme.play();
		clouds.tilePosition.x -=1;

	},
}

function pause(){
	if(waitForFocus == true){
		game.paused = true;
		waitForFocus = false;
	}
}
function unpause(event){
	game.paused=false;
}
