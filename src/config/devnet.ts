import { NATIVE_MINT } from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';

import { ImageRef } from '@/types';

import btcLogo from '../../public/images/btc.svg';
import ethLogo from '../../public/images/eth.svg';
import solLogo from '../../public/images/sol.svg';
import usdcLogo from '../../public/images/usdc.svg';
import usdtLogo from '../../public/images/usdt.svg';
import IConfiguration from './IConfiguration';

class DevnetConfiguration implements IConfiguration {
  public readonly cluster = 'devnet';

  public readonly tokensInfo: {
    [tokenPubkey: string]: {
      name: string;
      symbol: string;
      image: ImageRef;
      coingeckoId: string;
      decimals: number;
    };
  } = {
    '4ZY3ZH8bStniqdCZdR14xsWW6vrMsCJrusobTdy4JipC': {
      name: 'USD Coin',
      symbol: 'USDC',
      image: usdcLogo,
      coingeckoId: 'usd-coin',
      decimals: 6,
    },
    CXFBW6kuWfCUKbD2CZN2nz3B4YQywJFozzMBkryM4rA: {
      name: 'Theter',
      symbol: 'USDT',
      image: usdtLogo,
      coingeckoId: 'tether',
      decimals: 6,
    },
    '3AHAG1ZSUnPz43XBFKRqnLwhdyz29WhHvYQgVrcheCwr': {
      name: 'Ethereum',
      symbol: 'ETH',
      image: ethLogo,
      coingeckoId: 'ethereum',
      decimals: 6,
    },
    HRvpfs8bKiUbLzSgT4LmKKugafZ8ePi5Vq7icJBC9dnM: {
      name: 'Bitcoin',
      symbol: 'BTC',
      image: btcLogo,
      coingeckoId: 'bitcoin',
      decimals: 6,
    },
    [NATIVE_MINT.toBase58()]: {
      name: 'Solana',
      symbol: 'SOL',
      image: solLogo,
      coingeckoId: 'solana',
      decimals: 9,
    },
  };

  public readonly governanceProgram: PublicKey = new PublicKey(
    'GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw',
  );

  public readonly clockworkProgram: PublicKey = new PublicKey(
    'CLoCKyJ6DXBJqqu2VWx9RLbgnwwR6BMHHuyasVmfMzBh',
  );

  public readonly stakesClaimPayer: PublicKey = new PublicKey(
    'C1ockworkPayer11111111111111111111111111111',
  );

  public readonly governanceRealmName = 'AdrenaRealm5';

  // Wallet: 6hqz24NfaMwEvUna95p7haPqrh2urVwyVo1gLHEqUVXY (Orex)

  public readonly mainRPC: string =
    //  'https://devnet.helius-rpc.com/?api-key=1e567222-acdb-43ee-80dc-926f9c06d89d';
    'https://api.devnet.solana.com';

  // Wallet: 6hqz24NfaMwEvUna95p7haPqrh2urVwyVo1gLHEqUVXY (Orex)
  public readonly pythRPC: string =
    // 'https://devnet.helius-rpc.com/?api-key=1e567222-acdb-43ee-80dc-926f9c06d89d';
    'https://api.devnet.solana.com';

  public readonly RPCOptions: IConfiguration['RPCOptions'] = [
    {
      name: 'Solana RPC',
      url: 'https://api.devnet.solana.com',
      connection: new Connection('https://api.devnet.solana.com', 'confirmed'),
      latency: null,
    },
    {
      name: 'Helius RPC 1',
      url: 'https://devnet.helius-rpc.com/?api-key=1e567222-acdb-43ee-80dc-926f9c06d89d',
      connection: new Connection(
        'https://devnet.helius-rpc.com/?api-key=1e567222-acdb-43ee-80dc-926f9c06d89d',
        'confirmed',
      ),
      latency: null,
    },
    {
      name: 'Triton RPC Pool 2',
      url: 'https://api.devnet.solana.com',
      connection: new Connection('https://api.devnet.solana.com', 'confirmed'),
      latency: null,
    },
  ];

  public readonly mainPool: PublicKey = new PublicKey(
    '8Hgu4wTyMvdQk9gfXxoEtujfumMMWuPVdMWVrs73qgsa',
  );
}

const config = new DevnetConfiguration();
export default config;
