// ============================================================
//  BOT CONFIGURATION — edit ONLY this file per bot
// ============================================================

module.exports = {

  // --- Identity ---
  name:       "Toppie",
  tagline:    "Jouw leuke topo docent",
  avatar:     "",                  // paste base64 data URI here
  promptedBy: "Tally Brostowsky",  // shown in footer as "Prompted by ..."

  // --- API & Model ---
  api:   "openai",              // "anthropic" or "openai"
  model: "gpt-4o",
  // Anthropic models: claude-haiku-4-5-20251001 | claude-sonnet-4-6 | claude-opus-4-6
  // OpenAI models:    gpt-4o-mini | gpt-4o

  // --- Web search ---
  webSearch: false,   // true = live internet access (recommended with OpenAI)

  // --- Conversation starters (leave [] to hide) ---
  starters: [],

  // --- System prompt ---
  prompt: `## Role & Task
You are a cool and funny "topografie" teacher named Toppie
Your task is to make sure the student knows everything in the chapter they are learning now

## Context 
You are here to help students pass their topo exam
The student studies the same material that you have in your knowledge base

## Knowledge base
The material is uploaded to the knowledge base - this is the only material to use as knowledge.
There is one file for each chapter.
The student only studies for one chapter per session, but you must cover all the topics in that chapter.
Stick to the selected chapter for the entire conversation.


## Instructions
You only speak Dutch
Introduce yourself first 
Ask the student which chapter they are learning now 
Ask them if they want bite-size lessons on the chapter material or start with a quiz
If bite-size lessons: Ask 3 questions after each lesson, one by one. 
If quiz: ask 10 questions per round
Make sure to cover all the material in the chapter.
Be playful with the quiz questions, so they are not all in the same style - multiple choice, open questions, fill in the blanks, etc.
Give points for successful answers.
Allow typos.
Do not use your own knowledge. 
Only teach and ask what can be found directly in the material

## Tone of Voice
You only speak Dutch.
You are cool and funny (but don't tell them, show them)
When your student wanders off-topic, make a kind joke and gently but firmly guide them back on track.

`,

  // --- Knowledge base / RAG (server-side only, never sent to browser) ---
  knowledge: `
Book2_Questions.txt

Page
1
/
1
Inhoud 
Het werelddeel Europa 
2 
Nederland - België - Luxemburg 4 
Frankrijk 
6 
Duitsland 
8 
Verenigd Koninkrijk - lerland 
10 
12 
14 
16 
18 
Italië - Malta 
Spanje - Portugal Griekenland - Cyprus 
Zwitserland - Oostenrijk 
Denemarken - Zweden - Finland 20 Noorwegen - IJsland 
22 
23 
24 
Estland - Letland - Litouwen 
Polen - Tsjechië - Slowakije Hongarije - Roemenië - Bulgarije 26 
Slovenië - Kroatië - 
Bosnië en Herzegovina Servië - Kosovo - Montenegro - 
28 
20 
Albanië - Noord-Macedonië 29 
Rusland 
30 
Oekraïne - Wit-Rusland - 
Moldavië - Turkije 
31 
32 
Register 
Legenda 
Grenzen 
Landgrens 
Grens binnen een land 
Kust 
Land en Water 
Verkeer 
Bergen 
Zee & Meren 
Rivieren & Kanalen 
Autowegen 
Spoorlijnen 
Veerdiensten 
Plaatsen 
Hoofdsteden 
Meer dan 1.00.000 inw. 
1.000.000 - 250.000 inw. 
250.000 - 100.000 inw. 
Minder dan 100.000 inw. 
Europese Unie 
Lid van de EU 
Europa bij nacht. (Op Kinheim.com/downloads staat een lijst met bronvermeldingen.) 
Geen lid van de EU 
1 
3 
2 
1 
Reykjavík 
IJSLAND 
2 
3 
IERLAND 
Atlantische Oceaan 
Het werelddeel Europa 
Er zijn zeven werelddelen. Europa is er een van en vormt samen met Azië het grootste landoppervlakte op aarde. De grens tussen deze twee werelddelen ligt in Rusland. Deze loopt via het Oeralgebergte, langs de Kaspische Zee en het Kaukasus gebergte, door de Zwarte Zee tot in Istanboel. Deze unieke stad ligt daarom zowel in Europa als in Azië. 
Landschap 
In het noorden van Europa kan het heel koud zijn. Dit deel ligt vlak bij Noordpool, waar altijd ijs en sneeuw ligt. In het zuiden kan het heel warm zijn. Hier ligt het wereld- deel Afrika met de Sahara vlakbij. Wind uit deze woestijn brengt hete lucht naar de landen rond de Middellandse Zee. Toch is het in Europa prettig om te wonen. 
Noordelijke IJszee 
Er liggen rond Europa een aantal zeeën. Ook zijn er een aantal berg- ketens met bergtoppen boven de 4000 meter, zoals de Mont Blanc en de Matterhorn in Alpen, en de Elbroes in de Kaukasus. De langste rivieren van Europa zijn de Wolga, de Dnjepr en de Donau. 
Europeanen 
Als je de kaart van Europa bekijkt, 
zie dat er veel verschillende landen in Europa liggen. Er zijn grote landen, zoals Frankrijk en Spanje. En er zijn hele kleine landen, zoals Malta en Luxemburg. In sommige landen wonen veel mensen, zoals Duitsland, andere landen hebben weinig inwoners. 
Bij elkaar heeft Europa ruim 746 miljoen inwoners. We noemen ze Europeanen. 
Landen 
Er zijn 51 landen in Europa. Veel van deze landen worden in de volgende hoofdstukken uitgebreid beschreven. Elke land heeft een hoofdstad. Dit is meestal ook me- teen de grootste stad van het land. Je kunt de hoofdstad herkennen op de kaart omdat deze rood gekleurd is. Ook is de naam onderstreept. De meeste Europeanen wonen in het westen van Europa. 
Taal en Cultuur 
In Europa worden er ook verschil- lende talen gesproken. Russisch, Duits en Frans wordt het meest gesproken, maar Engels kunnen de meeste mensen ook. 
Er wonen in Europa ook veel mensen die uit andere wereld- delen zijn gekomen. De verschil- lende inwoners van Europa hebben daarom naast hun taal ook eigen gewoontes, tradities, godsdiensten en cultuur. 
Democratie 
De meeste landen in Europa zijn een democratie. Dit betekent dat de inwoners mogen stemmen. Meestal gebeurt dit om de vier jaar. Soms is het eerder nodig. 
Als je mag stemmen dan kies je iemand van een politieke partij. Als deze genoeg stemmen heeft ge- kregen, mag hij of zij in het parle- ment zitten. De mensen in het parlement kiezen vervolgens een regering. 
De regering bestuurt het land, het parlement beslist of de regering het goed doet. Nederland, Duitsland en Zweden zijn voorbeelden van sterke democratische landen. 
Serke leiders 
In sommige landen hebben de inwoners voor een sterke leider gekozen. Of dat eerlijk gegaan is, is soms moeilijk te zeggen. Maar een sterke leider neemt het vaak niet zo nauw met de democratie. Zij vinden het niet leuk als mensen tegen hen protesteren. Ze doen er 
ook alles aan om aan de macht te blijven. In naam zijn deze landen democratisch, maar eigenlijk niet. Rusland, Wit-Rusland en Turkije zijn landen met dit soort leiders. 
Europese Unie 
In 1957 besloten zes landen om nauwer met elkaar samen te werken. Deze landen waren Nederland, België, Luxemburg, (West)Duitsland, Frankrijk en Italië. Że vormden een ‘gemeenschap' dat later de Europese Unie is gaan heten. Het wordt meestal afgekort als EU. 
In de jaren daarna kwamen er steeds meer landen bij de EU. In 2004 sloten er zelfs in een keer tien landen tegelijk aan. Vooral landen uit Midden- en Oost-Europa. Op dit moment zijn 27 landen lid van de EU. 
Samenwerken 
De landen van de EU werken samen op het gebied van handel, landbouw, industrie, energie, be- strijding van misdaad, verkeer en vervuiling van het milieu. 
Sinds 1 januari 2002 gebruiken de meeste landen van de EU dezelfde muntsoort: de euro. 
Een groot aantal landen in Europa wil nog graag lid worden van de EU, maar er zijn er ook die dat niet willen, bijvoorbeeld Noorwegen en Zwitserland. Het Verenigd Konink- rijk was lid, maar besloot een paar jaar geleden om uit te treden. 
De vlag van de Europese Unie. 
3 
1 
2 
Noordzee 
Nederland - België - Luxemburg 
Nederland 
Nederland is een koninkrijk. Er wonen 17,4 miljoen mensen. De hoofdstad is Amsterdam, maar de regering zit in Den Haag. De meeste mensen wonen in het west- en. Dit dichtbevolkte gebied wordt 
de Randstad genoemd. Nederland is samen met Belgie en Luxemburg een van de oprichters van de EU. 
Onder de zeespiegel 
Een groot deel van Nederland ligt lager dan de zeespiegel. Zonder 
bescherming van de duinen en dijken zou een groot deel van Nederland overstromen. 
Het westen van Nederland ligt het laagst. De bodem bestaat vooral uit zeeklei en veengrond. Zeeklei is erg vruchtbaar en heel geschikt voor akker- en tuinbouw. De veen- grond is bedekt met weilanden voor melkvee. 
Het oostelijk deel van Nederland ligt hoger. Hier is het land minder vlak en in Zuid-Limburg is het zelfs heuvelachtig. De bodem bestaat vooral uit zandgrond. Zandgrond moet geschikt gemaakt worden voor landbouw door extra mest te gebruiken. Hier vind je vooral be- drijven voor fokvee. 
Nederland heeft een zeeklimaat. De zomers zijn meestal koel en de winters vaak zacht. 
Doorvoerhavens 
Belangrijke industriegebieden zijn de havens van Rotterdam en Amsterdam. Nederland is een doorvoerland: veel goederen worden per schip of per vliegtuig in- en uitgevoerd. 
Rond de grote steden in Noord- en Zuid-Holland en Noord-Brabant, Limburg en Overijssel zijn fabrieken te vinden. Veel producten worden geëxporteerd. Zo zijn bijvoorbeeld Nederlandse bloemen en kaas over de hele wereld bekend. 
Er wordt een klein aantal delfstoffen uit de grond gehaald. Aardgas was lange tijd een belangrijk export- product. Sinds een paar jaar wordt er veel minder gas uit de grond gehaald. 
Waterland 
In Nederland is het druk op de we- gen. Er is veel vrachtverkeer, maar de meeste auto's zijn op weg naar kantoor of een andere werkplek. Daarom zijn er vaak files. 
Als de Nederlanders vrij zijn, gaan ze graag naar het strand, het water op met de boot of het water in voor een frisse duik. Toeristen komen vanuit de hele wereld om met eigen ogen dit waterland te zien. 
België 
Het koninkrijk België is iets kleiner dan Nederland. Het land heeft 11,5 miljoen inwoners. De hoofdstad is Brussel. 
In België worden drie talen ge- sproken. In Vlaanderen wordt Nederlands gesproken. In Wallonië spreken de mensen Frans. Dichtbij Duitsland wordt Duits gesproken. In Brussel is de taal zowel Frans als Nederlands. Brussel wordt ook wel gezien als de hoofdstad van de EU. 
Ardennen 
Het grootste deel van België is laa- gland. Het lijkt erg op het landschap in Nederland. De grond bestaat uit vruchtbare zeeklei voor akkerbouw en tuinbouw. Witlof en spruiten zijn typische Belgische groenten. In Vlaanderen zijn ook veeteelt- bedrijven te vinden. 
In het zuidoosten liggen de Arden- nen. Dit is een gebied met laagge- bergte en veel bos. De bergen zijn er niet hoger dan 750 meter. Er is voornamelijk bosbouw en veeteelt. Het grootste deel van België heeft een zeeklimaat net als Nederland. 
Steengroeven 
België heeft grote industriege- bieden, vooral rond de steden Antwerpen, Brussel, Gent, Char- leroi en Luik. Metaalindustrie, chemische industrie en textielindus- trie zijn belangrijk. Veel industrie- producten worden uitgevoerd via de havens van Gent, Antwerpen en Zeebrugge. Antwerpen is ook 
bekend door de diamantenhandel. 
Het Atomium in Brussel. 
In de Ardennen wordt natuursteen, zandsteen en kalksteen gewonnen. Dit noem je steengroeven. 
Klimmen en kanoën Toeristen bezoeken graag de oude steden Brugge, Gent, Antwerpen en Brussel. Natuurliefhebbers gaan liever naar de Ardennen om te genieten van de bossen. Je kunt er wandelen en fietsen, maar ook klimmen en kanoën. Typisch Belgische producten zijn chocolade, bier en bronwater. 
Luxemburg 
Luxemburg is een groothertogdom met meer dan 613.000 inwoners. De hoofdstad heet ook Luxemburg. Er worden drie talen gesproken: Frans, Duits en Letzeburgs (Luxem- burgs). 
IJzererts 
Het zuidelijk deel van Luxemburg is een vruchtbaar landbouwgebied. Langs de rivier de Moezel groeien op de hellingen druiven. Van de druiven wordt wijn gemaakt. Luxemburg is één van de rijkste landen van Europa. Een deel van deze rijkdom heeft men te danken aan ijzererts die in de grond bij de grens met Frankrijk gevonden wordt. Naast staalindustrie is er ook chemische industrie. 
Banken 
Tegenwoordig is de bankensec- tor de belangrijkste motor voor de rijkdom. Rijke mensen uit heel de wereld brengen hun geld naar een Luxemburgse bank. 
Bollenvelden en windmolens zijn typisch Nederlands. 
5 
6 
VERENIGD KONINKRIJK 
1 
Frankrijk 
Frankrijk 
De republiek Frankrijk is het op twee na grootste land van Europa. Het heeft 67,1 miljoen inwoners, die we Fransen noemen. Daarvan wonen zo'n 11 miljoen in en rond de hoofdstad Parijs. Frankrijk is al sinds het begin lid van de EU. Bij Frankrijk hoort ook het eiland Corsica. Dit eiland ligt in de Middellandse Zee. 
Afwisselend landschap 
Zo'n groot land als Frankrijk heeft een afwisselend landschap met verschillende klimaten. In het noordelijk deel en langs de kust met de Atlantische Oceaan is er een zeeklimaat, net als in Nederland. In het zuiden, aan de kust met de Mid- dellandse Zee, is een mediterraan klimaat. Hier zijn de winters zacht en de zomers heet. In het midden 
Het Louvre in Parijs is een van de grootste musea in de wereld. 
van Frankrijk is er meer een land- klimaat. De zomers zijn warm en de winters streng. 
In Frankrijk zijn verschillende berggebieden. Op de grens met Spanje liggen de Pyreneeën. In het midden van Frankrijk ligt het Centraal Massief. De Franse Alpen liggen tegen Zwitserland en Italië aan. Hier is één van de hoogste bergtoppen van Europa: de Mont Blanc. Deze berg is 4808 meter hoog. 
Kaas en wijn 
In het westen en noorden van Frankrijk is het land vlakker. Hier vind je veel landbouw. In het noorden is het land vooral geschikt voor akkerbouw. De boeren verbouwen er graan, suikerbieten en aardappelen. In het westen zijn vooral veeboeren met koeien, geiten en schapen. Ze houden de dieren voor het vlees, maar ook voor de melk waar de bekende Franse kazen van worden gemaakt; Camembert en Roquefort bijvoorbeeld. 
Langs de grote rivieren in Frankrijk zijn wijngebieden te vinden. Bekende wijnstreken zijn Bordeaux, Bourgogne, Loire en de Elzas. Van druiven wordt rode of witte wijn gemaakt. In Normandië en Bretagne wordt fruit geteeld. 
Industrie 
Veel Fransen zijn van het platteland naar de industriegebieden getrokken. Frankrijk heeft zich tot een van de belangrijkste industrielanden van Europa 
ontwikkeld. Het grootste 
industriegebied is Parijs. Er worden onder andere auto's, vliegtuigen, modeartikelen, sieraden en parfums gemaakt. Twee andere industriegebieden liggen in het noorden. Bij de steden Lille en Roubaix is textielindustrie en in de buurt van Metz en Nancy is metaalindustrie. Daar wordt ijzererts uit de bodem gehaald. Er zijn ook industriegebieden ontstaan in het zuiden bij de havenstad Marseille. In Toulouse staan fabrieken voor lucht- en ruimtevaart. Aan de Rhône ligt de stad Lyon, waar onder andere chemische fabrieken zijn. In de bergen wordt veel gebruik gemaakt van waterkracht. Door de waterkracht kunnen elektrische centrales goedkope energie aan de fabrieken en de bewoners leveren. Ook zijn in Frankrijk talrijke kerncentrales. 
Centrum Parijs 
Driekwart van Frankrijk ligt zeer gunstig aan zee. Er zijn dan ook een aantal belangrijke havens, zoals Le Havre, Nantes, Bordeaux en Marseille. Allerlei producten worden in- en uitgevoerd. Luchtvaart speelt een belangrijke rol in Frankrijk. Air France is de grootste luchtvaartmaatschappij. Samen met het Nederlandse KLM vormt het één bedrijf en vliegen ze naar landen over de hele wereld. Parijs is het centrum van het land. Vanuit deze stad gaan grote wegen en spoorlijnen naar alle richtingen van het land. Naast de 
gewone trein rijdt in Frankrijk ook een supersnelle trein, de TGV. Op speciale spoorbanen rijdt de TGV met een snelheid van bijna 300 kilometer per uur. 
Tussen Frankrijk en het Verenigd Koninkrijk varen verschillende veerboten. Je kunt ook door de 
tunnel onder Het Kanaal met een trein tussen Calais en Dover reizen. 
Toeristen 
Bijna het hele jaar door trekken toeristen naar Frankrijk, ook veel Nederlanders. In de zomer zoeken deze mensen de zon op aan de kust bij de Middellandse Zee. Het oostelijk deel van deze kust wordt ook wel de Côte d'Azur genoemd. Hier zijn chique badplaatsen zoals Nice, Cannes en Saint-Tropez. Ook de kust met de Atlantische Oceaan trekt veel toeristen in de zomer. Veel mensen volgen in de zomer de Tour de France. Dit is een grote wielerwedstrijd die in drie weken door heel Frankrijk gaat. 
De Alpen zijn in de winter geliefd bij de wintersporters. In de zomer gaan veel mensen wandelen en klimmen in deze gebieden. 
In Parijs komen het hele jaar door toeristen. Zij bezoeken in deze stad de Eiffeltoren en de Nôtre Dame. Voor het museum het Louvre staan altijd lange rijen mensen die het beroemde schilderij Mona Lisa willen zien. Dwars door Parijs stroomt de rivier de Seine. 
Druiven om wijn van te maken. 
Ten oosten van ons land ligt Duitsland. Het is ongeveer 9 keer zo groot als Nederland. Er wonen ruim 83,1 miljoen Duitsers. De meeste inwoners spreken Duits. De hoofdstad is Berlijn. 
Veertig jaar lang was Duitsland ver- deeld in twee totaal verschillende landen. Tussen die twee landen liep een zwaarbewaakte grens met 
DENEMARKEN 
een muur, ook door Berlijn. De inwoners mochten niet zomaar van het ene Duitsland naar het andere Duitsland reizen. In 1990 werden de twee landen herenigd. Duitsland is een van de belangrijk- ste landen van de EU. 
Van laag naar hoog 
In het noorden, en ook in een groot deel van het westen, heeft 
Duitsland een zeeklimaat met koele zomers en zachte winters. Als je verder naar het zuiden reist, worden de zomers warmer en de winters kouder. Hier heerst een landklimaat. In de berggebieden is het 's winters koud genoeg, zodat er elk jaar een dik pak sneeuw valt. Het noorden van Duitsland is een uitgestrekte laagvlakte. Naar het zuiden toe wordt het heuvelachti- ger. Als je dat heuvelland voorbij bent, kom je in het middelgebergte terecht, zoals het Thüringer Woud. De bergtoppen zijn er tot 1500 me- ter hoog. Ook zijn er gebieden met uitgestrekte bossen, zoals het Bo- hemer Woud en het Zwarte Woud. Nog verder zuidwaarts tegen de grens met Oostenrijk en Zwitser- land liggen de Alpen. In het zuiden ligt het hooggebergte van de Alpen met een aantal bergtoppen boven de 2000 meter. 
Bier en wijn 
Overal in Duitsland liggen akkers en weilanden. Op de akkers worden granen, aardappelen en suiker- bieten geteeld. In het zuiden wordt ook veel gerst en hop verbouwd. Daarvan wordt bier gebrouwen. De meeste veeteeltboeren fokken vee voor het vlees. Veel groenten en zuivelproducten worden ingevoerd, onder andere vanuit Nederland. Langs de rivieren de Rijn, de Moezel en de Main liggen wijngaarden, waar vooral witte wijn van wordt gemaakt. 
Auto-industrie 
Duitsland is een belangrijk industrie- land. Een bekend industriegebied is het Ruhrgebied in het westen van Duitsland. De steden in dit gebied zijn zo gegroeid dat ze samen één groot woon-werkgebied vormen. 
De Duitse snelwegen zijn uitstekend. 
In Duitsland vind je veel vakwerkhuizen. 
Bekende steden in het Ruhrgebied zijn Dortmund, Essen, Duisburg, Düsseldorf en Wuppertal. Veel steenkoolmijnen en oude fabrieken in dit gebied zijn nu gesloten of omgebouwd. Er is andere industrie voor in de plaats gekomen, zoals machinebouw, elektronica, chemi- sche industrie en textielfabrieken. De auto-industrie is in Duitsland heel groot. Er zijn veel bekende Duitse automerken, die over de hele wereld verkocht worden. Veel merken hebben ook fabrieken in andere landen. 
Er zijn meer grote industriegebieden in Duitsland. In het noorden rondom de steden Hamburg en Bremen, in het zuiden bij München en Stuttgart, in het oosten bij Dresden en Leipzig en rond de stad Frankfurt vind je veel industrie. 
Vroeger werd veel steenkool en bruinkool gewonnen voor energie- centrales. Maar dit was slecht voor het milieu en de natuur. Tegenwoor- dig vind je in Duitsland veel wind- molens, zonne-energieparken en waterkrachtcentrales voor schone 
energie. 
000 
WUTLEN 
Wegennetwerk 
Voor al die industrieën moeten grondstoffen worden aangevoerd en moeten producten worden afgevoerd. Veel goederen worden vervoerd over het water. Vooral de Rijn is een drukbevaren rivier. Deze rivier komt uit in de haven van Rotterdam. Hamburg en Bremen zijn de belangrijkste Duitse haven- steden. Beide havens liggen ver landinwaarts, toch kunnen ze door zeeschepen worden bereikt. In Duitsland ligt ook een uitstekend netwerk van spoorwegen en snel- wegen. Vanuit heel Europa rijden treinen en vrachtwagens heen en weer met goederen. Toch is het niet zo druk op de weg. Files ontstaan vooral rond de stedelijke gebieden. 
Bij Frankfurt ligt een van de groot- ste vliegvelden van Europa. Dit is ook het zakencentrum van Duits- land. In hoge wolkenkrabbers han- delen zakenmensen in goederen en geld. De Europese Unie heeft hier ook de Centrale Bank staan. 
Zee en bergen 
Er gaan veel Nederlanders op vakantie naar Duitsland. Ze be- zoeken bijvoorbeeld de kust aan de Oostzee, de wandelgebieden in de Harz en de Eifel of de oude steden Mainz en Keulen. Berlijn is ook een populaire stad om te bezoeken. Sinds de herenig- ing van de beide Duitslanden is de stad weer de hoofdstad geworden. Er staan nog delen van de oude Berlijnse muur te herinnering. Ten zuiden van München liggen de wintersportgebieden van de Alpen. In de winter gaan hier ook veel Nederlanders naartoe. Duit- sers komen op hun beurt in de zomer graag naar ons land voor het strand. 
9 
10 
Verenigd Koninkrijk - Ierland 
米 
Verenigd Koninkrijk ruim 66,6 miljoen mensen en ze 
Het Verenigd Koninkrijk bestaat uit Engeland, Schotland, Wales, Noord-Ierland en een paar kleinere eilanden rond het grootste eiland. De hoofdstad is Londen. Er wonen 
worden meestal Britten genoemd. 
Bijna vijftig jaar lang heeft het Verenigd Koninkrijk deel uitgemaakt van de EU. In 2016 stemde de be- volking voor de Brexit. 
 
Groot-Brittannië 
Het grootste deel van het Verenigd Koninkrijk ligt op het eiland Groot- Brittannië. Het heeft een zeeklimaat. Het regent er vaak en dikwijls staat er een stevige wind, vooral uit het zuidwesten. De zomers zijn niet te warm en de winters zijn zacht. De zuidkust van Engeland bestaat op veel plaatsen uit krijtrotsen. Ten noorden daarvan vind je lage heuvels met akkers en weilanden. Daartussen staan vaak heggen. Het landschap van Wales is ruig en bergachtig. In Schotland ligt de Ben Nevis, met 1.344 meter is het de hoogste berg van het eiland. Op de Schotse Hooglanden kan het in de winter erg koud zijn. 
Het grootste deel van het land wordt gebruikt voor veeteelt, vooral in Wales en Schotland. Boeren houden er schapen en runderen. In Engeland is vooral akkerbouw. Boeren verbouwen graan, koolzaad en aardappelen. Vanuit de talloze havens gaan de Britse vissers de Noordzee en de Atlantische Oceaan op voor de visserij. 
Hoofdsteden 
Londen is een wereldstad. Door de stad stroomt de rivier de Theems en zijn er bekende bezienswaardig- heden te vinden, zoals de Tower, de Big Ben en Picadilly Circus. In Buckingham Palace woont de koningin. 
De hoofdstad van Schotland is Edinburgh. Op bijzondere dagen dragen veel mannen een kilt of rok. Een typisch Schots muziekinstrument is de doedelzak. In Schotland wordt ook Schots gesproken. 
In Wales zijn, naast de hoofdstad Cardiff, weinig steden. Je vindt er 
nog veel oude kastelen. In Wales wordt door veel mensen nog Welsh gesproken. Dit is een oude Keltische taal. 
Belfast is de hoofdstad van Noord- lerland. In de vorige eeuw was hier dertig jaar lang een burger- oorlog. Sommige mensen wilden dat Noord-Ierland bij lerland ging horen, andere mensen wilden bij het Verenigd Koninkrijk blijven. Pas sinds 1998 is er een wapenstilstand. 
Wereldberoemd 
In het midden van Engeland werden vroeger veel delfstoffen uit de grond gehaald. Vooral ijzer en steenkool. Er ontstond daar een groot industriegebied. Kleine plaat- sen groeiden uit tot grote steden: Birmingham, Leeds, Manchester, Liverpool en Sheffield. Veel fa- brieken zijn verouderd en de mijnen zijn gesloten. 
Er zijn nieuwe bedrijven gekomen en nog steeds is het Verenigd Koninkrijk een belangrijk industrie- land. Rond London, Glasgow en Cardiff is ook veel industrie te vinden. Er worden onder andere auto's, vliegtuigen, kleding en com- puters gemaakt. Sommige Britse merken zijn over de hele wereld bekend. Ze staan vaak voor traditie en kwaliteit. Whisky is een bekend product uit Schotland. 
Op de Noordzee wordt aardolie en aardgas gewonnen. Vanaf boorplatforms worden pijpen in de zeebodem geboord om de olie op te pompen. 
Typische Brits 
Als eilandbewoners hebben de Britten hun eigenaardigheden die ze graag in stand houden. Zo rijden 
Twee Schotlse doedelzakspeelsters. 
alle auto's links in plaats van rechts, zoals in de rest van Europa. Ze meten niet in kilometers, maar in mijlen en niet in meters, maar in voeten. Er wordt betaald met pon- den in plaats van met euro's. Zelfs het ontbijt is anders dan bij ons. Voetbal is in Engeland uitgevonden, maar er zijn meer sporten die typisch Brits zijn. Rugby bijvoorbeeld en darts. Cricket is de nationale sport. 
lerland 
lerland is geen koninkrijk, maar een republiek met een president als staatshoofd. Er wonen 4,9 miljoen mensen. Naast het Engels is het lers de officiële taal. De hoofdstad is Dublin. Sinds 1973 is lerland lid van de EU. 
lers Rundvlees 
lerland is bijna overal heuvelachtig. Bergen vind je er alleen aan de westkust. De meeste boeren doen aan veeteelt. Ierse runderen worden vooral voor het vlees gehouden. 
Computer 
Vroeger was lerland een arm land. Veel leren trokken uit lerland weg, vooral naar de Verenigde Staten. Nu is het één van de rijkste landen van Europa. Dit heeft lerland vooral te danken aan de opkomst van de computer. Veel bekende computer- bedrijven hebben kan- 
toren en fabrieken gebouwd in lerland. 
Kloosters 
lerland is een dunbevolkt land met veel natuur. Dat trekt toeristen naar het land. Ze komen om te wandelen langs de ruige kusten of om oude kloosters en kastelen te bezoeken. 
De witte krijtrotsen bij Dover. 
11 
1 
ZWITSERLAND 
ALPEN 
2 
3 
FRANKRIJK 
4 
5 
Turijn 
MONACO 
Italië - Malta 
Italië 
In het zuiden van Europa ligt de republiek Italië. Italië is een groot schiereiland dat in de Middellandse Zee ligt. De vorm van het land lijkt op een laars dat iets wegschopt. 
Bij Italië horen verschillende eilan- den, de grootste zijn Sardinië en Sicilië. Er wonen ruim 60,3 miljoen mensen. Ze spreken Italiaans. De hoofdstad is Rome. Deze stad is al zo oud, dat het ook wel de Eeuwige 
De toren van Pisa trekt veel toeristen. 
Stad wordt genoemd. Italië is een van de landen die de EU hebben opgericht. 
Mediterraan 
Italië heeft dankzij de Middellandse Zee een mediterraan klimaat. De zomers zijn heet en droog en de winters zijn vochtig en zacht. In de Povlakte kunnen de winters koud zijn. Hier is meer een landklimaat. Het landschap in Italië is heel af- wisselend. In het noorden liggen de Alpen. De bergtoppen zijn er hoger dan 2000 meter. Hier is een hooggebergteklimaat. Boeren houden melkkoeien of hebben tuinbouw- of bosbouwbedrijven. Een heel ander soort landschap is de Povlakte. Door dit vlakke land stroomt de rivier de Po waardoor dit gebied heel vruchtbaar is. Er worden veel gewassen geteeld, zoals tarwe, bonen, mais en rijst. Van de tarwe worden bijvoorbeeld allerlei soorten pasta's als spaghetti en macaroni gemaakt. Er wonen ook veeteeltboeren in de Povlakte die runderen, varkens en schapen houden. Bekende Italiaanse vleesproducten zijn salami en gedroogde ham. 
Apennijns schiereiland 
Ten zuiden van de Povlakte ligt het Apennijnse schiereiland. Het is ge- noemd naar het gebergte van ruim duizend kilometer lang: de Apen- nijnen. In dit gedeelte van het land liggen verschillende wijngebieden met wijngaarden. Ook zijn er boom- gaarden waar olijfbomen groeien. De olijven worden gegeten, maar vooral gebruikt voor het maken van olijfolie. Op het eiland Sicilië en bij de stad Napels groeien sinaas- appels en citroenen. Dit noem je ook wel citrusvruchten. In de buurt van Napels en op Sicilië vind je ook 
de bekendste vulkanen van Italië: de Vesuvius en de Etna. 
Familiebedrijven 
Er zitten in Italië weinig delfstof- fen in de bodem. In steengroeven wordt wel het bekende Italiaanse marmer en graniet gedolven. En van het vulkanische eiland Sicilië komt zwavel. Het wordt in allerlei chemische producten verwerkt. De meeste industrie is te vinden in het noorden van Italië, in het gebied tussen de steden Milaan, Turijn en Genua. Er staan veel fabrieken voor het maken van ijzer en staal, chemische producten en machine- fabrieken. Er worden bijvoorbeeld auto's, vliegtuigen en motoren gemaakt. Genua is een belangrijke havenstad waar grote scheepswer- ven zijn. 
In Italië heb je veel kleine familie- bedrijven. Deze bedrijven zijn meestal gespecialiseerd in het ma- ken van lokale producten. Italië is bekend vanwege modieuze kleding en schoenen, maar ook vanwege specialiteiten en lekkernijen. 
Handelsland 
Italië was vroeger al een belangrijk handelsland. Vanuit steden als Venetië en Genua voeren schepen over de Middellandse Zee om exotische producten te halen. Handelaren uit Florence en Milaan trokken naar Europese steden om deze producten weer te verhandelen. Het noorden van Italië is nog steeds het belangrijkste gebied voor de handel. Kleding, auto's, wijn en voedsel zijn belangrijke export- producten. In het zuiden van Italië is minder bedrijvigheid. Bij Milaan en Rome vind je grote luchthavens. Er varen ook veel veer- boten en cruiseschepen naar andere landen aan de Middellandse Zee. 
Kunstwerken 
Er zijn prachtige steden in Italië waar veel toeristen naar toe gaan. In Rome zijn nog talloze oude bouw- werken te bewonderen, zoals het Forum Romanum en het Colosse- um. In Rome ligt ook Vaticaanstad. Daar woont de paus, het hoofd van de Katholieke kerk. De grote Sint- Pieter trekt pelgrims vanuit de hele wereld. 
De stad Florence is beroemd door de gebouwen en kunstwerken uit de late middeleeuwen. Ook Venetië trekt veel toeristen. Deze stad bestaat uit meer dan honderd kleine eilandjes, die met elkaar ver- bonden zijn door bruggen. Iedereen loopt of vaart met bootjes door de vele kanalen. In Milaan vind je niet alleen mooie gebouwen, maar ook prachtige winkels met de laatste mode. De stad Pisa is bekend ge- worden door de scheve toren die er staat. Ook de kust trekt veel toer- isten, vooral in de zomer. Rimini is een bekende badplaats. 
Malta 
Malta is een kleine republiek ten zuiden van Italië. Het bestaat uit twee kleine eilanden. Er wonen 493.000 Maltezen die Maltees en Engels spreken. Veel mensen kunnen ook Italiaans. De hoofdstad heet Valletta. Sinds 2004 is Malta lid van de EU. 
Scheepsbouw 
Het eiland is rotsachtig. Er zijn geen rivieren en weinig bomen. Het kli- maat is warm en droog waardoor er weinig landbouw is. Scheepsbouw is erg belangrijk, net als toerisme. Er komen per jaar twee keer zoveel toeristen als er inwoners zijn. 
Een straatje op Malta. 
13 
3 
4 
14 
2 
Spanje - Portugal 
Spanje 
In het zuiden van Europa ligt het koninkrijk Spanje. De hoofdstad is Madrid. Er wonen 46,6 miljoen Spanjaarden. De mensen spreken er Spaans. Samen met Portugal werd Spanje in 1986 lid van de EU. Bij Spanje horen enkele eilanden in de Middellandse Zee, de Balearen. Dit zijn zes eilanden, waarvan de grootste de eilanden Mallorca, Menorca en Ibiza zijn. Ook ligt in de Atlantische Oceaan nog een 
eilandengroep die bij Spanje hoort: de Canarische eilanden. 
Bergachtig 
Spanje heeft verschillen in klimaat. Langs de kust met de Middellandse Zee is een mediterraan klimaat. De zomers zijn er warm en de winters zacht. In het noorden aan de kust, bij de Golf van Biskaje, is net als bij ons een zeeklimaat. De winters zijn zacht en de zomers niet zo warm. Ook regent het er veel. Het grootste deel van het binnenland van Spanje heeft een landklimaat, met hete zomers, koude winters en weinig regen. 
Spanje is bijna overal bergachtig. Er zijn hier en daar uitgestrekte bossen. Ze leveren onder andere noten en kastanjes. Ook groeien er kurkeiken. 
Op de grens met Frankrijk liggen de Pyreneeën. Veel bergen zijn hoger dan 3000 meter. De hoogste top is de Aneto (3.404 meter) 
De Sagrada Familia in Barcelona. 
Citrusvruchten 
In Spanje is de landbouw belang- rijk. De meeste akkerbouwers en tuinders wonen in de buurt van de Middellandse Zee en de grote rivieren. Er worden veel citrus- 

vruchten geteeld, zoals sinaasap- pels, mandarijnen en citroenen. Ook worden er veel druiven en olijven gekweekt. 
In de droge en bergachtige gebieden wonen veel veeboeren die van de schapenteelt leven. Deze boeren hebben het zwaar. Er zijn ook boeren die varkens fokken. Boeren moeten elk jaar een strijd tegen de droogte voeren. Er valt weinig regen. Om toch water naar de akkers te kunnen laten stromen, zijn stuwen in rivieren gebouwd en zijn kanalen en waterputten gegraven. 
Spanjaarden eten veel vis. Er zijn dan ook veel Spaanse vissers die met hun boten de Middellandse Zee en Atlantische Oceaan opvaren. Ze vangen tonijn, kabeljauw en sardientjes. 
Industrie 
Spanje is rijk aan delfstoffen. In 
het noorden worden steenkool en ijzererts uit de bodem gehaald. Ook worden er zink, lood, kwik, zilver en uranium gewonnen. De meeste delfstoffen worden verkocht aan andere landen. 
In het noordoosten van Spanje is veel industrie. De belangrijkste industriegebieden liggen bij Madrid, Barcelona, Valencia en Zaragoza. Er is vooral chemische industrie, staalindustrie, machine-industrie, textielindustrie en scheepsbouw. Net als in Frankrijk en Duitsland heeft Spanje ook een auto- industrie. Het gaat vooral om kleine personenauto's. Ook zijn er veel kleine lederwarenbedrijven, waar schoenen en tassen gemaakt worden. 
In Barcelona en Bilbao liggen de grootste havens van het land. Bij Madrid ligt de grootste luchthaven. Verder heeft Spanje een uitgebreid 
Lissabon is de hoofdstad van Portugal. 
spoorwegennet. Dit wordt steeds meer uitgebreid. 
Spanje verhandelt veel landbouw- producten naar het buitenland: sinaasappelen, citroenen, olijven, noten en druiven. 
Gitaarmuziek 
Heel wat Spanjaarden verdienen hun geld aan het toerisme. Vooral de kust langs de Middellandse Zee is een welvarend gebied. Miljoenen toeristen besteden elk jaar heel wat euro's in hotels, restaurants en winkels. Behalve van de zon genieten toeristen ook van typisch Spaanse gebruiken. Ze luisteren naar gitaarmuziek en kijken naar de flamencodansers. Ze genieten van lekkere Spaanse gerechten, zoals paella, tapas en gazpacho. 
Portugal 
In de republiek Portugal wonen on- geveer 10,3 miljoen Portugezen. Ze spreken Portugees. De hoofdstad is Lissabon. Bij Portugal horen ook het eiland Madeira en de eilanden- groep de Azoren. Deze eilanden liggen in de Atlantische Oceaan. 
Sardines 
Het noorden van Portugal is ber- gachtig. Het regent daar vaker dan in het zuiden. Hier zijn vooral veeteeltbedrijven. In het zuiden wordt onder andere maisen rijst geteeld. Verder is de wijnbouw en visserij van belang. Een bekende wijnsoort is de port. De vissers van- gen vooral sardines. Die worden in olijfolie ingeblikt. 
Kurk 
De bossen met krukeiken leveren grote hoeveelheden kurk. Kurk is met de port en de sardines een be- langrijk exportproduct. Veel indus- 
Sinaasappelen voor het buitenland. 
trie is in Portugal niet te vinden. Er zitten ook maar weinig delfstoffen in de bodem. De meeste handel gaat 
over zee. 
Aardewerk 
In Portugal is veel toerisme, vooral in het zuiden. Er heerst daar een heerlijk klimaat. 
Er zijn mooie oude steden als Porto en Lissabon. Daar kun je luisteren naar de Portugese volksmuziek, die Fado genoemd wordt. In Portugal wordt veel verse vis gegeten, die opgediend wordt op kleurrijk Por- tugees aardewerk. Behalve mooi aardewerk worden in Portugal ook veel tegels gemaakt, die veel aan het buitenland verkocht worden. 
Dwergstaten 
In de Pyreneeën ligt ligt de dwergstaat Andorra. Dit kleine land bestaat al sinds de Middeleeuwen en heeft twee staatshoofden. Een andere dwergstaat is Monaco, in het zuiden van Frankrijk. Hier wonen veel rijke mensen omdat ze weinig belasting betalen. 
In Italië ligt het kleine San Marino. Het bestaat sinds de Romeinse tijd en is de oudste republiek ter wereld. 
Tussen Zwitserland en Oostenrijk ligt Liechenstein. Net als Monaco is een prins het staatshoofd en wonen veel rijke mensen om zo min mogelijk belasting te betalen. Vaticaanstad in Rome is ook een dwergstaat, met de paus als staat- hoofd. 
Deze vijf kleine landen zijn geen lid van EU, maar werken wel samen met de landen waaraan ze grenzen. 

Griekenland - Cyprus 
Griekenland 
In het zuidoosten van Europa ligt de republiek Griekenland. Het land is lid van de EU sinds 1981. Er wonen ruim 10,7 miljoen Grieken. Ze spreken Grieks. De Griekse taal wordt geschreven in het Griekse alfabet. Veel Grieken wonen in en om de hoofdstad Athene. Griekenland wordt ook wel de bakermat van Europa genoemd. Democratie is er uitgevonden. 
BULGARIJE 
Warme zomers 
Griekenland is een bergachtig land. In het westen loopt een berg- keten naar het zuiden. Hier ligt het schiereiland Peloponnesos. Een schiereiland is een eiland dat op een plek verbonden is aan het vaste land. Het oosten van Grieken- land is vlakker. De hoogste berg heet Olympus (2.918 meter). Bij het land horen zo'n 1400 ei- landen. De meeste liggen in de 

Egeïsche Zee. Ongeveer 150 eilanden zijn bewoond. Het grootste eiland is Kreta. Dat ligt in de Middellandse Zee. 
Het mediterrane klimaat zorgt in Griekenland voor warme zomers en zachte winters. Er komt nogal eens een hittegolf voor. De temperatuur kan dan tot boven de 40 graden stijgen. In de hoge bergen kan het 's winters erg koud zijn. 
Boeren en vissers 
Een groot deel van Griekenland is niet geschikt voor akkerbouw. Er valt weinig regen en de grond is rotsachtig. Alleen in de kustvlakte en in het noorden worden onder andere tarwe, maïs, suikerbieten en katoen verbouwd. 
De tuinders kweken er tomaten, druiven en meloenen. De druiven worden gedroogd tot krenten en rozijnen. 
Er zijn ook boomgaarden waar olijven, sinaasappels, appels en perziken groeien. 
De veeboeren houden vooral schapen en geiten. Van de melk van deze dieren wordt de bekende Griekse fetakaas gemaakt. Langs de kust en op de eilanden wonen veel vissers. In kleine boten gaan ze de zee op en vangen onder andere sardines en tonijnen. 
20 
Op de Middellandse Zee varen veel cruiseschepen. 
Rederijen 
Er zijn maar weinig fabrieken. Ze staan vooral in de buurt van de ha- vensteden Athene en Thessaloniki. Er worden veel voedingsmiddelen gefabriceerd. Ook is er een aantal textielfabrieken, cementfabrieken en chemische fabrieken. Er wordt verder bauxiet gedolven, wat ver- werkt wordt in aluminiumfabrieken. In Griekenland is scheepvaart heel belangrijk. Een op de vijf schepen ter wereld heeft een Griekse eigenaar. Een bedrijf met schepen noemen we een rederij. Op de Middellandse Zee varen grote cruiseschepen met toeristen uit de hele wereld. 
Oude Griekse tempels zijn belangrijke bezienswaardigheden. 
Griekse beschaving 
Dankzij het mooie weer gaan veel toeristen naar Griekenland. Vooral naar de eilanden, waar mooie stranden en gezellige dorpjes te vinden zijn. Anderen bezoeken de overblijfselen van de oude Griekse beschaving van meer dan twee- duizend jaar geleden. 
In Athene zijn die overblijfselen te zien, zoals de Akropolis met het Parthenon. Dit is een oude tempel, maar alleen de zuilen staan nog overeind. Andere delen van Griekenland, zoals Delphi, Olympia en Kreta worden ook graag door toeristen bezocht. 
Cyprus 
Cyprus is een eiland in de Middel- landse Zee. Het bestaat uit twee delen: Grieks-Cyprus en Turks- Cyprus. Het Griekse deel in het zuiden is een republiek en is sinds 2004 lid van de EU. Daar wonen 875.000 Cyprioten, die Grieks spreken. In het noorden spreken ongeveer 400.000 inwoners Turks. 
Grens 
Sinds 1974 is Cyprus verdeeld. Dwars door de Griekse hoofdstad Nicosia loopt de zwaarbewaakte grens tussen de twee delen. Turkije vindt dat Turks-Cyprus een aparte republiek zou moeten zijn, maar veel landen zijn het daar niet mee 
eens. 
Familiebedrijven 
Het eiland hoort, net als het groot- ste deel van Turkije, bij het wereld- deel Azië. Het is een bergachtig eiland. Koper is een belangrijke delfstof, maar er is weinig industrie. Er zijn veel familiebedrijven. Net als in Griekenland is toerisme is heel belangrijk. 
17 
Zwitserland - Oostenrijk 
+ Zwitserland 
Zwitserland ligt in het midden van Europa. Er wonen 8,5 miljoen Zwit- sers. De meesten spreken Duits, vooral in het noorden. In het westen wordt Frans gesproken en in het zuiden Italiaans. De hoofdstad van deze republiek is Bern. Zwitserland is geen lid van de EU. Je betaalt er dan ook met de Zwitserse franc. 
De Alpen 
Zwitserland is in zijn geheel berg- achtig. In het noorden ligt een hoogvlakte, in het zuiden liggen de Alpen. Zelfs in de zomer zijn de meeste toppen met sneeuw en ijs bedekt. 
In het hooggebergte ontstaan gletsjers. Dit zijn ijsvelden die langzaam naar beneden schuiven en smelten. Het smeltwater komt 
Helder water en frisse lucht in de bergen. samen in beken, watervallen, meren en rivieren. De Rijn en de Rhône vinden hun oorsprong in de Zwitserse bergen. 
Boven de 3000 meter is het zo koud dat er geen planten meer kun- nen groeien. 
Kaas en chocolade 
Tussen Basel en Bern vind je vooral boerenbedrijven. Veeteelt is voor hen het belangrijkste middel van bestaan. De boeren laten in de zomer hun vee hoog in de bergen grazen, op de alpenweiden. Van de melk worden kaas en chocolade 
gemaakt. Bekende kazen zijn de Emmentaler en de Gruyère. Deze kazen worden ook gebruikt voor het typisch Zwitserse kaasfondue. 
Duurzaam 
In Zwitserland worden horloges, klokken, meetinstrumenten, com- puters en medicijnen gemaakt. De meeste grondstoffen moeten uit an- dere landen worden ingevoerd. Dat gebeurt via Basel en de Italiaanse havenstad Genua. 
Dankzij de vele beken en waterval- len wordt in Zwitserland de meeste elektriciteit gehaald uit waterkracht- 
centrales. Dit noem je duurzame energie. 
Veel Zwitsers werken in grote bank- kantoren, vooral in Zurich. Zwitser- land is bekend vanwege het bank- geheim. Hele rijke mensen brengen hun geld naar een Zwitserse bank. Daar is het veilig en kan niemand anders er aankomen. 
Tunnels 
Wegen en spoorbanen zijn veelal in de dalen aangelegd. Op sommige plaatsen zijn tunnels voor het trein- verkeer en autoverkeer gegraven. Ze lopen dwars door de bergen. Zo kun je met de trein of de auto door de Sint-Gotthardtunnel. Die is 15 kilometer lang. Per auto kun je ook over de Sint-Gotthardpas. Een pas is een weg die over het laagste deel van een berg is aangelegd. 
Bergsport 
Veel buitenlanders komen naar Zwitserland om er te skiën, te langlaufen of te snowboarden. In de zomer zijn het vooral bergwande- laars die genieten van de prachtige uitzichten en de zuivere berglucht. Toerisme levert veel geld op, maar zorgt ook voor milieuvervuiling. Men is zich daar bewust van en neemt allerlei maatregelen om de schade aan de natuur te beperken. 
TSJECHIË 
= Oostenrijk 
De republiek Oostenrijk ligt ten zuiden van Duitsland. Er wonen 8,8 miljoen Oostenrijkers die Duits spreken. Een vijfde deel van alle inwoners woont in de hoofdstad Wenen. In 1995 werd Oostenrijk lid van de Eu. Je betaalt er dan ook met de euro. 
Vroeger was Oostenrijk een groot en belangrijk keizerrijk. Veel landen uit Midden- en Zuidoost-Europa hoorden bij dit Habsburgse rijk. 
Hoog en laag 
Oostenrijk bestaat voor de helft uit de Alpen. In dit bergachtige gebied heerst een hooggebergteklimaat. Soms kan er een warme wind waaien: de föhn. Door deze wind en door de zon gaan sneeuw en ijs smelten. Dan vallen soms enorme sneeuwmassa's naar beneden. We noemen dat lawines. 
In de dalen is het in de zomer vaak zonnig en warm, maar soms kan het weer helemaal omslaan en valt er regen of zelfs hagel. In het noorden en in de omgeving van Wenen vind je laaggelegen ge- bieden. Hier heerst een landklimaat met droge zomers. 
Bosbouw 
In de laaggelegen gebieden heb- ben boeren akkerbouwbedrijven, in de hooggelegen gebieden vooral veeteeltbedrijven. Op een aantal plekken is er ook wijnbouw. Meer dan een derde deel van 
Oostenrijk is met bossen bedekt. Op de berghellingen groeien loof- bomen en wat hoger in de bergen naaldbomen. Veel bomen worden gerooid voor de fabricage van papier, meubels en lucifers. Hoger op de berg kunnen geen bomen meer groeien. Je vindt daar alpenweiden. Weer hoger zijn er alleen nog kale rotsen. Tenslotte ligt op de hoogste toppen van de bergen 'eeuwige sneeuw'. 
Delfstoffen 
In Oostenrijk zitten nogal wat delfstoffen in de bodem. Er wordt ijzererts gedolven, maar ook koper, zout en aardolie. Net als in Zwitser- land maakt de industrie gebruik van elektriciteit die door waterkracht wordt opgewekt. 
De meeste industrie is in Wenen. Er worden onder andere lederwaren, kleding en voedingsmiddelen gemaakt. Een bekend vleesgerecht uit Wenen is de Wiener Schnitzel. 
Klassieke muziek 
Veel mensen komen voor winter- sport en bergsport. De bekendste provincie is Tirol, waar veel winter- sportgebieden liggen. 
Wenen is sinds lang het centrum van de klassieke muziek en trekt veel toeristen aan. Bekende com- ponisten, zoals Mozart, Beethoven, Schubert en Strauss hebben er gewoond en gewerkt. Je vindt er verder de mooie paleizen van de Habsburgers. Salzburg is ook een stad met bezienswaardigheden. 
SLOWAKIJE 
Een van de paleizen van de Habsburgers. 

Denemarken 
Het koninkrijk Denemarken bestaat uit het schiereiland Jutland en de grote eilanden Seeland, Funen en Lolland. Daarnaast zijn er nog honderden kleinere eilanden. Er wonen 5,8 miljoen Denen en ze spreken Deens. De hoofdstad is Kopenhagen. Denemarken is sinds 1973 lid van de Europese Unie, maar ze gebruiken geen euro. Men betaalt met de Deense kroon. 
Heuvelachtig 
Denemarken is vlak en heuvel- achtig. Er heerst een zeeklimaat. Veel land wordt gebruikt voor veeteelt. Deense zuivelproducten als melk en kaas worden naar het buitenland geëxporteerd. Daarnaast is visserij en scheepvaart belang- rijk. Een heel bekend Deens product is Lego. In Denemarken wordt veel elektriciteit opgewekt door wind- molens. 
Bruggen 
Denemarken heeft meer dan 7000 km kust. Nergens ben je dan ook meer dan 50 km van de zee ver- wijderd. Alle grote eilanden zijn met bruggen en tunnels met elkaar verbonden. In het jaar 2000 werd tussen Denemarken en Zweden de Sontbrug geopend. Deze is 9 km lang. 
Groenland 
Het grote eiland Groenland ligt bij Noord-Amerika. Het is voor een groot deel met sneeuw en ijs be- dekt, maar door de opwarming van de aarde, smelt dat steeds snel- ler weg. Er wonen Inuït. Vroeger werden ze 'Eskimo' genoemd. Het eiland hoort bij Denemarken, maar de Inuït willen dat Groenland uiteindelijk een zelfstandig land wordt. 
Ook de Faröer Eilanden horen bij Denemarken. Dat is een eilanden- groep ten noorden van het Verenigd Koninkrijk. 
Zweden 
Zweden is ook een koninkrijk en sinds 1995 lid van de EU. Het land telt 10,2 miljoen inwoners. De Zwe- den spreken Zweeds en ze betalen er met de Zweedse kroon. De hoofdstad heet Stockholm. Elk jaar worden hier de Nobelprijzen uit- gereikt. Dit zijn prijzen voor mensen die iets bijzonders hebben ge- presteerd, bijvoorbeeld een belan- grijke ontdekking in de natuurkunde of de geneeskunde. De prijs is ook voor mensen die zich hebben ingezet voor de vrede in de wereld. 
Lange winters 
In het grootste deel van Zweden heerst een landklimaat, vooral in het noorden. Een deel ligt boven de poolcirkel. De winter duurt lang en het kan er flink koud worden. In het zuiden is het in de zomer meestal zonnig en warm. Hier wonen daar- om de meeste mensen. 
Meubelgigant 
Uitgestrekte naaldwouden leveren veel hout. In fabrieken worden papier, timmerhout, lucifers en meubelen worden gemaakt. Het is dan ook niet zo verwonderlijk dat de grootste meubelwinkel ter wereld uit Zweden komt: de Ikea. Veel hout wordt ook uitgevoerd naar het buitenland. Naast hout wordt ook veel ijzererts uit- gevoerd. IJzererts wordt vooral in het noorden van Zweden gevonden bij Kiruna. Verder worden in Zwe- den ook auto's en huishoudelijke apparaten gemaakt. 
Popmuziek 
Pipi Langkous is wereldberoemd, net als de popgroep Abba. Andere bekende popartiesten zijn Roxette en Avici. 
+ Finland 
In de republiek Finland wonen 5,5 miljoen Finnen. Ze speken Fins, een bijzondere taal. Daarnaast spreken veel mensen ook Zweeds. De hoofdstad is Helsinki. De meeste Finnen wonen in het zuiden van het land. Finland is sinds 1995 lid van de EU. Als enigste land in Scandinavië heeft het de euro ingevoerd. 
Duizend meren 
Finland wordt ook wel 'Land van duizend meren' genoemd. Er zijn zestigduizend meren met daar- 
tussen uitgestrekte naaldbossen. Veel meren zijn met elkaar ver- bonden door rivieren en kanalen, waardoor je van zuid naar noord kunt varen. 
In de winter vriezen de meeste meren dicht, want het kan er flink koud zijn. In de zomer is het er warm en nat. 
Hout 
Akkerbouw en veeteelt is er vooral in het zuiden, in de buurt van de kust. Veeboeren houden koeien, varkens, schapen en rendieren. In heel Finland wordt aan bosbouw gedaan. Er worden hout en hout- producten uitgevoerd. 
Industrie is er vooral bij de steden Helsinki, Turku en Tampere, die producten van hout, papier, elektronische apparaten en grote machines voor bosbouw. 
Samen 
In het noorden van Finland wonen de Samen, net als in Zweden en Noorwegen. Ze worden ook wel 'Lappen' genoemd, maar dat vinden ze zelf een belediging. Ze wonen boven de Noordpoolcirkel. In de winter is het daar het grootste deel van de dag donker, terwijl in de zomer de zon maar een paar uur per dag onder gaat. Sommige Samen werken en leven nog op de traditionele manier, zoals vroeger. Ze houden rendieren waarmee ze rondtrekken. 
Kleine Zeemeermin in Kopenhagen. 
21 
Noorwegen - IJsland 
Noorwegen 
In het noorden van Europa ligt het koninkrijk Noorwegen. De hoofd- stad is Oslo. Het land heeft ruim 5,3 miljoen inwoners. Deze Noren spreken Noors. In 1994 besloten de Noren om geen lid te worden van de EU. 
Bij Noorwegen hoort ook de ei- landengroep Spitsbergen. Deze eilandengroep ligt in de Noordelijke IJszee. 
Fjorden 
Langs de kust is het klimaat vrij zacht. In het binnenland wordt het in de winter erg koud. Vooral in het noorden, bij de Noordelijke IJszee. Noorwegen is grotendeels bergachtig. Er zijn hoogvlakten, die met ijs zijn bedekt. In Noorwegen vind je fjorden. Fjorden zijn berg- achtige kusten, met diepe inham- men en steile hellingen. De fjorden zijn ontstaan door gletsjers, die in de ijstijd het land uitgeslepen of uitgeschuurd hebben. 
Visvangst 
Akkerbouwers zijn er niet zo veel. Ze verbouwen vooral tarwe en gerst. De veestapel bestaat uit rundieren, schapen en rendieren. Veel boeren hebben ook een stuk bos voor houtproductie. Visvangst in de Noordzee en in de Atlantische Oceaan is belangrijker. Ook zijn er viskwekerijen waar zalm wordt gekweekt. 
Welvarend 
Noorwegen is één van de rijkste en welvarendste landen ter wereld. Dat is dankzij de aardolie en aardgas die Noorwegen met behulp van booreilanden uit de bodem van de zee haalt. De meeste olie wordt geëxporteerd en levert veel geld op. Metaalindustrie vind je in de buurt van Oslo. Verder is er papier- en meubelindustrie, want er zijn uitgestrekte naaldwouden waar hout gekapt wordt. Overal in het land zijn waterkrachtcentrales, waarin elektriciteit wordt opgewekt. 
Scandinavië 
Noorwegen en Zweden vormen samen het Scandinavisch schierei- land. Wanneer we echter over Scandinavië spreken, wordt daar- mee naast Noorwegen en Zweden eveneens Finland, Denemarken en zelfs IJsland bedoeld. 
De Scandinavische landen werken op veel gebieden samen, onder andere in de vliegtuigmaatschappij SAS. 
In Scandinavië kun je zomaar rendieren tegenkomen. 
Geisers kijken in IJsland. 
#= IJsland 
Op dit eiland in het noorden van de Atlantische Oceaan wonen ongeveer 350.000 IJslanders. Ze spreken IJslands. De hoofdstad van de republiek is Reykjavik. Bijna alle inwoners van IJsland wonen in deze hoofdstad. IJsland ligt tussen Groenland en Europa in. Het land is geen lid van de EU. 
Geisers 
Het is een bergachtig eiland met bijna overal een rotsbodem. Er zijn heetwaterbronnen, waaruit warm water opborrelt en wat soms zelfs hoog opspuit. Ze worden geisers genoemd. Toeristen bezoeken het eiland vooral om de geisers te zien. Ook zijn er in IJsland een aantal actieve vulkanen. Een belangrijk kenmerk van IJsland is dat er nauwelijks bomen groeien. 
Kassen 
Er is weinig landbouw. Wel zijn er kassen waar tomaten, komkom- mers en zelfs druiven worden geteeld. Ze worden verwarmd met heet water uit geisers. Paarden, runderen en vooral schapen grazen op de weilanden. De visvangst is voor veel IJslanders belangrijk. Vee vis wordt gedroogd, vooral kabel- jauw. Of ze wordt in fabrieken ver- werkt. Vis en visproducten worden in grote aantallen uitgevoerd. 
Estland - Letland Litouwen 
- 
Estland 
Estland ligt het noordelijkst van de drie Baltische staten. De hoofdstad is Tallinn. Er wonen 1,3 miljoen Esten, die de Estische taal spreken. Deze taal is verwant aan de Finse taal. Er zijn ook veel mensen die Russisch spreken. Sinds 2004 is Estland lid van de EU. 
Meren en eilanden 
Het grootste deel van Estland ligt aan de Oostzee. Het noorden ligt het aan de Finse bocht. Langs de kust zijn steile rotsen. Er liggen twee grote eilanden voor de kust: Saaremaa en Hiiumaa. 
Het land is vlak met hier en daar heuvels. De hoogste berg is slechts 318 meter hoog. In het noorden en westen zijn meren, eilanden en moerassen. Langs de grens met Rusland ligt het grote Peipusmeer. 
Houtindustrie 
Er zijn nog maar weinig mensen die in de landbouw werken. Er is vooral veeteelt. De laatste jaren is de visserij erg in opkomst. Omdat er veel bossen zijn, is de verwerking van hout voor meubels een be- langrijke industrie. Veel producten worden naar Zweden en Finland geëxporteerd. 
Digitaal 
Estland is een van de eerste landen die alles zoveel mogelijk digitaal regelt. Verkiezingen gaan volledig via de computer, bijna alle scholen geven digitaal les en er zijn vrij veel bedrijven die allerlei handige apps ontwikkelen. 
Letland 
Letland ligt ten zuiden van Estland. De hoofdstad is Riga. Er wonen 1,9 miljoen Letten, die Lets spreken. Er wonen ook veel mensen die Russisch spreken. Het land werd in 2004 lid van de EU. 
Koude winters 
Ten westen van Letland ligt de Oostzee en de Golf van Riga. Daardoor heeft Letland net als de andere Baltische landen een zee- klimaat. Toch zijn de winters meestal kouder dan in Nederland. Het land is vrijwel helemaal vlak. Weinig heuvels zijn hoger dan 100 meter. Er zijn wel veel rivieren en meren. De grootste rivier is de Daugava, die vanuit Rusland naar de Oostzee stroomt. Meer dan de helft van het land is bedekt met bossen. 
Grote haven 
Net als in Estland, is in Letland de bosbouw belangrijk. Daarnaast zijn er weide- en landbouwgebieden. Op de akkers wordt vooral tarwe en suikerbieten geteeld. 
Letland is het meest geïndustriali- seerde land van de drie Baltische staten. Veel industrie ligt rond de stad Riga, onder andere papier- industrie en machine-industrie. In Riga bevindt zich ook een grote haven. De schepen varen naar 
Duitsland en naar het Verenigd Koninkrijk bijvoorbeeld. 
Riga 
Riga is de grootste stad van het land. Meer dan eenderde van alle Letten woont er. 
Het is een handelsstad die in de Middeleeuwen is ontstaan. Er is dan ook veel te zien voor toeristen. Andere steden in Letland zijn een stuk kleiner dan Riga. 
Litouwen 
Litouwen is de zuidelijkste Baltische staat. De hoofdstad heet Vilnius en de 2,7 miljoen inwoners heten Litouwers, waarvan de meeste Litouws spreken. 
Sinds 2004 is Litouwen lid van de EU. Litouwen heeft sinds 2015 de euro ingevoerd. Estland en Letland deden dat een paar jaar eerder. 
Lagune 
Een kleine deel van Litouwen ligt aan de Oostzee. In het zuidwesten ligt een langgerekt stuk duin, dat een binnenzee afschermt. Dit noem je een lagune. Het is een be- schermd natuurgebied geworden. Hier grenst Litouwen ook aan een deel van Rusland, dat vroeger bij Duitsland hoorde. 
Litouwen is net als de andere Baltische staten een vlak land, maar het is veel minder bebost. 
Machines 
Bijna de helft van het land is in gebruik als akkerland. Er worden granen, vlas, aardappelen, suiker- bieten en groenten verbouwd. Er wordt aardig wat gesteente als delfstof gewonnen. Verder is de machine-industrie belangrijk. Er worden onder andere schepen en turbines geproduceerd. 
Rail Baltica 
Al meer dan tien jaar wordt er gewerkt aan een moderne spoor- lijn die vanuit Polen dwars door de drie Baltische staten naar Finland zal gaan lopen. Hiermee zal het verkeer toenemen, wat weer extra bedrijvigheid en werk zal opleveren voor de drie landen. 
Fraai opgestapeld hout in Estland. 

Polen - Tsjechië - Slowakije 
Polen 
Polen is een republiek in Midden- Europa. De hoofdstad is Warschau. Er wonen 38,2 miljoen mensen. Ze spreken Pools. Bijna alle Polen 
zijn rooms-katholiek. Sinds 2004 is Polen lid van de EU. Je betaalt er nog niet met de euro, maar met de zloty. 
Oerbos 
Het noorden van Polen is vlak. Daar ligt een prachtig natuur-gebied met talrijke meren. Verder naar het zuiden wordt het land heuvelachtig. De grond bestaat er uit vruchtbare löss. In het zuiden, op de grens met Slowakije, ligt een hooggebergte: de Tatra. In een natuurpark daar leven bruine beren, lynxen, wilde katten, wilde zwijnen, wolven en gemzen. 
Wit-Rusland ligt het oudst bewaarde oerbos ter wereld: het woud van Bialowieża. Het is een beschermd natuurgebied, maar inmiddels worden delen van het bos gekapt. Hier is veel protest tegen. 
Polen heeft een landklimaat. De zomers zijn droog en warm; de win- ters zijn er koud. In het westen valt de meeste regen. 
Kleine bedrijven 
De meeste boeren in Polen heb- ben kleine bedrijven. Akkerbouwers verbouwen graan, aardappels en suikerbieten. 
Veeteeltboeren hebben vooral 
In het noordoosten op de grens met runderen en varkens. Op de Oost- 

zee vangen vissers kabeljauw en haring. 
Gesloten mijnen 
De mijnbouw en de industrie zijn in Polen erg belangrijk. Er zitten in het zuiden verschillende delfstoffen in de bodem: ijzererts, steenkool, lood, zink en aardgas. Daar zijn ook de grootste industriegebieden, vooral in en bij de steden Kraków, Katowice en Wroclaw. Ook in Lódź en Warschau vinden veel arbeiders werk in fabrieken. Er zijn onder andere metaalfabrieken, textielfab- rieken en chemische fabrieken. Aan de Oostzee liggen de havensteden Gdańsk en Szcecin. 
Het grootste gedeelte van de elek- triciteit in Polen wordt opgewekt in centrales waar steenkool en bruin- kool worden gestookt. Er zijn veel kolenmijnen die inmiddels wel verouderd zijn. Steeds meer mijnen worden de laatste tijd gesloten. 
Toerisme 
Polen is een groot land met een paar grote steden waar veel te zien is. De hoofdstad Warschau trekt veel toeristen, net als Krakau dat een van de mooiste steden van Europa wordt genoemd. 
Tsjechië 
De republiek Tsjechië ligt ook in Midden-Europa. Er wonen 10,6 miljoen mensen. De meesten zijn Tsjechen, maar er leven ook Slowaken. Ze zijn afkomstig uit het buurland Slowakije. Vroeger vorm- de Tsjechië en Slowakije namelijk één land: Tsjecho-Slowakije. De Tsjechen spreken Tsjechisch. De hoofdstad is Praag. Tsjechië is 
Uitzicht op de hoofdstad Praag. 
sinds 2004 lid van de EU. De munt is de Tsjechische kroon. 
Middelgebergten 
Tsjechië is voor een deel heuvel- achtig. Rondom wordt de grens gevormd door middelgebergten. In het oosten liggen op de grens met Duitsland het Ertsgebergte en het Bohemer Woud. In het noorden vormen de Sudeten de grens met Polen. De Elbe en Moldau zijn twee belangrijke rivieren in Tsjechië. Tsjechië heeft een landklimaat. De zomers zijn er erg warm en de winters streng. 
Hop en gerst 
De meeste akkerbouwers wonen in het heuvelachtige gedeelte. Ze verbouwen granen, aardappelen, suikerbieten en hop. Van hop en gerst wordt bier gebrouwen. In de buurt van de grote plaatsen is veel tuinbouw. Er zijn nogal wat veeboeren. Ze houden runderen, varkens en pluimvee. 
Belangrijk in Tsjechië is ook de bos- bouw. Driekwart van alle bossen wordt gebruikt voor de bosbouw. Veel hout wordt uitgevoerd, vooral naar andere landen van de Europese Unie. 
Bruinkool 
In dit land is de industrie belang- rijk. Omdat in Tsjechië langs de grenzen uitgestrekte bossen liggen, vind je er veel houtindustrie. Ook zijn er machinefabrieken, glasfab- rieken, schoenfabrieken en auto- fabrieken. 
Er is niet zoveel mijnbouw. Er wordt wel bruinkool en steenkool uit de grond gehaald voor het opwekken van energie. Deze vorm van 
energie opwekken is erg slecht voor het milieu. Er wordt daarom steeds meer gebruik gemaakt an- dere energiebronnen zoals gas en kernenergie. 
Wintersport 
Voor toeristen is er in Tsjechië een hoop te ontdekken. In het Ertsge- bergte valt in de winter genoeg sneeuw voor de wintersporters. Er zijn ook grotten en ondergrondse rivieren, waarvan sommige door toeristen bezocht kunnen worden. De stad Praag heeft een rijke geschiedenis met mooie oude gebouwen, straten en pleinen te bewonderen. Rond deze stad zijn talrijke kastelen en burchten. 
Slowakije 
De republiek Slowakije ligt ten oosten van Tsjechië. Er wonen 5,5 miljoen mensen. De meeste inwoners zijn Slowaken. Ze spreken Slowaaks. Ook wonen er heel wat Hongaren. 
De hoofdstad is Bratislava. Sinds 2004 is Slowakije lid van de EU. 
Tatra 
In het noorden, op de grens met Polen, ligt de Tatra met bergtoppen van meer dan 2000 meter. De Ger- lachovský štít is met 2655 meter de hoogste top. 
Het zuiden van Slowakije is heuvel- achtig. Een deel van de zuidgrens, namelijk met Hongarije, wordt gevormd door de rivier de Donau. Evenals Tsjechië heeft het een landklimaat, met warme zomers en strenge winters. 
Varkens en kippen 
Veel mensen werken in de land- bouw. De akkerbouwers verbouwen granen en aardappelen. De vee- boeren houden vooral varkens en kippen. Bosbouw is ook belangrijk. 
Elektronica 
In Slowakije zitten weinig delfstof- fen in de grond. De meeste grond- stoffen moeten worden ingevoerd vanuit andere landen, vooral vanuit Rusland. De belangrijkste industrie in Slowakije is de machine-indus- trie, in het bijzonder de auto-indus- trie en de elektronica. 
Steeds meer mensen in Slowakije verdienen ook hun geld in het toer- isme. Er gaan vooral veel toeristen naar steden als Bratislava en de berggebieden als de Tatra. 
25 
Hongarije - Roemenië - Bulgarije 
Hongarije 
De republiek Hongarije ligt ten oos- ten van Oostenrijk. Er wonen 9,7 miljoen Hongaren, die Hongaars spreken. Het land is in 2004 lid ge- worden van de EU, maar heeft nog niet de euro ingevoerd. Je betaalt er met de forint. 
De hoofdstad is Boedapest. Het bestaat uit twee stadsdelen: Boeda 
en Pest. Door bruggen over de Donau zijn ze verbonden. 
Laagvlakte 
In Hongarije heerst een landkli- maat. De zomers zijn heet, de win- ters zijn nat. In het noorden liggen heuvels, maar het grootste deel bestaat uit een laagvlakte. Dit is een vruchtbaar gebied voor akkerbouw. De belangrijkste land- 

bouwproducten zijn tarwe, mais, rijst, groenten en fruit. Vee wordt gefokt voor het vlees. 
Donau 
Veel Hongaren werken ook in de industrie. Vooral de auto-industrie en de elektronica zijn belangrijk. De meeste industrie is te vinden rond de stad Boedapest. 
Een deel van de industrieproducten 

De Donau stroomt door de stad Boedapest. 
wordt uitgevoerd, vooral over de Donau. 
Er zitten in Hongarije weinig delf- stoffen in de bodem. Grondstoffen, maar ook energie, moeten worden ingevoerd uit andere landen. 
Balatonmeer 
Het Balatonmeer is een van de grootste meren van Europa. Door- dat het niet zo diep is, wordt het water zomers lekker warm. Dit trekt veel toeristen aan. In de zomer worden zwemwedstrijden gehouden van de ene naar de andere oever. 
Roemenië 
In de republiek Roemenië wonen 19,4 miljoen Roemenen. Ze spreken Roemeens. Deze taal is verwant aan het Italiaans. 
Er wonen ook aardig wat Hongaren in Roemenië. De hoofdstad is Boekarest. Roemenië is sinds 2007 lid van de EU. Je betaalt er met de leu. 
Landbouw 
In Roemenië heerst een land- 
Volksdansen in Roemenië. 
klimaat. Aan de Zwarte Zee is een mediterraan klimaat. Daar zijn de zomers warm en droog en de winters zacht. Dwars door het land loopt een bergeketen: de Karpaten. Landbouw in Roemenië is van groot belang. Graan, aardappelen, suikerbieten, zonnebloemen, rijst en druiven zijn belangrijke pro- ducten. Veeboeren houden vooral runderen en varkens. De uitgestrek- te bossen leveren veel hout. 
Lage lonen 
Er worden verschillende delfstof- fen uit de bodem gehaald, zoals aardolie, ijzererts en steenkool. De mijnen zijn verouderd en leveren weinig op. Rond Boekarest liggen textielfabrieken en metaalfabrieken. Vanuit de havenstad Constanta en over de Donau worden goederen uitgevoerd. De lonen in de land- bouw en industrie zijn laag. Veel Roemenen werken daarom in het buitenland. 
Volksdansen 
Toeristen in Roemenië komen vaak in aanraking met de Roemeense volksmuziek en de volksdansen. Er zijn optredens door speciale groepen, maar in veel dorpjes kun je ook zomaar Roemenen in kleder- drachten tegenkomen. 
Bulgarije 
Bulgarije is ook een republiek in het zuidoosten van Europa. Er wonen 6,9 miljoen Bulgaren, die Bulgaars spreken. Deze taal wordt in het Cyrillisch alfabet geschreven. De hoofdstad is Sofia. Ook Bulgarije is sinds 2007 lid van de EU. Om te betalen heb je de lev nodig. 
27 
Slovenië - Kroatië - Bosnië en Herzegovina 
Balkan 
Het gebergte de Balkan verdeelt Bulgarije in twee stukken. Ten 
noorden van het gebergte ligt een grote vlakte. Daar heerst een land- klimaat. Zuidelijk van de Balkan is het klimaat zachter. De bodem is met vruchtbare lössgrond bedekt. 
Rozenolie 
Heel wat Bulgaren werken in de landbouw, veeteelt en tuinbouw. De akkerbouwers telen tarwe, maisen tabak. Tuinders kweken vooral fruit, waaronder druiven voor wijn. Ook worden er veel rozen gekweekt. Van rozen wordt olie gemaakt, dat gebruikt wordt in parfums. Er is voornamelijk zware industrie: metaal, machines en bouw- materialen. Via de havens van Varna en Burgas aan de Zwarte Zee worden onder andere fruit, wijn, rozenolie en tabak uitgevoerd. 
Zwarte Zee 
Langs de Zwarte Zee is een medi- terraan klimaat. Ook zijn er fraaie zandstranden te vinden. Dit trekt veel toeristen aan. Het leven in Bulgarije is goedkoper dan in de meeste andere Europese landen. 
CLAS 
De kust van Kroatië. 
" 
Slovenië 
De republiek Slovenië bestaat pas sinds 1991. De 2,1 miljoen Slo- venen spreken Sloveens en de hoofdstad heet Ljubljana. Nadat het land in 2004 lid geworden was van de EU, voerde het als eerste van de nieuwe EU-landen, de euro in als nieuwe munt. 
Heuvelachtig 
Hoewel Slovenië een klein land is, zijn er heel wat verschillen in land en klimaat. In het westen ligt een korte kuststrook met een mediter- raan klimaat. In het noorden liggen de bergen van de Alpen met een hooggebergteklimaat en het oosten is vlak met een landklimaat. Het grootste deel is heuvelachtig met weiden en bossen. 
Kleine steden 
Boeren houden er vooral vee. In het oosten zijn wat akkerbouw- bedrijven. Ook worden er aardig wat druiven geteeld om wijn van te maken. 
De steden in Slovenië zijn klein, behalve Ljubljana. Rond die stad en ten noorden daarvan ligt de meeste industrie. Er is auto-industrie en machine-industrie waar veel mensen werken. In de stad Koper ligt de enige grote haven van het land. 
Triglav 
Slovenië is een land met veel natuur. De meeste toeristen komen om te wandelen in de bergen. De hoogste berg heet Triglav (2.864 meter). Deze kan iedereen met een goede conditie beklimmen. Je bent pas een echte Sloveen als je dat gedaan hebt. 
Kroatië 
Ook de republiek Kroatië bestaat pas sinds 1991. De hoofdstad is Zagreb. De meeste van de 4,1 miljoen Kroaten spreken Kroatisch. Vroeger woonden er ook aardig wat Serviërs, maar sinds de burgeroor- log in de jaren negentig zijn dat er een stuk minder geworden. Kroatië is sinds 2013 lid van de EU, maar heeft nog geen euro. Je betaalt er met de kuna. 
Hoefijzer 
De vorm van het land lijkt wel een beetje op een hoefijzer. Het oos- ten van het land is heuvelachtig met een landklimaat, het westen 
De top van de Triglav. 
is rotsachtig met een mediterraan klimaat. Kroatië heeft een kustlijn van bijna 6000 km lang. Langs de kust van de Adriatische zee liggen duizenden eilanden. Het is hier in zomer bijna altijd mooi weer. Door de hitte ontstaan er wel vaak bos- branden. 
Toeristensector 
Landbouw is vooral in het oos- ten van het land te vinden. In het bergachtige midden is veeteelt en in het westen worden fruit en olijven gekweekt. 
Scheepsbouw is een belangrijke industrie, maar de meeste mensen werken in de toeristensector. Langs de kust vind je veel hotels, vakan- tieparken, campings en restaurants. Ook zijn er veel havens waar zeil- boten en luxe jachten aanleggen. 
Oude steden 
Vroeger hoorden veel steden in Kroatië bij de Italiaanse stad Venetië. Een van de bekendste plaatsen voor toeristen is Dubrovnik. Het centrum ziet er bijna nog net zo uit als in vroegere eeuwen. Split is trouwens nog ouder. Deze stad bestond al in de Romeinse tijd. 
Bosnië en Herzegovina 
In Bosnië en Herzegovina wonen 3,5 miljoen mensen; Bosniakken, die ook wel Moslims worden ge- noemd, Kroaten en Serviërs. Deze laatsten hebben een deelrepubliek met een eigen regering. De hoofd- stad van Bosnië en Herzegovina is Sarajewo. Het land zou graag lid worden van de EU, maar is er nog lang niet klaar voor. 
Er zijn veel bergen. Een derde deel van het land wordt gebruikt voor veeteelt en een derde deel voor landbouw. Er zijn vooral kleine 
Servië - Kosovo - Montenegro - Albanië - N. Macedonië 
familiebedrijfjes. Verder zijn er uitgestrekte bossen. Het land heeft weinig industrie. Er zijn bijna geen snelwegen en spoorlijnen. Een heel klein stukje van het land grenst aan zee, maar daar ligt geen haven. 
In Bosnië en Herzegovina woedde in de jaren negentig een vreselijke burgeroorlog, maar vijfentwintig jaar geleden werd een vredesverdrag gesloten. Toch blijft er spanning bestaan tussen de drie bevolkings- groepen. 
Servië 
Servië is een republiek met 7,0 mil- joen Serviërs, die Servisch spreken. Deze taal heeft net als het Bulgaars een ander alfabet dan wij kennen. De hoofdstad heet Belgrado. Servië is geen lid van de EU, maar wil het wel worden. 
Servië ligt niet aan zee. Er heerst een landklimaat met koude win- ters en natte zomers. Dwars door het land stroomt de Donau. In het noorden is het land vlak. Hier liggen veel landbouwbedrijven, waar graan 
wordt verbouwd. Ook is er veel veeteelt voor vleesproductie. In het midden van Servië wordt fruit geteeld, vooral pruimen. Verder naar het zuiden wordt het land bergachtiger. 
De meeste industrie is te vinden rond Belgrado en Novi Sad. Er worden auto's, machines en elek- trische apparaten gemaakt. De wegen in Servië zijn niet zo goed onderhouden en soms zelfs gevaarlijk. Over de Donau varen vrachtschepen naar het buitenland. 
Servië hoorde vroeger bij Joego- slavië. Samen met vijf buurlanden vormde Servië een grote repu- bliek, maar in de jaren negentig viel dit land uit elkaar. Er brak op verschillende plekken een burger- oorlog uit, waar deze landen vele jaren voor nodig hadden om van te herstellen. 
Kosovo 
Kosovo is het laatste land dat zich los gemaakt heeft van Servië. Hier wonen vooral Albanezen. Toch is Servië het niet eens met deze beslissing, maar het lijkt erop dat de situatie zo blijft. 
Montenegro 
Montenegro hoorde lang bij Joegoslavië en Servië. In 2006 kozen de 620.000 Montenegrijnen om als zelfstandige republiek verder te gaan. De hoofdstad is Podgorica. 
Wist je dat Montenegro Italiaans voor 'zwarte bergen' is? 
In het noorden zijn er vruchtbare vlakten, in het zuiden vooral bergen. Langs de kust vind je de zuidelijkste fjord van Europa. Een fjord is een inham van de zee. 
In de bergen zijn veel waterbronnen te vinden. Deze worden goed be- schermd tegen vervuiling, want het bronwater wordt veel verkocht aan het buitenland. De landbouw en de visserij hebben ook voor- deel van deze bescherming. Montenegro trekt dankzij de mooie natuur steeds meer toeristen. 
Albanië 
De republiek Albanië telt 3,1 miljoen inwoners. Ze spreken Albanees. De hoofdstad is Tirana. Albanië is geen lid van de EU, maar sinds 2014 wil het lid worden. 
Het land is bergachtig met een medi- terraan klimaat. Het grootste deel is bedekt met bossen en weilanden. Laaggelegen gebieden worden gebruikt voor landbouw. Daar wordt tarwe, maisen aardappelen geteeld. De meeste industrie is in de omge- ving van Tirana. 
Albanezen zijn niet zo rijk als de mensen in West-Europa. De meeste werken in de landbouw en industrie. Er zijn veel kleine bedrijven waar de spullen met de hand worden gemaakt. En hoewel Albanië een mooie kust heeft, komen er nog weinig toeristen naar het land. 
Noord-Macedonië 
Lange tijd mocht dit land geen Macedonië genoemd worden, maar sinds 2019 is het Noord-Macedonië geworden. De hoofdstad is Skopje. De 2 miljoen Macedoniërs spreken Macedonisch. Er wordt ook veel Albanees gesproken. Sinds 2005 wil het land lid worden van de EU. 
Naast heuvels en bergen zijn er twee grote meren. In de bergen vind je koeien en geiten, in de lager gelegen gebieden wordt graan en mais ver- bouwd. Tabak en wijn wordt naar het buitenland geëxporteerd. Verder is er mijnbouw en metaalindustrie, maar er zijn ook veel mensen werkeloos. Noord-Macedonië probeert toeristen te trekken. Vooral het Ohridmeer is geliefd. 
Gjirokastër in Albanië. 
29 
1 
2 
Oostzee 
FINLAND 
Rusland 
Moermansk 
Rusland 
Het grote land in het oosten van Europa heet Rusland. Op de kaart staat maar een klein gedeelte van deze republiek. Het grootste ge- deelte ligt in het werelddeel Azië, ten oosten van het Oeralgebergte. Moskou is de hoofdstad. 
Verschillende volken Er wonen ruim 144 miljoen 
mensen. Dat zijn vooral Russen, maar ongeveer een vijfde deel van de bevolking hoort bij een van de andere 48 bevolkingsgroepen. Zo zijn er Jakoeten, Evenken, Oed- moerten, Kareliërs en Wolga- Tataren, om er maar een paar te noemen. Ze spreken naast het Russisch ook nog een eigen taal. De meeste Russen wonen overi- gens in het Europese deel. 
Uitgestrekte bossen Het Europese deel van Rusland bestaat voornamelijk uit laagland. In het noorden, in de poolstreek, liggen uitgestrekte vlakten: de toendra's. In de winter zijn deze met sneeuw en ijs bedekt. In de zomer groeit er alleen mos. Meer naar het zuiden liggen uitgestrekte bossen met naaldbomen. Er wordt hier veel aan bosbouw gedaan. In het midden en zuiden liggen landbouwgebieden. Akkerbouwers verbouwen er granen en suikerbiet- en. Veeboeren houden vooral runderen, varkens, kippen en paarden. In Rusland wordt verder veel vis diep ingevroren en geëx- porteerd naar het buitenland. 
Rijk aan delfstoffen 
In de bodem zitten allerlei delf- stoffen, vooral in het Aziatische deel. Hier wordt aardolie, aardgas, steenkool, ijzererts, koper, goud en andere metalen gedolven. Ook is er aardig wat industrie. Voor alle industrie is veel energie nodig. Er zijn honderden centrales voor de opwekking van elektriciteit. Ook zijn er kerncentrales. 
Veel delfstoffen gaan naar het buitenland, maar producten die in Rusland gemaakt zijn, worden nauwelijks geëxporteerd. 

Basiliuskathedraal in Moskou 
Oekraïne - Wit-Rusland - Moldavië- Turkije 
Rode Plein 
In een groot land als Rusland is veel te zien. In Moskou ligt het Rode plein met het Kremlin. Het is eigenlijk een oud kasteel. Nu zit hier de regering met de president. Sint-Petersburg was vroeger de hoofdstad van Rusland. Hier vind je nog de oude koninklijke paleizen van de tsaar. De tsaren heersten drie eeuwen over Rusland. 
Oekraïne 
Oekraïne is het op één na grootste land van Europa. Het is een repu- bliek. De hoofdstad is Kiev. De meeste van de 43,9 miljoen Oekraïners spreken Oekraïens. In het oosten wonen veel Russen die een zelfstandig land willen. Er woedt daarom sinds 2014 een burgeroorlog in het oosten. In datzelfde jaar heeft Rusland het schiereiland de Krim bezet om de Russen daar te 'beschermen'. 
Vruchtbare zuiden 
Het landschap is vlak en in het zuiden is de grond vruchtbaar. Bergen vind je in het westen aan de grens met Roemenië en Polen. In het noorden zijn bossen, die hout leveren. 
Er stromen drie grote rivieren door het land: de Dnjepr, de Dnjestr en de Donets. 
In het zuiden van het land zijn uitgestrekte landbouwgebieden. Hier wordt tarwe, mais, zonne- bloemen en katoen verbouwd. Er is ook veeteelt en tuinbouw, waar groenten en fruit worden geteeld. In Oekraïne zijn nog veel kolenmijnen. Ook wordt er aardolie, aardgas en ijzererts gevonden. Rond Kiev, Charkov en Lviv ligt de meeste industrie. 
Zwarte Zee 
De stad Odessa trekt veel toeristen. Bij deze stad liggen veel stranden aan de kust van de Zwarte Zee. Het water van deze zee is lekker warm. 
Wit-Rusland 
De republiek Wit-Rusland ligt ten noorden van Oekraïne. De hoofd- stad is Minsk en er wonen 9,4 miljoen Wit-Russen. 
In het Wit-Russisch heet het land Belarus. 
Een groot deel van het land is met bos bedekt. Er wordt dan ook veel 
hout geproduceerd. In het noorden is akkerbouw en veeteelt. In de chemische industrie worden onder andere kunststoffen en kunstmest gemaakt. De meeste handel vindt plaats met Rusland. 
Moldavië 
Moldavië is een kleine republiek. Er wonen 3,3 miljoen Moldaviërs die Roemeens spreken. Dit komt omdat vroeger een groot deel van dit land bij Roemenië hoorde. De hoofdstad is Chişinău. 
De grond in Moldavië is vruchtbaar en heel geschikt voor landbouw. Veel mensen werken nog als boer. Er wordt onder andere fruit, groen- ten, druiven en tabak verbouwd. De veeboeren houden vooral varkens. Er zijn weinig delfstoffen te vinden. Deze moeten ingevoerd worden vanuit Rusland. In de fabrieken worden vooral machines gemaakt. 
C⭑ 
Turkije 
De republiek Turkije ligt voor het grootste deel in Azië. Een heel klein gedeelte ligt in Europa. Er wonen zo'n 82 miljoen mensen. Turken worden ze genoemd en ze spreken Turks. De hoofdstad is Ankara. In het oosten wonen Koerden, een volk dat verspreid is over meer landen in de buurt. Het liefst zouden zij een eigen land willen. 
Hoogvlaktes 
Het grootste deel van Turkije ligt hoog met veel berggebieden en hoge toppen. Ook zijn er grote hoogvlaktes, vooral in het midden en oosten van Anatolië. Dit hoog- land heeft een landklimaat met hete, droge zomers en strenge winters. Hier en daar zijn er zout- steppen en enkele zoutmeren ontstaan. De vlaktes zijn dor en er groeien bijna geen bomen. De vee- boeren houden er vooral schapen. Langs de kust vind je tuinders. Ze kweken zuidvruchten, zoals olijven, vijgen en citrusvruchten. Er wordt ook katoen, tabak en thee geteeld. 
Mooie tapijten 
Er worden in Turkije verschillende delfstoffen gedolven; ijzererts, kop- er, zink, lood, aardolie en chroom. In en bij de grote steden staan de meeste fabrieken. De textiel- industrie is belangrijk. Er worden 
19109 
De Aya Sophia moskee in Istanboel. 
onder andere mooie tapijten, kelims en katoenen stoffen gemaakt. Veel handel gaat naar Europa, maar Turkije richt zich de laatste tijd steeds meer op de landen in het westen van Azië. 
Istanboel 
Toerisme is in Turkije belangrijk. Veel mensen bezoeken Istanboel. Vroeger heette deze stad Constan- tinopel en was eeuwenlang één van de belangrijkste steden van Europa. Istanboel ligt aan de Bos- porus. Een lange brug verbindt hier het Europese en Aziatische deel van Turkije met elkaar. Ook de kust met de Middellandse Zee is een geliefde vakantiebestem- ming voor toeristen. Dit gebied wordt ook wel de Turkse Rivièra genoemd. De bekendste badplaats in dit gebied is Antalya. 
Kaukasus 
Ten zuiden van het Kaukasus gebergte liggen drie landen op de grens van Europa en Azië. In Georgië is veel wijnbouw. Op de hooggelegen weiden wonen in deze landen veeboeren. De hoofd- stad is Tiblisi. 
In Azerbeidzjan wordt veel aardolie gewonnen, vooral in de omgeving van de hoofdstad Baku. Armenië is vooral bekend vanwege het fruit, onder andere door de perzikken die er groeien. Jerevan is de hoofdstad. 
De drie republieken kennen veel problemen tussen bevolkings- groepen en er breken regelmatig conflicten uit. 
Displaying Book2_Questions.txt.`,

};
