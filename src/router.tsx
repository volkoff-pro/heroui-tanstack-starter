import { Button } from '@heroui/react';
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import { RootLayout } from './root-layout';

const RootRoute = createRootRoute({
  component: RootLayout,
});

const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: () => <div className="p-4">Home Page</div>,
});

const AboutRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/about',
  component: () => (
    <div className="p-4">
      About Page
      <hr />
      <Button color="primary">Home</Button>
    </div>
  ),
});

const routeTree = RootRoute.addChildren([HomeRoute, AboutRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
