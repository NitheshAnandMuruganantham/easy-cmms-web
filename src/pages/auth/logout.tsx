import React, { FunctionComponent, useEffect } from 'react';

interface LogoutProps {}

const Logout: FunctionComponent<LogoutProps> = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/login';
  }, []);

  return null;
};

export default Logout;
