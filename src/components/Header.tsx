// header.tsx
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
    <div className="flex flex-col bg-koinz-darkNavy">
      {/* Top navbar with logo only */}
      <div className="border-b border-koinz-gray/10 p-4">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/9f81926c-52c2-4f70-901f-58251a46bd4e.png" 
            alt="KoinX" 
            className="h-8" 
          />
        </div>
      </div>
      
      {/* Navigation section */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tax Harvesting</h2>
          <button 
            onClick={toggleHowItWorks}
            className="flex items-center text-sm text-blue-400 hover:underline"
          >
            How it works?
            {showHowItWorks ? (
              <ChevronUp className="h-4 w-4 ml-1" />
            ) : (
              <ChevronDown className="h-4 w-4 ml-1" />
            )}
          </button>
        </div>
        
        {showHowItWorks && (
          <div className="mt-2 p-3 bg-koinz-navy/50 rounded text-sm">
            Tax-loss harvesting is a strategy to reduce taxes by selling investments at a loss to offset capital gains tax liability.
          </div>
        )}

        <button 
          onClick={toggleInfoModal}
          className="flex items-center justify-between w-full text-koinz-gray hover:text-white transition-colors mt-4"
        >
          <div className="flex items-center">
            <InfoIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">Important Notes & Disclaimers</span>
          </div>
          {showInfoModal ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      <InfoModal isOpen={showInfoModal} onClose={toggleInfoModal} />
    </div>
  );
};

export default Header;