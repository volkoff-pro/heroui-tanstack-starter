import { createRootRoute, createRoute } from '@tanstack/react-router';

import { AboutPage } from '@/pages/About';
import { HomePage } from '@/pages/Home';
import { SubscriptionsPage } from '@/pages/Subscriptions';

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

const SubscriptionRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/subscriptions',
  component: SubscriptionsPage,
});

const routeTree = RootRoute.addChildren([HomeRoute, AboutRoute, SubscriptionRoute]);

export { routeTree };
