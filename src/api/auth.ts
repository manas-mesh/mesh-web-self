import { ENDPOINTS } from '@constants/endpoints';
import axios from 'axios';

export const getAuth0LoginUrlApi = ({ orgName, invitationId }: { orgName: string; invitationId: string }) => {
  const url = ENDPOINTS.auth.auth0Login;
  const params = { w: orgName, ...(invitationId && { invitation: invitationId }) };
  return axios.get(url, { params, withCredentials: true });
};

export const auth0AuthenticateApi = (code: string) => {
  const url = ENDPOINTS.auth.auth0Authenticate;
  return axios.get(url, { params: { code }, withCredentials: true });
};
