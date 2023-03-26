import Head from "next/head";

export default function Datenschutzerklaerung() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung | Aachen App</title>
        <meta
          name="description"
          content="Die Unterstützer des Aachen App Projekts. Die App soll dem Einzelhandel in Aachen helfen, außerdem Nutzern aktuelles in Aachen näherzubringen."
        />
        <meta name="keywords" content="Aachen App, Mitwirkende" />
      </Head>

      <main className="text-white">
        <section className="pt-32 max-w-[800px]">
          <h1 className="text-3xl md:text-5xl mb-5">Datenschutzerklärung</h1>
          <p className="leading-6 my-2 text-gray-300 mb-5">
            Hier wird genauer erläutert, welche Daten von der App erhoben und
            wie diese verarbeitet werden. Wenn nach dem Lesen noch Fragen offen
            bleiben, stehen wir mit unserem Support Ihnen zur Verfügung.
          </p>
        </section>

        <section className="flex flex-col gap-8 mb-4 max-w-[850px]">
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Grundsätzlich erfasste Informationen</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Ein Nutzerkonto wird zur Nutzung der App nicht benötigt. Wenn kein
              Konto erstellt wird werden keine Personenbezogenen Daten
              gespeichert.
            </p>
            <ol type="1" className="grid grid-flow-row gap-[12px] ml-5">
              <li className="leading-6 text-gray-300 list-decimal">
                Name (Kann auch ein Pseudonym sein)
              </li>
              <li className="leading-6 text-gray-300 list-decimal">E-Mail</li>
              <li className="leading-6 text-gray-300 list-decimal">
                Account Art (Kunde oder Mitarbeiter)
              </li>
            </ol>
            <p className="leading-6 mt-2 text-gray-300">
              Nicht personenbezogene Daten können Grundsätzlich erhoben werden.
              Ein Beispiel wäre, dass Gerätedetails bei aufgetretenen Fehlern an
              den Server gesendet werden.
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Externe Datenspeicherung</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Erhobene Daten werden an den externen Dienstleister (Google
              Firebase) weitergegeben, der die Speicherung der Nutzerdaten
              übernimmt.
            </p>
            <p className="leading-6 mt-2 text-gray-300">
              Folgende Dienste verwenden wir bei Google Firebase
            </p>
            <ol className="grid grid-flow-row gap-[12px] ml-5">
              <li className="leading-6 text-gray-300 list-decimal">
                Firebase Authentication (ISO 27001)
                <br />
                <span className="mt-1 block font-hairline text-gray-300">
                  Funktioniert mit Angabe einer Mail-Adresse und eines
                  Passworts. Die IP-Adresse des Absenders bleibt für einen
                  Zeitraum von wenigen Wochen gespeichert. Der Server steht in
                  den USA, ist aber ebenfalls nach dem EU-US Privacy Shield
                  zertifiziert.
                </span>
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Cloud Firestore (ISO 27018)
                <br />
                <span className="mt-1 block font-hairline text-gray-300">
                  Dient als Datenbank der App, in der erhobene Daten wir zum
                  Beispiel Nutzer Name, Profilbild gespeichert werden. Der
                  Server steht in Frankfurt am Main in Deutschland und fällt
                  somit unter das europäische und deutsche Datenschutzrecht.
                </span>
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Cloud Functions (ISO 27018)
                <br />
                <span className="mt-1 block font-hairline text-gray-300">
                  Hier werden Skripte auf dem Server durchgeführt. Darunter
                  fallen zum Beispiel Sicherheitsüberprüfungen und Prozesse zum
                  erstellen eines Accounts oder Beitrags. Dazu wir temporär die
                  IP-Adresse des Absenders gespeichert. Dieser Server steht
                  ebenfalls in Frankfurt am Main (siehe Cloud Firestore).
                </span>
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Firebase Cloud Messaging (ISO 27001)
                <br />
                <span className="mt-1 block font-hairline text-gray-300">
                  Um über zum Beispiel kürzlich erstellte Beiträge mit
                  Mitteilungen informieren zu können nutzen wir Firebase Cloud
                  Messaging. Hierzu wird die Instance ID an den Server
                  übergeben. Diese ID wird dazu verwendet eine Push-Notification
                  nur an ein bestimmtes Gerät zu senden.
                  (https://developers.google.com/instance-id/)
                </span>
              </li>
            </ol>
            <p className="leading-6 mt-2 text-gray-300">
              Alle Informationen zu Google Firebase sind in auf folgender Seite
              einsehbar{" "}
              <a
                className="text-[#FAC520]"
                href="https://firebase.google.com/support/privacy/"
              >
                https://firebase.google.com/support/privacy/
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Länge der Speicherung</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
              anhand der gesetzlichen Aufbewahrungsrechte und -Pflichten (z.B.
              aus dem Handels- oder Steuerrecht). Wenn die Frist abgelaufen und
              die Löschung der Daten angefordert wurde, werden die Daten bis zum
              Ende des Monats gelöscht, sollten die Daten nicht für eine
              Anbahnung, Meldung oder Beendigung eines Vertrags erforderlich
              sein.
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Datennutzung</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Unsere Datenerhebung erfolgt grundsätzlich nur um Prozesse für die
              Nutzer*innen zu vereinfachen und nicht um diese an dritte zu
              verkaufen.
            </p>
            <p className="leading-6 mt-2 text-gray-300">
              Es folgen einige Beispiele
            </p>
            <ol className="grid grid-flow-row gap-[12px] ml-5">
              <li className="leading-6 text-gray-300 list-decimal">
                Analyse Daten
                <br />
                <span className="mt-1 block font-hairline">
                  Um die Funktionen zu verbessern, die am meisten genutzt werden
                  oder Fehler in Funktionen schneller delektieren zu können.
                </span>
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Um einen reibungslosen Support und Kundenservice anbieten zu
                können, haben wir Zugriff auf die Daten, welche im Zusammenhang
                mit der Erstellung und Bearbeitung eines normalen Konrat’s Welt
                App Accounts und des Unternehmensaccounts angegeben wurden,
                sowie der Daten, welche während der Nutzung der Konrat’s Welt
                App gesammelt wurden.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Um das Erlebnis in der App so angenehm wie möglich zu gestalten.
                Wir können dir anhand deiner Daten zum Beispiel Unternehmen in
                der Nähe anzeigen oder deine Favoriten in einer Liste.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Mithilfe deiner Email-Addresse können wir die Emails senden. Zum
                Beispiel dann, wenn du dein Passwort zurücksetzen möchtest, oder
                wir dir Neuigkeiten über die Konrats Welt App senden.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Bitte gebe nur die Daten an, welche du auch sonst Öffentlich
                nennen würdest! Deine Fotos und sonstige Angaben können von uns
                jederzeit aufgerufen werden!
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Weitere Rechte der Nutzer*innen</h3>
            <ol className="grid grid-flow-row gap-[12px] ml-5">
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, gemäß Art. 15 DSGVO Auskunft über deine von uns
                verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere
                kannst du Auskunft über die Verarbeitungszwecke, die Kategorie
                der personenbezogenen Daten, die Kategorien von Empfängern,
                gegenüber denen deine Daten offengelegt wurden oder werden, die
                geplante Speicherdauer, das Bestehen eines Rechts auf
                Berichtigung, Löschung, Einschränkung der Verarbeitung oder
                Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft
                deiner Daten, sofern diese nicht bei uns erhoben wurden, sowie
                über das Bestehen einer automatisierten Entscheidungsfindung
                einschließlich Profiling und ggf. aussagekräftigen Informationen
                zu deren Einzelheiten verlangen.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, gemäß Art. 16 DSGVO unverzüglich die Berichtigung
                unrichtiger oder Vervollständigung deiner bei uns gespeicherten
                personenbezogenen Daten zu verlangen.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, gemäß Art. 17 DSGVO die Löschung deiner bei uns
                gespeicherten personenbezogenen Daten zu verlangen, soweit nicht
                die Verarbeitung zur Ausübung des Rechts auf freie
                Meinungsäußerung und Information, zur Erfüllung einer
                rechtlichen Verpflichtung, aus Gründen des öffentlichen
                Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen erforderlich ist.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, gemäß Art. 18 DSGVO die Einschränkung der
                Verarbeitung deiner personenbezogenen Daten zu verlangen, soweit
                die Richtigkeit der Daten von dir bestritten wird, die
                Verarbeitung unrechtmäßig ist, du aber deren Löschung ablehnst
                und wir die Daten nicht mehr benötigen, du jedoch diese zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                benötigst oder du gemäß Art. 21 DSGVO Widerspruch gegen die
                Verarbeitung eingelegt hast.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, gemäß Art. 20 DSGVO deine personenbezogenen Daten,
                die du uns bereitgestellt hast, in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten oder die
                Übermittlung an einen anderen Verantwortlichen zu verlangen.
              </li>
              <li className="leading-6 text-gray-300 list-decimal">
                Das Recht, sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde
                zu beschweren. In der Regel kannst du dich hierfür an die
                Aufsichtsbehörde des Bundeslandes unseres oben angegebenen
                Sitzes oder ggf. die deines üblichen Aufenthaltsortes oder
                Arbeitsplatzes wenden.
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
