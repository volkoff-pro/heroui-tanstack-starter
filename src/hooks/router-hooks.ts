import { type NavigateOptions, useLinkProps, useNavigate } from '@tanstack/react-router';

import type { router } from '../router'; // Импортируй твой роутер из src/router.ts

type Routes = Parameters<typeof router.navigate>[0]['to']; // Типы путей из роутера

export function useHref(to: Routes): string {
  const { href } = useLinkProps({ to });
  return href ?? '#';
}

export function useHeroNavigate() {
  const navigate = useNavigate();

  return (to: Routes | NavigateOptions | undefined) => {
    if (!to) {
      console.warn('[navigate] called with undefined or null');
      return;
    }
    const navArg = typeof to === 'string' ? { to } : to;

    void navigate(navArg).catch((err) => {
      console.error('[navigate] error:', err);
    });
  };
}
