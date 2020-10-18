import { combineReducers } from "redux";

import evetsReducer, { IEventsState } from "../Ducks/Events/reducer";

export interface ApplicationState {
  events: IEventsState;
}

const rootReducer = combineReducers({
  events: evetsReducer,
  test: evetsReducer,
});

export default rootReducer;
