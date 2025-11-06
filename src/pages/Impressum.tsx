export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Impressum
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Angaben gemäß § 5 TMG (Deutschland) / § 24 Mediengesetz (Österreich)
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Angaben zum Unternehmen
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-bold text-gray-900">Margit Kerschbaumer Photography</p>
              <div>
                <p className="font-semibold text-gray-900">Inhaberin:</p>
                <p className="text-gray-700">Margit Kerschbaumer</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Studio-Adresse:</p>
                <p className="text-gray-700">St. Lorenz 9/2</p>
                <p className="text-gray-700">5310 St. Lorenz</p>
                <p className="text-gray-700">Österreich</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Kontakt
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#C8102E] font-semibold">Telefon:</span>
                <span className="text-gray-700">+43 699 108 909 28</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C8102E] font-semibold">E-Mail:</span>
                <a href="mailto:foto@margitkerschbaumer.com" className="text-[#C9A961] hover:underline">
                  foto@margitkerschbaumer.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C8102E] font-semibold">Website:</span>
                <span className="text-gray-700">www.margit-kerschbaumer.com</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div>
              <p className="font-semibold text-gray-900">UID-Nummer:</p>
              <p className="text-gray-700 mb-2">ATU68773179</p>
              <p className="text-sm italic text-gray-600">
                gemäß § 27a Umsatzsteuergesetz (Österreich) bzw. § 27 Umsatzsteuergesetz (Deutschland)
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Berufsbezeichnung
            </h2>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-900">Berufsbezeichnung: </span>
                <span className="text-gray-700">Meisterfotografin / Fine Art Portraitfotografie</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Zuständige Kammer: </span>
                <span className="text-gray-700">Wirtschaftskammer Oberösterreich - Fachgruppe Berufsfotografen</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Verliehen in: </span>
                <span className="text-gray-700">Österreich</span>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Aufsichtsbehörde
            </h2>
            <div>
              <p className="font-semibold text-gray-900">Zuständige Aufsichtsbehörde:</p>
              <p className="text-gray-700">Bezirkshauptmannschaft Braunau am Inn</p>
              <p className="text-gray-700">Ringstraße 14, 5280 Braunau am Inn</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Verantwortlich für den Inhalt
            </h2>
            <div>
              <p className="text-gray-700">Margit Kerschbaumer</p>
              <p className="text-gray-700">St. Lorenz 9/2, 5310 St. Lorenz</p>
              <p className="text-sm text-gray-600 mt-2">
                gemäß § 55 Abs. 2 RStV (Deutschland) / § 25 Mediengesetz (Österreich)
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              EU-Streitschlichtung
            </h2>
            <div>
              <p className="text-gray-700 mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8102E] hover:underline font-medium"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <p className="text-gray-700 mt-3">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-gray-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Haftungsausschluss
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Haftung für Inhalte</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Haftung für Links</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen bzw. österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#C9A961]">
              Bildrechte & Fotografie
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Alle auf dieser Website verwendeten Fotografien und Bildwerke unterliegen dem Urheberrecht von{' '}
              <span className="font-bold">Margit Kerschbaumer Photography</span>. Eine Nutzung, Vervielfältigung oder Weitergabe ohne ausdrückliche schriftliche Genehmigung ist nicht gestattet.
            </p>
          </section>

          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = '/'}
              className="inline-block bg-[#C8102E] hover:bg-[#A00D24] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
