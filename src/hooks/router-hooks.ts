import { useLinkProps, useNavigate } from '@tanstack/react-router';

import type { router } from '../router';

type Routes = Parameters<typeof router.navigate>[0]['to'];

export function useHref(to: Routes): string {
  const { href } = useLinkProps({ to });
  return href ?? '#';
}

export function useHeroNavigate() {
  const navigate = useNavigate();

  return (path: string) => {
    try {
      // Тут можно добавить валидацию, если путь не в списке разрешённых
      void navigate({ to: path as '/' | '/about' }); // или просто `to: path`, если отключить строгую типизацию маршрутов
    } catch (err) {
      console.error('[navigate] error:', err);
    }
  };
}
