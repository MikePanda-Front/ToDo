import * as types from "./types";

export interface IEvent {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export interface IEventsState {
  events: IEvent[] | null;
  loading: boolean;
}

export type fetchEvents = {
  type: typeof types.FETCH_EVENTS;
};

export type fetchEventsSuccess = {
  type: typeof types.FETCH_EVENTS_SUCCESS;
  payload: IEvent[];
};

export type addEventRequest = {
  type: typeof types.ADD_EVENT_REQUEST;
  payload: IEvent;
};

export type addEvent = {
  type: typeof types.ADD_EVENT;
  payload: IEvent;
};

export type updateEvent = {
  type: typeof types.UPDATE_EVENT;
  payload: IEvent;
};

export type deleteEvent = {
  type: typeof types.DELETE_EVENT;
  payload: number;
};

type Action =
  | addEventRequest
  | addEvent
  | updateEvent
  | deleteEvent
  | fetchEvents
  | fetchEventsSuccess;

const initialState: IEventsState = {
  events: null,
  loading: false,
};

const reducer = (state: IEventsState = initialState, action: Action): IEventsState => {
  switch (action.type) {
    case types.FETCH_EVENTS:
      return { ...state, loading: true };
    case types.FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.payload, loading: false };
    case types.ADD_EVENT_REQUEST:
      return { ...state, loading: true };
    case types.ADD_EVENT:
      return { ...state, events: [...(state.events ?? []), action.payload], loading: false };
    case types.UPDATE_EVENT: {
      const newEvents = [...(state.events ?? [])];
      const index = newEvents.findIndex((event) => event.id === action.payload.id);
      newEvents[index] = action.payload;
      return { ...state, events: newEvents };
    }
    case types.DELETE_EVENT: {
      const newEvents = [...(state.events ?? [])];
      return { ...state, events: newEvents.filter((event) => event.id !== action.payload) };
    }
    default:
      return state;
  }
};

export default reducer;
