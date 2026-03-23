**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou, minimální velikost 16px
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
•	Vyvážené použití bílého prostoru (white space)
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
•	Dej si záležet na patičce webu
•	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (místo „404“ dej Buď to funguje. Nebo ne.
A tahle stránka zrovna nefunguje.
•	Možná je odkaz starý, překlikla ses, nebo tu stránku už nenajdeš.
To se stává.
•	👉 Vrať se na úvod a pojďme to dát do pořádku.
•	Tlačítko:
Zpátky na hlavní stránku
•	) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie (používej font awesome, ne emotikony)
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
•	Omezený počet barev (2-3 hlavní + neutrální)
•	Primární barva pro CTA (call-to-action) tlačítka
•	Neutrální jemné barvy pro pozadí 
•	Pro text #2B2B2B
•	Brand barvy (HEX): 
•	pozadí: #FFF9F2 – použij na cely web jednolite pozadi této barvy
•	zvýraznění modulu či sekce pozadí: #FDF3EA – tuto barvu můžeš použít pouze jako zpestření, vyjimecne 
•	primární: #D8A7A0 
•	akcent: #EBC3A4 (klidně přidej) 
•	zlatá: #C6A15B 
•	tmavá: #2F3E34 
•	text: #2B2B2B 

Nadpisy klidně použij barevně, líbilo by se mi, kdyby barva tlačítka korespondovala s barvou velkých nadpisů třeba

**Fonty**
•	Brandový font: NADPISY: Cormorant Garamond, TEXTY: Raleway

**Struktura**
•	více stránkový web
•	Položky menu: Domů
Služby
Ukázky práce
O mně
Blog
Kontakt
•	

**Další prvky na webu**
•	Vlož odkaz na FB: Facebook do patičky
•	Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu https://formspree.io/ 

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 

**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/hero– pro Hlavní stranu (hero sekce atd.)
Obrazky/ukazky/eva, petra, jana, Bara – pro ukázky webu
Obrazky/omne – pro stránku O mně 
Obrazky/paticka – do paticky 
Obrazky/Ikonky/ - z této složky vyber vhodné ikonky, na webu to nepřeháněj, vyber jenom pár. Určitě chci do patičky po tel a mail. Barvy přizpůsob stylu webu.
Obrazky/reference/jana, petra, bara, eva=eva maricova, evaO=eva orsel, Kristy, adela, ivana – vyber fotky a vloz k odpovídajícím referencim dle jmena
Obrazky/logo – použij logo. Barvu uprav vždy tak, jak potřebuješ aby se hodilo barevně k webu

**texty**
Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej. Vše, co bude mezi těmito znaky ** **
 ber jako instrukce, jak mas ztvartnit. Mimo  tyto znaky je text, který mas pouzit

🟢 HOMEPAGE
 
**HERO**
Buď to funguje. Nebo ne.
Pomáhám podnikatelům nastavit a poskládat online podnikání tak, aby fungovalo jako celek – ne jako chaos jednotlivých nástrojů.
**👉 CTA:**
Pojďme se na to podívat spolu
 
**SEKCE: REALITA**
Když to nefunguje, poznáte to rychle
• máte službu nebo nápad… ale nemáte ho kde smysluplně prezentovat
• máte web… ale nepřináší klienty
• máte produkty… ale neprodávají samy
• používáte několik nástrojů… ale nejsou propojené
• něco nastavíte… a za chvíli to řešíte znovu
A hlavně:
• zabírá vám to víc času, než by mělo
• a stejně nemáte jistotu, že to děláte správně
________________________________________
Na první pohled to často vypadá, že „už skoro všechno máte“.
Ale ve skutečnosti to není propojené.
Není v tom systém.
Nedává to smysl jako celek.
________________________________________
A pak se není čeho chytit.
 
**SEKCE: ŘEŠENÍ**
S tím vám pomůžu
Podívám se na vaše podnikání jako na celek.
Ujasníme si, co má opravdu smysl.
Co chybí.
A co je naopak zbytečné.
Někdy je potřeba věci zjednodušit.
Jindy správně nastavit a propojit.
________________________________________
Navrhnu řešení a pak ho pro vás postavím tak, aby fungovalo.
Ne jako jednotlivé části.
Ale jako systém.
________________________________________
Jednoduše.
Logicky.
Funkčně.


