
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import Header from '@/components/Header';
import InfoModal from '@/components/InfoModal';
import CapitalGainsCard from '@/components/CapitalGainsCard';
import HoldingsTable from '@/components/HoldingsTable';
import { fetchCapitalGains, fetchHoldings } from '@/services/api';
import { CapitalGains, Holding, UpdatedCapitalGains } from '@/types';

const Index = () => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [originalCapitalGains, setOriginalCapitalGains] = useState<CapitalGains | null>(null);
  const [updatedCapitalGains, setUpdatedCapitalGains] = useState<UpdatedCapitalGains | null>(null);
  const [selectedHoldings, setSelectedHoldings] = useState<string[]>([]);
  const [savings, setSavings] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [holdingsData, gainsData] = await Promise.all([
          fetchHoldings(),
          fetchCapitalGains()
        ]);
        
        setHoldings(holdingsData);
        setOriginalCapitalGains(gainsData);
        setUpdatedCapitalGains({...gainsData.capitalGains});
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load data. Please try again.');
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (!originalCapitalGains) return;

    // Start with the original capital gains
    const updatedGains = {
      stcg: { ...originalCapitalGains.capitalGains.stcg },
      ltcg: { ...originalCapitalGains.capitalGains.ltcg }
    };

    // Apply the effect of selected holdings
    selectedHoldings.forEach(coinId => {
      const holding = holdings.find(h => h.coin === coinId);
      if (!holding) return;

      // Add short-term gains
      if (holding.stcg.gain > 0) {
        updatedGains.stcg.profits += holding.stcg.gain;
      } else {
        updatedGains.stcg.losses += Math.abs(holding.stcg.gain);
      }

      // Add long-term gains
      if (holding.ltcg.gain > 0) {
        updatedGains.ltcg.profits += holding.ltcg.gain;
      } else {
        updatedGains.ltcg.losses += Math.abs(holding.ltcg.gain);
      }
    });

    setUpdatedCapitalGains(updatedGains);

    // Calculate potential savings
    const originalNet = 
      (originalCapitalGains.capitalGains.stcg.profits - originalCapitalGains.capitalGains.stcg.losses) + 
      (originalCapitalGains.capitalGains.ltcg.profits - originalCapitalGains.capitalGains.ltcg.losses);
    
    const updatedNet = 
      (updatedGains.stcg.profits - updatedGains.stcg.losses) + 
      (updatedGains.ltcg.profits - updatedGains.ltcg.losses);

    const potentialSavings = originalNet - updatedNet;
    setSavings(potentialSavings > 0 ? potentialSavings : 0);
    
  }, [selectedHoldings, holdings, originalCapitalGains]);

  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen);
  };

  return (
    <div className="min-h-screen bg-koinz-navy text-white flex flex-col">
      <Header toggleInfoModal={toggleInfoModal} />
      
      <main className="flex-1 container py-6">
        <InfoModal isOpen={infoModalOpen} onClose={() => setInfoModalOpen(false)} />
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-xl">Loading...</div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {originalCapitalGains && (
                <CapitalGainsCard 
                  title="Pre Harvesting"
                  stcg={originalCapitalGains.capitalGains.stcg}
                  ltcg={originalCapitalGains.capitalGains.ltcg}
                />
              )}
              
              {updatedCapitalGains && (
                <CapitalGainsCard 
                  title="After Harvesting"
                  stcg={updatedCapitalGains.stcg}
                  ltcg={updatedCapitalGains.ltcg}
                  isAfterHarvesting
                  savings={savings}
                />
              )}
            </div>
            
            <HoldingsTable 
              holdings={holdings}
              selectedHoldings={selectedHoldings}
              onSelectionChange={setSelectedHoldings}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
