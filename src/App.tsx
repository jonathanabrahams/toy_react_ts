import * as React from 'react';
import {PasswordInput} from './components/PasswordInput';

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>Toy React Typescript</h1>
        <PasswordInput/>
      </div>
    );
  }
}

export default App;