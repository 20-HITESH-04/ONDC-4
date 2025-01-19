"use client";

import React from 'react';
import PropTypes from 'prop-types';
import { X } from 'lucide-react';

const Alert = ({ type = "info", children, onClose }) => {
  const typeStyles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={`flex items-start p-4 rounded-md shadow-sm ${typeStyles[type]} relative`}
    >
      <div className="flex-grow">{children}</div>
      {onClose && (
        <button
          type="button"
          className="ml-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

const AlertDescription = ({ children }) => (
  <p className="text-sm mt-1">{children}</p>
);

AlertDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Alert, AlertDescription };
