//gameOver.js

var gameOverTheme;
var gameOverState = {
	create: function(){
		console.log("In Menu"); //debug message to show we are in menuState
		var text = "Game Over \n Your Score was: "+ Math.floor(score);
    	var style1 = { font: "65px Impact", fill: "#253a3f", align: "center" }; //big dark blue
    	var style2 = { font: "45px Arial", fill: "588c99", align: "center" }; //small light blue

    	clouds = game.add.tileSprite(0,0, 1200, 704, 'cloud');
    	gameOverTheme = game.add.audio('gameOverTheme')

    	game.add.text(game.world.centerX-280, game.world.centerY-200,"Game Over \n Your Score was: "+ Math.floor(score), style1);
    	game.add.text(game.world.centerX-300, game.world.centerY+100,"Press ENTER to play again \n Press ESCAPE to exit", style2);
    	game.sound.stopAll();
        gameOverTheme.volume = 0.4;
	},
	update: function(){
		if (!gameOverTheme.isPlaying) gameOverTheme.play();

		if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){ //start game
			game.state.start('main');
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.ESC)){ //go to menu
			game.state.start('menu');
		}
		clouds.tilePosition.x -=1;
	},
}