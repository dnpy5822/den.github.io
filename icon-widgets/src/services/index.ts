import iconClient from './iconClient';

export default {
  fetchTrendingCryptos: async () => iconClient.get(`/v1.0/cryptos/trending`),
  fetchTrendingNfts: async () => iconClient.get(`/v1.0/nft/trending`),
  fetchFeaturedNfts: async (params: { limit: number }) =>
    iconClient.get(`/v1.0/nft/featured`, { params }),
};
