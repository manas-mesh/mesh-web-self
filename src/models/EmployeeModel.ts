export interface IEmployeeModel {
  fullName?: string;
  firstName?: string;
  name?: string;
  lastName?: string;
  organisationId?: string;
  gender?: string;
  designation?: string;
  department?: string;
  profilePhoto?: string;
  location?: string;
  tenure?: string;
  id?: string;
  active?: boolean;
  aggregatedValues?: string;
  externalEmployeeId?: string;
  displayName?: string;
  joiningDate?: string;
  resignationDate?: string;
  country?: string;
  preferredFirstName?: string;
  dateOfBirth?: string;
  selfExpressions?: string[];
  // TODO?: set profile id when parsing json response
  profileId?: string;
  lastUserEvent?: string;
  userRole?: string;
  planType?: string;
  employeeAccesses?: string;
  enabledFeatures?: string[];
  weightage?: string;
  ethnicity?: string;
  jobFunctionId?: string;
  jobGradeUI?: string;
  jobGradeNameUI?: string;
  organization?: any;
  authToken?: string;
  teams?: any[];
}

export class EmployeeModel {
  fullName: string;
  firstName: string;
  name: string;
  lastName: string;
  organisationId: string;
  gender: string;
  designation: string;
  department: string;
  profilePhoto: string;
  location: string;
  tenure: string;
  id: string;
  active: boolean;
  aggregatedValues: string;
  externalEmployeeId: string;
  displayName: string;
  joiningDate: string;
  resignationDate: string;
  country: string;
  preferredFirstName: string;
  dateOfBirth: string;
  selfExpressions: string[] = [];
  profileId: string;
  lastUserEvent: string;
  userRole: string;
  planType: string;
  employeeAccesses: string;
  enabledFeatures: string[];
  weightage: string;
  ethnicity: string;
  jobFunctionId: string;
  jobGradeUI: string;
  jobGradeNameUI: string;
  organization: any;
  authToken: string;
  teams: any[];
  email: string = '';

  constructor(data: IEmployeeModel) {
    this.fullName = data.displayName!;
    this.firstName = data.firstName!;
    this.name = data.name!;
    this.lastName = data.lastName!;
    this.profilePhoto = data.profilePhoto!;
    this.organisationId = data.organisationId!;
    this.gender = data.gender!;
    this.designation = data.designation!;
    this.department = data.department!;
    this.location = data.location!;
    this.tenure = data.tenure!;
    this.id = data.id!;
    this.active = data.active!;
    this.aggregatedValues = data.aggregatedValues!;
    this.externalEmployeeId = data.externalEmployeeId!;
    this.displayName = data.displayName!;
    this.joiningDate = data.joiningDate!;
    this.resignationDate = data.resignationDate!;
    this.country = data.country!;
    this.preferredFirstName = data.preferredFirstName!;
    this.profileId = data.profileId!;
    this.lastUserEvent = data.lastUserEvent!;
    this.userRole = data.userRole!;
    this.planType = data.planType!;
    this.employeeAccesses = data.employeeAccesses!;
    this.enabledFeatures = data.enabledFeatures!;
    this.weightage = data.weightage!;
    this.ethnicity = data.ethnicity!;
    this.jobFunctionId = data.jobFunctionId!;
    this.jobGradeUI = data.jobGradeUI!;
    this.jobGradeNameUI = data.jobGradeNameUI!;
    this.organization = data.organization!;
    this.authToken = data.authToken!;
    this.teams = data.teams!;
  }
}
