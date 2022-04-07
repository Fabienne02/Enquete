# Opdracht 1 

Opdracht 1 is te vinden onder het mapje Opdracht1/docs

# Opdracht 2

Opdracht 2 heb ik gevisualiseerd in een PPT <br>
Daarbij heb ik kleuren bekeken en ben ik erachter gekomen dat de cmd site gebruik maakt van de meest geschikte kleuren: geel en zwart/wit. Hierbij kan elke vorm vam kleuren blind de site op de meest ideale versie zien. Zelf het contrast van zwart/wit is duidelijk en prefect te lezen.
<br>
<br>
Ook de cookies waren niet aanwezig je hoeft niet in te loggen maar hiervoor is local storge een goeie oplossing ipv cookies als inloggen niet nodig is. Voor inloggen in slechts alleen cookies een optie. 
<br>
[powerpoint](https://docs.google.com/presentation/d/1jdI4LM5jRP3cIGAI6dd2TB8Cj5_WkmqYBQT7UMKtM4o/edit?usp=sharing)

# Enquete - minor web 🖍️
<img src="https://github.com/Fabienne02/browser-technologies-2122/blob/main/assets/banner.jpg" width=530 >

# Introduction
Geef jouw mening over de tot nu gegeven vakken van minor web, 
en lees jouw antwoorden terug!

## Table of contents
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [About](#about)
  - [Gecodeerd met](#gecodeerd-met)
  - [Features](#features)
  - [Wishlist](#wishlist)
  - [Installing](#installing)
  - [Wireflow](#wireflow)
  - [Browsers](#browsers)
  - [Testverslag](#testverslag)
  - [Lighthouse](#lighthouse)
  - [Sources](#sources)
  - [Author](#author)
  - [License](#license)

## About
**Deze enquete gaat over de vakken van de minor web**

## Gecodeerd met
Deze enquete is gecodeerd in HTML, CSS en JS, serverside gerenderd met EJS en Node

## Features
<ul>
  <li>Geef jouw mening over de tot nu gegeven vakken</li>
  <li>Lees jouw antwoorden terug</li>
</ul>

## Wishlist
<ul>
  <li>Kom later terug en zie jouw vorige antwoorden al ingevuld</li>
  <li>Auto toevoeging van vakken</li>
</ul>

## Installing
1. Clone deze repository naar jouw lokale folder
```
git clone https://github.com/Fabienne02/Enquete.git
```
2. Open de folder in jouw code applicatie [Zoals VSCODE](https://code.visualstudio.com/Download)
4. Install all packages
```
npm install || npm i
```
5. Start de applicatie met de volgende command
```
npm install || npm start
```
6. Open de de localhost:3000 in je browser

## Wireflow
<img src="https://github.com/Fabienne02/browser-technologies-2122/blob/main/assets/Wireflow.png">
<br>
 - functional/reliable laag <br>
 De functional laag bestaat uit de core html, de css en js zijn uitgeschakeld.
 <img src="https://github.com/Fabienne02/Enquete/blob/main/assets/html1.jpg" width=530 > <br>
 - usable laag <br>
 De usuable laag bestaat uit de laag met css zonder js. Hierbij zijn alle friendly user styling toegepast zoals grote knoppen, :hover en toepasselijke kleuren om het lezen vriendelijker te maken <br>
 - pleasurable laag <br>
 De pleaseruable laag is met CSS en JS hierbij zijn alle user friendly features ook in JS toegepast zoals weken die niet het zelfde mogen zijn of meer dan 26, een warning als je niet alles hebt ingevuld ook voor IOS ;) 

## Browsers
Enquete is getest op de volgende browsers:<br>
1 andriod browser, 1 IOS browser, 2 Desktop browsers, 1 niet chromium broswer<br>

- Revolution andriod browser 
- Chrome
- Firefox
- Opera mini
- Safari

## Testverslag
- Require: werkt niet op IOS --> Error pagina inladen in EJS
<img src="https://github.com/Fabienne02/Enquete/blob/main/assets/ios-test1.jpg" width=530 >
In deze code gebruiken we JS elementen zoals Var ipv let, en document.getElementById IPV queryselector ter ondersteuning. <br>

- Flex-box: Niet supported op oudere versies IE & opera --> Display: Inline-block;
- Padding: Niet supported in opera mini --> Hij blijft nog steeds functioneel dus geen maatregel
- Border: Niet supported eerste versie opera, firefox en IE --> Hij blijft nog steeds functioneel dus geen maatregel
- Min-width: Niet supported in android browsers en IE eerste versie ---> width in % aangeven, Hij blijft nog steeds functioneel dus geen maatregel
- @keyframes: Niet supported in oudste versie van IE, Friefox, Safari, Opera ---> Hij blijft nog steeds functioneel dus geen maatregel
<br>
Voor de rest werden alle elementen goed ondersteund
<br>

## javascript <br>
De javascript bestaat uit server-side en client-side. Hierbij blijft de server-side werken ondanks de JS word uitgezet.
De client-side desondanks niet, dit script bestaat enkel uit een require back-up script voor IOS.
En een script waarbij je niet dezelfde week kunt invullen of een week hoger dan 26.
Wanneer de gebruiker JS uit heeft staan krijg de gebruiker dit te zien door middel van een <noscript> tag:<br>
<img src="https://github.com/Fabienne02/Enquete/blob/main/assets/noscript.jpg" width=530 >
<img src="https://github.com/Fabienne02/Enquete/blob/main/assets/js2.jpg" width=530 >
  


 

## Lighthouse
Met aandacht op het kleurcontrast, leesbaarheidsregels en feedback voor de user:
Hierbij heb ik voor user vriendelijkheid ook de radio buttons groter gemaakt zodat het toegankelijker is ondanks de scherm grote
<img src="https://github.com/Fabienne02/Enquete/blob/main/assets/lighthouse1.jpg" width=530 >
<img src="https://github.com/Fabienne02/Enquete/blob/main/assets/lighthouse2.jpg" width=530 >


## Sources
- [Can i use](https://caniuse.com/)
- [Javascript form](https://stackoverflow.com/questions/17380661/form-using-javascript-make-field-required)

## Author
De maker van deze eqnuete is: [*Fabienne van den Steen*](https://github.com/Fabienne02)

## License 
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()
