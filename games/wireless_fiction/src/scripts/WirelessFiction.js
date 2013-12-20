
(function(scope) {

    function WirelessFiction() {}

	var s = WirelessFiction;
	s.PADDLE_SPEED = 25;
	s.GAME_TIME = 30 * 1000;
    
    

    WirelessFiction.prototype = {
        
       // Check out the documentation for details on the game format.

	    // Passed in via initialize
	    stage: null,
	    assets: null,
	    gameInfo: null,

	    // On-screen objects

	    timeRemaining:s.GAME_TIME, // Remaining game time in milliseconds
	    startTime: 0,           // Time that the game started
	    hits: 0,                // Number of hits so far

	    scoreManager: null,     // Tracks the score

	    initialize: function(assets, stage, gameInfo) {
		    this.assets = assets;
		    this.stage = stage;
		    this.gameInfo = gameInfo;

			var bg = GameLibs.GameUI.changeBackground(assets.background, gameInfo.width, gameInfo.height, "stretch");
		    stage.addChild(bg);
            
		    // Add a HUD background
		    var hud = new createjs.Shape(new createjs.Graphics().beginFill("rgba(255,0,0,0.4)").drawRect(0,0,this.gameInfo.width,55));
		    this.stage.addChild(hud);
	    },

	    startGame: function() {

		    
	    },
        
	    gameOver: function() {
		    // We could do something fancy here...
			this.onGameOver();
	    },

        //MUST HAVE//"tick", "pause", "getScore", "continueGame", "restart", "destroy"
        
        tick: function(tickFactor) {
        },
        pause: function(paused) {

	    },
       getScore: function() {
		    //return new GameLibs.GameDetails(this.scoreManager.score);
	    },
        continueGame: function(keepPoints) {
		  //  if (!this.keepPoints) {
			 //   this.scoreManager.setScore(0);
		    //}
			//this.startLevel();
	    },
        restart: function() {
		    //this.scoreManager.setScore(0);
		    //this.startLevel();
	    }

    }

    scope.WirelessFiction = WirelessFiction;

}(window.Atari.currentGame))