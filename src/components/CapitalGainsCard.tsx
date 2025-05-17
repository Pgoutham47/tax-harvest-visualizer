
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
    <div className={`rounded-lg p-6 ${bgColorClass} w-full`}>
      <h3 className="text-xl font-semibold mb-8 text-white">{title}</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div></div>
        <div className="text-center text-sm text-koinz-gray">Short-term</div>
        <div className="text-center text-sm text-koinz-gray">Long-term</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-3 items-center">
        <div className="text-left text-white">Profits</div>
        <div className="text-right text-white">
          {stcg.profits > 0 ? `$${stcg.profits.toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
        <div className="text-right text-white">
          {ltcg.profits > 0 ? `$${ltcg.profits.toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-3 items-center">
        <div className="text-left text-white">Losses</div>
        <div className="text-right text-white">
          {stcg.losses > 0 ? `- $${stcg.losses.toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
        <div className="text-right text-white">
          {ltcg.losses > 0 ? `- $${ltcg.losses.toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8 items-center">
        <div className="text-left text-white">Net Capital Gains</div>
        <div className="text-right text-white">
          {stcgNet !== 0 ? `${stcgNet >= 0 ? '$' : '- $'}${Math.abs(stcgNet).toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
        <div className="text-right text-white">
          {ltcgNet !== 0 ? `${ltcgNet >= 0 ? '$' : '- $'}${Math.abs(ltcgNet).toLocaleString('en-US', {maximumFractionDigits: 0})}` : ''}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-xl text-white">
          {isAfterHarvesting ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
        </div>
        <div className="text-2xl font-bold ml-2 text-white">
          {totalGains !== 0 ? `${totalGains >= 0 ? '$' : '- $'}${Math.abs(totalGains).toLocaleString('en-US', {maximumFractionDigits: 0})}` : '--'}
        </div>
      </div>
      
      {isAfterHarvesting && savings && savings > 0 && (
        <div className="mt-4 flex items-center text-yellow-300">
          <span className="mr-2">🎉</span>
          <span>You are going to save upto ${savings.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;
