import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

import { PUBLIC_PATHS, ROUTES } from '@constants/routes';
import { useAuth } from 'components/AuthProvider';

function RouteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isPublicRoute, setIsPublicRoute] = useState<boolean>(false);

  useEffect(() => {
    function authCheck(url: string) {
      //check if path is public
      const path = url.split('?')[0];
      setIsPublicRoute(PUBLIC_PATHS.includes(path));
      if (isAuthenticated === null) {
        return;
      }
      // redirect to login page if accessing a private page and not logged in
      if (!isAuthenticated && !isPublicRoute) {
        router.push(ROUTES.login);
      }
    }
    // on initial load -
    authCheck(router.asPath);
  }, [isAuthenticated, isPublicRoute, router.asPath]);

  // if not protected path, render
  if (isPublicRoute) {
    return children;
  }
  // else if protected path render only if also authenticated
  return isAuthenticated && children;
}

export { RouteGuard };
