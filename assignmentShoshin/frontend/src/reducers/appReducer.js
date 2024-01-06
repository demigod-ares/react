const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SERVICES':
        return { ...state, services: action.payload };
      case 'SET_BOOKINGS':
        return { ...state, bookings: action.payload };
      case 'SELECT_SERVICE':
        return { ...state, selectedService: action.payload };
      default:
        return state;
    }
  };
  
  export default appReducer;
  