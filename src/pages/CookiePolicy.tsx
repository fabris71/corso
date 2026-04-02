import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container max-w-3xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento è <strong className="text-foreground">Fabrizio Parodi</strong>, con sede in Via Cappuccini 3 – Albino (BG).
                <br />
                Email: <a href="mailto:fabrizio@studioand.it" className="text-foreground underline hover:text-primary transition-colors">fabrizio@studioand.it</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Tipologie di cookie utilizzati</h2>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Cookie tecnici (necessari)</h3>
              <p>
                Sono cookie indispensabili per il corretto funzionamento del sito. Includono cookie di navigazione e cookie funzionali che permettono all'utente di navigare in base a una serie di criteri selezionati (ad esempio la lingua) al fine di migliorare il servizio reso. Non richiedono il consenso dell'utente.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Cookie analitici</h3>
              <p>
                Questo sito potrebbe utilizzare cookie analitici per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito. Questi cookie sono assimilati ai cookie tecnici quando vengono utilizzati direttamente dal gestore del sito per raccogliere informazioni in forma aggregata e anonima.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cookie di terze parti</h2>
              <p>
                Il sito potrebbe contenere collegamenti ad altri siti web che dispongono di una propria informativa sulla privacy. La presente Cookie Policy non si applica a siti di terze parti.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Durata dei cookie</h2>
              <p>
                Alcuni cookie (cookie di sessione) restano attivi solo fino alla chiusura del browser o all'esecuzione del comando di logout. Altri cookie sopravvivono alla chiusura del browser e sono disponibili anche in successive visite dell'utente (cookie persistenti). Questi cookie hanno una durata variabile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Gestione dei cookie</h2>
              <p>
                L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. La disabilitazione totale o parziale dei cookie tecnici può compromettere l'utilizzo delle funzionalità del sito.
              </p>
              <p className="mt-3">
                Di seguito i link alle istruzioni per la gestione dei cookie nei principali browser:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Diritti dell'utente</h2>
              <p>
                Ai sensi del Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione, la limitazione del trattamento, nonché di opporsi al trattamento stesso. Per esercitare i propri diritti, è possibile contattare il titolare all'indirizzo email sopra indicato.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