**SEKCE: CO PRO VÁS MŮŽU UDĚLAT**
Co pro vás můžu udělat
• vytvořit web od začátku
• upravit nebo zjednodušit ten stávající
• navrhnout strukturu, aby dávala smysl
• vytvořit stránky, které prodávají vaše služby nebo sbírají kontakty
• propojit web, e-maily a prodej tak, aby spolu fungovaly
• nastavit automatizace a členské sekce
________________________________________
Ne jako jednotlivé části.
Ale jako funkční celek.
 
**SEKCE: JAK MŮŽEME ZAČÍT**
Můžeme začít dvěma způsoby
 
🟢 Chci si to nejdřív ujasnit
Podíváme se na vaše podnikání, najdeme slabá místa a navrhnu vám konkrétní řešení.
👉 Konzultace
 
🔵 Vím, co chci – potřebuju to postavit
Máte jasnou představu a hledáte někoho, kdo to zvládne technicky zrealizovat.
👉 Podíváme se na zadání a domluvíme se na spolupráci.
 
👉 CTA:
Napište mi nebo zavolejte a domluvíme se
 
**SEKCE: UKÁZKY PRÁCE, zde si přeju, abys to ztvárnil nějak tak, že napíšeš něco o podnikatelce, přidáš její referenci a k tomu bude screenshot webu – pro to použij Scroll image. na web dej z těchto dlouhých referencí:
zkrácenou verzi (2–3 věty)
a pod to tlačítko:
👉 „Zobrazit celou referenci“**
Ukázky práce

Jana Ondrušková
fyzioterapie pro miminka, děti i dospělé
Jana má silnou odbornou praxi a dlouhodobě pomáhá dětem i rodičům.
Chtěla své služby rozšířit i do online prostředí, ale potřebovala je uchopit tak, aby dávaly smysl a fungovaly jako celek.
Společně jsme vytvořily web, nastavily e-mailing, připravily magnety a prodejní systém včetně členské sekce.
Vše jsme propojily tak, aby na sebe jednotlivé části navazovaly a Jana měla funkční základ pro další rozvoj.
👉 spolupráce pokračuje dál
Reference od jany: Protože jsem chtěla rozjet mé on-line podnikání,tak jsem si zakoupila velký kurz,kde mě krok po kroku naváděli,abych si vše potřebné nastavila. Pro mě jako nepolíbenou technickými dovednostmi to bylo velmi časově náročné. Narazila jsem tam ale na skvělou virtuální asistentku a webařku Martinu a ta mi pomohla s technickými záležitostmi a já musím říct, že jsem nadmíru spokojená. Vytvořila mi krásný nový web, propojila platby,zajistila e-maily potřebné k objednávkám – vše rychle, efektivně a s maximální precizností. Oceňuji její ochotu, komunikaci a schopnost najít vždy řešení na míru. Pokud hledáte spolehlivého odborníka na web a technické záležitosti, Martinu mohu jedině doporučit!

Barbora Lacena
estetická kosmetika a vzdělávání kosmetiček
Barbora je zkušená profesionálka v oblasti estetické kosmetiky a školení.
Přišla za mnou s cílem vytvořit web a nastavit online prodej svých kurzů.
Navrhla jsem strukturu, vytvořila web a nastavila celý proces – od registrace přes prodej až po navazující e-mailing.
Dnes má své kurzy postavené jako funkční systém, který dává smysl jí i jejím klientkám.

Ref: Než jsem začala spolupracovat s Martinou, byla jsem v technických věcech úplně ztracená. Web, nastavení, e-shop… všechno mi zabíralo spoustu času a pořád jsem řešila, co kde nefunguje. Měla jsem v tom chaos a spousta věcí nebyla nastavená správně.
S Martinou tohle zmizelo během chvíle. Je milá, trpělivá a všechno dokáže vysvětlit jednoduše a srozumitelně. Zároveň tomu opravdu rozumí a dokáže to převést do reality.
Web, který vytvořila, je přesně podle mě – není to žádná šablona, ale stránky, ve kterých vidím sebe, svůj styl i svoje podnikání.
Dnes díky ní šetřím čas i nervy. Vím, že je o web i e-shop postaráno a můžu se věnovat svojí práci, klientkám a tvorbě obsahu. Je obrovská úleva mít za sebou člověka, který ví, co dělá – a dělá to dobře.
Pokud nad spoluprací s Martinou váháte, opravdu nemusíte. Je spolehlivá, schopná a hlavně lidská – a to se dnes cení nejvíc

