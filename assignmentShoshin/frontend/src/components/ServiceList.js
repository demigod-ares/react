// components/ServiceList.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ServiceList = () => {
  const { services, selectService } = useContext(AppContext);

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id} onClick={() => selectService(service)}>
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;