import { MoralisNextApi } from '@moralisweb3/next';

export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY || '',
  authentication: {
    //domain: 'ethereum-boilerplate.dapp',
    domain: 'vercel.app'
    uri: process.env.NEXTAUTH_URL || '',
    timeout: 120,
  },
});
