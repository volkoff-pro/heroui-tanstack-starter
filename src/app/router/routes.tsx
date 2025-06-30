import { createRootRoute, createRoute } from '@tanstack/react-router';

import { AboutPage } from '@/pages/About';
import { HomePage } from '@/pages/Home';

import { RootLayout } from '../layouts/RootLayout';

const RootRoute = createRootRoute({
  component: RootLayout,
});

const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: HomePage,
});

const AboutRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/about',
  component: AboutPage,
});

const routeTree = RootRoute.addChildren([HomeRoute, AboutRoute]);

export { routeTree };
