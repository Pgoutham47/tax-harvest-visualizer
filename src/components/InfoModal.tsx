
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-koinz-navy border border-blue-500/30 rounded-lg p-0 overflow-hidden mt-4">
      <div className="flex flex-row items-center bg-transparent border-b border-blue-500/30 p-4">
        <div className="h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-2">
          <ChevronDown className="h-4 w-4 text-blue-400" />
        </div>
        <h3 className="text-lg font-medium">Important Notes & Disclaimers</h3>
      </div>
      <div className="space-y-4 p-6">
        <ul className="space-y-3 list-disc pl-5 text-sm text-koinz-lightGray">
          <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
          <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
          <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
          <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
          <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoModal;
