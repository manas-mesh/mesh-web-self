const serverUrl = `${process.env.NEXT_PUBLIC_REACT_APP_HTTPS === 'true' ? 'https' : 'http'}://${
  process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL
}`;

export const ENDPOINTS = {
  auth: {
    auth0Login: `${serverUrl}/service/custom/auth/login/authorizeUrl`,
    auth0Authenticate: `${serverUrl}/service/custom/auth/login/callback/WEB`,
  },
  employee: {
    login: `${serverUrl}/service/system/authenticate`,
  },
};
