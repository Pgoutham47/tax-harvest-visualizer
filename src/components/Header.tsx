
import React, { useState } from 'react';
import { InfoIcon, ChevronDown, ChevronUp } from 'lucide-react';
import InfoModal from './InfoModal';

const Header: React.FC = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const toggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const toggleHowItWorks = () => {
    setShowHowItWorks(!showHowItWorks);
  };

  return (
    <div className="flex flex-col bg-black">
      {/* Top navbar with logo only - full width */}
      <div className="w-full border-b border-gray-800 p-4">
        <div className="flex justify-center md:justify-start md:pl-8">
          <span className="text-blue-500 text-xl font-bold">
            <img 
              src="/lovable-uploads/9f81926c-52c2-4f70-901f-58251a46bd4e.png" 
              alt="KoinX" 
              className="h-8" 
            />
          </span>
        </div>
      </div>
      
      {/* Navigation section - matches content width */}
      <div className="bg-[#121212] p-6 w-full max-w-4xl mx-auto">
        {/* Navigation links */}
        <div className="flex flex-wrap items-center space-x-4 mb-6">
          <h2 className="text-2xl font-semibold text-white">Tax Harvesting</h2>
          <button 
            onClick={toggleHowItWorks}
            className="text-sm text-blue-400 hover:underline"
          >
            How it works?
          </button>
          <button 
            onClick={toggleInfoModal}
            className="text-sm text-blue-400 hover:underline"
          >
            Important Notes & Disclaimers
          </button>
        </div>
        
        {/* How it works content */}
        {showHowItWorks && (
          <div className="w-full p-4 bg-white rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How Tax Harvesting Works</h3>
            <p className="text-gray-800">
              Tax harvesting is a strategy of selling investments at a loss to offset capital gains tax liability.
              By selling assets that have experienced a loss, investors can use those losses to reduce their taxable 
              capital gains and potentially lower their tax burden. This tool helps you identify which assets would 
              be most beneficial to sell for tax optimization purposes.
            </p>
          </div>
        )}
        
        {/* Info modal content */}
        {showInfoModal && <InfoModal isOpen={true} onClose={toggleInfoModal} />}
      </div>
    </div>
  );
};

export default Header;
