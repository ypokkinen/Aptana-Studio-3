// Based on: http://michalbe.blogspot.com/2010/09/simple-game-with-html5-canvas-part-1.html
	
	/* GLOBAALIT MUUTTUJAT */
	var width = 800, 
		height = 480, 
		gLoop, 
		refresh_rate = 50, // Hz
		points = 0, 
		state = true, 
		c = document.getElementById('c'), 
		ctx = c.getContext('2d');
	
	var color_background = '#111111',
		color_player = '#cccccc';

	var player_height = 32,
		player_width = 16,
		player_hotspot_x = 8.0,
		player_hotspot_y = 16.0,
		player_initial_x = 400.0, //Float!
		player_initial_y = 240.0, //Float!
		player_a_y = -40.0,
		player_a_x = 16.0;
		player_v = 56.0;
		player_friction = 0.90;
		
		
	var common_a_y = 16.0;


	// Tyhjennä ruutu
	var clearScreen = function() {
		ctx.fillStyle = color_background;
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();
		ctx.rect(0, 0, width, height);
		ctx.closePath();
		ctx.fill();
	};

	/* OLIOT */
	
	// Kenttäluokka
	var level = new (function(){
		var that = this;
		
		// Kenttädata, alustetaan tyhjäksi
		that.data = null;
		
		// Tilemapin kuva, haetaan 'leveldata' hakemistosta
		that.image = new Image();
		
		
		// Assume that leveldata is on 'leveldata' folder
		that.loadLevel = function(levelfile){
			$.getJSON('leveldata/' + levelfile, function(data) {
				// Käsittele data tai tallenna julkiseen muuttujaan
				that.data = data;
				console.log(that.data.layers[0].name);
				// Tallenna kuvan source
				that.image.src = 'leveldata/' + data.tilesets[0].image;
			});
		};
		
		that.draw = function(){
		try {
	
				// Piirtää pelikentän alkaen piirtoalueen yläkulmasta
				// Käyttää Tiled-ohjelman json-formaattia ja yhtä tilemappia
				// Käy jokainen rivi läpi
				for(var row=0; row < that.data.height; row++){			
				// Käy jokainen sarake läpi
					for(var column=0; column < that.data.width; column++){
						// Hae tilemapista oikea kuva
						// OLETETAAN: 1) 1 tileset, 2) ei marginaalia, 3) ei paddingia
						var tile_real_id = that.data.layers[0].data[row*that.data.width + column] 
											- that.data.tilesets[0].firstgid;	// Tilesetin sisäinen indeksi 0..->
						var tile_width = that.data.tilesets[0].tilewidth;
						var tile_height = that.data.tilesets[0].tileheight;
						
						var dest_x = column * that.data.tilewidth;
						var dest_y = row * that.data.tileheight;
						var src_x = (tile_real_id * tile_width) % that.data.tilesets[0].imagewidth;
						var src_y = tile_height * Math.floor(tile_real_id / (that.data.tilesets[0].imagewidth / tile_width)); 
						
						ctx.drawImage(that.image, src_x, src_y, tile_width, tile_height, dest_x, dest_y, tile_width, tile_height);
					}
				}
			} catch (e) {
				// Do nothing!
				console.log(e);
			};
		}
	});
	
	// Pelaajahahmoluokka
	var player = new (function(){
		var that = this;
		
		// Alusta pelaajan paikka, nopeus ja kiihtyvyys
		that.x = player_initial_x;
		that.y = player_initial_y;
		that.v_x = 0.0;
		that.v_x_bound = 22.0;
		that.v_y = 0.0;
		that.a_x = 0.0;
		that.a_y = 0.0;
		that.angle = 0.0;
		that.target_angle = 0.0;
		
		// Bussin kuva
		that.image = new Image();
		that.image.src = "img/bus.png"
		
		// Resetoi kiihtyvyys
		that.resetAcceleration = function(){
			that.a_x = 0.0;
			that.a_y = 0.0;
		};
		
		// Laske liike
		that.calculateMovement = function(delta_t){
			// Laske uusi nopeusvektori kiihtyvyyden perusteella
			that.v_x = that.v_x + (delta_t * that.a_x);
			that.v_y = that.v_y + (delta_t * that.a_y);

			// Laske kitkakertoimen vaikutus nopeuteen
			that.v_x = that.v_x * player_friction;
			that.v_y = that.v_y * player_friction;

			// Laske uusi paikka nopeusvektorin perusteella
			that.x = that.x + (delta_t * that.v_x);			
			that.y = that.y + (delta_t * that.v_y);

			// Jos todellinen kulma != suunnan edellyttämä kulma
				// Muuta todellista kulmaa kohti suunnan edellyttämää kulmaa
				if((that.target_angle - that.angle) > 0.3 ){
					that.angle = that.angle + 0.3;
				} else if ((that.target_angle - that.angle) < -0.3 ) {
					that.angle = that.angle - 0.3;
				} else {
					that.angle = that.target_angle;
				}
				
				//that.angle = that.angle + 0.5;
		};
		
		// Tarkista törmäykset
		that.checkCollisions = function(){
			// Pelialuetarkistukset
			if((that.x - player_hotspot_x) < 0){
				that.x = player_hotspot_x;
				that.v_x = 0.0;
				that.a_x = 0.0;
			};
			
			if((that.x - player_hotspot_x + player_width) > width){
				that.x = width - player_width + player_hotspot_x;
				that.v_x = 0.0;
				that.a_x = 0.0;
			};

			if((that.y - player_hotspot_y) < 0){
				that.y = player_hotspot_y;
				that.v_y = 0.0;
				that.a_y = 0.0;
			};
			
			if((that.y - player_hotspot_y + player_height) > height){
				that.y = height - player_height + player_hotspot_y;
				that.v_y = 0.0;
				that.a_y = 0.0;
			};
			
			// Tarkistukset muihin objekteihin nähden
		};
		
		// Lue näppäimistö
		that.readPlayerInput = function(e){
			that.resetAcceleration();
			
			switch (e.keyCode) {
				case 87:
					// W
					that.v_y = -1*player_v;
					that.v_x = 0;
					that.target_angle = 0;
					break;

				case 83:
					// S
					that.v_y = player_v;
					that.v_x = 0;
					that.target_angle = Math.PI;
					break;
			
				case 65:
					// A
					that.v_y = 0;
					that.v_x = -1*player_v;
					that.target_angle = -Math.PI / 2;
					break;
			
				case 68:
					// D
					that.v_y = 0;
					that.v_x = player_v;
					that.target_angle = Math.PI / 2;
					break;			
			}
		};
		
		// Piirrä pelihahmo
		that.draw = function(){
			// Laske pelihahmon vasemman yläkulman koordinaatti
			var real_x = Math.round(that.x) - player_hotspot_x;
			var real_y = Math.round(that.y) - player_hotspot_y;

			
			// Piirrä pelihahmo alkaen vasemmasta yläkulmasta
			try {
				ctx.save();
				ctx.translate(real_x, real_y);
				ctx.rotate(that.angle);
				ctx.translate(-player_hotspot_x, -player_hotspot_y);
				ctx.drawImage(that.image, 0, 0);
				ctx.restore();
				//ctx.fill();
			} catch(e) {
				
			};
		};
	}); // End of player object
	
	/* PELISILMUKKA */

	// Peliluuppi -- Pelin sydän
	var gameLoop = function(){
		clearScreen();
		
		// Resetoi kiihtyvyys ja lue pelaajan toimet
		// player.resetAcceleration();
		// player.readPlayerInput();
		
		// Laske liike ja törmäykset
		player.calculateMovement(1/refresh_rate);
		player.checkCollisions();
		
		// Piirrä pelitilanne
		level.draw();
		player.draw();
		
		// Timer, kutsu peliluuppia aina 1/50 s välein
		gLoop = setTimeout(gameLoop, 1000/refresh_rate);
	};
	
	/* YLEINEN KOODI */

	// Globaalit asetukset ja luupin käynnistys
	c.width = width;
	c.height = height;
	player.draw();
	level.loadLevel("Kartta1.json");
	window.addEventListener('keydown',player.readPlayerInput,true);
	gameLoop();

