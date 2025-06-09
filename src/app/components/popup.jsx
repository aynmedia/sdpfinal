/** @format */

import { useState, useEffect } from 'react';

function Popup({ message, type }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 bg-${
        type === 'success' ? 'green' : 'red'
      }-500 text-white p-4 rounded-lg shadow-lg`}
      style={{ zIndex: 9999 }}>
      {message}
    </div>
  );
}

export default Popup;
