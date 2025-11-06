# 🎯 Marketing Strategie & Analytics Setup
## Weihnachtsgutschein-Kampagne - Margit Kerschbaumer

---

## 📊 TRACKING INFRASTRUKTUR

### 1. Meta Pixel (Facebook/Instagram Ads)
**Pixel ID:** `1324798721521370`

#### Getrackte Events:
- ✅ **PageView** - Automatisch bei jedem Seitenaufruf
- ✅ **ViewContent** - Produktansicht (Gutschein)
- ✅ **InitiateCheckout** - Checkout gestartet
- ✅ **Lead** - Formular ausgefüllt
- ✅ **Purchase** - Kauf abgeschlossen (mit Transaktions-ID und Wert)

#### Custom Events:
- **CustomizeProduct** - Button-Klicks (welcher CTA performed am besten?)
- **Scroll Depth** - 25%, 50%, 75%, 100% Scroll-Tracking

---

### 2. Google Analytics 4 (Optional)
**Setup:** Fügen Sie Ihre GA4 Measurement ID in `.env` ein: `VITE_GA4_MEASUREMENT_ID`

#### GA4 Enhanced E-Commerce Events:
- `view_item` - Produktansicht mit Item-Details
- `begin_checkout` - Checkout begonnen
- `generate_lead` - Lead generiert
- `purchase` - Kauf mit vollständigem Transaction-Tracking
- `user_engagement` - Zeit auf Seite, Scroll-Tiefe

---

### 3. Datenbank-Tracking (Supabase)
**Tabellen:** `analytics_events`, `conversions`

#### Was wird getrackt:
- 📍 Alle User-Events (Button-Klicks, Seitenaufrufe, Formulare)
- 🔗 UTM-Parameter (Campaign Attribution)
- ⏱️ Time-to-Conversion (von erstem Besuch bis Kauf)
- 🎯 Vollständige Customer Journey (alle Touchpoints)
- 🌐 Referrer, User-Agent, IP-Adresse

---

## 🎪 KAMPAGNEN-SETUP

### UTM-Parameter Struktur

#### Instagram/Facebook Ads:
```
https://weihnachtsgutschein.margitkerschbaumer.com?utm_source=facebook&utm_medium=paid_social&utm_campaign=weihnachten_2025&utm_content=hero_image_v1
```

#### Google Ads (falls relevant):
```
https://weihnachtsgutschein.margitkerschbaumer.com?utm_source=google&utm_medium=cpc&utm_campaign=weihnachten_portrait&utm_term=fotoshooting_gutschein
```

#### Email Marketing:
```
https://weihnachtsgutschein.margitkerschbaumer.com?utm_source=newsletter&utm_medium=email&utm_campaign=weihnachten_bestand
```

---

## 💎 EMPFOHLENE META ADS STRATEGIE

### Phase 1: Testing (Budget: 300-500€, Dauer: 3-5 Tage)

#### Zielgruppen testen:
1. **Lookalike Audience**
   - Basierend auf Ihrer bestehenden Kundenliste
   - 1% Lookalike, Österreich + Deutschland
   - Alter: 30-60 Jahre

2. **Interest-Based**
   - Interessen: Fotografie, Portrait, Premium-Produkte, Wellness, Selbstpflege
   - Alter: 35-60 Jahre, Männer (die für Partnerinnen kaufen)
   - Einkommen: Top 10-25%

3. **Retargeting**
   - Website-Besucher (letzte 30 Tage)
   - ViewContent aber kein Kauf
   - InitiateCheckout aber kein Kauf (SEHR WICHTIG!)

#### Creative Testing (3 Varianten):
- **Variante A:** Hero-Image mit Portrait-Foto + Dringlichkeit
- **Variante B:** Gutschein-Visual mit "Perfektes Geschenk"
- **Variante C:** Video/Carousel mit Vorher-Nachher

#### Copy Testing:
- **Hook 1:** "Weihnachten gerettet" (Dringlichkeit + Lösung)
- **Hook 2:** "Das Geschenk, das sie strahlen lässt" (Emotion)
- **Hook 3:** "Nur noch X Plätze für 2026" (Knappheit)

---

### Phase 2: Skalierung (Budget: 1.000-3.000€)

Nach 3-5 Tagen:
1. **Beste Audience identifizieren** (niedrigster Cost-per-Purchase)
2. **Beste Creative identifizieren** (höchste CTR + CR)
3. **Budget auf Winner konzentrieren**

