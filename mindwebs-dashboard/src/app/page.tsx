import ClientMapWrapper from '@/components/ClientMapWrapper';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>🗺️ Map View</h1>
      <ClientMapWrapper />
    </main>
  );
}