________________________________________
Petra – Krotitelka šatníku
osobní styl a práce s šatníkem
Petra pomáhá ženám najít vlastní styl a vytvořit šatník, který funguje v každodenním životě.
Chtěla své služby rozšířit i do online podoby a dát jim jasnější strukturu.
Společně jsme vytvořily web, nastavily členskou sekci a automatizovaný prodej jejích programů.
Dnes má své služby přehledně uchopené a připravené pro další růst.
👉 spolupracujeme dlouhodobě

Ref: "Chtěla jsem jen jedno – aby byl můj web hezký. A přesně to se mi splnilo. Martina nejenže všechno skvěle naprogramovala, ale hlavně nad věcmi opravdu přemýšlela. Nic nebylo jen „Tak to děláme vždycky“, naopak – hledala řešení, která budou dávat smysl pro mě a můj projekt. Komunikace byla rychlá, operativní a hlavně vždy v pohodě.
 Žádné složitosti  Žádné tlačení do něčeho, co nechci
Prostě spolupráce, jakou si člověk přeje. Jestli hledáte někoho, kdo váš web udělá hezký (a zároveň funkční), Martina je jasná volba!"- Petra

________________________________________
Eva Mařicová
práce s tělem, myslí a přírodou
Eva propojuje práci s tělem, přírodou a vnitřním prožíváním.
Na začátku jsme společně pracovaly na strategii – ujasnění směru, služeb a celkového uchopení jejího podnikání.
Na tom jsme postavily web a základní strukturu jejího brandu tak, aby byla srozumitelná a autentická.
Další kroky postupně rozvíjíme.
Ref: Dlouho jsem chtěla mít vlastní web. Jednou jsem už spolupráci s jinou webařkou začala, ale nakonec jsme ji nedokončily – nebylo to ono.
Na Martinu jsem si vzpomněla proto, že jsem věděla, jak je precizní a že dokáže přizpůsobit řešení na míru. Dělám více věcí najednou, a tak pro mě bylo těžké uchopit koncept webu jako celek.
Začaly jsme první verzí na základě dotazníku, ale brzy jsme obě cítily, že tudy cesta nevede. Martina mě do ničeho netlačila – naopak přišla s jiným přístupem, novými nápady a dala mi prostor věci promyslet.
Velkým posunem byly i texty – pomohla mi je ujasnit, nasměrovat a dotáhnout do finální podoby.
Web nakonec vznikl a i když na něm budeme dál postupně pracovat, už teď mám jasný základ, o který se můžu opřít.
Děkuji za trpělivost a individuální přístup. Pokud hledáte někoho, kdo vám pomůže vytvořit web na míru a opravdu se přizpůsobí vaší situaci, Martinu doporučuji všemi deseti.

 
**SEKCE: REFERENCE- zde dopln i ty ref ze sekce ukázky, zde budou všechny**
Co říkají klienti
Martina je přesně typ asistentky, kterou si online podnikatelka přeje mít na dlouhodobou intenzivní spolupráci
Pokud bych měla popsat dokonalou virtuální asistentku, měla by tyto kvality: 100% spolehlivost, inteligence, samostatnost, pečlivost, rychlost, pracovitost, loajalita. A to jsou přesně kvality, které má Martina Vašnovská. Její energie je nakažlivá a namotivuje vás k dokončení všeho, co máte zatím jen v hrubých obrysech v hlavě. Těžko lze slovy vyjádřit, jakou úlevu přináší člověku možnost předat technickou část podnikání někomu schopnému, o kom víte, že: to udělá lépe než vy, za kratší čas, ušetří vám tím spoustu energie a přinese dokonalý výsledek.Martina je přesně typ asistentky, kterou si online podnikatelka přeje mít na dlouhodobou intenzivní spolupráci a já jsem velmi vděčná pokaždé, když otevřu zprávu s nadpisem “HOTOVO”. Martinu doporučuji každému, kdo chce podnikat efektivně, naplno využívat svou zónu génia a neztrácet zbytečně čas a energii čímkoliv jiným.
Adéla Vejvodová, zakladatelka MINDSET BOOSTER

