import * as React from 'react';
export interface IPasswordInputProps {
  onChange?: (event: any) => void;
};

export const PasswordInput = (props: IPasswordInputProps) => (
  <div>
    <label>Password:</label>
    <input type="password" onChange={props.onChange} />
  </div>
)

export default PasswordInput;