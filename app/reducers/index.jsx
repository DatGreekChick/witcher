import { combineReducers } from 'redux';

import students from './students';
import newStudentEntry from './newStudentEntry';
import teachers from './teachers';
// import newTeacherEntry from './newTeacherEntry';
import campuses from './campuses';
// import newCampusEntry from './newCampusEntry';

// should I add reducers to update all categories...?
// should I add a delete reducer for all categories...?
const rootReducer = combineReducers({
  students,
  newStudentEntry,
  teachers,
  // newTeacherEntry,
  campuses,
  // newCampusEntry
});

export default rootReducer

// make reducer higher order func
// keep all form state within the form and take it out from here
// undo implementations -> look up for reference
  // http://redux.js.org/docs/recipes/ImplementingUndoHistory.html