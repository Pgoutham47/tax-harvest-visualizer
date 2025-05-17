import React from 'react';

interface GainsData {
  profits: number;
  losses: number;
}

interface CapitalGainsCardProps {
  title: string;
  stcg: GainsData;
  ltcg: GainsData;
  isAfterHarvesting?: boolean;
  savings?: number;
}

const CapitalGainsCard: React.FC<CapitalGainsCardProps> = ({ 
  title, 
  stcg, 
  ltcg, 
  isAfterHarvesting = false,
  savings 
}) => {
  const stcgNet = stcg.profits - stcg.losses;
  const ltcgNet = ltcg.profits - ltcg.losses;
  const totalGains = stcgNet + ltcgNet;
  
  const bgColorClass = isAfterHarvesting ? 'bg-koinz-blue' : 'bg-koinz-darkNavy';
  
  return (
    <div className={`rounded-lg p-6 ${bgColorClass} w-full text-white`}>
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>
      
      {/* Header Row */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-lg">
        <div></div>
        <div className="text-right pr-2">Short-term</div>
        <div className="text-right pr-2">Long-term</div>
      </div>
      
      {/* Profits Row */}
      <div className="grid grid-cols-3 gap-4 mb-4 items-center text-lg">
        <div>Profits</div>
        <div className="text-right pr-2">
          {stcg.profits > 0 ? `$${stcg.profits.toLocaleString('en-US')}` : '-'}
        </div>
        <div className="text-right pr-2">
          {ltcg.profits > 0 ? `$${ltcg.profits.toLocaleString('en-US')}` : '-'}
        </div>
      </div>
      
      {/* Losses Row */}
      <div className="grid grid-cols-3 gap-4 mb-4 items-center text-lg">
        <div>Losses</div>
        <div className="text-right pr-2">
          {stcg.losses > 0 ? `- $${stcg.losses.toLocaleString('en-US')}` : '-'}
        </div>
        <div className="text-right pr-2">
          {ltcg.losses > 0 ? `- $${ltcg.losses.toLocaleString('en-US')}` : '-'}
        </div>
      </div>
      
      {/* Net Gains Row */}
      <div className="grid grid-cols-3 gap-4 mb-6 items-center text-lg">
        <div>Net Capital Gains</div>
        <div className="text-right pr-2">
          {stcgNet !== 0 ? `${stcgNet >= 0 ? '$' : '- $'}${Math.abs(stcgNet).toLocaleString('en-US')}` : '-'}
        </div>
        <div className="text-right pr-2">
          {ltcgNet !== 0 ? `${ltcgNet >= 0 ? '$' : '- $'}${Math.abs(ltcgNet).toLocaleString('en-US')}` : '-'}
        </div>
      </div>
      
      {/* Total Gains - Tightened layout */}
      <div className="flex items-baseline justify-start gap-2 border-t border-white/20 pt-4 text-xl">
        <div className="whitespace-nowrap">
          {isAfterHarvesting ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
        </div>
        <div className="font-bold">
          {totalGains !== 0 ? `${totalGains >= 0 ? '$' : '- $'}${Math.abs(totalGains).toLocaleString('en-US')}` : '-'}
        </div>
      </div>
      
      {/* Savings Notice */}
      {isAfterHarvesting && savings !== undefined && savings > 0 && (
        <div className="mt-3 flex items-center bg-white/10 rounded px-3 py-2 text-lg">
          <span className="mr-2">🎉</span>
          <span>You are going to save up to ${savings.toLocaleString('en-US')}</span>
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;