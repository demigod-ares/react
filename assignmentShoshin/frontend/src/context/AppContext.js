import React, { createContext, useReducer, useEffect } from 'react';
import appReducer from '../reducers/appReducer';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const initialState = {
    services: [],
    selectedService: null,
    bookings: [],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchServices = async () => {
    const response = await fetch('http://localhost:3001/api/services');
    const data = await response.json();
    dispatch({ type: 'SET_SERVICES', payload: data });
  };

  // const fetchBookings = async () => {
  //   const response = await fetch('http://localhost:3001/api/bookings');
  //   const data = await response.json();
  //   dispatch({ type: 'SET_BOOKINGS', payload: data });
  // };

  const selectService = (service) => {
    dispatch({ type: 'SELECT_SERVICE', payload: service });
  };

  const createBooking = (serviceId, userName, date) => {
    axios.post('http://localhost:3001/api/bookings', { serviceId, userName, date })
      .then((response) => {
        console.log(response.data.message);
        // fetchBookings(); // Optionally, refetch bookings
      })
      .catch((error) => console.error('Error creating booking:', error));
  };

  
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, selectService, createBooking, fetchServices }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
