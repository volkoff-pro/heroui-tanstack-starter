import { HeroUIProvider } from '@heroui/react';
import { Outlet } from '@tanstack/react-router';

import { useHeroNavigate, useHref } from './hooks/router-hooks';

function RootLayout() {
  const navigate = useHeroNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <div>
        <header className="p-4 bg-gray-100">
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </HeroUIProvider>
  );
}

export { RootLayout };
