export const selectLoggedInEmployeeData = (state: any) => state.loggedInEmployee.data;
export const selectLoggedInEmployeeEmail = (state: any) => {
  const data = selectLoggedInEmployeeData(state);
  return data ? data.email : null;
};
export const selectLoggedInEmployeeId = (state: any) => state.loggedInEmployee.data.id;

export const selectLoggedInEmployeeTeams = (state: any) => state.loggedInEmployee.data.teams;

export const selectLoggedInEmployeeImage = (state: any) => state.loggedInEmployee.data?.profilePhotoSrc;
