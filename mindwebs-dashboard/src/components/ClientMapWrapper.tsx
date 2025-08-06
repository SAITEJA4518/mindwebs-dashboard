'use client';

import dynamic from 'next/dynamic';

// No await, no async, no `then`
const TestMap = dynamic(() => import('./TestMap'), {
  ssr: false,
});

export default function ClientMapWrapper() {
  return <TestMap />;
}
