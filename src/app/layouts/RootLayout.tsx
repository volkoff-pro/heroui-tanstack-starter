import { HeroUIProvider } from '@heroui/react';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Navbar } from '@/components/navigation';
import { useHref } from '@/hooks/useHeroHref';
import { useHeroNavigate } from '@/hooks/useHeroNavigate';

import { router } from '../router/router';

const RootLayout = () => {
  const navigate = useHeroNavigate(router);
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </HeroUIProvider>
  );
};

export { RootLayout };
