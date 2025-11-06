import { useState } from 'react';
import Landing from './pages/Landing';
import Checkout from './pages/Checkout';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'checkout' | 'impressum' | 'datenschutz'>('landing');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleStartCheckout = (amount: number) => {
    setSelectedAmount(amount);
    setCurrentPage('checkout');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setSelectedAmount(null);
  };

  const handleNavigateToImpressum = () => {
    setCurrentPage('impressum');
  };

  const handleNavigateToDatenschutz = () => {
    setCurrentPage('datenschutz');
  };

  return (
    <>
      {currentPage === 'landing' ? (
        <Landing
          onStartCheckout={handleStartCheckout}
          onNavigateToImpressum={handleNavigateToImpressum}
          onNavigateToDatenschutz={handleNavigateToDatenschutz}
        />
      ) : currentPage === 'checkout' ? (
        <Checkout
          amount={selectedAmount!}
          onBack={handleBackToLanding}
          recipientEmail="foto@margitkerschbaumer.com"
        />
      ) : currentPage === 'impressum' ? (
        <Impressum />
      ) : (
        <Datenschutz />
      )}
    </>
  );
}

export default App;
