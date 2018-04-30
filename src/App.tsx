import * as React from 'react';
import { PasswordValidator } from './components/PasswordValidator';

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>Toy React Typescript</h1>
        <PasswordValidator username={'Billy Bob'} />
      </div>
    );
  }
}

export default App;