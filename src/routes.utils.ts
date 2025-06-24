import { match } from 'path-to-regexp';

// eslint-disable-next-line no-unused-vars
export function createMatchers(paths: string[]): Array<(path: string) => boolean> {
  return paths.map((routePath) => {
    const matcher = match(routePath, { decode: decodeURIComponent });
    return (path: string) => Boolean(matcher(path));
  });
}
