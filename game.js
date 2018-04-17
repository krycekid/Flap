var config = {
	type: Phaser.AUTO,
	width: 700,
    height: 500,
    physics: {
	    default: 'arcade',
        arcade: {
	        gravity: {y : 200}
        }
    },
    scene: [Scene1]
};

var game = new Phaser.Game(config);