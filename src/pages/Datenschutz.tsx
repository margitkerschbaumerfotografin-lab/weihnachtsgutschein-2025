import { Shield } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#C9A961] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Datenschutzerklärung
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>

            <div className="bg-[#FFF9E6] border-l-4 border-[#C9A961] p-6 mb-6">
              <p className="font-bold text-gray-900">Margit Kerschbaumer Photography</p>
              <p className="text-gray-700">St. Lorenz 9/2, 5310 St. Lorenz, Österreich</p>
              <p className="text-gray-700">E-Mail: foto@margitkerschbaumer.com</p>
              <p className="text-gray-700">Telefon: +43 699 108 909 28</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              2. Datenerfassung auf dieser Website
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-[#C8102E]">👁</span> Wie erfassen wir Ihre Daten?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln,
                die Sie in ein Kontaktformular oder bei einer Bestellung eingeben.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wofür nutzen wir Ihre Daten?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Bestellabwicklung und Gutscheinversand</li>
                <li>Kundenservice und Kommunikation</li>
                <li>Verbesserung unserer Website und Angebote</li>
                <li>Marketing und Conversion-Tracking (mit Ihrer Einwilligung)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Welche Rechte haben Sie?</h3>
              <p className="text-gray-700 leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              3. Server-Log-Dateien
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              4. Zahlungsdienstleister
            </h2>

            <div className="bg-red-50 border-l-4 border-[#C8102E] p-6 mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#C8102E]">🔒</span> Stripe
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Wir nutzen Stripe als Zahlungsdienstleister. Anbieter ist Stripe Inc., 510 Townsend Street, San Francisco, CA 94103, USA.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie sich für Zahlung mit Stripe entscheiden, werden Ihre Zahlungsdaten an Stripe übermittelt.
              Die Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
              (Verarbeitung zur Erfüllung eines Vertrags).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Details entnehmen Sie der Datenschutzerklärung von Stripe:{' '}
              <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline font-medium">
                https://stripe.com/de/privacy
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              5. Analyse-Tools und Tracking
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Google Analytics 4</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen.
                Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen
                Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der Analyse des Nutzerverhaltens,
                um unser Webangebot zu optimieren.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>IP-Anonymisierung:</strong> Die IP-Anonymisierung ist aktiviert.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meta Pixel (Facebook Pixel)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Website nutzt zur Conversion-Messung den Meta Pixel. Anbieter ist Meta Platforms Ireland Limited,
                4 Grand Canal Square, Dublin 2, Irland.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                So können wir das Verhalten der Seitenbesucher nachverfolgen, nachdem diese durch Klick auf eine
                Facebook-Werbeanzeige auf unsere Website weitergeleitet wurden. Dies ermöglicht es uns, die Wirksamkeit
                der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke auszuwerten.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die erhobenen Daten sind für uns anonym, bieten uns also keine Rückschlüsse auf die Identität der Nutzer.
                Die Daten werden aber von Meta gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Details:{' '}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#C8102E] hover:underline">
                  Meta Datenschutzrichtlinie
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              6. E-Mail-Versand
            </h2>

            <div className="bg-red-50 border-l-4 border-[#C8102E] p-6 mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-[#C8102E]">✉</span> Resend / E-Mail-Service
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Für den Versand von Bestellbestätigungen und Gutscheinen nutzen wir den E-Mail-Service Resend.
                Ihre E-Mail-Adresse wird ausschließlich zum Zweck der Vertragserfüllung verarbeitet.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              7. Cookies
            </h2>

            <div className="bg-[#FFF9E6] border-l-4 border-[#C9A961] p-6 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Unsere Website verwendet so genannte „Cookies". Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
                Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
              nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
              das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              8. Ihre Rechte als betroffene Person
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
                <li><strong>Recht auf Beschwerde bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO)</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              9. Dauer der Datenspeicherung
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung der jeweiligen Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Bestelldaten:</strong> 10 Jahre (steuerrechtliche Aufbewahrungspflicht)
              </li>
              <li>
                <strong>Kontaktanfragen:</strong> Bis zur vollständigen Bearbeitung + 3 Jahre
              </li>
              <li>
                <strong>Analytics-Daten:</strong> 14 Monate (Google Analytics)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#C9A961]">
              10. SSL- bzw. TLS-Verschlüsselung
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://"
              wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="text-sm italic text-gray-600 mb-2">
              <strong>Stand dieser Datenschutzerklärung:</strong> Januar 2025
            </p>
            <p className="text-sm text-gray-600">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
          </div>

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
