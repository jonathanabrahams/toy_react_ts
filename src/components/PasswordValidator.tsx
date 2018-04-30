import * as React from 'react';
import Validator from '../validators/PasswordValidator';
import PasswordErrors from './PasswordErrors';
import PasswordInput from './PasswordInput';

interface IPasswordValidatorProps {
    username: string
};

interface IPasswordValidatorStates {
    isValid: boolean,
    message: string
};

export class PasswordValidator extends React.Component<IPasswordValidatorProps, IPasswordValidatorStates> {

    public constructor(props: any) {
        super(props);
        this.state = {
            ...props,
            isValid: false,
            message: null
        };
        this.validator = this.validator.bind(this);
    }

    public validator = (event: any) => {
        console.log(this);
        const password = event.target.value;
        const result = Validator(password);
        this.setState({ isValid: (result.valid), message: (result.message) });
    };

    public render() {
        return (
            <div>
                <PasswordInput onChange={this.validator} />
                <PasswordErrors isValid={this.state.isValid} message={this.state.message} />
            </div>
        );
    }
}

export default PasswordValidator;