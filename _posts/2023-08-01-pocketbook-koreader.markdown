---
layout: post
title:  "KOReader telepítése Pocketbookra"
date:   2023-08-01 04:53:26 +0200
categories: pocketbook, koreader
---
### Mit is tud a KOReader ami miatt érdemes telepíteni?

* Sokkal testreszabhatóbb, mint a gyári olvasó
* Lehetséges eltűntetni az összes zavaró tényezőt és csak a szöveget megjeleníteni, vagy különféle státuscsíkok segítségével információkat megjeleníteni, akárcsak hogy melyik fejezet mekkora és hol tartunk benne
* Olyan szótárakat is elérhetünk amik alapból nem elérhetőek a Pocketbook készülékeken és használatuk is sokkal felhasználóbarátabb
* Ha több készülékünkre van telepítve (pl. Androidos telefon), az eszközök között tudjuk szinkronizálni, hogy melyik könyvben hol tartunk
* Tudunk online cikkeket és RSS feedeket olvasni vele
* Szövegrészeket tudunk kiemelni, majd ezeket kiexportálni
* Részletes beszámolót tudunk lekérni bármikor az olvasási szokásainkról, hol mennyi ideig időztünk, mikor kezdtünk egy könyvet olvasni, mely napon olvastunk mettől meddig
* PDF-ek olvasására különböző módszerek, például hasábos olvasás is elérhető
* A sima USB-s csatlakozásos és emailes fileküldés mellett van még lehetőségünk felhőből/FTP-ről, Calibreből wifin keresztül is könyveket küldeni
* És még egy rakat dolgot, de mégis egy olyan kezelőfelülettel ami nincs tele szemetelve és átlátható
* Van magyar nyelven is

## Telepítés

Erről az oldalról kell letölteni a legfrissebb változatot: [letöltés](https://github.com/koreader/koreader/releases). 

Bár az oldal elsőre nagyon információ dús lehet, nem bonyolult a felépítése. Itt kb. havonta szokott új verzió megjelenni, minden verziónak van egy kódneve egy évszám és hónap párossal hogy mikor jelent meg. A leírásban alatta olvashatóak, hogy milyen funkciókkal bővült, netán milyen hibák lettek javítva. 

Ha lentebb tekerünk elérkezünk az __Assets__ részhez, itt találhatjuk a letöltendő fileokat, szerencsére nem kell mindent egyesével, a fileok sokasága csak azért van, mert rengeteg készülékre elérhető ez a program így mindegyikhez kell egy telepítő. A legalsó bejegyzés egy __Show all x assets__ lesz amire ha rákattintunk az összes file kilistázódik. Nekünk a koreader-pocketbook kezdetű file fog kelleni (a cikk írásakkor a legfrissebb a koreader-pocketbook-v2023.06.1.zip), erre rákattintva már el is indul a letöltés.

A letöltött file-t csupán ki kell csomagolnunk egy mappába, eredményül egy __system__ és egy __applications__ mappa lesz, ezt a két mappát csak fel kell másolnunk az __olvasó főmemóriájába__ (tehát nem az SD kártyásra) méghozzá simán csak a főkönyvtárba (nem kell belelépnünk az olvasó memóriájában semmiféle mappában).

És... ezzel kész is vagyunk :)

Ha biztonságosan leválasztjuk a készüléket, akkor az __alkalmazások__ menüpont legalján meg is találjuk a __@koreader__ nevü ikonnal, amire ha rányomunk el is indul.

## KOReader működése

Első indításkor mutat majd pár képet a használatáról, de az okos eszközöknél ismert gesztusokkal lehet úgy általánosságban navigálni. Olyan Pocketbook ami nem Touch ott a fel és lefele gomb fog nekünk segíteni a menük előhozásában.

Minden menüben igaz hogy:
* Amelyik beállítást hosszan nyomva tartva választjuk ki (2-3 másodpercig tartjuk a választott opciót az ujjunkkal) pl.: Betűtípus vagy margó méret, akkor az lesz az alapértelmezett beállítás, következő könyv megnyitásakor is érvényes lesz amit most beállítunk

* Vannak olyan menük amik több oldalra vannak tagolva, ezeknél az alján látszik lapozó gomb és írja is hogy melyik oldalon van éppen

