export const commonConstants = {
  name: 'Name',
  cancel: 'Cancel',
  delete: 'Delete',
  backButton: 'Back',
  nextButton: 'Next',
  prevoiusButton: 'Previous',
  removeButton: 'Remove',
  addButton: 'Add',
  byText: 'By',
  continue: 'Continue',
  total: 'Total',
  createdAt: 'createdAt',
  createdDate: 'Created Date',
  placeholderForOptionInput: 'Write your option here',
  sortAscending: 'Sort Ascending',
  sortDescending: 'Sort Descending',
  invalidLinkSVG: 'Invalid Link SVG',
  useSetting:"Use setting",
  settings:'Settings',
  groupByCandidate:'Group By Candidate',
  results:'Results',
  goToDashboard:'Go to Dashboard',
  checkOrder:'Check Order',
  complete:'Complete',
  pending:'Pending',
  createTest:'Creating Test',
  submit:'Submit',
  adding:"Adding...",
  add:'Add',
  cancelAddTest:'Cancel Add Test',
  previousTab:'Previous Tab',
  nextTab:'Next Tab',
  logo:"logo",
}
export const sideNav = {
  sideNavHeading: 'Quiz',
  signOut: 'Sign out',
}
export const members = {
  addMember: 'Add Member',
  firstName: 'First Name',
  lastName: ' Last Name',
  email: 'Email',
  name: 'Name',
  role: 'Role',
  members: 'Members',
  addedOn: 'Added On',
  action: 'Action',
}
export const inviteMemeberPopUpConstants = {
  inviteCandidate: 'Invite Candidate',
  closePopUp: 'Close Pop Up',
  enterCandidatesEmail: 'Enter candidate’s email below to invite them for',
  candidateEmail: 'Candidate Email',
  inviteMore: 'Invite More',
  invite: 'Invite',
}
export const testTableItem = {
  inviteMember: 'Invite Member',
  menu: 'Menu',
}
export const logo = {
  kQuizLogo: 'K-Quiz Logo'
}
export const selectSectionCard = {
  removeSection: 'Remove Section',
  selectSection: 'Select Section',
}
export const deletePopUp = {
  alert: 'Do you want to delete',
}
export const logIn = {
  signInMessage: 'Sign in to your account',
  signIn: 'Sign In'
}
export const addQuestion = {
  createOptions: 'Create Options',
  checkOrder: 'Check Order',
  addOptions: 'Add Options',
  addQuestion: 'Add Question'
}
export const sectionsConstants = {
  addSection: 'Add Section',
  totalQuestions: 'Total Questions:',
  addQuestion: 'Add Question',
  noQuestionAlert: 'No questions found. Add your first question',
  noRecordFound: 'No Record Found',
  sort:'Sort',
  dropdown:'Select',
  expand:'Expand',
  search:'Search Question'
}
export const testsConstants = {
  addTestbutton: 'Add Test',
  testDetailsText: 'Test Details',
  descriptionText: 'Description',
  totalTimeText: 'Total Time',
  totalSectionsText: 'Total Sections',
  selectedSctionText: 'Selected Sections',
  sectionText: 'Section',
  questions: 'Questions',
  totalQuestionsText: 'Total Questions',
  tests: 'Tests',
  srNoText: 'S No.',
  testListColumnLabel: 'Test',
  createdOn: 'Created on',
  created: 'Created',
  actionsText: 'Actions',
  noTestFound: 'No Test Found',
  noCandidateForTest: 'No candidate has attempted this test',
  candidateAlreadyInvited: 'Candidate has already been invited for this test',
  candidateInvited: 'Candidates Invited',
  writeDescriptionOfTest: 'Write Description of Test',
}
export const componentGlobalConstants = {
  totalCounts: 'Total Counts',
  selected: 'Selected',
}
export const routeFiles = {
  sections: 'Sections',
  options: 'Options',
}
export enum QuestionTypes {
  multipleChoice = 'MULTIPLE_CHOICE',
  singleChoice = 'SINGLE_CHOICE',
  text = 'TEXT',
}
export const statusCheck = {
  success: 'Success',
  commonError: 'Something Went Wrong',
  deletedSuccess: 'Deleted Successfully...!',
  noEmailsInvite: 'No emails to invite',
  selectCorrOption: 'Select the Correct Option',
  descIsReq: 'Description is required',
  nameIsReq: 'Name is required',
  sectionAddedSuccess: 'Section added successfully..!',
  maxOptions: 'you can add maximum six options.',
}
export const resultConstants = {
  order: 'Order',
  test: 'Test',
  totalInvited: 'Invited',
  totalAttended: 'Attended',
  noTestAlert: 'No test found. Add your test first',
  srNo: 'Sr.No',
  invitedBy: 'Invited By',
  result: 'Result',
  review: 'Review',
  status: 'Status',
  inactive: 'Inactive',
  active: 'Active',
  startedAt: 'Started At',
  correct: "Correct",
  skipped: "Skipped",
  total: "Total"
}
export enum QuestionStatus {
  notViewed = 'NOT_VIEWED',
  viewed = 'VIEWED',
  skipped = 'SKIPPED',
  answered = 'ANSWERED',
}
export const candidateExamConstants = {
  time: 'Time',
  timeRemaining: 'Time Remaining',
  timeLimit: 'Time Limit',
  assessmentDetails: 'Assessment Details',
  assessmentTests: 'Assessment Tests',
  assessmentEnd: 'Assessment Ended',
  endAssesment: "End Assesment SVG",
  wrongLink: 'Wrong Link',
  minutes: 'Mins',
  description: 'Description',
  total: 'Total',
  question: 'Question',
  questions: 'Questions',
  endTest: 'End Test',
  nextSection: 'Next Section',
  candidateAcceptance:
    'I understand that once I begin the assessment I cannot leave and  return to this assessment at a later time.',
  beginAssesment: 'Begin Assesment',
  instructions: 'Instructions',
  startSection: 'Start Now',
  candidateLogo: 'Candidate Logo',
  info: 'Info',
  noOfQuestions: 'No. of Questions',
  candidateTestCreated: 'created',
  error: 'error',
  candidateCreateError: 'Candidate Create Error..!',
  candidateTestCreateError: 'Candidate Test Create Error..!',
  errorUpdatingTestLink: 'Error updating test link..!',
  errorCreatingSectionInTest: 'Error creating section in test ..',
}
export const cypress = {
  email: 'careers@copods.co',
  password: 'kQuiz@copods',
  step1: 'Step 1',
  step2: 'Step 2',
  step3: 'Step 3',
  testDetails: 'Test Details',
  selectSections: 'Select Sections',
  preview: 'Preview',
  next: 'Next',
  remove: 'Remove',
  addQuest: '+ Add Question',
  back: 'Back',
  nameIsReq: 'Name is required',
  descIsReq: 'Description is required',
  sectionAdded: 'Section added successfully..!',
  duplicateTitle: 'Duplicate Title',
  question: 'Question',
  saveAndAddMore: 'Save & Add More',
  enterAllOptions: 'Enter all the Options',
  groupByTest: 'Results',
  addMember: '+ Add Member',
  cancel: 'Cancel',
  name: 'Name',
  description: 'Description',
  totalTime: 'Total Time',
  borderExist:'border-l-8',
  useRef:'What is useRef() ?',
  useRefAns:'It allows you to persist values between renders.',
  useMemo:'What is useMemo() ?',
  useMemoAns:'The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.',
}
export enum sortByOrder {
  ascending = 'asc',
  sortAscending = 'Sort Ascending',
  name = 'name',
  descending = 'dsc',
}
export const toastConstants ={
  addTest:'Enter Name to add test',
  enterDescription:'Enter description to add test',
  addSection:'Add sections to add test',
}