Jsem zatím se spoluprací moc spokojená, už mi i od Martiny přišly nápady na zlepšení. Přemýšlí o věcech a má přehled, co je potřeba a co funguje.
Trvalo to… moc jsem chtěla tvořit blog, jenže se mi to na webu nějak pokazilo, nefungovalo to a já neměla kapacitu přijít na to, jak na to:-).
Nějak jsem se zdráhala říct o pomoc… a tak blog několik měsíců stál.
Až mi přišla to cesty Martina Vašnovská, no já mám svoji VA :-). Chtěla jsem tady Martinu vychválit. Martina je velice praktická, precizní a rychlá.
Neptá se zbytečně, poradí si s mnohým sama podle vlastního úsudku.
Je velice trpělivá :-). Co mi přijde skvělý, tak že kromě klasického portfolia VA zvládne i web… a tak mi zprovoznila ten blog, vytvořila šablonu a ukázala mi, jak to celý používat, abych to zase celý nezmatlala 🙂 Jsem zatím se spoluprací moc spokojená, už mi i od Martiny přišly nápady na zlepšení. Přemýšlí o věcech a má přehled, co je potřeba a co funguje.
Už si Martinu na pomoc nechám, je to taková úleva nemuset všechno sama 🙂
Ivana Dudková, Vyživená žena

Martina odvedla skvělou práci za příznivou cenu k mojí maximální spokojenosti.
Martinu jsem poznala „náhodou“, když jsem si nevěděla rady se svým webem a potřebovala jsem ho upgradovat podle svých představ a zároveň zajistit i jeho propojení a celkovou funkčnost. Byla velice milá, sympatická a ochotná a já jí dala plnou důvěru a rozhodně jsem udělala to nejlepší, co jsem mohla. Stačil jeden videocall, abychom se vzájemně poznaly a nastínily si představu a možnosti a bylo to. Pak už vše frčelo jak na drátkách. Martina odvedla skvělou práci za příznivou cenu k mojí maximální spokojenosti. Pokud hledáte šikovnou a spolehlivou VA, Martina je skvělá volba a mohu ji jen a jen doporučit. Martino, děkuji.
Eva Oršel, Terapie Darová, transformace vztahových nastavení

Martina skvěle a rychle komunikuje, se spoluprací s ní jsem spokojená.
Martinu jsem potkala v online prostoru. Hledala jsem, kdo by mi pomohl s mým webem a technickým nastavení online podnikání. Martina skvěle a rychle komunikuje, se spoluprací s ní jsem spokojená. Teď aktuálně mi řešila celé nastavení ohledně produktu – magnetu zdarma. Jde o sběr kontaktů pro mou službu naladění na talenty a potenciál. Byla v intenzivním kontaktu s podporou Ecomailu, kam jsem nedávno přecházela. Pravděpodobně by mi trvalo opravdu dlouhou dobu nastavit vše technicky právě v Ecomailu, pokud bych měla dělala sama. Protože se tam vyskytlo nějaké technické nastavení, které jsme chtěly u mě na webu řešit jinak.
Marťa mi přeposílala celou komunikaci s Ecomailem, takže jsem byla v obraze a věděla jsem, co se děje. Děkuji za vyřešení. Plánuju udělat větší propagaci mého online kurzu s dětskou jógou, a Marťa mi zase bude dělat „technickou oporu v zádech.“
Kristy Roller
 
**SEKCE: JAK PRACUJI**
Jak pracuji
Nečekám, že budete rozumět technickým věcem.
Všechno vám vysvětlím tak, aby vám to dávalo smysl.
Po celou dobu víte, co se děje.
Proč to děláme.
A co z toho budete mít.
________________________________________
Nemusíte nic složitě řešit ani dohledávat.
Provedu vás celým procesem a nastavím to tak, aby to fungovalo jako celek.
 
**SEKCE: PROČ TO DĚLÁM**
Proč to celé dělám
Miluju cestování.
Ale pro mě svoboda neznamená pracovat z pláže.
Je to mít klid na práci, která dává smysl.
A svobodu si vybírat, kdy pracuju, s kým a na čem.
Díky tomu, že mám věci nastavené chytře, si to můžu dovolit.
A přesně tak pomáhám nastavit podnikání i svým klientům.
 
**SEKCE: ČASTÉ OTÁZKY**
Možná vás napadá
 
