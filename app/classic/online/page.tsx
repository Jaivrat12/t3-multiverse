import { type Metadata } from 'next';
import T3ClassicOnline from '@/components/T3Classic/T3ClassicOnline';

export const metadata: Metadata = {
    title: 'Tic Tac Toe Classic Online | T3 Multiverse',
    description: 'Play Classic Tic Tac Toe with Online Players!',
};

export default function T3ClassicOnlinePage() {
    return <T3ClassicOnline />;
}
