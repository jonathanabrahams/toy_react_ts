import * as React from 'react'

const PasswordErrors = (props: {
    isValid: boolean,
    message: string
}) => {
    return (
        props.isValid ? (<strong>{props.message}</strong>) : null
    )
};

export default PasswordErrors;