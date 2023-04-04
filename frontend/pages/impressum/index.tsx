import Head from "next/head";

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum | Aachen App</title>
        {/* Links */}
        <link
          rel="stylesheet"
          href="https://aachen-app.de/assets/docs/php/head/"
        />
        {/* SEO texts */}
        <meta name="keywords" content="Aachen App, Impressum" />
      </Head>

      <main className="text-white">
        <section className="pt-32 max-w-[800px]">
          <h1 className="text-3xl md:text-5xl mb-5">Impressum</h1>
        </section>

        <section className="flex flex-col gap-8 mb-4 max-w-[850px]">
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Postanschrift</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Aachen App UG (haftungsbeschränkt)
              <br />
              Königstraße 30
              <br />
              52064 Aachen
              <br />
              Germany
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Kontakt</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Mail
              <a href="mailto:contact@swibble.net">contact@aachen-app.de</a>
              <br />
              Nummer <a href="tel:+49 176 56928667">+49 178 2632310</a>
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p className="leading-6 mt-2 text-gray-300">
              Fynn Frings
              <br />
              Königstraße 30
              <br />
              52064 Aachen
              <br />
              Germany
              <br />
              <br />
              Haftung für Inhalte Als Diensteanbieter sind wir gemäß § 7 Abs.1
              TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich.
              <br />
              <br />
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              <br />
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Haftung für Links</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">
              Zusätzlicher erweiterter Haftungsausschluss für externe Links
            </h3>
            <p className="leading-6 mt-2 text-gray-300">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Urheberrecht</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet.
            </p>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <h3 className="text-2xl">Haftungshinweis</h3>
            <p className="leading-6 mt-2 text-gray-300">
              Bitte beachten Sie, dass die über Swibble abrufbaren Inhalte in
              der Regel nicht von der Swibble UG, sondern allein von den
              jeweiligen Nutzern zur Verfügung gestellt werden. Nehmen sie mit
              angegebenen Mail Adressen kontakt auf um unerwünschte Inhalte
              entfernen zu lassen.
              <br />
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich. Markenrecht: Wir weisen darauf hin, daß alle
              verwendeten Markennamen der jeweiligen Firmen oder Einrichtungen
              dem allgemeinen Warenzeichen-, Marken- oder Patentrechtlichem
              Schutz unterliegen. Alle Angebote freibleibend, Irrtümer
              vorbehalten.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
