export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  date?: string;
  links?: { label: string; url: string }[];
  sections?: {
    title: string;
    text: string;
  }[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "miosynt",
    title: "Miosynt",
    category: "App Design",
    description: "App dedicata al padel: tornei, iscrizioni, compagni di doppio e livelli.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2025/09/phone_mockup_5-1-scaled.jpg",
    client: "Raftpadel",
    date: "Settembre 2025",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.raftpadel.app" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Con RaftPadel puoi scoprire i tornei disponibili, iscriverti e scegliere il tuo compagno di doppio. Ogni partita ti permette di salire di livello, monitorare i tuoi progressi e partecipare a sfide come la Team Cup, rendendo più immediata e coinvolgente l'esperienza del padel.",
      },
      {
        title: "L'app",
        text: "RaftPadel è l'app ufficiale dedicata al mondo del padel, pensata per offrire a giocatori e appassionati un punto di riferimento digitale semplice e intuitivo.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Free-1024x683.jpg",
      "https://studioandlab.it/studioand/wp-content/uploads/2025/09/iOS-App-Icon-Mockup-1024x683.jpg",
    ],
  },
  {
    id: "raftpadel",
    title: "Raftpadel",
    category: "App Design",
    description: "App ufficiale Raftpadel per giocatori e appassionati di padel.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Gemini_Generated_Image_pqrfy9pqrfy9pqrf-1.png",
    client: "Raftpadel",
    date: "Settembre 2025",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.raftpadel.app" },
      { label: "Sito web", url: "https://www.raftpadel.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Con RaftPadel puoi scoprire i tornei disponibili, iscriverti e scegliere il tuo compagno di doppio. Ogni partita ti permette di salire di livello, monitorare i tuoi progressi e partecipare a sfide come la Team Cup, rendendo più immediata e coinvolgente l'esperienza del padel.",
      },
      {
        title: "L'app",
        text: "RaftPadel è l'app ufficiale dedicata al mondo del padel, pensata per offrire a giocatori e appassionati un punto di riferimento digitale semplice e intuitivo.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Mockup.jpg",
    ],
  },
  {
    id: "raftennis",
    title: "Raftennis",
    category: "App Design",
    description: "App mobile gratuita per appassionati del circuito RAFTENNIS.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Gemini_Generated_Image_53hvv353hvv353hv-1.png",
    client: "Raftennis",
    date: "Settembre 2025",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.raftennis.app&hl=it" },
      { label: "Sito web", url: "https://www.raftennis.it/" },
    ],
    sections: [
      {
        title: "Il circuito",
        text: "Il circuito RAFTENNIS è una community di tennisti amatoriali che si estende su numerose province italiane. Organizza una vasta gamma di tornei, adatti a diversi livelli di abilità, tra cui categorie come Iron, Bronze, Silver, Gold e Diamond. Per partecipare alle competizioni è richiesta la registrazione e il versamento di una quota di tesseramento.",
      },
      {
        title: "L'app",
        text: "Raftennis è un'applicazione mobile gratuita che ti mette il tennis \"in tasca\", pensata per tutti gli appassionati del circuito RAFTENNIS. Tramite smartphone o tablet, Raftennis consente di restare sempre aggiornato e partecipare attivamente al mondo dei tornei, con funzioni utili e mirate.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Gemini_Generated-2-1.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2025/09/Gemini_Generated_Image_dny7uidny7uidny7-1-1024x683.jpg",
    ],
  },
  {
    id: "la-gallina-matta",
    title: "La Gallina Matta",
    category: "Website",
    description: "Sito e-commerce per decorazione casa e tavola con lino gommato.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/07/Gallinamatta.png",
    client: "La Gallina Matta",
    date: "Giugno 2023",
    links: [
      { label: "lagallinamatta.com", url: "https://lagallinamatta.com/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Stile e innovazione nella decorazione della casa e della tavola. Con un segno distintivo: il lino gommato.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/07/screenshot-lagallinamatta-430x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/07/la-gallina-matta-prodotto-1-1024x508.png",
    ],
  },
  {
    id: "festival-mirabilia",
    title: "Festival Mirabilia",
    category: "Website",
    description: "Sito web per scoprire il programma di Mirabilia 2023.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/07/festivalmirabela.png",
    client: "Festival Mirabilia",
    date: "Giugno 2023",
    links: [
      { label: "festivalmirabilia.it", url: "https://festivalmirabilia.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Scopri il programma di Mirabilia 2023. Sito web per festival di circo contemporaneo e performing arts.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/07/screenshot-www.festivalmirabilia.it-png-195x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/07/FESTIVAL-PRO-1024x508.png",
    ],
  },
  {
    id: "francesca-perani",
    title: "Francesca Perani Enterprise",
    category: "Website",
    description: "Sito web per Francesca Perani, creative enterprise italiana.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/FrancescaPerani.webp",
    client: "Francesca Perani",
    date: "Settembre 2020",
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per Francesca Perani, creative enterprise italiana. Un progetto che unisce design e comunicazione visiva per raccontare l'identità dello studio.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-9-1024x841.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-10-1024x979.png",
    ],
  },
  {
    id: "rebel-biennale-2021",
    title: "Rebel Biennale 2021",
    category: "Website",
    description: "Sito per la Biennale Architettura 2021: disintossicare dalle ineguaglianze.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/RebelBiennale2021--scaled.webp",
    client: "Rebel Architette",
    date: "Settembre 2021",
    links: [
      { label: "rebelarchitette.it", url: "https://www.rebelarchitette.it/rebelbiennale2021/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Disintossicare l'architettura dalle ineguaglianze: un atto plurale. Sito web per la partecipazione di Rebel Architette alla Biennale di Architettura 2021.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-8-815x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-7-1024x625.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-6-812x1024.png",
    ],
  },
  {
    id: "rebel-architette",
    title: "Rebel Architette",
    category: "Website",
    description: "Piattaforma per disintossicare l'architettura dalle disuguaglianze.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/RebelArchitette-1.webp",
    client: "Rebel Architette",
    date: "Febbraio 2018",
    links: [
      { label: "rebelarchitette.it", url: "https://rebelarchitette.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Disintossicare l'architettura dalle disuguaglianze: un atto plurale. Piattaforma web per il collettivo Rebel Architette.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-3-646x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-5-817x1024.png",
    ],
  },
  {
    id: "scuola-andrea-fantoni",
    title: "Scuola Andrea Fantoni",
    category: "Website",
    description: "Sito web per la Scuola Andrea Fantoni di Bergamo.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/AndreaFantoni-scaled.webp",
    client: "Scuola Fantoni",
    date: "Settembre 2021",
    links: [
      { label: "scuolafantoni.it", url: "https://scuolafantoni.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per la Scuola d'Arte Andrea Fantoni di Bergamo. Un progetto digitale per valorizzare l'offerta formativa della storica scuola bergamasca.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-188-1024x539.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-190-1024x515.png",
    ],
  },
  {
    id: "soggettiva-gallery",
    title: "Soggettiva Gallery",
    category: "Website",
    description: "Sito per galleria di Alternative Movie Poster.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/SogettivaGalley-scaled.webp",
    client: "Soggettiva Gallery",
    date: "Settembre 2013",
    links: [
      { label: "soggettivagallery.com", url: "https://soggettivagallery.com/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Le migliori opere che hanno costellato la programmazione di Soggettiva Gallery, con le 6 esposizioni presentate dalla sua inaugurazione a oggi, sono ora in mostra per celebrare i primi sei mesi di apertura dell'innovativo spazio dedicato al mondo Alternative Movie Poster.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-21-834x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-1-677x1024.png",
    ],
  },
  {
    id: "bruno-rota",
    title: "Bruno Rota",
    category: "Website",
    description: "Sito per designer bergamasco Bruno Rota Design.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Bruno-Rota-Design-scaled.webp",
    client: "Bruno Rota",
    date: "Settembre 2013",
    sections: [
      {
        title: "Il progetto",
        text: "Uno dei nomi più conosciuti ed apprezzati del design bergamasco, di cui ha contribuito a scrivere la storia.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/presentazione_studioand_web_Page_41_Image_0003.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-168-1-edited.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-169.png",
    ],
  },
  {
    id: "studio-legale-prp",
    title: "Studio Legale Associato PRP",
    category: "Logo Rebranding / Website",
    description: "Sito web e rebranding per studio legale.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/PRP.webp",
    client: "Studio Legale Associato PRP",
    date: "Settembre 2013",
    links: [
      { label: "studiolegaleprp.it", url: "http://www.studiolegaleprp.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Offriamo una vasta gamma di servizi legali. Sito web e rebranding per studio legale associato PRP.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/presentazione_studioand_web_Page_42_Image_0001-1024x1022.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_43-1-567x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-174-edited-1.png",
    ],
  },
  {
    id: "mariola-peretti",
    title: "Mariola Peretti",
    category: "Website",
    description: "Sito web per l'architetta Mariola Peretti.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/MariolaPeretti-1-scaled.webp",
    client: "Mariola Peretti",
    date: "Settembre 2013",
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per l'architetta Mariola Peretti. Un progetto che racconta la visione e i lavori dello studio di architettura.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/peretti2.jpg",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_34-680x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/download-755x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/100_5-web-mariola-1.jpg",
    ],
  },
  {
    id: "salvetti-ingegneria",
    title: "Salvetti Ingegneria",
    category: "Logo Rebranding / Website",
    description: "Sito e rebranding per Salvetti Ingegneria, dal 1971.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Salvetti-Ingegneria-scaled.webp",
    client: "Salvetti Ingegneria",
    date: "Dicembre 2016",
    sections: [
      {
        title: "Il progetto",
        text: "Sito web e rebranding per Salvetti Ingegneria, studio attivo dal 1971. Un progetto che unisce tradizione e modernità nella comunicazione visiva.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/presentazione_studioand_web_Page_03_Image_0009.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_31-1-673x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_30-663x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_29-1-887x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-176-edited.png",
    ],
  },
  {
    id: "bloomscape",
    title: "Bloomscape",
    category: "Website",
    description: "Sito web per studio di design internazionale con sede italiana.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/BloomScape-scaled.webp",
    client: "Bloomscape",
    date: "Marzo 2020",
    links: [
      { label: "bloomscape.org", url: "http://www.bloomscape.org/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per lo studio Bloomscape, realtà di design internazionale con sede italiana.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/BloomScape-imm-03-edited.webp",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_23-1-737x1024.png",
    ],
  },
  {
    id: "de8",
    title: "De8",
    category: "Website",
    description: "Sito web per studio di architettura De8.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/DE8-scaled.webp",
    client: "De8",
    date: "Maggio 2020",
    links: [
      { label: "deottostudio.com", url: "http://deottostudio.com/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per lo studio di architettura De8. Progetto digitale per raccontare lo studio e i suoi lavori.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_17-1-1009x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_15-2-784x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_16-1-694x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_14-1-433x1024.png",
    ],
  },
  {
    id: "nomos",
    title: "Nomos",
    category: "Website",
    description: "Sito per studio di architettura sistemica e relazionale.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Nomos.webp",
    client: "Nomos",
    date: "Aprile 2017",
    links: [
      { label: "studionomos.eu", url: "https://studionomos.eu/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Architettura sistemica e relazionale. Un approccio analitico e multidisciplinare per le nuove strategie dell'abitare.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_10-677x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_11-1-694x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Nomos-imm-03-edited.webp",
    ],
  },
  {
    id: "teka-studio",
    title: "Teka Studio",
    category: "Website",
    description: "Sito web per studio di architettura e territorio.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Teka-1.webp",
    client: "Teka Studio",
    date: "Ottobre 2018",
    sections: [
      {
        title: "Il progetto",
        text: "Sito web per studio di architettura Teka. L'app per conoscere al meglio il tuo territorio.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/Screenshot-146_Page_06-1-820x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/95_diapositiva6-2-1.jpg",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/03/95_diapositiva7-2-1.jpg",
    ],
  },
  {
    id: "cityteller",
    title: "Cityteller",
    category: "App Design",
    description: "Mappa letteraria geo-emozionale per geo-localizzare luoghi dei libri.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Cityteller-1-scaled.webp",
    client: "Citytellers",
    date: "Settembre 2013",
    sections: [
      {
        title: "Il progetto",
        text: "Cityteller è una mappa letteraria geo-emozionale veicolata attraverso un'applicazione mobile gratuita (accessibile da smartphone e tablet) e una piattaforma on-line dedicate alla condivisione e geo-localizzazione dei luoghi protagonisti dei libri.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-31-899x1024.png",
    ],
  },
  {
    id: "nautical-translator",
    title: "Nautical Translator",
    category: "App Design",
    description: "Traduttore illustrato per la nautica (App Store e Google Play).",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/NauticalTransaltor-1-scaled.webp",
    client: "Nautical Translator",
    date: "Dicembre 2020",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.nauticaltranslator&hl=it&gl=US" },
      { label: "nauticaltranslator.it", url: "https://nauticaltranslator.it/" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Questa app è un utile vocabolario in cinque lingue (italiano, inglese, francese, spagnolo, tedesco) ed è stata pensata per tutti coloro che viaggiano per mare ma è utile anche al semplice appassionato che vuole conoscere i termini dei numerosi componenti della barca e vuole comunicare con altre persone che condividono la stessa passione.",
      },
      {
        title: "Funzionalità",
        text: "Nelle varie pagine troverete un aiuto per gestire le emergenze in navigazione, che siano sanitarie o in caso di guasto, per potersi esprimere quando si entra in porto oppure per fare shopping. Puoi fare la ricerca navigando tra i capitoli e i vari argomenti oppure inserendo le prime lettere della parola. Scopri attraverso le immagini degli esterni e degli interni il nome dei componenti della barca in cinque lingue. L'applicazione si apre automaticamente nella lingua impostata nel vostro dispositivo ed è accessibile anche off-line. Oltre 200 parole e termini.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-30-899x1024.png",
    ],
  },
  {
    id: "goretti",
    title: "Goretti",
    category: "App Design",
    description: "App per conoscere i prodotti del panificio pasticceria Goretti.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Goretti-2-scaled.webp",
    client: "Goretti",
    date: "Maggio 2020",
    links: [
      { label: "App Store", url: "https://apps.apple.com/it/app/goretti/id1516076682" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "L'applicazione nata per conoscere i prodotti del panificio pasticceria Goretti. Le pizze classiche, le pizze di stagioni e i nostri dessert. Particolare attenzione ai nostri prodotti con una sezione dedicata in cui scoprire le materie prime da noi utilizzate.",
      },
      {
        title: "Pre-ordina",
        text: "Con l'applicazione avrai la possibilità di pre-ordinare le tue pizze anche quando noi non saremo presenti.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-29-899x1024.png",
    ],
  },
  {
    id: "complex-pci",
    title: "Complex PCI Solution",
    category: "App Design",
    description: "App per informazioni su scenario PCI complesso in cardiologia.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/CPS-scaled.webp",
    client: "Complex PCI Solution",
    date: "Marzo 2018",
    sections: [
      {
        title: "Il progetto",
        text: "L'app Complex PCI Solutions è stata sviluppata come collaborazione tra l'azienda tecnologica studioand e il Dr. Boccuzzi, consulente cardiologo interventista presso l'ospedale San Giovanni Bosco, Torino, Italia. L'app fornisce informazioni specifiche per uno scenario PCI complesso, in modo rapido e semplice.",
      },
      {
        title: "Come funziona",
        text: "L'applicazione guida l'utente attraverso aspetti importanti delle procedure PCI complesse e in particolare la compatibilità dei materiali, che è vitale per una procedura PCI complessa di successo. L'app passa logicamente attraverso le possibili combinazioni per fornire all'utente informazioni specifiche necessarie per eseguire la procedura. La possibile combinazione di compatibilità dei materiali sarà classificata come: non possibile (a causa delle dimensioni del materiale), possibile, oppure possibile sulla base dell'esperienza dell'operatore.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-28-899x1024.png",
    ],
  },
  {
    id: "my-judo",
    title: "My Judo is Your Judo",
    category: "App Design",
    description: "App per ricercare tecniche e argomenti di judo.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Judo.webp",
    client: "My Judo is Your Judo",
    date: "Febbraio 2017",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.studioand.myjudoisyourjudo&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "La piattaforma di My Judo is Your Judo tratterà tutti gli argomenti della didattica del Judo e scaricherà sull'app i tutorial prodotti sotto il gruppo tecnico di appartenenza. Ad esempio, se cerchi i kaeshi waza di o soto gari sarà sufficiente entrare nell'indice degli argomenti, toccare il bottone degli ashi waza, toccare o soto gari e appariranno i tutorial che ti interessano.",
      },
      {
        title: "Funzionalità",
        text: "All'interno della Home page trovi altre opzioni: video tecnici, libri di judo, come accedere al grado o qualifica del Dai Nippon Butokukai. Video Tecnici è una sezione che propone lezioni specifiche su approfondimenti tecnici o video di tokui waza di altri judoka italiani e stranieri.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-5-2-899x1024.png",
    ],
  },
  {
    id: "integrazionefasciale",
    title: "IntegrazioneFasciale",
    category: "App Design",
    description: "App su metodologie e tecniche di benessere e cambiamento personale.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/IntegrazioneFasciale-3-scaled.webp",
    client: "Associazione Professionale Operatori Integrazione Fasciale",
    date: "Marzo 2020",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/search?q=IntegrazioneFasciale&c=apps&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Attraverso un test caratteriale scopri il tuo carattere di appartenenza e svolgi esercizi espressivi e funzionali per trasformare il carattere. Agisci sui principali blocchi personali.",
      },
      {
        title: "Metodologia",
        text: "Lavorare sui tuoi limiti caratteriali attraverso allenamenti e auto manipolazioni, tecniche di respirazione, manovre fasciali e tanto altro. Tutti gli esercizi e le manipolazioni vengono dai principali studi e ricerche nell'ambito del lavoro fasciale, ampliati da anni di esperienza e competenze sul carattere.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-27-899x1024.png",
    ],
  },
  {
    id: "standapp",
    title: "StandApp",
    category: "App Design",
    description: "App per orientarsi durante eventi e festival con mappa integrata.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/StandApp-2-scaled.webp",
    client: "Associazione Culturale Ideagorà",
    date: "Luglio 2022",
    links: [
      { label: "App Store", url: "https://apps.apple.com/it/app/standapp/id1619055279" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.standapp.standapp&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Scopri",
        text: "Scaricando la APP potrai esplorare quello che succede intorno a te. Eventi, performance, festival, concerti e molto altro sono tutti a portata di click sul tuo smartphone.",
      },
      {
        title: "Organizza",
        text: "Pensi che nella tua città non ci sia mai niente da fare? Con StandAPP non avrai più scuse. Esplora e organizza il tuo tempo libero facilmente e con pochi click.",
      },
      {
        title: "Naviga",
        text: "Con StandAPP sarà difficile perdersi. Fatti guidare dalle mappe, raggiungi facilmente i luoghi dei tuoi spettacoli ed esplora ciò che succede intorno.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-25-899x1024.png",
    ],
  },
  {
    id: "rete-caregiver",
    title: "Rete Caregiver",
    category: "App Design",
    description: "Rete per sostegno e valorizzazione dei caregiver giovani e adulti.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/CareGiver-3-scaled.webp",
    client: "Progetto Yeah",
    date: "Settembre 2020",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.caregiver.caregiver&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "La famiglia diventa sempre più spesso il luogo in cui si accumulano i carichi di cura. Se da un lato l'invecchiamento demografico comporta un aumento del bisogno di assistenza, dall'altro, il cambiamento delle strutture familiari, sempre più nucleari, fa sì che la cura diventi un fatto sempre più privato ed in carico ad una o poche persone.",
      },
      {
        title: "La rete",
        text: "Una rete per il sostegno e la valorizzazione dei caregiver giovani e adulti!",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-24-899x1024.png",
    ],
  },
  {
    id: "visitmongardino",
    title: "VisitMongardino",
    category: "App Design",
    description: "App per scoprire il territorio e le aziende di Mongardino.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/VisitMongardino-2-scaled.webp",
    client: "Comune di Mongardino",
    date: "Gennaio 2023",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.visitmongardino&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Questa applicazione è stata realizzata dal Comune di Mongardino in collaborazione con la Parrocchia di San Giovanni Battista e la Pro Loco di Mongardino e con il sostegno di Fondazione Compagnia di San Paolo, nell'ambito del Bando \"Luoghi di Cultura\" per il progetto di valorizzazione del Sacro Monte di Mongardino.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-23-899x1024.png",
    ],
  },
  {
    id: "ecomuseo-val-taleggio",
    title: "Ecomuseo Val Taleggio",
    category: "App Design",
    description: "App per vivere un'esperienza coinvolgente nella Val Taleggio.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/ValTaleggio-1-scaled.webp",
    client: "Studioand",
    date: "Marzo 2017",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=it.studioand.ecomuseovaltaleggio&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Teatralizzazione delle fiabe tradizionali locali e degli itinerari turistico/culturale attraverso un progetto grafico-illustrato dedicato; declinato a tutta la segnaletica esterna, promozione cartacea e online, progetto di identificazione di nuova mappa turistica. Sviluppo di nuova applicazione iOS e Android.",
      },
      {
        title: "Dettagli",
        text: "Il progetto realizzato ha consentito la mappatura interattiva di 6 percorsi tematici attraverso un'app dedicata. In particolare sono stati indicizzati gli itinerari, le baite tipiche, le installazioni multimediali (alpeggio, arte casearia e stagionatura dei formaggi) e le 6 Fiabe della tradizione locale. I Comuni di Taleggio e Vedeseta dal 2005 hanno dato vita al progetto ecomuseale per valorizzare il patrimonio culturale, caseario e architettonico che caratterizza la cultura rurale della Val Taleggio.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-22-899x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Immagine.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Immaginee-599x1024.png",
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Immagineone-678x1024.png",
    ],
  },
  {
    id: "piossascotour",
    title: "PiossascoTour",
    category: "App Design",
    description: "App per conoscere il territorio e l'architettura di Piossasco.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/PiossascoTour-1-scaled.webp",
    client: "Studioand",
    date: "Aprile 2019",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.visitpiossasco&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "L'applicazione per conoscere il territorio di Piossasco attraverso gli itinerari di: da San Vito alla Croce dei Castelli, un parco da scoprire, il borgo di San Vito, ricordare per non dimenticare: i luoghi della resistenza.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-21-899x1024.png",
    ],
  },
  {
    id: "visitoctavia",
    title: "VisitOctavia",
    category: "App Design",
    description: "App per vivere il territorio: noleggio bici, religione e arte.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2023/02/Octavia.webp",
    client: "Studioand",
    date: "Maggio 2019",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.visitoctavia&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il territorio",
        text: "Il territorio di Octavia rappresenta un'area omogenea, in virtù di una storia comune legata all'appartenenza al Marchesato di Saluzzo e di una economia prevalentemente rurale, che richiama la permanenza dei \"margari\" che dalla montagna si spostavano verso le zone pianeggianti nel periodo invernale e le massicce produzioni locali, soprattutto di frutta, formaggi e lavorazioni dolciarie, oltre ad un'importante tradizione di artigianato legato alla lavorazione del legno.",
      },
      {
        title: "L'app",
        text: "L'applicazione attraverso la sezione dei \"Comuni\" e dei \"Percorsi\" vuole far conoscere questo territorio. Con la sezione degli \"Eventi\" sarai sempre aggiornato su tutto ciò che accade e con le \"Esperienze\" ti verranno segnalati tutto quello che ti offrono gli 11 Comuni. Avrai anche la possibilità di accedere al Punto Octavia, museo multimediale con apertura automatizzata.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-%E2%80%93-20-2.png",
    ],
  },
  {
    id: "easysnack",
    title: "EasySnack",
    category: "App Design",
    description: "App per gestire l'intervallo scolastico di figli/figlie.",
    image: "https://studioandlab.it/studioand/wp-content/uploads/2020/05/Easy-Snack-scaled.webp",
    client: "Studioand",
    date: "Agosto 2021",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.easysnack&hl=it&gl=US" },
    ],
    sections: [
      {
        title: "Il progetto",
        text: "Un'unica piattaforma ti consentirà di gestire l'intervallo di tuo figlia/o, di monitorarne gli acquisti senza doverti più preoccupare di lasciargli i soldi.",
      },
      {
        title: "Come funziona",
        text: "Inserisci il codice, scegli tra i prodotti proposti dal tuo bar i prodotti che preferisci e prenota il tuo intervallo.",
      },
    ],
    gallery: [
      "https://studioandlab.it/studioand/wp-content/uploads/2023/02/1-899x1024.png",
    ],
  },
];