❓ Musím si nejdřív zaplatit konzultaci?
Ne.
Pokud víte, co chcete vytvořit, můžeme rovnou řešit realizaci.
Konzultace je pro ty, kdo si chtějí ujasnit směr, posunout své podnikání nebo dát věcem větší smysl.
Podíváme se na to jako na celek – co funguje, co ne, a kde má smysl věci zjednodušit, propojit nebo rozšířit (např. prodejní systém, automatizace, další kroky).
 
❓ Kolik stojí web nebo spolupráce?
Každý projekt je jiný.
Menší weby začínají přibližně od 12–20 tisíc Kč, komplexnější řešení podle rozsahu.
Ráda vám řeknu konkrétní odhad podle vašeho zadání.
 
❓ Co když chci jen web a nic dalšího?
To je v pořádku.
Udělám vám web.
Jen vás upozorním na věci, které by dávaly smysl řešit – a je na vás, jestli je využijete.
 
❓ Pomůžete mi i s tím, jak to celé nastavit?
Ano.
Ale ne formou teorie.
Navrhnu řešení a pak ho rovnou postavíme.
 
❓ Jak dlouho spolupráce trvá?
Záleží na rozsahu.
Menší projekty v řádu týdnů, větší podle složitosti.
Vždy se domlouváme individuálně.
 
❓ Co když už něco mám a potřebuji to jen upravit?
I to je možné.
Často pracuji s tím, co už existuje – a pomůžu to zjednodušit nebo poskládat tak, aby to fungovalo.
 
❓ Budu to umět používat?
Ano.
Vysvětlím vám, jak s tím pracovat, nebo připravím jednoduché videonávody.
 
 
**SLUŽBY**
 
Konzultace
Když potřebujete jasno
Máte pocit, že vám to celé nedává smysl?
Nebo řešíte konkrétní problém a nevíte, kudy dál?
Podíváme se na to spolu.
________________________________________
Během konzultace:
• projdeme vaši situaci
• pojmenuju, co nefunguje
• navrhnu konkrétní další kroky
________________________________________
Odcházíte s jasným plánem.
Ne s dalšími otevřenými otázkami.
👉 Pokud už máte jasno, můžeme rovnou řešit realizaci.
💰 Cena:
90 minut – 2 000 Kč
________________________________________
Realizace
Když chcete, aby to někdo postavil
Máte představu, co chcete vytvořit –
a hledáte někoho, kdo to zvládne technicky zrealizovat?
Podívám se na vaše zadání, případně ho pomůžu doladit.
A pak to pro vás postavím.
Web, stránky, napojení, automatizace.
Ale hlavně:
Aby to celé fungovalo dohromady.
________________________________________
👉 Konkrétní cenu vždy navrhnu podle rozsahu a zadání.
________________________________________
Technická spolupráce
Když potřebujete pomoct průběžně
Máte už systém rozjetý a potřebujete ho upravovat, rozšiřovat nebo ladit?
Můžeme spolupracovat i průběžně.
💰 Cena:
od 900 Kč / hod
 
**O MNĚ**
Jmenuji se Martina Vašnovská.
Miluju cestování, dlouhé túry, kávu a technickou práci na počítači.
Ve volném čase ráda trávím čas s rodinou a psem, učím se nové věci a čtu.
V IT pracuji od roku 2007 – jako testerka software a administrátorka SAPu.
Řešení problémů, hledání souvislostí a práce se systémy je pro mě přirozené prostředí.
Zároveň mě ale baví i druhá strana – kreativita, práce s lidmi a komunikace.
Proto dnes propojuju technické know-how s online podnikáním.
Tvořím weby, nastavuju systémy a pomáhám podnikatelům dát jejich práci smysl.
Tak, aby věci fungovaly jednoduše, logicky a jako celek.
A zároveň tak, aby jim podnikání nechávalo prostor i na život.
 
**BLOG**
Píšu si věci, které nechci zapomenout.
Z cest, z práce i ze života.

Blog se zatím připravuje
 
**KONTAKT – bude jen v patičce, menu kotva do patičky**
Chcete to probrat?
Napište mi/zavolejte a domluvíme se.
 

+420 724 540 632

virtualni@martinavasnovska.cz
 
Martina Vašnovská
 
IČ: 86928783
Ahepjukova 2796/27, 702 00, Ostrava – Moravská Ostrava
Úřad příslušný podle §71 odst.2 živnostenského zákona: Magistrát města Ostravy
