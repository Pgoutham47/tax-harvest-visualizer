
import { CapitalGains, Holding } from "@/types";

// Mock holdings data
const mockHoldings: Holding[] = [
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "currentPrice": 55320.15,
    "totalHolding": 0.63776,
    "averageBuyPrice": 55000,
    "stcg": {
      "balance": 0.338,
      "gain": -1200
    },
    "ltcg": {
      "balance": 0.300,
      "gain": 2400
    }
  },
  {
    "coin": "ETH",
    "coinName": "Ethereum",
    "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "currentPrice": 1620.15,
    "totalHolding": 5.6736,
    "averageBuyPrice": 1400,
    "stcg": {
      "balance": 2.332,
      "gain": 55320.15
    },
    "ltcg": {
      "balance": 3.245,
      "gain": 8239.29
    }
  },
  {
    "coin": "USDC",
    "coinName": "USDC",
    "logo": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    "currentPrice": 1.00,
    "totalHolding": 1533.99,
    "averageBuyPrice": 1.00,
    "stcg": {
      "balance": 1533.99,
      "gain": 0
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  }
];

// Mock capital gains data
const mockCapitalGains: CapitalGains = {
  capitalGains: {
    stcg: {
      profits: 1540,
      losses: 743
    },
    ltcg: {
      profits: 1200,
      losses: 650
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
