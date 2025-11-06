import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { trackInitiateCheckout, trackLead } from '../utils/analytics';
import { trackEventToDatabase } from '../utils/trackingDatabase';
import { useAnalytics } from '../hooks/useAnalytics';

interface CheckoutProps {
  amount: number;
  onBack: () => void;
  recipientEmail: string;
}

export default function Checkout({ amount, onBack, recipientEmail }: CheckoutProps) {
  const [deliveryOption, setDeliveryOption] = useState<'digital' | 'physical'>('digital');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useAnalytics();

  useEffect(() => {
    trackInitiateCheckout(amount);
    trackEventToDatabase('checkout_started', {
      page: 'checkout',
      amount: amount,
      delivery_option: deliveryOption,
    });
  }, [amount, deliveryOption]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackLead();
    trackEventToDatabase('form_submitted', {
      page: 'checkout',
      delivery_option: deliveryOption,
      amount: deliveryOption === 'digital' ? amount : 405,
    });
    alert('Zahlung würde hier verarbeitet werden');
  };

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sichern Sie Ihren garantierten Platz
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Nur noch wenige Schritte zum exklusiven Weihnachtsgeschenk
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Linke Spalte: Produkt & Formular */}
          <div className="space-y-8">
            {/* Ihr Produkt */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Ihr Produkt</h2>
              </div>

              <div className="p-6">
                <div className="bg-[#FFF9E6] border-2 border-[#C9A961] rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Garantierter Platz 2026: Aufnahmegebühr
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Zeitloses und stilvolles Frauen-Portrait-Fotoshooting bei Meisterfotografin Margit Kerschbaumer
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A961] flex-shrink-0 mt-0.5" />
                      <span>100% Anrechnung auf Fine Art Bundle</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A961] flex-shrink-0 mt-0.5" />
                      <span>Garantierter Prioritäts-Termin 2026</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A961] flex-shrink-0 mt-0.5" />
                      <span>Persönliches Vorgespräch & Styling-Beratung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lieferoptionen */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Lieferoptionen</h2>
              </div>

              <div className="p-6 space-y-4">
                <label
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    deliveryOption === 'digital'
                      ? 'border-[#C8102E] bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    value="digital"
                    checked={deliveryOption === 'digital'}
                    onChange={() => setDeliveryOption('digital')}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900">Digitaler Gutschein (PDF)</span>
                      <span className="text-[#C9A961] font-bold">€ {amount},-</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sofort per E-Mail zum Ausdrucken. Perfekt für Last-Minute-Geschenke.
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    deliveryOption === 'physical'
                      ? 'border-[#C8102E] bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    value="physical"
                    checked={deliveryOption === 'physical'}
                    onChange={() => setDeliveryOption('physical')}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900">Physischer Gutschein</span>
                      <span className="text-[#C9A961] font-bold">€ 405,-</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Eleganter Print-Gutschein per Post. Bitte bestellen Sie mindestens 5 Werktage vor Weihnachten.
                    </p>
                    <p className="text-xs text-red-600 font-medium">
                      inkl. € 15,- Versandkosten
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Kontaktdaten */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Ihre Kontaktdaten</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vollständiger Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Max Mustermann"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="max@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+43 123 456789"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8102E] hover:bg-[#A00D24] text-white font-bold py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Zur sicheren Zahlung (€ {deliveryOption === 'digital' ? amount : 405},-)
                </button>

                <p className="text-xs text-center text-gray-500">
                  Sie werden zu unserem sicheren Zahlungspartner Stripe weitergeleitet.
                </p>
              </form>
            </div>
          </div>

          {/* Rechte Spalte: Zusammenfassung */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border-2 border-[#C9A961] overflow-hidden sticky top-8">
              <div className="bg-[#FFF9E6] px-6 py-4 border-b-2 border-[#C9A961]">
                <h2 className="text-xl font-bold text-gray-900">Zusammenfassung</h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex justify-between text-gray-700">
                  <span>Aufnahmegebühr</span>
                  <span className="font-semibold">€ {amount},-</span>
                </div>

                {deliveryOption === 'physical' && (
                  <div className="flex justify-between text-gray-700">
                    <span>Versandkosten</span>
                    <span className="font-semibold">€ 15,-</span>
                  </div>
                )}

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Gesamtsumme</span>
                    <span className="text-[#C9A961]">€ {deliveryOption === 'digital' ? amount : 405},-</span>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-900 mb-1">100% Anrechnungs-Garantie</p>
                      <p className="text-sm text-green-800">
                        Die € {amount},- werden vollständig auf den Kauf eines Fine Art Bundles angerechnet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#C9A961]" />
                    <span>Sichere Zahlung via Stripe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#C9A961]" />
                    <span>Garantierter Termin 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-[#C9A961]" />
                    <span>Persönliche Kontaktaufnahme</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <img
                    src="/gutschein-deutsch-pfauenlogo-margit-kerschbaumer.jpg"
                    alt="Eleganter Gutschein mit Pfauen-Logo"
                    className="w-full rounded-lg shadow-md mb-3"
                  />
                  <p className="text-xs text-center text-gray-500">Ihr eleganter Gutschein</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#3D2817] text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white/60">
          <p>© 2025 Margit Kerschbaumer - Meisterfotografin</p>
          <p className="mt-2">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            {' | '}
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
