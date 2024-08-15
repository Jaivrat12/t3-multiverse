import { type Metadata } from 'next';
import T3ClassicOffline from '@/components/T3Classic/T3ClassicOffline';

export const metadata: Metadata = {
    title: 'Tic Tac Toe Classic Offline | T3 Multiverse',
    description: 'Play Classic Tic Tac Toe in Offline Mode',
};

export default function T3ClassicOfflinePage() {
    return <T3ClassicOffline />;
}
