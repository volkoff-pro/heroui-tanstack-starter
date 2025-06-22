import { HeroUIProvider } from '@heroui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { useHeroNavigate, useHref } from './hooks/router-hooks';
import { RouterProvider } from './RouterProvider';

function RootApp() {
  const navigate = useHeroNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <RouterProvider />
    </HeroUIProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
);
