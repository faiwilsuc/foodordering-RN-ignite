import { createTypes } from 'reduxsauce';

export default createTypes(`
  PUSH_NEW_ROUTE
  REPLACE_ROUTE
  REPLACE_OR_PUSH_ROUTE
  POP_ROUTE
  POP_TO_ROUTE
  LOAD_TASKS_REQUEST
  LOAD_TASKS_ERROR
  LOAD_TASKS_SUCCESS

  SET_HOME_TAB
  SET_PROJECT_TAB
  SET_DETAIL
  
  OPEN_DRAWER
  CLOSE_DRAWER
`);
