export const homeLocators = {
  // Homepage
  logo: "//a[@title='Bikroy - the largest marketplace in Bangladesh']",
  search_box: "//input[@placeholder='What are you looking for?']",
  search: "//button[@type='submit']",

  // Login
  username: "//input[@placeholder='Username']",
  password: "//input[@placeholder='Password']",
  login: "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']",

  // Admin
  admin: "(//span[normalize-space()='Admin'])[1]",
  usernameField: "(//input[@class='oxd-input oxd-input--active'])[2]",
  searchBtn: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
  job: "//span[normalize-space()='Job']",
  jobTitle: "//a[normalize-space()='Job Titles']",
  add: "//button[normalize-space()='Add']",
  jobTitleInput: "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']",
  save: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
  delete: "//div[18]//div[1]//div[4]//div[1]//button[1]//i[1]",
  deleteConfirm: "//button[normalize-space()='Yes, Delete']",

  // Organization > General Info
  organization: "//span[normalize-space()='Organization']",
  generalInfo: "//a[normalize-space()='General Information']",
  editSwitch: "//span[@class='oxd-switch-input oxd-switch-input--active --label-left']",
  orgName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  regNumber: "(//input[@class='oxd-input oxd-input--active'])[3]",
  taxId: "(//input[@class='oxd-input oxd-input--active'])[4]",
  phone: "(//input[@class='oxd-input oxd-input--active'])[5]",
  email: "(//input[@class='oxd-input oxd-input--active'])[6]",
  saveGeneralInfo: "(//button[normalize-space()='Save'])[1]",

  // Organization > Locations
  locationsTab: "(//a[normalize-space()='Locations'])[1]",
  locationName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  locationSearchBtn: "(//button[normalize-space()='Search'])[1]",

  // Organization > Structure
  structureTab: "(//a[normalize-space()='Structure'])[1]",
  structureEditSwitch: "(//span[@class='oxd-switch-input oxd-switch-input--active --label-left'])[1]",
  addStructure: "(//button[normalize-space()='Add'])[1]",
  structureName: "((//input[@class='oxd-input oxd-input--active'])[3])",
  saveStructure: "(//button[normalize-space()='Save'])[1]",

  // Qualifications > Skills
  qualificationsTab: "(//span[normalize-space()='Qualifications'])[1]",
  skillsTab: "(//a[normalize-space()='Skills'])[1]",
  addSkill: "(//button[normalize-space()='Add'])[1]",
  skillNameField: "(//div[@class='oxd-form-row'])[1]",
  saveSkill: "(//button[normalize-space()='Save'])[1]",

  // Qualifications > Education
  educationTab: "(//a[@class='oxd-topbar-body-nav-tab-link'])[2]",
  addEducation: "(//button[normalize-space()='Add'])[1]",
  educationLevel: "(//input[@class='oxd-input oxd-input--active'])[2]",
  saveEducation: "(//button[normalize-space()='Save'])[1]",

  // Qualifications > Languages
  languagesTab: "(//a[normalize-space()='Languages'])[1]",
  addLanguage: "(//button[normalize-space()='Add'])[1]",
  languageName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  saveLanguage: "(//button[normalize-space()='Save'])[1]",

  // Qualifications > Memberships
  membershipsTab: "(//a[@class='oxd-topbar-body-nav-tab-link'])[5]",
  addMembership: "(//button[normalize-space()='Add'])[1]",
  membershipName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  saveMembership: "(//button[normalize-space()='Save'])[1]",

  // Nationalities
  nationalitiesTab: "(//a[normalize-space()='Nationalities'])[1]",
  addNationality: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary']",
  nationalityName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  saveNationality: "(//button[normalize-space()='Save'])[1]",

  // Corporate Branding
  corpBrandingTab: "(//a[normalize-space()='Corporate Branding'])[1]",
  colorPicker: "(//div[@class='oxd-color-input-preview'])[4]",
  colorSelector: "(//div[@class='oxd-color-picker-indicator'])[1]",
  publishBtn: "(//button[normalize-space()='Publish'])[1]",

  // Configuration > Email Config
  configurationTab: "(//span[normalize-space()='Configuration'])[1]",
  emailConfigTab: "(//a[@class='oxd-topbar-body-nav-tab-link'])[1]",
  emailInput: "(//input[@class='oxd-input oxd-input--active'])[2]",
  saveEmailConfig: "(//button[normalize-space()='Save'])[1]",

  // Configuration > Email Subscriptions
  emailSubsTab: "(//a[normalize-space()='Email Subscriptions'])[1]",
  addApplicantIcon: "(//i[@class='oxd-icon bi-person-plus-fill'])[1]",
  addApplicantBtn: "(//button[normalize-space()='Add'])[1]",
  subscriberName: "(//input[@class='oxd-input oxd-input--active'])[2]",
  subscriberEmail: "(//div//input[@class='oxd-input oxd-input--active'])[3]",
  saveSubscription: "(//button[normalize-space()='Save'])[1]",

  // Configuration > Modules
  modulesTab: "(//a[normalize-space()='Modules'])[1]",
  mobileToggle: "(//span[@class='oxd-switch-input oxd-switch-input--active --label-right'])[9]",
  saveModules: "(//button[normalize-space()='Save'])[1]",

  // PIM section
  pimTab: "(//a[@class='oxd-main-menu-item'])[1]",
  pimSearchBtn: "//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
  pimResetBtn: "//button[@class='oxd-button oxd-button--medium oxd-button--ghost']"
};
