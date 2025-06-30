import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';

import type { RouterType } from '@/app/router/router';
import { createMatchers } from '@/app/router/routes.utils';

export function useHeroNavigate(router: RouterType) {
  const navigate = useNavigate();

  const allPaths = useMemo(() => Object.values(router.routesById).map((r) => r.fullPath), [router.routesById]);
  const matchers = useMemo(() => createMatchers(allPaths), [allPaths]);

  function isValidPath(path: string): boolean {
    return matchers.some((matcher) => matcher(path));
  }

  async function heroNavigate(path: string) {
    if (!isValidPath(path)) {
      console.warn(`[navigate] invalid path "${path}". Redirecting to "/"`);
      await navigate({ to: '/' });
      return;
    }

    try {
      await navigate({ to: path as Parameters<typeof router.navigate>[0]['to'] });
    } catch (err) {
      console.error('[navigate] error:', err);
    }
  }

  return heroNavigate;
}
