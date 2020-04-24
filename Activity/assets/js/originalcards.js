var originalCardsA = [
	'dobhártya (6)',
	'csészealj (3)',
	'elefántbébi (6)',
	'fogíny (4)',
	'sörhab (3)',
	'elefántfóka (6)',
	'sasfészek (5)',
	'bankház (3)',
	'autóversenyző (4)',
	'csemegeuborka (5)',
	'sziklaomlás (4)',
	'gerincoszlop (5)',
	'szalmazsák (5)',
	'faláb (3)',
	'mozdonyvezető (3)',
	'almamag (3)',
	'padlóburkolat (4)',
	'aranyeső (4)',
	'úszómedence (3)',
	'hófehérke (6)'
]

var originalCardsB = [
	'kéjgyilkos (3)',
	'bűntudat (4)',
	'lánc: terelőút',
	'ebédszünet (3)',
	'lánc: faház',
	'postakürt (3)',
	'ólomkatona (3)',
	'diákszerelem (4)',
	'pohárköszöntő (6)',
	'mellékutca (3)',
	'díszmagyar (3)',
	'szemfényvesztés (6)',
	'költségvonzat (3)',
	'rézkarc (4)',
	'lánc: nyelőcső',
	'altatás (4)',
	'állatmese (3)',
	'aranypor (3)',
	'izzasztókúra (4)',
	'rekordkísérlet (4)'
]

var originalCardsC = [
	'mókamester (4)',
	'madárkalitka (4)',
	'leányanya (5)',
	'fogfájás (3)',
	'levélszekrény (6)',
	'sütőkemence (4)',
	'bableves (4)',
	'tigrisbukfenc (4)',
	'szamárköhögés (5)',
	'lőfegyver (5)',
	'filmsztár (5)',
	'műlesiklás (4)',
	'kínpad (4)',
	'almapüré (4)',
	'ékszíj (6)',
	'faiskola (5)',
	'kézifék (6)',
	'gumilabda (5)',
	'szappanbuborék (3)',
	'fuvolaszó (3)'
]

var originalCardsD = [
	'napszemüveg (3)',
	'négyszög (5)',
	'félcipő (3)',
	'aktfestészet (6)',
	'kelkáposzta (5)',
	'kemencepadka (3)',
	'lánc: üdvözlőlap',
	'árhullám (5)',
	'asztalitenisz (3)',
	'könyvhét (5)',
	'akasztófakötél (4)',
	'csavaralátét (5)',
	'gázlámpa (4)',
	'erdősáv (5)',
	'bőgőmasina (5)',
	'mezítláb (6)',
	'szobafogság (5)',
	'nadrágszíj (4)',
	'árnyékszék (5)',
	'versenyszám (5)'
]

var originalCardsE = [
	'szólóénekes (3)',
	'ősállapot (6)',
	'gyorsfutár (4)',
	'nyersfordítás (4)',
	'karének (4)',
	'gyümölcssaláta (4)',
	'túlkapás (6)',
	'szépséghiba (4)',
	'taposómalom (5)',
	'kilátótorony (3)',
	'zöldségáru (3)',
	'hangmagasság (3)',
	'szalmaláng (6)',
	'eszménykép (6)',
	'súlypont (3)',
	'esélyegyenlőség (4)',
	'szentírás (4)',
	'lánc: szamártej',
	'szaktekintély (4)',
	'tisztelettdíj (4)'
]

var originalCardsF = [
	'vészfék (5)',
	'violinkulcs (3)',
	'félkör (4)',
	'fogvacogás (3)',
	'teveszőr (4)',
	'diótörő (5)',
	'hasonmás (5)',
	'makimajom (6)',
	'rím: kerek',
	'mézescsók (6)',
	'fotelágy (6)',
	'tornanadrág (4)',
	'hajgyökér (3)',
	'hajtűkanyar (6)',
	'pezsgősüveg (4)',
	'lovaglóostor (5)',
	'körutazás (4)',
	'paprikajancsi (6)',
	'orrcimpa (6)',
	'lánc: szellemóriás'
]

function newCardOriginal() {
	var randomNumber = Math.floor(Math.random() * originalCardsA.length);
	document.getElementById('cardDisplayA').innerHTML = originalCardsA[randomNumber];
	document.getElementById('cardDisplayB').innerHTML = originalCardsB[randomNumber];
	document.getElementById('cardDisplayC').innerHTML = originalCardsC[randomNumber];
	document.getElementById('cardDisplayD').innerHTML = originalCardsD[randomNumber];
	document.getElementById('cardDisplayE').innerHTML = originalCardsE[randomNumber];
	document.getElementById('cardDisplayF').innerHTML = originalCardsF[randomNumber];
	}