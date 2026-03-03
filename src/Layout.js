// Layout.js

import React, { useState } from 'react';
import Loader from './Loader';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Change the initial state as per your requirement

  return (
    <div>
      {isLoading && <Loader />}
      <div className="content">
        {children}
      </div>
    </div>
  );
};
export default Layout;
