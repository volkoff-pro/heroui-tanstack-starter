import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';

// Layout маршрут
const RootRoute = createRootRoute({
  component: () => (
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
  ),
});

// Страницы
const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: () => <div className="p-4">Home Page</div>,
});

const AboutRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/about',
  component: () => <div className="p-4">About Page</div>,
});

const routeTree = RootRoute.addChildren([HomeRoute, AboutRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
