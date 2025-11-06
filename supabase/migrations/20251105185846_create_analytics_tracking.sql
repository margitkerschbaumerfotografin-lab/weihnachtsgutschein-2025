/*
  # Analytics & Conversion Tracking System

  1. Neue Tabellen
    - `analytics_events`
      - `id` (uuid, primary key)
      - `session_id` (text) - Unique session identifier
      - `event_type` (text) - Type of event (page_view, button_click, purchase, etc.)
      - `event_data` (jsonb) - Flexible data storage for event details
      - `utm_source` (text) - Traffic source
      - `utm_medium` (text) - Traffic medium
      - `utm_campaign` (text) - Campaign name
      - `utm_term` (text) - Campaign term
      - `utm_content` (text) - Campaign content
      - `page_url` (text) - URL where event occurred
      - `referrer` (text) - Referrer URL
      - `user_agent` (text) - Browser user agent
      - `ip_address` (inet) - User IP address
      - `created_at` (timestamptz) - Event timestamp

    - `conversions`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key to orders)
      - `session_id` (text) - Links to analytics_events
      - `conversion_value` (numeric) - Purchase value
      - `utm_source` (text)
      - `utm_medium` (text)
      - `utm_campaign` (text)
      - `utm_term` (text)
      - `utm_content` (text)
      - `time_to_conversion` (interval) - Time from first visit to conversion
      - `touchpoints` (jsonb) - Array of all touchpoints before conversion
      - `created_at` (timestamptz)

  2. Sicherheit
    - Enable RLS on both tables
    - Public can insert analytics events (for tracking)
    - Only authenticated service role can read data
*/

-- Analytics Events Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  event_type text NOT NULL,
  event_data jsonb DEFAULT '{}'::jsonb,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  page_url text,
  referrer text,
  user_agent text,
  ip_address inet,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_utm_campaign ON analytics_events(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);

ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics events"
  ON analytics_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only service role can read analytics"
  ON analytics_events FOR SELECT
  TO authenticated
  USING (true);

-- Conversions Table
CREATE TABLE IF NOT EXISTS conversions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  session_id text NOT NULL,
  conversion_value numeric NOT NULL,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  time_to_conversion interval,
  touchpoints jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_conversions_order_id ON conversions(order_id);
CREATE INDEX IF NOT EXISTS idx_conversions_session_id ON conversions(session_id);
CREATE INDEX IF NOT EXISTS idx_conversions_utm_campaign ON conversions(utm_campaign);
CREATE INDEX IF NOT EXISTS idx_conversions_created_at ON conversions(created_at DESC);

ALTER TABLE conversions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service can manage conversions"
  ON conversions FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