* A képernyőn középen a tetejétől lefele húzva (vagy a felfele gombbal), jön elő a felső menü, ahol ikononként balról jobbra ezeket a beállításokat és funkciókat találhatjuk:
    * Tartalomjegyzék és a könyvvel kapcsolatos beállítások, pl.: státuszcsík
    * Az oldal beállítások, pl.: betűtípus, stíluskorrekciók
    * Az alkalmazással kapcsolatos beállítások, pl.: világítás, alkalmazás nyelve
    * Statisztikák és könyv források beállítása
    * Szótárak
    * Belső memória tallózása és megnyitás
    * Alkalmazás frissítése & kilépés
    

* A képernyőn középen az aljától felfele húzva (vagy a lefele gombbal), jön elő a alsó menü, ahol ikononként balról jobbra ezeket a beállításokat és funkciókat találhatjuk:
    * Oldal forgatása
    * Margók
    * Betűk finomhangolása
    * Betű méret
    * Kijelző kontrasztja
    * Egyéb beállítások


* Balról jobbra vagy jobbról balra húzva középen tudunk lapozni mintha igazi könyvet lapoznánk arrébb, ezzel a gesztussal a menüben is tudunk navigálni a lapozó gombok helyett

* Bal szélen le-fel a fényerőt, míg jobb szélen le-fel pedig a fényhőmérsékletet tudjuk állítani

## Első lépések

# Nyelv váltása angolról magyarra

Felső menüt lehúzzuk -> Fogaskerék ikon -> Language -> Alul a második oldalra léptetünk és rányomunk hogy Magyar, majd a felugró ablakból kiválasztjuk az __Újraindítás most__ opciót

# Alkalmazás aktív idejének beállítása, ezzel akkumulátor időt nyerünk

Felső menüt lehúzzuk -> Fogaskerék ikon -> Készülékbeállítások -> Auto készenlét beállítások, majd végezzük el ezeket a változtatásokat:
* Pipáljuk be a legfelső __Auto készenlét engedélyezése__
* Nyomjunk rá a __minimális bemeneti tétlenség másodpercre__ -> állítsuk 1-re
* Nyomjunk rá a __maximális bemeneti tétlenség másodpercre__ -> állítsuk 2-re
* Nyomjunk rá a __bemeneti ablak másodpercre__ -> állítsuk 2-re

Ezekkel a beállításokkal garantáljuk hogy miután az oldal betöltődött, tétlen állapotba kerül és nem fogyasztja tovább az aksit maximum csak a fény. Ha belegondolunk ez a beállításnak nincs sok értelme egy Android készüléken, de egy e-olvasó esetében ahol véges az aksi kapacitás értékes perceket és órákat lehet megspórolni.

# Szótárak letöltése és használata

Még a KOReader indítása előtt érdemes a készüléken kézileg bekapcsolni a WiFit.

Felső menüt lehúzzuk -> Nagyító ikon -> Beállítások -> Szótár beállítások -> Szótárak letöltése

Innen kiválasztjuk az egyik nyelvet amire vagy amiről szeretnénk fordítani (alul tudunk lapozni), pl.: német.
Itt is lapozva tudjuk megtekinteni az összes elérhető szótárakat az adott nyelvhez. Ha megvan a kívánt szótár nyomjunk rá a nevére.
Ha nincs a WiFi bekapcsolva az olvasón akkor itt rákérdez, hogy kapcsolja-e be (de ez a funkció mintha nem mindig működne, jobban járunk ha kézzel bekapcsoljuk mi), majd megkérdezi hogy le akarjuk-e tölteni, nyomjunk a Letöltésre.

Ezek után nincs más teendőnk mint a könyvben egy szóra hosszan rányomni és fel is ugrik a szótár. (A szótár WiFi nélkül is működik, csak letöltéshez kellett.)

Ha több szótárunk van letöltve de nem kell éppen az egyik akkor azt a:
Felső menüt lehúzzuk -> Nagyító ikon -> Beállítások -> Szótár beállítások -> Szótárak kezelése menüre nyomva tudjuk kivenni az X-et a nem kívánt használata elől.
Egyébként pedig a felugró ablak bal felső sarkában tudunk szótárak váltani egy szó megnyitásakor.

# KOReader frissítése új verzióra

Felső menüt lehúzzuk -> három vízszintes vonal ikon (hamburger menü másnéven) -> Frissítés -> Frissítések keresése

Ha elérhető új verzió, akkor rákérdez hogy letöltjük-e, majd letöltés után hogy telepítjük-e. Telepítés során mindenféle információt kiír, ennek végeztével a KOReader újraindul és az olvasás folytatható onnan ahol abbahagytuk.