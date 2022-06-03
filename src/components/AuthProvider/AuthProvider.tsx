import { getFeedDetailMatch, getProfileMatch, getTeamMatch, getTeamSettingsMatch } from 'utils/urlHelpers';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authenticate } from 'services/employee';
import { useAppDispatch } from '@hooks/reduxHooks';
import { updateLoggedInEmployee } from 'store/reduxFeatures/loggedInEmployee-slice';
import { addOrgData } from 'store/reduxFeatures/orgData-slice';
import { AxiosError } from 'axios';
import { noOp } from '@constants/common';

export interface AuthI {
  isAuthenticated: boolean | null;
  onLogin: () => void;
  onLogout: () => void;
}
const initialContextValue = {
  isAuthenticated: false,
  onLogin: noOp,
  onLogout: noOp,
};
const AuthContext = createContext<AuthI>(initialContextValue);

function getBodyForAuthenticationCall({ path }: { path: string }) {
  const teamMatch = getTeamMatch(path);
  const teamSettingsMatch = getTeamSettingsMatch(path);
  const feedDetailMatch = getFeedDetailMatch(path);
  let body = {};
  if (teamMatch.matches || teamSettingsMatch.matches) {
    const teamId = teamMatch ? teamMatch.params?.teamId : teamSettingsMatch.params?.teamId;
    body = { landingPageType: 'TEAM', landingPageUuid: teamId };
  } else if (feedDetailMatch.matches) {
    const feedId = feedDetailMatch.params?.feedId;
    body = { landingPageType: 'FEED', landingPageUuid: feedId };
  } else {
    const profileMatch = getProfileMatch(path);
    if (profileMatch.matches) {
      const employeeId = profileMatch.params?.employeeId;
      body = { landingPageType: 'EMPLOYEE', landingPageUuid: employeeId };
    }
  }
  return body;
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const body = useMemo(() => getBodyForAuthenticationCall({ path: router.pathname }), [router.pathname]);

  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const handleLogin = useCallback(() => {
    authenticate(body)
      .then((res: any) => {
        setIsAuthenticated(true);
        dispatch(updateLoggedInEmployee(res.employee));
        dispatch(addOrgData(res.orgData));
      })
      .catch((err: AxiosError) => {
        setIsAuthenticated(false);
      });
  }, [body, dispatch]);

  useEffect(() => handleLogin(), [handleLogin]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const value: AuthI = {
    isAuthenticated,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
