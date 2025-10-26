//PlayerStatChanger.js
function PlayerStatChanger() {
	this.hp = 15;
	this.maxHP = 15;
	this.shotgunPellets = 15;
	this.rifleROF = 125;
	this.smgAmmoCap = 50;
	this.canDash = false;
	this.pistolUpgraded = false;
}

PlayerStatChanger.prototype.changeHealth = function() {
	this.hp = 20;
	this.maxHP = 20;
}

PlayerStatChanger.prototype.changeShotgun = function() {
	this.shotgunPellets = 25;
}

PlayerStatChanger.prototype.changeRifle = function() {
	this.rifleROF = 85;
}

PlayerStatChanger.prototype.changeDash = function() {
	this.canDash = true;
}

PlayerStatChanger.prototype.changePistol = function() {
	this.pistolUpgraded = true;
}

PlayerStatChanger.prototype.changeSMG = function() {
	this.smgAmmoCap = 65;
}

function updateStats(player, statChanger) {
	player.hp = statChanger.maxHP;
    player.maxHP = statChanger.maxHP;
    player.pistolUpgraded = statChanger.pistolUpgraded;
    player.shotgunPellets = statChanger.shotgunPellets;
    player.canDash = statChanger.canDash;
    player.rifleROF = statChanger.rifleROF;
    player.smgAmmoCap = statChanger.smgAmmoCap;
}