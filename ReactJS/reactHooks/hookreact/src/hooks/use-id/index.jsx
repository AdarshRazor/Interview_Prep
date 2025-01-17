import React, { useId } from 'react';

const AccessibleInput = ({ label, ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export const UseIDExample = () => {
  return (
    <div>
      <AccessibleInput label="Name" type="text" />
      <AccessibleInput label="Email" type="email" />
    </div>
  );
};
