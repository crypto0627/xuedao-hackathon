import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const walletConnectProjectId: string = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';
const oracleKey: string = process.env.NEXT_PUBLIC_ALCHEMY_ID || '';

export const config = getDefaultConfig({
  transports: {
    [sepolia.id]: http(oracleKey),
  },
    appName: 'web3template',
    projectId: walletConnectProjectId,
    chains: [sepolia],
    ssr: true,
  });
