
import { CapitalGains, Holding } from "@/types";

// Mock holdings data
const mockHoldings: Holding[] = [
  {
    "coin": "USDC",
    "coinName": "USDC",
    "logo": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    "currentPrice": 85.41,
    "totalHolding": 0.0015339999999994802,
    "averageBuyPrice": 1.5863185433764244,
    "stcg": {
      "balance": 0.0015339999999994802,
      "gain": 0.12858552735441697
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "WETH",
    "coinName": "Polygon PoS Bridged WETH (Polygon POS)",
    "logo": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
    "currentPrice": 211756,
    "totalHolding": 0.00023999998390319965,
    "averageBuyPrice": 3599.856066001555,
    "stcg": {
      "balance": 0.00023999998390319965,
      "gain": 49.957471193511736
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "SOL",
    "coinName": "SOL (Wormhole)",
    "logo": "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
    "currentPrice": 14758.01,
    "totalHolding": 3.469446951953614e-17,
    "averageBuyPrice": 221.42847548590152,
    "stcg": {
      "balance": 3.469446951953614e-17,
      "gain": 5.043389846205066e-13
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "BTC",
    "coinName": "Bitcoin",
    "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "currentPrice": 3436542.61,
    "totalHolding": 0.00063776,
    "averageBuyPrice": 3250000,
    "stcg": {
      "balance": 0.00063776,
      "gain": 118.72
    },
    "ltcg": {
      "balance": 0,
      "gain": 0
    }
  },
  {
    "coin": "ETH",
    "coinName": "Ethereum",
    "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "currentPrice": 186500.93,
    "totalHolding": 0.056736,
    "averageBuyPrice": 162000,
    "stcg": {
      "balance": 0.03,
      "gain": 735.03
    },
    "ltcg": {
      "balance": 0.026736,
      "gain": 655.44
    }
  },
  {
    "coin": "MATIC",
    "coinName": "Polygon",
    "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    "currentPrice": 45.42,
    "totalHolding": 224.10,
    "averageBuyPrice": 52.31,
    "stcg": {
      "balance": 100,
      "gain": -689.00
    },
    "ltcg": {
      "balance": 124.10,
      "gain": -854.09
    }
  }
];

// Mock capital gains data
const mockCapitalGains: CapitalGains = {
  capitalGains: {
    stcg: {
      profits: 70200.88,
      losses: 1548.53
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
