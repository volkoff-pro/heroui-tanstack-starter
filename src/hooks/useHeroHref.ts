import { useLinkProps } from '@tanstack/react-router';

import type { router } from '@/app/router/router';

type Routes = Parameters<typeof router.navigate>[0]['to'];

export function useHref(to: Routes): string {
  const { href } = useLinkProps({ to });
  return href ?? '#';
}
