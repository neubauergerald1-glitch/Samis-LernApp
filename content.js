/* =========================================================
   INHALT: Biologie (Test 12.11.) – fest eingebaut.
   Weitere Fächer werden in der App über "Fach hinzufügen" angelegt.
   ========================================================= */
const BUILTIN = [{
  id: "bio", name: "Biologie", test: "2026-11-12", builtin: true,
  topics: [
  { id: "fossil", name: "Evolution & Fossilien",
    cards: [
      {q:"Was versteht man unter Evolution?", a:"Die langsame Entwicklung und Veränderung der Lebewesen über Millionen von Jahren – von einfachen zu immer vielfältigeren Formen (Stammesgeschichte)."},
      {q:"Was ist ein Fossil?", a:"Überreste oder Spuren von Lebewesen aus früheren Zeiten, die älter als 10.000 Jahre sind (meist versteinert)."},
      {q:"Nenne 3 Beispiele für Fossilien.", a:"Dinosaurierknochen, versteinerter Haizahn, Insekt im Bernstein (auch: Abdruck eines Farnblatts, versteinerte Fußspuren, Ammonit)."},
      {q:"Was ist ein lebendes Fossil? Beispiele!", a:"Ein Lebewesen, das heute noch lebt und sich seit Millionen von Jahren kaum verändert hat. Beispiele: Quastenflosser, Ginkgo, Pfeilschwanzkrebs, Nautilus."},
      {q:"Was ist ein Leitfossil? Nenne ein Beispiel.", a:"Ein Fossil einer Art, die nur kurze Zeit, aber weit verbreitet gelebt hat. Findet man es, weiß man, wie alt die Gesteinsschicht ist. Beispiel: Ammonit (Erdmittelalter), Trilobit (Erdaltertum)."}
    ],
    quiz: [
      {type:"mc", q:"Was versteht man unter Evolution?", options:["Die allmähliche Entwicklung der Lebewesen über sehr lange Zeiträume","Das gleichzeitige Entstehen aller Tiere an einem Tag","Das Aussterben der Dinosaurier","Die Entstehung von Gesteinen und Bergen"], correct:0, explain:"Evolution = Stammesgeschichte: Lebewesen verändern sich über Millionen Jahre."},
      {type:"mc", q:"Ab welchem Alter nennt man Überreste von Lebewesen ein Fossil?", options:["Älter als 10.000 Jahre","Älter als 100 Jahre","Älter als 1.000 Jahre","Älter als 1 Milliarde Jahre"], correct:0},
      {type:"mc", q:"Welches davon ist KEIN Fossil?", options:["Ein Hühnerknochen vom letzten Sonntagsessen","Ein Insekt im Bernstein","Ein versteinerter Haizahn","Versteinerte Fußspuren eines Sauriers"], correct:0, explain:"Fossilien müssen älter als 10.000 Jahre sein."},
      {type:"tf", q:"Ein Insekt, das in Bernstein eingeschlossen ist, ist ein Fossil.", answer:true, explain:"Bernstein ist versteinertes Baumharz – darin bleiben Insekten Millionen Jahre erhalten."},
      {type:"tf", q:"Ein lebendes Fossil ist ein Lebewesen, das sich seit Millionen Jahren kaum verändert hat.", answer:true},
      {type:"mc", q:"Welches ist ein lebendes Fossil?", options:["Ginkgo","Tyrannosaurus","Mammut","Archaeopteryx"], correct:0, explain:"Den Ginkgo gibt es seit dem Erdmittelalter fast unverändert. Die anderen sind ausgestorben."},
      {type:"mc", q:"Wozu verwendet man Leitfossilien?", options:["Um das Alter von Gesteinsschichten zu bestimmen","Um Erdöl zu verbrennen","Um zu zeigen, wo Tiere heute leben","Um Dinosaurier zu klonen"], correct:0},
      {type:"mc", q:"Welches Leitfossil ist typisch für das Erdmittelalter?", options:["Ammonit","Trilobit","Mammut","Ginkgo"], correct:0, explain:"Ammonit = Erdmittelalter, Trilobit = Erdaltertum."},
      {type:"tf", q:"Ein Leitfossil hat nur kurze Zeit gelebt, war aber weit verbreitet.", answer:true},
      {type:"tf", q:"Der Quastenflosser ist schon vor 65 Millionen Jahren ausgestorben.", answer:false, explain:"Das dachte man lange. 1938 wurde vor Südafrika ein lebender Quastenflosser gefangen – ein lebendes Fossil."}
    ]},
  { id: "alt", name: "Erdurzeit & Erdaltertum",
    cards: [
      {q:"In welche 4 großen Zeitalter teilt man die Erdgeschichte ein?", a:"Erdurzeit → Erdaltertum → Erdmittelalter → Erdneuzeit (von alt nach jung)."},
      {q:"Wer produziert in der Erdurzeit anfangs den Sauerstoff, und was bildet dieser?", a:"Bakterien (Blaualgen/Cyanobakterien). Der Sauerstoff bildet die Atmosphäre (Lufthülle) mit der schützenden Ozonschicht."},
      {q:"Wo entwickeln sich die ersten Lebewesen? Nenne drei Mehrzeller.", a:"Im Meer. Erste Mehrzeller: Quallen, Schwämme, Grünalgen."},
      {q:"Wie wird das Devon genannt?", a:"Zeitalter der Fische."},
      {q:"Wer besiedelt zuerst das Festland? Welche Tiergruppe mit welchem Vertreter betritt dann das Land?", a:"Zuerst die Pflanzen. Dann gehen Fische an Land: Aus dem Quastenflosser entwickeln sich die ersten Amphibien (Lurche)."},
      {q:"Nenne 2 Pflanzen, die im tropischen Klima des Erdaltertums gut gediehen.", a:"Baumfarne und Schachtelhalme (auch Bärlappgewächse wie Schuppenbäume)."},
      {q:"Welche Tiere bevölkern die Sumpfwälder im Karbon und warum sind sie größer als heute?", a:"Riesige Insekten (z. B. Libellen mit ca. 70 cm Flügelspannweite) und Lurche. Sie konnten so groß werden, weil die Luft viel mehr Sauerstoff enthielt als heute."},
      {q:"Wann entstehen die Vorläufer der Säugetiere?", a:"Am Ende des Erdaltertums, beim Übergang vom Karbon zum Perm (säugetierähnliche Reptilien)."}
    ],
    quiz: [
      {type:"order", q:"Bring die 4 Erdzeitalter in die richtige Reihenfolge – das älteste zuerst.", items:["Erdurzeit","Erdaltertum","Erdmittelalter","Erdneuzeit"]},
      {type:"mc", q:"Wer produzierte in der Erdurzeit als Erstes Sauerstoff?", options:["Bakterien (Blaualgen)","Dinosaurier","Vulkane","Laubbäume"], correct:0},
      {type:"mc", q:"Was bildete dieser Sauerstoff?", options:["Die Atmosphäre mit der Ozonschicht","Die Kontinente","Die Ozeane","Den Erdkern"], correct:0},
      {type:"mc", q:"Wo entwickelten sich die ersten Lebewesen?", options:["Im Meer","An Land","In Höhlen","Im Eis der Pole"], correct:0},
      {type:"mc", q:"Welche drei gehören zu den ersten Mehrzellern?", options:["Quallen, Schwämme, Grünalgen","Mammut, Fische, Farne","Insekten, Lurche, Saurier","Vögel, Pilze, Moose"], correct:0},
      {type:"mc", q:"Wie wird das Devon genannt?", options:["Zeitalter der Fische","Zeitalter der Saurier","Zeitalter der Säugetiere","Zeitalter der Vögel"], correct:0},
      {type:"mc", q:"Wer besiedelte ZUERST das Festland?", options:["Die Pflanzen","Die Dinosaurier","Die Säugetiere","Die Vögel"], correct:0},
      {type:"mc", q:"Aus welchem Fisch entwickelten sich die ersten Amphibien (Lurche)?", options:["Quastenflosser","Hai","Karpfen","Ichthyosaurier"], correct:0, explain:"Der Quastenflosser hatte kräftige, knochige Flossen – fast schon wie Beine."},
      {type:"mc", q:"Welche zwei Pflanzen wuchsen in den tropischen Sumpfwäldern des Erdaltertums?", options:["Baumfarne und Schachtelhalme","Rosen und Tulpen","Eichen und Buchen","Kakteen und Sonnenblumen"], correct:0},
      {type:"mc", q:"Warum waren die Insekten im Karbon so riesig?", options:["Die Luft enthielt viel mehr Sauerstoff","Es gab damals schon Menschen, die sie fütterten","Es war extrem kalt","Sie lebten alle im Meer"], correct:0},
      {type:"tf", q:"Im Karbon gab es Libellen mit etwa 70 cm Flügelspannweite.", answer:true},
      {type:"mc", q:"Wann entstanden die Vorläufer der Säugetiere?", options:["Beim Übergang vom Karbon zum Perm","In der Erdneuzeit","In der Erdurzeit","Vor 10.000 Jahren"], correct:0},
      {type:"order", q:"Ordne diese Abschnitte des Erdaltertums – der älteste zuerst.", items:["Devon","Karbon","Perm"]}
    ]},
  { id: "mittel", name: "Erdmittelalter & Urvogel",
    cards: [
      {q:"Durch welche Tiere ist das Erdmittelalter geprägt?", a:"Durch die Saurier (Dinosaurier) – es ist das Zeitalter der Saurier."},
      {q:"In welche 3 Zeitabschnitte gliedern wir das Erdmittelalter?", a:"Trias → Jura → Kreide."},
      {q:"Wie heißt der Urvogel und aus wem entwickelt er sich?", a:"Archaeopteryx. Er hat sich aus Reptilien (kleinen Raubsauriern) entwickelt."},
      {q:"Nenne je 3 Reptilien- und Vogelmerkmale des Archaeopteryx.", a:"Reptil: Zähne im Kiefer, lange Schwanzwirbelsäule, Krallen an den Flügeln (Fingern). Vogel: Federn, Flügel, Vogelfuß (auch: Gabelbein)."},
      {q:"Wie endet das Zeitalter der Saurier vermutlich?", a:"Durch den Einschlag eines riesigen Meteoriten (KT-Meteorit) vor etwa 65 Millionen Jahren."}
    ],
    quiz: [
      {type:"mc", q:"Durch welche Tiere ist das Erdmittelalter geprägt?", options:["Saurier","Säugetiere","Trilobiten","Riesenlibellen"], correct:0},
      {type:"order", q:"Ordne die 3 Abschnitte des Erdmittelalters – der älteste zuerst.", items:["Trias","Jura","Kreide"]},
      {type:"mc", q:"Wie heißt der Urvogel?", options:["Archaeopteryx","Ichthyosaurier","Iguanodon","Megalosaurus"], correct:0},
      {type:"mc", q:"Aus welcher Tiergruppe entwickelte sich der Urvogel?", options:["Aus Reptilien (Sauriern)","Aus Säugetieren","Aus Fischen","Aus Insekten"], correct:0},
      {type:"mc", q:"Welches ist ein REPTILIEN-Merkmal des Archaeopteryx?", options:["Zähne im Kiefer","Federn","Flügel","Vogelfuß"], correct:0},
      {type:"mc", q:"Welches ist ein VOGEL-Merkmal des Archaeopteryx?", options:["Federn","Lange Schwanzwirbelsäule","Zähne im Kiefer","Krallen an den Fingern"], correct:0},
      {type:"tf", q:"Der Archaeopteryx hatte eine lange Schwanzwirbelsäule wie ein Reptil.", answer:true},
      {type:"tf", q:"Der Archaeopteryx ist eine Übergangsform zwischen Reptilien und Vögeln.", answer:true},
      {type:"mc", q:"Wie endete das Zeitalter der Saurier vermutlich?", options:["Mit dem Einschlag des KT-Meteoriten","Durch eine Eiszeit mit Mammuts","Durch die ersten Menschen","Durch zu viel Sauerstoff"], correct:0},
      {type:"mc", q:"Vor wie vielen Jahren endete das Erdmittelalter?", options:["Vor ca. 65 Millionen Jahren","Vor ca. 6.500 Jahren","Vor ca. 650 Millionen Jahren","Vor ca. 6,5 Milliarden Jahren"], correct:0},
      {type:"tf", q:"Menschen und Dinosaurier lebten zur gleichen Zeit.", answer:false, explain:"Zwischen den letzten Dinosauriern und den ersten Vormenschen liegen rund 60 Millionen Jahre."}
    ]},
  { id: "neu", name: "Erdneuzeit & unsere Vorfahren",
    cards: [
      {q:"Wann beginnt die Erdneuzeit?", a:"Vor etwa 65 Millionen Jahren (nach dem Aussterben der Saurier). Sie dauert bis heute."},
      {q:"Nenne 3 Säugetierarten, die sich in der Erdneuzeit ausbreiten.", a:"Säbelzahntiger, Mammut, Hauerelefant (auch: Urpferdchen, Antilopen, Wollnashorn)."},
      {q:"Welche Art von Pflanzen tritt in der Erdneuzeit auf?", a:"Blütenpflanzen (Pflanzen mit Blüten, Früchten und Samen) breiten sich aus."},
      {q:"Welchen Vorfahren des Menschen stellt Lucy dar? Was konnte sie schon?", a:"Lucy ist ein Vormensch (Australopithecus), ca. 3,2 Millionen Jahre alt, gefunden in Äthiopien (Afrika). Sie konnte schon aufrecht auf zwei Beinen gehen."},
      {q:"Nenne 3 Funde, die mit unseren Vorfahren zu tun haben.", a:"Lucy (Skelett, Äthiopien), der Toumaï-Schädel (ca. 7 Mio. Jahre, Tschad), versteinerte Fußspuren von Laetoli (ca. 3,6 Mio. Jahre, Tansania)."}
    ],
    quiz: [
      {type:"mc", q:"Wann beginnt die Erdneuzeit?", options:["Vor ca. 65 Millionen Jahren","Vor ca. 250 Millionen Jahren","Vor ca. 4,6 Milliarden Jahren","Vor ca. 2.000 Jahren"], correct:0},
      {type:"mc", q:"Welches Tier breitet sich in der Erdneuzeit aus?", options:["Säbelzahntiger","Trilobit","Tyrannosaurus","Ichthyosaurier"], correct:0},
      {type:"mc", q:"Welche drei sind Säugetiere der Erdneuzeit?", options:["Mammut, Säbelzahntiger, Hauerelefant","Ammonit, Trilobit, Qualle","Archaeopteryx, Iguanodon, Megalosaurus","Libelle, Schachtelhalm, Baumfarn"], correct:0},
      {type:"mc", q:"Welche Art von Pflanzen breitet sich in der Erdneuzeit aus?", options:["Blütenpflanzen","Baumfarne","Grünalgen","Schachtelhalme"], correct:0},
      {type:"mc", q:"Welchen Vorfahren des Menschen stellt Lucy dar?", options:["Einen Vormenschen (Australopithecus)","Einen Neandertaler","Einen heutigen Schimpansen","Einen Saurier"], correct:0},
      {type:"mc", q:"Was konnte Lucy schon?", options:["Aufrecht auf zwei Beinen gehen","Feuer machen","Sprechen","Höhlenbilder malen"], correct:0},
      {type:"mc", q:"Wo wurde Lucy gefunden?", options:["In Äthiopien (Afrika)","In Österreich","In Mexiko","Auf den Galapagos-Inseln"], correct:0},
      {type:"mc", q:"Welcher Fund hat mit unseren Vorfahren zu tun?", options:["Die Fußspuren von Laetoli","Der Burgess-Schiefer","Die Black Smokers","Ein Ammonit"], correct:0},
      {type:"tf", q:"Lucy ist ungefähr 3,2 Millionen Jahre alt.", answer:true}
    ]},
  { id: "ueber", name: "Übergangsformen",
    cards: [
      {q:"Was sind Übergangsformen?", a:"Lebewesen, die Merkmale von zwei verschiedenen Tiergruppen haben. Sie zeigen, wie sich eine Gruppe aus der anderen entwickelt hat."},
      {q:"Archaeopteryx – zwischen welchen Gruppen? Merkmale?", a:"Reptil → Vogel. Reptil: Zähne, lange Schwanzwirbelsäule, Krallen. Vogel: Federn, Flügel."},
      {q:"Quastenflosser / Ichthyostega – zwischen welchen Gruppen? Merkmale?", a:"Fisch → Amphibium. Fisch: Schuppen, Schwanzflosse, Kiemen. Amphibium: Beine (knochige Flossen) und Lunge, um an Land zu gehen."},
      {q:"Schnabeltier – zwischen welchen Gruppen? Merkmale?", a:"Reptil → Säugetier. Reptil: legt Eier. Säugetier: hat Fell und säugt seine Jungen mit Milch."}
    ],
    quiz: [
      {type:"mc", q:"Was ist eine Übergangsform?", options:["Ein Lebewesen mit Merkmalen von zwei Tiergruppen","Ein besonders altes Fossil","Ein Tier, das von Land ins Wasser umzieht","Ein Fossil, mit dem man Gestein datiert"], correct:0},
      {type:"mc", q:"Zwischen welchen Gruppen steht der Archaeopteryx?", options:["Reptilien und Vögel","Fische und Amphibien","Reptilien und Säugetiere","Insekten und Vögel"], correct:0},
      {type:"mc", q:"Zwischen welchen Gruppen steht der Quastenflosser (bzw. Ichthyostega)?", options:["Fische und Amphibien","Reptilien und Vögel","Amphibien und Säugetiere","Fische und Vögel"], correct:0},
      {type:"mc", q:"Zwischen welchen Gruppen steht das Schnabeltier?", options:["Reptilien und Säugetiere","Fische und Vögel","Amphibien und Fische","Vögel und Insekten"], correct:0},
      {type:"mc", q:"Welches Merkmal zeigt beim Schnabeltier die Verwandtschaft zu den Reptilien?", options:["Es legt Eier","Es hat Fell","Es säugt seine Jungen","Es hat eine Lunge"], correct:0},
      {type:"tf", q:"Das Schnabeltier hat ein Fell und säugt seine Jungen mit Milch.", answer:true},
      {type:"mc", q:"Was brauchte ein Fisch, um an Land gehen zu können?", options:["Kräftige Flossen als Beine und eine Lunge","Federn und Flügel","Ein Fell","Einen Schnabel"], correct:0}
    ]},
  { id: "film", name: "Film & Powerpoint",
    cards: [
      {q:"Was bedeutet KT beim KT-Meteoriten? Wo schlug er ein? Welche Debatte gibt es?", a:"KT = Kreide–Tertiär (Grenze zwischen Erdmittelalter und Erdneuzeit). Einschlag vor ca. 65 Mio. Jahren auf der Halbinsel Yucatán in Mexiko (Chicxulub-Krater). Debatte: War der Meteorit allein schuld am Aussterben der Dinosaurier – oder auch riesige Vulkanausbrüche und Klimaveränderung?"},
      {q:"Welche 2 Saurier zählen zu den ältesten Saurierfunden?", a:"Iguanodon und Megalosaurus."},
      {q:"Was ist das Miller-Experiment? Was ist entstanden?", a:"Stanley Miller stellte 1953 im Labor die Uratmosphäre nach (Gase wie Methan, Ammoniak, Wasserstoff, Wasserdampf) und ließ Blitze (Strom) hindurch. Es entstanden Aminosäuren – Bausteine des Lebens (der Eiweiße)."},
      {q:"Was sind Black Smokers und was vermutet man bei ihnen?", a:"Heiße Quellen (Schlote) am Meeresboden, aus denen schwarzes, mineralreiches Wasser wie Rauch strömt. Man vermutet, dass dort das erste Leben entstanden ist."},
      {q:"Warum ist der Burgess-Schiefer für Paläontologen so interessant?", a:"Dort (Kanada, ca. 505 Mio. Jahre alt) fand man sehr viele, extrem gut erhaltene Fossilien früher Mehrzeller – sogar mit Weichteilen."},
      {q:"Was haben wir Carl von Linné zu verdanken?", a:"Ein Ordnungssystem für Lebewesen: Jede Art hat einen zweiteiligen lateinischen Namen (z. B. Homo sapiens = Gattung + Art)."},
      {q:"Welches Wort stammt von Charles Darwin? Was erkannte er?", a:"Selektion (natürliche Auslese): Die Lebewesen, die am besten an ihre Umwelt angepasst sind, überleben und vermehren sich (survival of the fittest)."},
      {q:"Warum waren die Galapagos-Inseln für Darwin so wichtig?", a:"Er sah dort Finken (Darwinfinken) mit unterschiedlichen Schnabelformen – je nach Insel und Nahrung. Daran erkannte er, dass sich Arten an ihre Umwelt anpassen und verändern."}
    ],
    quiz: [
      {type:"mc", q:"Wofür steht KT beim KT-Meteoriten?", options:["Kreide–Tertiär","Karbon–Trias","Kambrium–Tertiär","Kontinent–Tiefsee"], correct:0},
      {type:"mc", q:"Wo schlug der KT-Meteorit vermutlich ein?", options:["In Mexiko (Halbinsel Yucatán)","In Österreich","In der Antarktis","In Australien"], correct:0},
      {type:"mc", q:"Worüber wird beim KT-Meteoriten bis heute diskutiert?", options:["Ob er allein schuld am Aussterben der Dinosaurier war","Ob er aus Gold bestand","Ob er die Menschen ausgerottet hat","Ob er den Mond gebildet hat"], correct:0, explain:"Manche Forscher meinen, dass auch riesige Vulkanausbrüche und Klimaveränderung mitschuld waren."},
      {type:"mc", q:"Welche 2 Saurier zählen zu den ältesten Saurierfunden?", options:["Iguanodon und Megalosaurus","Tyrannosaurus und Triceratops","Archaeopteryx und Ammonit","Ichthyosaurier und Trilobit"], correct:0},
      {type:"mc", q:"Was entstand beim Miller-Experiment?", options:["Aminosäuren (Bausteine des Lebens)","Ein lebender Einzeller","Ein Dinosaurier-Ei","Sauerstoff"], correct:0},
      {type:"mc", q:"Was hat Miller in seinem Experiment nachgestellt?", options:["Die Uratmosphäre mit Blitzen","Einen Meteoriteneinschlag","Einen Vulkanausbruch","Die Eiszeit"], correct:0},
      {type:"mc", q:"Was sind Black Smokers?", options:["Heiße Quellen am Meeresboden","Rauchende Vulkane an Land","Schwarze Fossilien","Eine Dinosaurierart"], correct:0},
      {type:"mc", q:"Was vermutet man bei den Black Smokers?", options:["Dass dort das erste Leben entstanden ist","Dass dort der Meteorit einschlug","Dass dort Dinosaurier gelebt haben","Dass dort Erdöl entsteht"], correct:0},
      {type:"mc", q:"Warum ist der Burgess-Schiefer so interessant?", options:["Viele sehr gut erhaltene Fossilien früher Mehrzeller","Dort wurde Lucy gefunden","Dort schlug der KT-Meteorit ein","Dort lebte Darwin"], correct:0},
      {type:"mc", q:"Was haben wir Carl von Linné zu verdanken?", options:["Zweiteilige lateinische Namen für alle Lebewesen","Die Evolutionstheorie","Das Miller-Experiment","Die Entdeckung von Lucy"], correct:0},
      {type:"mc", q:"Welches Wort stammt von Charles Darwin?", options:["Selektion","Fossil","Atmosphäre","Mutation"], correct:0},
      {type:"tf", q:"Laut Darwin überleben die Lebewesen, die am besten an ihre Umwelt angepasst sind.", answer:true},
      {type:"mc", q:"Was beobachtete Darwin auf den Galapagos-Inseln?", options:["Finken mit unterschiedlichen Schnabelformen","Lebende Dinosaurier","Black Smokers","Den ersten Urvogel"], correct:0}
    ]},
  { id: "bilder", name: "Bilder-Steckbriefe",
    cards: [
      {q:"Ammonit – wie erkennst du ihn?", a:"Ausgestorbener Kopffüßer (Verwandter der Tintenfische) mit spiralförmig aufgerolltem Gehäuse. Leitfossil des Erdmittelalters."},
      {q:"Trilobit – wie erkennst du ihn?", a:"„Dreilapper“: Gliederfüßer im Meer des Erdaltertums. Panzer in drei Teile gegliedert, viele Beinpaare. Leitfossil des Erdaltertums."},
      {q:"Quastenflosser – wie erkennst du ihn?", a:"Großer Fisch mit fleischigen, quastenförmigen Flossen (mit Knochen darin). Vorfahre der Amphibien und lebendes Fossil."},
      {q:"Ginkgo – wie erkennst du ihn?", a:"Baum mit fächerförmigen, in der Mitte eingeschnittenen Blättern. Lebendes Fossil."},
      {q:"Ichthyosaurier – wie erkennst du ihn?", a:"„Fischsaurier“: Meeresreptil des Erdmittelalters, sieht aus wie ein Delfin – lange schmale Schnauze, große Augen, Rückenflosse."},
      {q:"Hauerelefant – wie erkennst du ihn?", a:"Rüsseltier der Erdneuzeit mit nach unten gebogenen Stoßzähnen im Unterkiefer."},
      {q:"Archaeopteryx – wie erkennst du ihn?", a:"Urvogel: Federn und Flügel, aber Zähne, Krallen an den Flügeln und ein langer Schwanz mit Wirbeln."}
    ],
    quiz: [
      {type:"mc", q:"Wer bin ich? Spiralförmig aufgerolltes Gehäuse, Verwandter der Tintenfische, Leitfossil des Erdmittelalters.", options:["Ammonit","Trilobit","Ginkgo","Quastenflosser"], correct:0},
      {type:"mc", q:"Wer bin ich? Panzer in drei Teile gegliedert, viele Beine, lebte im Meer des Erdaltertums.", options:["Trilobit","Ammonit","Ichthyosaurier","Hauerelefant"], correct:0},
      {type:"mc", q:"Wer bin ich? Fisch mit fleischigen Flossen, Vorfahre der Amphibien, lebe heute noch.", options:["Quastenflosser","Ichthyosaurier","Trilobit","Archaeopteryx"], correct:0},
      {type:"mc", q:"Wer bin ich? Baum mit fächerförmigen Blättern, ein lebendes Fossil.", options:["Ginkgo","Schachtelhalm","Baumfarn","Eiche"], correct:0},
      {type:"mc", q:"Wer bin ich? Meeresreptil, sehe aus wie ein Delfin, lebte im Erdmittelalter.", options:["Ichthyosaurier","Quastenflosser","Ammonit","Megalosaurus"], correct:0},
      {type:"mc", q:"Wer bin ich? Rüsseltier mit nach unten gebogenen Stoßzähnen im Unterkiefer.", options:["Hauerelefant","Mammut","Säbelzahntiger","Iguanodon"], correct:0},
      {type:"mc", q:"Wer bin ich? Federn und Flügel – aber Zähne, Krallen und ein langer Schwanz.", options:["Archaeopteryx","Ichthyosaurier","Megalosaurus","Hauerelefant"], correct:0}
    ]}
  ]
}];
