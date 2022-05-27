export const ROUTES = {
  home: '/',
  login: '/login',
  managers: {
    team: '/managers/team/:teamId',
  },
  feedDetail: '/feed/:feedId',
  teamSettings: '/settings/teams/:teamId',
  profile: '/employee/:employeeId',
};

export const PUBLIC_PATHS = [ROUTES.login];
