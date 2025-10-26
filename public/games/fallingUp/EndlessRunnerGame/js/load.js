//load.js
var container = window.parent.document.getElementById('fallingUpContainer');
var config = {
    // ...
    width: 1200,
    height: 704,
    renderer: Phaser.CANVAS,
    autoRound: false,

    // ...
};



var game = new Phaser.Game(config);
game.id = "fallingUpGame";
var score = 0;
console.log("In Load"); //debug message to show we are in loadState


game.state.add('main',mainState);
game.state.add('menu',menuState);
game.state.add('load',loadState);
game.state.add('gameOver',gameOverState);

game.state.start('load');


