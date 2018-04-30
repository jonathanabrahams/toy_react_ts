import * as React from 'react';

export const PasswordInput = (props: {
  onChange: (event: any) => void;
}) => {
  return (
    <div>
      <label>Password:</label>
      <input type="password" onChange={props.onChange} />
    </div>
  );
};

export default PasswordInput;