import * as types from "./types";
import { addEventRequest, addEvent, updateEvent, deleteEvent, IEvent } from "./reducer";

export const FetchEvents = () => {
  return {
    type: types.FETCH_EVENTS,
  };
};

export const SaveEvents = (data: IEvent[]) => {
  return {
    type: types.FETCH_EVENTS_SUCCESS,
    payload: data,
  };
};

export const AddEventRequest = (data: IEvent): addEventRequest => {
  return {
    type: types.ADD_EVENT_REQUEST,
    payload: data,
  };
};

export const AddEvent = (data: IEvent): addEvent => {
  return {
    type: types.ADD_EVENT,
    payload: { ...data, isActive: false, id: new Date().getTime() },
  };
};

export const UpdateEvent = (data: IEvent): updateEvent => {
  return {
    type: types.UPDATE_EVENT,
    payload: data,
  };
};

export const DeleteEvent = (data: number): deleteEvent => {
  return {
    type: types.DELETE_EVENT,
    payload: data,
  };
};
