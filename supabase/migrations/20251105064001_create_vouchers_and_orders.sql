/*
  # Create Vouchers and Orders Tables

  1. New Tables
    - `orders`: Stores payment information and customer details
      - `id` (uuid, primary key)
      - `email` (text, unique per order)
      - `amount` (integer, in cents)
      - `stripe_payment_intent_id` (text, unique)
      - `status` (text, payment status)
      - `created_at` (timestamp)
    
    - `vouchers`: Generated gift vouchers for customers
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `voucher_code` (text, unique)
      - `amount` (integer, in cents)
      - `redeemed` (boolean)
      - `redeemed_at` (timestamp, nullable)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Public read access for voucher verification
    - Restricted write access for orders (via edge functions only)
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  amount integer NOT NULL,
  stripe_payment_intent_id text UNIQUE NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Orders are readable by anyone for verification"
  ON orders FOR SELECT
  USING (true);

CREATE TABLE IF NOT EXISTS vouchers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  voucher_code text UNIQUE NOT NULL,
  amount integer NOT NULL,
  redeemed boolean DEFAULT false,
  redeemed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Vouchers are readable for verification"
  ON vouchers FOR SELECT
  USING (true);

CREATE INDEX idx_orders_email ON orders(email);
CREATE INDEX idx_orders_stripe_id ON orders(stripe_payment_intent_id);
CREATE INDEX idx_vouchers_code ON vouchers(voucher_code);
CREATE INDEX idx_vouchers_order_id ON vouchers(order_id);