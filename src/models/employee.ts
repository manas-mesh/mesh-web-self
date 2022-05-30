// import Task1 from './task1';

class Employee {
  fullName: string;
  firstName: string;
  name: string;
  lastName: string;
  organisationId: string;
  gender: string;
  designation: string;
  department: string;
  profilePhotoSrc: string;
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
  // TODO: set profile id when parsing json response
  profileId: string;
  lastUserEvent: string;
  userRole: string;
  planType: string;
  employeeAccesses: string;
  enabledFeatures: string[];
  weightage: string;
  isHRISManager: () => boolean;
  ethnicity: string;
  jobFunctionId: string;
  jobGradeUI: string;
  jobGradeNameUI: string;
  organization: any;
  authToken: string;
  teams: any[];
  email: string = '';

  constructor(props, json) {
    if (props) this.fromProps(props);
    if (json) this.fromJSON(json);
  }

  fromProps = ({ id, fullName, name }) => {
    this.id = id;
    this.fullName = fullName;
    this.name = name;
  };

  addOrganizationDetails = (res) => {
    if (res) {
      this.organisationId = res['id'];
      this.planType = res['planType'];
    }
  };

  // expects employeeProfile object
  addProfilePhoto = (res) => {
    this.profilePhotoSrc = res != null ? res['profilePhoto'] : '';
  };

  addDetailsFromMetaPojoJSON(res) {
    if (res != null) {
      this.firstName = res['firstName'];
      this.lastName = res['lastName'];
      // this.fullName = `${res['firstName']} ${res['lastName'] || ''}`;
      this.fullName = res.displayName || '';
      this.gender = res['gender'];
      this.designation = res['designation'] || '';
      this.department = res['department'] || '';
      this.location = res['location'] || '';
      this.tenure = res['tenure'] != null ? res['tenure']['displayData'] : null;
      this.email = res['email'];
      this.aggregatedValues = res['aggregatedValues'];
      this.externalEmployeeId = res['externalEmployeeId'];
      this.displayName = res['displayName'];
      this.joiningDate = res['joiningDate'];
      this.resignationDate = res['resignationDate'];
      this.country = res['country'];
      this.preferredFirstName = res['preferredFirstName'];
      this.dateOfBirth = res['dateOfBirth'];
      this.manager = {
        email: res['managerEmail'],
      };
      this.employeeFunction = res.employeeFunction;
      this.grade = res.grade;
      this.ethnicity = res['ethnicity'];
      this.jobFunctionId = res['jobFunctionId'];
      this.jobGradeUI = res['jobGradeUI'];
      this.jobGradeNameUI = res['jobGradeNameUI'];
    }
  }

  fromJSON(res = {}, shouldAddSelfExpressions = false) {
    this.weightage = res['weightage'] || 0;
    this.isSignUpCompletionPending = res.signUpCompletionPending;
    this.addDetailsFromMetaPojoJSON(res['metadata']);
    this.addProfilePhoto(res['profile']);
    this.active = res.active;
    // if (shouldAddSelfExpressions)
    //   this.addSelfExpressions(res);
    this.addOrganizationDetails(res['organization']);
    // this.addTeams(res.teams || res.teamBasicDetails);
    this.id = res['uuid'];
    this.lastUserEvent = res['lastUserEvent'];
    this.userRole = res['userRole'];
    this.invitedUser = res['invitedUser'];
    this.image = this.getProfileImage();
    // this.ownerType = res.ownerType || Task1.EMPLOYEE_TYPES.collaborator;
    // this.invitedUser = true;
    if (res.organization) {
      const { uuid: id, orgName, planType, currency } = res.organization;
      this.organization = {
        id,
        name: orgName,
        planType,
        currency,
      };
    } else {
      this.organization = { id: null, name: null, planType: null };
    }
    this.employeeAccesses = res['employeeAccesses'];
    this.enabledFeatures = res['enabledFeatures'];
    this.authToken = res['authToken'] ?? null;
    this.isHRISManager = res?.isHRISManager || false;
  }

  // isEnterpriseUser = () => {
  //   return this.organization && this.organization.planType === 'ENTERPRISE';
  // };

  // isUnassignedUser = () => {
  //   return this.firstName && this.firstName === 'Unassigned';
  // };

  getProfileImage = () => {
    if (this.profilePhotoSrc) {
      return this.profilePhotoSrc;
    }
    return null;
  };

  static getEmployeeObjectFromRes(res = {}) {
    const emp = new Employee({}, {});
    emp.fromJSON(res);
    return emp;
  }
  // if any of the team contains MANAGER role for this employee
  // then the employee is a manager
  isManager = () => {
    if (!this.teams) return false;
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].isRoleManager()) return true;
    }
  };

  isSuperAdmin = () => this.userRole && this.userRole === 'ADMIN';

  getFirstTeam = () => {
    if (!this.teams) {
      return null;
    }
    return this.teams[0];
  };

  getSearchLabel = () => {
    const result = [];
    if (this.displayName) result.push(this.displayName);
    if (this.location) result.push(this.location);
    if (this.designation) result.push(this.designation);
    return result.join(', ');
  };

  isFeatureEnabled = (feature: string) =>
    this.enabledFeatures ? this.enabledFeatures.filter((f) => f === feature).length > 0 : false;
}

export default Employee;
