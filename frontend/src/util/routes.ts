interface Route {
  path: string;
  tab: number;
}

export const routes: Route[] = [
  {
    path: '/',
    tab: 0,
  },
  {
    path: '/grid',
    tab: 1,
  },
  {
    path: '/chart',
    tab: 2,
  },
];
