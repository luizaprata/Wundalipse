
(function (scope) {

    function WirelessFiction() {}

	var s = WirelessFiction;
	s.CHAR_SPEED = 25;
	s.GAME_TIME = 30 * 1000;

    WirelessFiction.prototype = {
        
	    // Passed in via initialize
	    stage: null,
	    assets: null,
	    gameInfo: null,
        
        floors: null,
        floor: null,
        floor_h: 200,
        floor_w: 800,
        gameContainer: null,
        character: null,

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
            
            
            this.gameContainer = new createjs.Container();
            //this.gameContainer.vy = .01;
		    this.stage.addChild(this.gameContainer);
        
            
			var bg = GameLibs.GameUI.changeBackground(assets.background, gameInfo.width, gameInfo.height, "stretch");
		    this.gameContainer.addChild(bg);
            
            this.character = GameLibs.GameUI.changeBackground(assets.char, 100, 116, "stretch");
            this.character.x = 100;
            this.character.y = 100;
            this.gameContainer.addChild(this.character);

            
		    // Add a HUD background
		    //var hud = new createjs.Shape(new createjs.Graphics().beginFill("rgba(255,0,0,0.4)").drawRect(0,0,this.gameInfo.width,55));
		    //this.stage.addChild(hud);
	    },
        
        buildFloor: function() {
            
            
            for (var n in this.floors) {
                
                this.floor = new createjs.Shape(
                    new createjs.Graphics().f("rgba(0,0,0,0.4)").dr(0,0,this.floor_w,this.floor_h)
                );
                this.floor.x = (this.gameInfo.width-this.floor_w)/2;
                this.floor.y = this.gameInfo.height - (parseInt(n)+1)*this.floor_h;
                this.gameContainer.addChild(this.floor);
            }
            
            //this.gameContainer.y = 00;
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
            
            this.playerMove();
        },
        
        playerMove: function () {
            var pad = GameLibs.GamePad;
		    var player = pad.player;
            
            // keyboard event
            if (player.isButtonDown(pad.LEFT)) {
			    this.character.x -= s.CHAR_SPEED;
		    } else if (player.isButtonDown(pad.RIGHT)) {
			    this.character.x += s.CHAR_SPEED;
		    }
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