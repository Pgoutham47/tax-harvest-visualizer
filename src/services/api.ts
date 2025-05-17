
import { CapitalGains, Holding } from "@/types";

// Mock holdings data
const mockHoldings: Holding[] = [
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "currentPrice": 85320.15,
    "totalHolding": 0.63776,
    "averageBuyPrice": 55000,
    "stcg": {
      "balance": 0.338,
      "gain": -1200
    },
    "ltcg": {
      "balance": 0.300,
      "gain": -2400
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
      "balance": 2.333,
      "gain": -1200
    },
    "ltcg": {
      "balance": 3.245,
      "gain": -2400
    }
  },
  {
    "coin": "USDT",
    "coinName": "Tether",
    "logo": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    "currentPrice": 1.00,
    "totalHolding": 3142.21,
    "averageBuyPrice": 1.00,
    "stcg": {
      "balance": 2011.23,
      "gain": -1200
    },
    "ltcg": {
      "balance": 802.47,
      "gain": -2400
    }
  },
  {
    "coin": "MATIC",
    "coinName": "Polygon",
    "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    "currentPrice": 0.50,
    "totalHolding": 2204,
    "averageBuyPrice": 0.45,
    "stcg": {
      "balance": 802,
      "gain": -1200
    },
    "ltcg": {
      "balance": 1402,
      "gain": -2400
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
