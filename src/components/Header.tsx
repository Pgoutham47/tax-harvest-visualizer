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
    <div className="flex flex-col bg-black">
      {/* Top navbar with logo only */}
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center">
          <span className="text-blue-500 text-xl font-bold"><img 
            src="/lovable-uploads/9f81926c-52c2-4f70-901f-58251a46bd4e.png" 
            alt="KoinX" 
            className="h-8" 
          /></span>
        </div>
      </div>
      
      {/* Content section with different background */}
      <div className="bg-[#121212] p-4">
        {/* Tax Harvesting section */}
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-semibold text-white">Tax Harvesting</h2>
          <button 
            onClick={toggleHowItWorks}
            className="text-sm text-blue-400 hover:underline"
          >
            How it works?
          </button>
        </div>
        
        {/* Info modal button - styled as in the image */}
        <div className="mt-4">
          <button 
            onClick={toggleInfoModal}
            className="flex items-center w-full p-3 border border-blue-500/30 rounded-lg text-white bg-[#1e1e2d]"
          >
            <div className="flex items-center">
              <InfoIcon className="h-5 w-5 mr-2 text-blue-400" />
              <span>Important Notes & Disclaimers</span>
            </div>
            {showInfoModal ? (
              <ChevronUp className="h-5 w-5 ml-auto" />
            ) : (
              <ChevronDown className="h-5 w-5 ml-auto" />
            )}
          </button>
        </div>

        {/* Show the modal content if open */}
        {showInfoModal && <InfoModal isOpen={true} onClose={toggleInfoModal} />}
      </div>
    </div>
  );
};

export default Header;










