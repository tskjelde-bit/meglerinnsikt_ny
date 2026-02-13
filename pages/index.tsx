import dynamic from 'next/dynamic';

const KartMap = dynamic(() => import('@/components/KartMap'), { ssr: false });

export default function HomePage() {
  return <KartMap />;
}
