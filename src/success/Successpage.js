import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const { firstname,lastname,country, email ,gmail,timezone} = location.state || {};

  return (
    <div>
      <h1>Form Submission Successful</h1>
      <p>FirstName: {firstname}</p>
      <p>LastName: {lastname}</p>
      <p>Country: {country}</p>
      <p>Email: {email}</p>
      <p>Sign In Throw: {gmail}</p>
      <p>TimeZone: {timezone}</p>
    </div>
  );
};

export default SuccessPage;