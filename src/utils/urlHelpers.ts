import { ROUTES } from 'constants/routes';
import { match as matchPath } from 'node-match-path';

export function getTeamMatch(path: string) {
  const match = matchPath(ROUTES.managers.team, path);
  return match;
}

export function getFeedDetailMatch(path: string) {
  const match = matchPath(ROUTES.feedDetail, path);
  return match;
}

export function getProfileMatch(path: string) {
  const match = matchPath(ROUTES.profile, path);
  return match;
}

export function getTeamSettingsMatch(path: string) {
  const match = matchPath(ROUTES.teamSettings, path);
  return match;
}