#### Optimization-Strategie:
- Kampagne optimieren auf "Purchase" (nicht auf Traffic oder Engagement!)
- Budget schrittweise erhöhen (20-30% pro Tag max.)
- Neue Lookalikes erstellen von Käufern

---

## 📈 KEY PERFORMANCE INDICATORS (KPIs)

### Must-Track Metrics:

#### Meta Ads Manager:
- **CPM** (Cost per 1000 Impressions) - Ziel: < €15
- **CTR** (Click-Through-Rate) - Ziel: > 2%
- **CPC** (Cost per Click) - Ziel: < €2
- **Cost per InitiateCheckout** - Ziel: < €15
- **Cost per Purchase** - Ziel: < €50
- **ROAS** (Return on Ad Spend) - Ziel: > 5x (€390 Verkauf / €50 Kosten = 7.8x)

#### Website Analytics:
- **Bounce Rate** - Ziel: < 40%
- **Scroll Depth** - Wie viele erreichen Ende der Seite?
- **Button Click Rate** - Welcher CTA performed am besten?
- **Checkout Abandonment** - % die Checkout starten aber nicht kaufen

#### Conversion Funnel:
```
PageView → ViewContent → InitiateCheckout → Purchase
100%    →    60%      →      15%         →   5%
```

---

## 🎯 ZIELGRUPPEN-EMPFEHLUNGEN

### Primäre Zielgruppe (80% Budget):
- **Männer, 35-55 Jahre**
- Verheiratet/in Partnerschaft
- Österreich (Focus: Salzburg, Wien, Innsbruck)
- Haushaltseinkommen: Top 25%
- Interessen: Premium-Geschenke, Erlebnisse, Wellness

### Sekundäre Zielgruppe (20% Budget):
- **Frauen, 35-55 Jahre** (die für sich selbst kaufen)
- Interesse an Fotografie, Selbstpflege, Persönlichkeitsentwicklung

---

## 🔄 RETARGETING-SEQUENZ

### Tag 1-3 nach Besuch:
**Botschaft:** "Haben Sie den perfekten Weihnachtsmoment verpasst?"
**Offer:** Kostenloser Versand bei Bestellung heute

### Tag 4-7:
**Botschaft:** "Nur noch X Plätze verfügbar"
**Social Proof:** Testimonial von zufriedener Kundin

### Tag 8-14:
**Botschaft:** "Letzte Chance - Kontingent fast ausverkauft"
**Dringlichkeit:** Countdown-Timer

---

## 📧 EMAIL FOLLOW-UP (für Leads)

### Automatische Sequenz nach InitiateCheckout ohne Kauf:

**Email 1 (nach 1 Stunde):**
Betreff: "Sie waren nur einen Klick entfernt..."
Inhalt: Erinnerung + FAQ + Testimonial

**Email 2 (nach 24 Stunden):**
Betreff: "Fragen zum Gutschein?"
Inhalt: Antworten auf häufige Fragen, Angebot eines Telefonats

**Email 3 (nach 3 Tagen):**
Betreff: "Die Plätze werden knapp..."
Inhalt: Dringlichkeit + letzter Reminder

---

## 📊 REPORTING & OPTIMIZATION

### Tägliches Monitoring:
1. **Meta Events Manager** überprüfen
   - Sind alle Events feuern korrekt?
   - Stimmen die Conversion-Zahlen?

2. **Supabase Analytics Dashboard** checken
   - Welche UTM-Source performed am besten?
   - Welche Button-Position hat höchste Click-Rate?

3. **Ad Performance Review**
   - Schlechte Ads pausieren (CPC > €3 nach 100 Klicks)
   - Budget auf Winner umschichten

### Wöchentliche Analyse:
- ROI-Berechnung pro Kampagne
- Audience Performance Ranking
- Creative Performance Ranking
- Landing Page Optimization (Heatmaps, Scroll-Tracking)

---

## 💰 BUDGET-EMPFEHLUNG

### Minimal-Budget (Test):
- **€500 für 5 Tage**
- 3 Audiences testen
- 3 Creatives testen
- Ziel: 5-10 Käufe

### Optimal-Budget (Skalierung):
- **€2.000-3.000 für Weihnachts-Saison**
- Focus auf beste Audience + Creative
- Aggressive Retargeting
- Ziel: 40-60 Käufe = €15.600-23.400 Revenue

