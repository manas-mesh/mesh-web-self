import { authenticateApi } from 'api/employee';
import Employee from 'models/Employee';

export const authenticate = ({ landingPageType = '', landingPageUuid = '' }) =>
  authenticateApi({ landingPageType, landingPageUuid }).then((res: any) => {
    const data = res.data.entity;
    const employee = new Employee(null, {
      ...data.employee,
      authToken: data.authToken,
    });
    return {
      employee,
      authToken: data.authToken,
      authenticated: true,
      orgData: {
        defaultGoalDueTS: data?.defaultGoalDueTS,
        defaultGoalStartTS: data?.defaultGoalStartTS,
      },
    };
  });
