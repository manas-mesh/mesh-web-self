export const selectLoggedInEmployeeData = (state: any) => state.loggedInEmployee.data;
export const selectLoggedInEmployeeEmail = (state: any) => {
  const data = selectLoggedInEmployeeData(state);
  return data ? data.email : null;
};
export const selectLoggedInEmployeeId = (state: any) => state.loggedInEmployee.data.id;

export const selectLoggedInEmployeeTeams = (state: any) => state.loggedInEmployee.data.teams;

// export const selectIsAuthenticated = (state) => state.loggedInEmployee.isAuthenticated;

export const selectMoneyDetails = (state: any) => state.loggedInEmployee.data.money;

export const selectMoneyDetailsFromEmployee = (employee: any) => employee.money;

export const isExploringDemoSelector = (state: any) => {
  const email = selectLoggedInEmployeeEmail(state);
  // return true;
  // disabling HelloBar as per Saurabh's suggestion.
  return false && email && email === 'pranav+demo+1@thepeoplemesh.com';
};

export const selectPreferredTeamId = (state: any) =>
  state.loggedInEmployee.data && state.loggedInEmployee.data.teams && state.loggedInEmployee.data.teams[0]
    ? state.loggedInEmployee.data.teams[0].id
    : null;

export const selectLoggedInEmployeeImage = (state: any) => state.loggedInEmployee.data?.profilePhotoSrc;
