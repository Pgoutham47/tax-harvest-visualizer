
import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="w-full mx-auto mt-6">
      <div className="bg-card py-3 px-6 rounded-b-lg border-t-0 border border-blue-500/30">
        <ul className="space-y-3 list-disc pl-5 text-sm text-muted-foreground">
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
