import { auth0AuthenticateApi, getAuth0LoginUrlApi } from 'api/auth';

export const getAuth0LoginUrl = ({ orgName, invitationId }: { orgName: string; invitationId: string }) =>
  getAuth0LoginUrlApi({ orgName, invitationId }).then((res: any) => res.data.entity);

export const auth0Authenticate = (code: string) => auth0AuthenticateApi(code).then((res) => res.data.entity);
