
(function (scope) {

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
        floors: null,
        floor: null,

	    // On-screen objects

	    timeRemaining: s.GAME_TIME, // Remaining game time in milliseconds
	    startTime: 0,           // Time that the game started
	    hits: 0,                // Number of hits so far

	    scoreManager: null,     // Tracks the score

	    initialize: function (assets, stage, gameInfo) {
		    this.assets = assets;
		    this.stage = stage;
		    this.gameInfo = gameInfo;
            this.floors = assets.data_floors.floors;
            

			var bg = GameLibs.GameUI.changeBackground(assets.background, gameInfo.width, gameInfo.height, "stretch");
		    stage.addChild(bg);
            
		    // Add a HUD background
		    //var hud = new createjs.Shape(new createjs.Graphics().beginFill("rgba(255,0,0,0.4)").drawRect(0,0,this.gameInfo.width,55));
		    //this.stage.addChild(hud);
	    },
        
        buildFloor: function() {
            for (var n in this.floors) {
                
                this.floor = new createjs.Shape(
                    new createjs.Graphics().f("rgba(255,0,0,0.4)").dr((this.gameInfo.width-800)/2,0,800,100)
                );
                this.floor.y = this.gameInfo.height - ((parseInt(n)+1)*100);
                console.info(this.floor.y);
                this.stage.addChild(this.floor);
            }
        },

	    startGame: function () {
            
		    this.buildFloor();
	    },
        
	    gameOver: function () {
		    // We could do something fancy here...
			this.onGameOver();
	    },

        //MUST HAVE//"tick", "pause", "getScore", "continueGame", "restart", "destroy"
        
        tick: function (tickFactor) {
        },
        pause: function (paused) {

	    },
       getScore: function () {
		    //return new GameLibs.GameDetails(this.scoreManager.score);
	    },
        continueGame: function (keepPoints) {
		  //  if (!this.keepPoints) {
			 //   this.scoreManager.setScore(0);
		    //}
			//this.startLevel();
	    },
        restart: function () {
		    //this.scoreManager.setScore(0);
		    //this.startLevel();
	    }

    }

    scope.WirelessFiction = WirelessFiction;

}(window.Atari.currentGame))