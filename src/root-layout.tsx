import { HeroUIProvider, Link } from '@heroui/react';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { useHref } from './hooks/useHeroHref';
import { useHeroNavigate } from './hooks/useHeroNavigate';
import { router } from './router';

function RootLayout() {
  const navigate = useHeroNavigate(router);
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <div>
        <header className="p-4 bg-gray-100">
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </HeroUIProvider>
  );
}

export { RootLayout };