### ROI-Kalkulation:
```
Beispiel:
Ad Spend: €2.500
Käufe: 50
Revenue: €19.500 (50 × €390)
ROI: 780% (€19.500 / €2.500 = 7.8x)
Profit: €17.000
```

---

## 🚀 QUICK START CHECKLIST

### Vor dem Launch:
- [ ] Meta Pixel testet korrekt (Browser-Extension "Meta Pixel Helper")
- [ ] Test-Kauf durchführen und Purchase-Event verifizieren
- [ ] UTM-Parameter in allen Ad-Kampagnen setzen
- [ ] Retargeting-Audiences in Meta erstellen (ViewContent, InitiateCheckout)
- [ ] Custom Conversions in Meta Ads Manager anlegen

### Nach dem Launch:
- [ ] Täglich Events in Meta Events Manager überprüfen
- [ ] Wöchentlich Datenbank-Reports in Supabase analysieren
- [ ] A/B-Tests basierend auf Button-Click-Data durchführen
- [ ] Best-Performing Ads skalieren
- [ ] Schlechte Ads pausieren

---

## 🎓 PRO-TIPPS VOM EXPERTEN

### 1. Der "Front-Runner" Test
Starten Sie mit **5-7 Ad Sets** (verschiedene Audiences + Creatives).
Nach **48 Stunden**: Pausieren Sie die schlechtesten 50%.
Nach **5 Tagen**: Nur noch die Top 2 laufen lassen und aggressiv skalieren.

### 2. Creative Refresh
Alle **3-5 Tage** eine neue Creative-Variante testen.
Meta Ads ermüden schnell - Fresh Content ist König!

### 3. Price Anchoring
In Ihren Ads könnten Sie erwähnen:
"Regulärer Shooting-Preis: €2.500+ / Heute: Nur €390 Platzgebühr"
→ Macht das Angebot unwiderstehlich

### 4. Scarcity Tactic
Aktualisieren Sie regelmäßig:
"Noch 15 Plätze verfügbar" → "Noch 8 Plätze" → "Letzte 3 Plätze!"
Erstellen Sie echte Dringlichkeit.

### 5. Social Proof Integration
Fügen Sie auf der Landing Page hinzu:
- "127 Gutscheine bereits verkauft" (Live-Counter)
- Recent Purchases: "Maria aus Salzburg hat gerade gekauft"
- Star-Rating: ⭐⭐⭐⭐⭐ (4.9/5 aus 89 Bewertungen)

---

## 📞 SUPPORT & OPTIMIERUNG

### Bei Fragen zur Kampagne:
1. Prüfen Sie Meta Events Manager - feuern alle Events?
2. Überprüfen Sie Supabase Database - werden Events gespeichert?
3. Browser Console öffnen (F12) - werden Tracking-Events geloggt?

### Technische Änderungen:
- Alle Tracking-Functions sind in `/src/utils/analytics.ts`
- Datenbank-Queries in `/src/utils/trackingDatabase.ts`
- Neue Events einfach hinzufügen durch `trackEventToDatabase('event_name', {data})`

---

## 🎯 ERWARTETE ERGEBNISSE

Bei korrekter Umsetzung dieser Strategie:

**Monat 1 (Testing):**
- 15-25 Käufe
- Cost per Purchase: €40-60
- ROAS: 6-8x

**Monat 2-3 (Optimiert):**
- 40-60 Käufe pro Monat
- Cost per Purchase: €30-40
- ROAS: 10-12x

**Lifetime Value:**
Berücksichtigen Sie: Ein Kunde, der mit dem Shooting zufrieden ist, wird:
- Weitere Shootings buchen (Familie, Business, etc.)
- Sie weiterempfehlen (Mundpropaganda)
- Hochwertige Produkte kaufen (Fine Art Bundles)

→ **Realer Customer Lifetime Value: €2.000-5.000+**

Das bedeutet: Sie können es sich leisten, bis zu €200 pro Kunden-Akquisition auszugeben und sind immer noch hochprofitabel!

---

## 🏆 ERFOLGS-MANTRA

**"Messen. Optimieren. Skalieren. Wiederholen."**

Jede Entscheidung sollte datengetrieben sein. Mit diesem Setup haben Sie alle Tools, um exakt zu sehen:
- Welche Kampagne funktioniert
- Welche Zielgruppe kauft
- Welcher CTA konvertiert
- Wie lange der Customer Journey dauert
- Was Ihr ROI ist

**Sie haben jetzt ein Marketing-System wie die Top 1% der E-Commerce Brands.**

Viel Erfolg! 🚀
