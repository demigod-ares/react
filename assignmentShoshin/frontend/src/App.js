import React from 'react';
import ServiceList from './components/ServiceList';
import ServiceDetail from './components/ServiceDetail';
import BookingForm from './components/BookingForm';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App = () => {

  return (
    <AppContextProvider>
      <div className="App">
        <h1>Service Listing and Booking Platform</h1>
        <div className="main-container">
          <ServiceList />
          <ServiceDetail />
          <BookingForm />
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
