---
layout: post
title:  "KOReader telepítése Pocketbookra"
date:   2023-08-01 20:53:26 +0200
categories: pocketbook, koreader
---
# Mit is tud a KOReader ami miatt érdemes telepíteni?

* Sokkal testreszabhatóbb, mint a gyári olvasó
* Lehetséges eltűntetni az összes zavaró tényezőt és csak a szöveget megjeleníteni, vagy különféle státuscsíkok segítségével információkat megjeleníteni, akárcsak hogy melyik fejezet mekkora és hol tartunk benne
* Olyan szótárakat is elérhetünk amik alapból nem elérhetőek a Pocketbook készülékeken és használatuk is sokkal felhasználóbarátabb
* Ha több készülékünkre van telepítve (pl. Androidos telefon), az eszközök között tudjuk szinkronizálni, hogy melyik könyvben hol tartunk
* Tudunk online cikkeket és RSS feedeket olvasni vele
* Szövegrészeket tudunk kiemelni, majd ezeket kiexportálni
* Részletes beszámolót tudunk lekérni bármikor az olvasési szokásainkról, hol mennyi ideig időztünk, mikor kezdtünk egy könyvet olvasni, mely napon olvastunk mettől meddig
* PDF-ek olvasására különböző módszerek, például hasábos olvasás is elérhető
* A sima USB-s csatlakozásos és emailes fileküldés mellett van még lehetőségünk felhőből/FTP-ről, Calibre-ből wifin keresztül is könyveket küldeni
* És még egy rakat dolgot, de mégis egy olan kezelőfelülettel ami nincs teleszemetelve és átlátható
* Van magyar nyelven is

## Telepítés

Erről az oldalról kell letölteni a legfrisebb változatot: [letöltés](https://github.com/koreader/koreader/releases). 
Bár az oldal elsőre nagyon információ dús lehet, nem bonyolult a felépítése. Itt kb. havonta szokott új verzió megjelenni, minden verziónak van egy kódneve egy évszám és hónap párossal hogy mikor jelent meg. A leírásban alatta olvashatóak, hogy milyen funkciókkal bővült, netán milyen hibák lettek javítva. Ha lentebb tekerünk elérkezünk az Assets részhez, itt találhatjuk a letöltendő fileokat, szerencsére nem kell mindent egyessével, a fileok sokasága csak azért van, mert rengeteg készülékre elérhető ez a program így mindegyikhez kell egy telepítő. A legalsó bejegyzés egy 'Show all x assets' lesz amire ha rákattintunk az összes file kilistázódik. Nekünk a koreader-pocketbook kezdetű file fog kelleni (a cikk írásakkor a legfrissebb a koreader-pocketbook-v2023.06.1.zip), erre rákattintva már el is indul a letöltés.

A letöltött file-t csupán ki kell csomagolnunk egy mappába, eredményül egy system és egy applications mappa lesz, ezt a két mappát csak fel kell másolnunk az olvasó főmemóriájába (tehát nem az SD kártyásra) méghozzá simán csak a főkönyvtárba (nem kell belelépnünk az olvasó memóriájában semmiféle mappában).

És... ezzek kész is vagyunk :)

Ha biztonságosan leválasztjuk a készüléket, akkor az alkalmazások menüpont legalján meg is találjuk a @koreader nevü ikonnal, amire ha rányomunk el is indul.