import axios from "axios";

import { createContext, useContext, useEffect, useReducer } from "react";
import { REJECTED, SET_IMAGES, SET_CAMERAS, START_LOADING } from "./actions";
import { baseURL } from "./constants";

const EventsContext = createContext();

const initialState = {
  images: [],
  cameras: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_IMAGES:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
      };
    case SET_CAMERAS:
      return {
        ...state,
        isLoading: false,
        cameras: action.payload,
      };
    case REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
};

const EventsProvider = ({ children }) => {
  const [{ images, cameras, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: START_LOADING });
    axios
      .get(`${baseURL}/events`)
      .then((result) => {
        console.log("result ", result.data.scanResults);
        if (result.status !== 200) {
          throw new Error("Error with fetching data");
        }
        dispatch({ type: SET_IMAGES, payload: result.data.scanResults });
      })
      .catch((error) => dispatch({ type: REJECTED, payload: error }));
  }, []);

  useEffect(() => {
    dispatch({ type: START_LOADING });
    axios
      .get(`${baseURL}/camera`)
      .then((result) => {
        if (result.status !== 200) {
          throw new Error("Error with fetching data");
        }
        dispatch({ type: SET_CAMERAS, payload: result.data });
      })
      .catch((error) => dispatch({ type: REJECTED, payload: error }));
  }, []);

  return (
    <EventsContext.Provider value={{ images, cameras, isLoading, error }}>
      {children}
    </EventsContext.Provider>
  );
};

const useEventsContext = () => {
  const context = useContext(EventsContext);

  if (context === undefined)
    throw new Error("EventsContext was used outside the EventsProvider");

  return context;
};

export { EventsProvider, useEventsContext };
