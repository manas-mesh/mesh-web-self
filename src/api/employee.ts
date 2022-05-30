import axios from 'axios';
import { ENDPOINTS } from '../constants/endpoints';

export function authenticateApi({ landingPageType = '', landingPageUuid = '' }) {
  const url = ENDPOINTS.employee.login;
  const body =
    landingPageType && landingPageUuid
      ? {
          landingPageType,
          landingPageUuid,
        }
      : null;
  return axios.post(url, body || undefined, { withCredentials: true });
}
