export type CryptoMultiCurrency = {
  usd: number;
  hkd: number;
};

export type Crypto = {
  id: string;
  symbol: string;
  logo: {
    large: string;
    small: string;
    thumb: string;
  };
  name: {
    'en': string;
    'zh-Hant': string;
  };
  pricePercentChange24h: number;
  pricePercentChange7d: number;
  price: CryptoMultiCurrency;
  volume24h: CryptoMultiCurrency;
  marketCap: CryptoMultiCurrency;
};

export type CryptoTrending = {
  cryptos: Crypto[];
  lastFetchedTime: string;
};

export type PaymentToken = {
  symbol: string;
  imageUrl: string;
  name: string;
  decimals: number;
  ethPrice: number;
  usdPrice: number;
};

export type NFTCollection = {
  name: string;
  slug: string;
  description: string;
  oneDayVolume: number;
  oneDayChange: number;
  oneDaySales: number;
  sevenDayVolume: number;
  sevenDayChange: number;
  sevenDaySales: number;
  sevenDayAveragePrice: number;
  totalVolume: number;
  totalSupply: number;
  numOwners: number;
  floorPrice: number;
  paymentToken: PaymentToken;
  imageUrl: string;
};

export type NftTrending = {
  collections: NFTCollection[];
  lastFetchedTime: string;
};
