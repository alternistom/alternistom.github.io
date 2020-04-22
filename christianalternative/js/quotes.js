//Array that holds quotes, sources, citations & years.
var quotes = [
	{
		quote: "Mainstay - Well Meaning Fiction",
		source: "BEC Recordings, 2006",
		cover: "img/mainstay_wellmeaningfiction.jpg",
		spotify: "2lVpBqFcEUxnnO4pUhIRo5"
	},
	{
		quote: "Mainstay - Become Who You Are",
		source: "BEC Recordings, 2007",
		cover: "img/mainstay_becomewhoyouare.jpg",
		spotify: "7mkdqQSh4Maq7KVnbngf2d"
	},

	{
		quote: "Falling Up - Crashings",
		source: "BEC Recordings, 2004",
		cover: "img/fallingup_crashings.jpg",
		spotify: "11IdVYUil7tSZcx3x8AH81"
	},

	{
		quote: "Falling Up - Exit Lights",
		source: "BEC Recordings, 2006",
		cover: "img/fallingup_exitlights.jpg",
		spotify: "5ucWbgioAE207oerrqLeHa"
	},

	{
		quote: "Falling Up - Captiva",
		source: "BEC Recordings, 2007",
		cover: "img/fallingup_captiva.jpg",
		spotify: "6TMlqfxR9ZGDsVGY1wumY9"
	},

	{
		quote: "Falling Up - Fangs!",
		source: "BEC Recordings, 2009",
		cover: "img/fallingup_fangs.jpg",
		spotify: "06Ea5K0IZ4EZP7b3j9zl8G"
	},

	{
		quote: "Falling Up - Your Sparkling Death Cometh",
		source: "Independent, 2011",
		cover: "img/fallingup_yoursparklingdeathcometh.jpg",
		spotify: "6WhgJeADSCF1px4RbN7qyJ"
	},

	{
		quote: "Falling Up - Hours",
		source: "Independent, 2013",
		cover: "img/fallingup_hours.jpg",
		spotify: "69elhB8vKD5bcKCtOV5DEV"
	},

	{
		quote: "Falling Up - House Full Of Caverns EP",
		source: "Independent, 2015",
		cover: "img/fallingup_housefullofcaverns.jpg",
		spotify: "1ek5p51FvHzKch9AiHD9Gf"
	},

	{
		quote: "Falling Up - Falling Up",
		source: "Independent, 2015",
		cover: "img/fallingup_fallingup.jpg",
		spotify: "6qrk23zUlbVaZZVrqBDt4M"
	},

	{
		quote: "Falling Up - Midnight on Earthship",
		source: "Independent, 2013",
		cover: "img/fallingup_midnightonearthship.jpg",
		spotify: "3hKyqncVyi3t4vQoeOnp8h"
	},

	{
		quote: "Falling Up - Dawn Escapes",
		source: "BEC Recordings, 2005",
		cover: "img/fallingup_dawnescapes.jpg",
		spotify: "0kVqCkIGjyihd5nWuOnaTg"
	},

	{
		quote: "Copeland - In Motion",
		source: "The Militia Group, 2005",
		cover: "img/copeland_inmotion.jpg",
		spotify: "1BugtzesoopZXaNGsLG1wX"
	},

	{
		quote: "Copeland - Eat, Sleep, Repeat",
		source: "The Militia Group, 2006",
		cover: "img/copeland_eatsleeprepeat.jpg",
		spotify: "6j8bkEn6mrw9ufvyHB797c"
	},

	{
		quote: "Copeland - You Are My Sunshine",
		source: "Tooth & Nail Records, 2008",
		cover: "img/copeland_youaremysunshine.jpg",
		spotify: "1OV47MNnGI1WN0OGQX7R0A"
	},

	{
		quote: "Copeland - Ixora",
		source: "Tooth & Nail Records, 2014",
		cover: "img/copeland_ixora.jpg",
		spotify: "1j1jAgKoZcH1aDE3zWYfUS"
	},

	{
		quote: "Copeland - Ixora Twin",
		source: "Tooth & Nail Records, 2014",
		cover: "img/copeland_ixoratwin.jpg",
		spotify: "6GOKZv5xXdwLiuj6ufJFQX"
	},

	{
		quote: "Copeland - Blushing",
		source: "Tooth & Nail Records, 2019",
		cover: "img/copeland_blushing.jpg",
		spotify: "0UpUBS0FJBUq0iTGp61GMx"
	},

	{
		quote: "Copeland - Beneath Medicine Trees",
		source: "The Militia Group, 2003",
		cover: "img/copeland_beneathmedicinetree.jpg",
		spotify: "5aF786F2yHxfNbto7ej8d0"
	},

	{
		quote: "Deas Vail - All The Houses Look The Same",
		source: "Brave New World Records, 2007",
		cover: "img/deasvail_allthehouseslookthesame.jpg",
		spotify: "4NGNoteBxgajMB4WfpRrxz"
	},

	{
		quote: "Deas Vail - Birds & Cages",
		source: "Mono Vs Stereo, 2009",
		cover: "img/deasvail_birdsandcages.jpg",
		spotify: "1CIhJy052DfOi5z7ZB13c8"
	},

	{
		quote: "Deas Vail - Deas Vail",
		source: "Mono Vs Stereo / Sony Red, 2011",
		cover: "img/deasvail_deasvail.jpg",
		spotify: "3XHMCmFxAdwY7fOJaPAtDs"
	},

	{
		quote: "Deas Vail - White Lights EP",
		source: "Brave New World Records, 2008",
		cover: "img/deavail_whitelights.jpg",
		spotify: "52k0Tq5rP02Eo5yIzCiFKN"
	},

	{
		quote: "Deas Vail - Collapse EP",
		source: "Brave New World Records, 2006",
		cover: "img/deasvail_collapse.jpg",
		spotify: "3VhE92XpQ2uW8aCaoHS79Y"
	},

	{
		quote: "The Send - Cosmos",
		source: "Tooth & Nail Records, 2007",
		cover: "img/thesend_cosmos.jpg",
		spotify: "3bObf9JtLKKdhtdXDPjHKY"
	},

	{
		quote: "Anberlin - Cities",
		source: "Tooth & Nail Records, 2007",
		cover: "img/anberlin_cities.jpg",
		spotify: "28nL2dA7iE9IWEcUzzPido"
	},

	{
		quote: "Anberlin - Dark Is The Way, Light Is A Place",
		source: "Universal Music, 2010",
		cover: "img/anberlin_darkisthewaylightistheplace.jpg",
		spotify: "0aJvU0peEjLVYTOhaPVLXv"
	},

	{
		quote: "Anberlin - New Surrender",
		source: "Universal Republic, 2008",
		cover: "img/anberlin_newsurrender.jpg",
		spotify: "2fw81nvsbe3yX5WYGqbF9e"
	},

	{
		quote: "Anberlin - Never Take Friendship Personal",
		source: "Tooth & Nail Records, 2005",
		cover: "img/anberlin_nevertakefriendshipspersonal.jpg",
		spotify: "7F1dp39OljDwaJes2ruO0w"
	},

	{
		quote: "Anberlin - Lowborn",
		source: "Tooth & Nail Records, 2014",
		cover: "img/anberlin_lowborn.jpg",
		spotify: "0J2ytBHerNl1uzVP5jozX2"
	},

	{
		quote: "Anberlin - Blueprints For The Black Market",
		source: "Tooth & Nail Records, 2003",
		cover: "img/anberlin_blueprintsfortheblackmarket.jpg",
		spotify: "36oe7wKlSzYswiAXb4Kt35"
	},

	{
		quote: "Anberlin - Lost Songs",
		source: "Tooth & Nail Records, 2007",
		cover: "img/anberlin_lostsongs.jpg",
		spotify: "7wXYi05mImVHUQwOJbVzCH"
	},

	{
		quote: "Anberlin - Vital",
		source: "Universal Republic, 2012",
		cover: "img/anberlin_vital.jpg",
		spotify: "0nLFBWp0GsRZo8vwWD4ocH"
	}




];