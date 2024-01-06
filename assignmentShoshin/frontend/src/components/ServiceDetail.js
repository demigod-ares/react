// components/ServiceDetail.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ServiceDetail = () => {
  const { selectedService } = useContext(AppContext);

  return (
    <div className="service-detail">
      <h2>Service Detail</h2>
      {selectedService && (
        <div>
          <p>{selectedService.name}</p>
          <p>{selectedService.description}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
