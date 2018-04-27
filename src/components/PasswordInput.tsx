import * as React from 'react'

export class PasswordInput extends React.Component{
    public handleChange(event: any)  { console.log(event.target.value) }
    public render() {
        return (
            <div>
                <label htmlFor="passwordInput">Password:</label>
                <input type="password" id="passwordInput" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default PasswordInput;