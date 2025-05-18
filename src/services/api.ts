import { CapitalGains, Holding } from "@/types";

// Mock holdings data
const mockHoldings: Holding[] = [
  {
    coin: "BTC",
    coinName: "Bitcoin",
    logo: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
    currentPrice: 60334,
    totalHolding: 0.05,
    stcg: {
      gain: 150,
      balance: 0.01
    },
    ltcg: {
      gain: -50,
      balance: 0.02
    }
  },
  {
    coin: "ETH",
    coinName: "Ethereum",
    logo: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
    currentPrice: 2938,
    totalHolding: 1.5,
    stcg: {
      gain: -75,
      balance: 0.5
    },
    ltcg: {
      gain: 200,
      balance: 0.75
    }
  },
  {
    coin: "USDT",
    coinName: "Tether",
    logo: "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png",
    currentPrice: 1,
    totalHolding: 1000,
    stcg: {
      gain: 0,
      balance: 0
    },
    ltcg: {
      gain: 0,
      balance: 0
    }
  },
  {
    coin: "MATIC",
    coinName: "Polygon",
    logo: "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png",
    currentPrice: 0.75,
    totalHolding: 500,
    stcg: {
      gain: -25,
      balance: 100
    },
    ltcg: {
      gain: 50,
      balance: 200
    }
  }
];

// Mock capital gains data
const mockCapitalGains: CapitalGains = {
  capitalGains: {
    stcg: {
      profits: 2335,
      losses: 1548
    },
    ltcg: {
      profits: 5020,
      losses: 3050
    }
  }
};

// Simulated API calls with promises
export const fetchHoldings = (): Promise<Holding[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockHoldings);
    }, 500);
  });
};

export const fetchCapitalGains = (): Promise<CapitalGains> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCapitalGains);
    }, 500);
  });
};
