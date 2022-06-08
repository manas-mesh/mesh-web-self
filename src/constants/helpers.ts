import { format } from 'date-fns';
import { ROUTES } from './routes';
import queryString from 'query-string';
import { ParsedUrlQuery } from 'querystring';

export const getMultiSelectOptionsText = (min: number, max: number, numberOfOptions: number) => {
  if (min === 0 && max === numberOfOptions) {
    return 'Select any number of options';
  }
  if (min !== 0 && max === numberOfOptions) {
    return `Select minimum ${min} options`;
  }
  if (min === 0 && max !== numberOfOptions) {
    return `Select upto ${max} options`;
  }
  if (min === max) {
    return `Select ${max} options`;
  }
  return `Select minimum ${min} and maximum ${max} options`;
};

export function getTaskDetailsRoute({
  locationPathname,
  locationQuery,
  ids = [],
  useCurrentRoute = true,
  employee = null,
  type,
}: {
  locationPathname: string;
  locationQuery: ParsedUrlQuery;
  ids: string[];
  useCurrentRoute?: boolean;
  employee: any;
  type: string;
}) {
  const queryParams = useCurrentRoute ? locationQuery : {};
  (queryParams as any).showTaskDetails = true;
  (queryParams as any).ids = ids.join(',');
  if (type) {
    (queryParams as any).type = type;
  }
  if (employee) (queryParams as any).empId = employee.id;
  const searchQuery = queryString.stringify(queryParams);
  return `${useCurrentRoute ? locationPathname : ROUTES.home}?${searchQuery}`;
}

export function goToSearchDetailPage({
  navigate,
  searchType,
  typeId,
  label,
}: {
  navigate: any;
  searchType: string;
  typeId: string;
  label: string;
}) {
  const route = `/search?filterType=${searchType}&filterId=${typeId}&label=${label}`;

  // route = encodeURI(route);
  // window.location.href= route;
  navigate(route);
}

const checkIfIsADateObject = (date: Date | number) => {
  if (!date && date.constructor.name !== 'Date') throw Error('Please provide a date object');
};

/**
 *
 * @param {Date} date
 * Returns in this format: 12 Dec 2014
 */
export const convertDateToString2 = (date: Date | number) => {
  checkIfIsADateObject(date);
  return format(date, 'dd MMM yyyy');
};

export const getDateFromEpoch = (epoch: string) => {
  const date = new Date(epoch);
  return date;
};

export function goToProfilePage({ navigate, employeeId }: { navigate: any; employeeId: string }) {
  const route = ROUTES.profile.replace(':employeeId', employeeId);
  navigate(route);
}
