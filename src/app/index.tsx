'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import AppContent from './contentApp';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
