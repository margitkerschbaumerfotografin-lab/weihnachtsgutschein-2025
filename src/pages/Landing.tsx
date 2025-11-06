import { useEffect } from 'react';
import { CheckCircle, Gift, Sparkles, AlertCircle } from 'lucide-react';
import { trackViewContent, trackButtonClick } from '../utils/analytics';
import { trackEventToDatabase } from '../utils/trackingDatabase';
import { useAnalytics } from '../hooks/useAnalytics';

interface LandingProps {
  onStartCheckout: (amount: number) => void;
  onNavigateToImpressum?: () => void;
  onNavigateToDatenschutz?: () => void;
}

export default function Landing({ onStartCheckout, onNavigateToImpressum, onNavigateToDatenschutz }: LandingProps) {
  const voucherAmount = 390;
  useAnalytics();

  useEffect(() => {
    trackViewContent('Weihnachtsgutschein Frauen-Portrait-Fotoshooting', voucherAmount);
    trackEventToDatabase('page_view', {
      page: 'landing',
      product: 'Weihnachtsgutschein',
      value: voucherAmount,
    });
  }, [voucherAmount]);

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Red Alert Banner - Dringlichkeit */}
      <div className="bg-[#C8102E] text-white text-center py-4 px-4">
        <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2">
          <AlertCircle className="w-5 h-5" />
          ACHTUNG: Dieses Kontingent ist STRENG LIMITIERT. Alle regulären Termine 2025 sind bereits restlos ausgebucht! Sichern Sie jetzt ihren garantierten Platz für 2026.
        </p>
      </div>

      {/* A. HERO SEKTION */}
      <section className="relative h-[700px] md:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Stilvolles-Frauen-Portrait-Fotoshooting-Salzburg-(c)Margit-Kerschbaumer-Meisterfotografin.jpg"
            alt="Stilvolles Frauen Portrait"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center md:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
              Weihnachten gerettet: Das Geschenk, das Ihre Liebste strahlen lässt.
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl mb-10 text-white/95 leading-relaxed text-center md:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Sichern Sie ihr einen garantierten Platz für ein zeitloses und stilvolles Frauen-Portrait-Fotoshooting mit Meisterfotografin Margit Kerschbaumer – damit sie sich wieder wunderschön fühlt.
            </h2>
            <div className="text-center md:text-left">
              <button
                onClick={() => {
                  trackButtonClick('CTA Hero Section', 'hero');
                  trackEventToDatabase('button_click', {
                    button: 'CTA Hero',
                    location: 'hero_section',
                    value: voucherAmount,
                  });
                  onStartCheckout(voucherAmount);
                }}
                className="bg-[#C8102E] hover:bg-[#A00D24] text-white px-10 py-5 rounded-lg text-lg md:text-xl font-bold transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 inline-block"
              >
                Ihren limitierten garantierten Platz für {voucherAmount}€ JETZT sichern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        {/* B. WERTVERSPRECHEN & ANRECHNUNG */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-[#C9A961] text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sie schenken ein Gefühl. Sie investieren in ihr strahlendes Selbst.
          </h3>

          <div className="bg-[#F9F6F0] border-4 border-[#C9A961] rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ihre {voucherAmount}€ sichern den garantierten Platz (100% Anrechnung).
              </h4>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">100% ANRECHNUNGS-GARANTIE!</h5>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Die {voucherAmount}€ Aufnahmegebühr werden <strong>vollständig</strong> auf den Kauf eines Fine Art Bundles angerechnet.
                    Ihre Liebste entscheidet nach dem Shooting, welche Kunstwerke sie für sich auswählt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#C9A961]/10 rounded-xl p-6 border-2 border-[#C9A961]/30">
              <p className="text-gray-700 leading-relaxed italic">
                <strong>Ein Hinweis:</strong> Unsere Kundinnen erleben dieses Fotoshooting als eine tiefgehende Erfahrung,
                die ihr Selbstvertrauen stärkt und sie ihre Schönheit neu entdecken lässt. Die entstehenden Kunstwerke sind
                eine bleibende Erinnerung daran.
              </p>
            </div>
          </div>
        </section>

        {/* C. DIE ABWICKLUNG - Mit GUTSCHEIN BILD */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#C9A961] text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
              So einfach schenken Sie pures Glück und entlasten sich selbst.
            </h3>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#C9A961] text-white flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Platz sichern (€ {voucherAmount})</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Sie bestellen den limitierten Platz heute bequem online.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#C9A961] text-white flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Liefern</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Erhalten Sie den eleganten Gutschein (Digital oder als wunderschöner Print zum Überreichen).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#C9A961] text-white flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Sie wird strahlen</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Ihre Liebste wird persönlich von meinem Team kontaktiert. Sie wählt ihren Wunschtermin für 2026 und
                      entscheidet danach über die Kunstwerke. <strong>Ihre Arbeit ist nach dem Kauf getan.</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      trackButtonClick('CTA Abwicklung Section', 'middle');
                      trackEventToDatabase('button_click', {
                        button: 'CTA Abwicklung',
                        location: 'process_section',
                        value: voucherAmount,
                      });
                      onStartCheckout(voucherAmount);
                    }}
                    className="w-full bg-[#C8102E] hover:bg-[#A00D24] text-white px-8 py-5 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    JETZT den limitierten garantierten Platz für {voucherAmount}€ sichern
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A961]">
                  <img
                    src="/gutschein-deutsch-pfauenlogo-margit-kerschbaumer.jpg"
                    alt="Eleganter Gutschein mit Pfauen-Logo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#C9A961] text-white p-6 rounded-lg shadow-xl">
                  <Gift className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* D. FINALER AUFRUF & VERTRAUEN */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-[#F9F6F0] to-white rounded-2xl p-10 md:p-16 shadow-xl border-2 border-[#C9A961]/30">
            <blockquote className="text-center mb-10">
              <p className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Meine Mission ist es, Frauen in meiner Meisterfotografie so zu portraitieren, dass sie sich selbst wiedersehen –
                strahlend, wunderschön und selbstbewusst. Ein Erlebnis, das sie niemals vergessen wird."
              </p>
              <footer className="text-lg font-semibold text-[#C9A961]">
                – Margit Kerschbaumer
              </footer>
            </blockquote>

            <div className="bg-[#C8102E]/10 border-2 border-[#C8102E] rounded-xl p-6 mb-8 text-center">
              <p className="text-gray-900 font-semibold text-lg">
                Verpassen Sie nicht die Chance, Ihrer Liebsten dieses einzigartige Gefühl zu schenken.
                Das Kontingent für 2026 ist streng limitiert.
              </p>
            </div>

            <button
              onClick={() => {
                trackButtonClick('CTA Final Section', 'bottom');
                trackEventToDatabase('button_click', {
                  button: 'CTA Final',
                  location: 'final_section',
                  value: voucherAmount,
                });
                onStartCheckout(voucherAmount);
              }}
              className="w-full bg-[#C8102E] hover:bg-[#A00D24] text-white px-10 py-6 rounded-lg text-xl md:text-2xl font-bold transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105"
            >
              Ihren garantierten Platz für {voucherAmount}€ JETZT sichern
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3D2817] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Margit Kerschbaumer
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Meisterfotografin für Portrait- und Businessfotografie in Salzburg
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-white/80 text-sm">
                E-Mail: foto@margitkerschbaumer.com<br />
                Tel: +43 699 108 909 28
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li>Gutscheine gültig 3 Jahre</li>
                <li>Sichere Zahlung mit Stripe</li>
                <li>Sofortige Zustellung per E-Mail</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 Margit Kerschbaumer - Meisterfotografin</p>
            <p className="mt-2">
              <button onClick={onNavigateToImpressum} className="hover:text-white transition-colors">
                Impressum
              </button>
              {' | '}
              <button onClick={onNavigateToDatenschutz} className="hover:text-white transition-colors">
                Datenschutz
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
