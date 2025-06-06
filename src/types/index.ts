
export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  currentPrice: number;
  totalHolding: number;
  averageBuyPrice: number;
  stcg: {
    balance: number;
    gain: number;
  };
  ltcg: {
    balance: number;
    gain: number;
  };
}

export interface CapitalGains {
  capitalGains: {
    stcg: {
      profits: number;
      losses: number;
    };
    ltcg: {
      profits: number;
      losses: number;
    };
  };
}

export interface UpdatedCapitalGains {
  stcg: {
    profits: number;
    losses: number;
  };
  ltcg: {
    profits: number;
    losses: number;
  };
}
