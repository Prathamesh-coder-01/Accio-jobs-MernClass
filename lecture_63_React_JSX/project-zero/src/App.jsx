import { useState } from 'react'
import Display from './components/Display';
import card from './components/card';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Display name="Pratik" />
        <Card theme="dark" />
        <Card theme="light" />
      </div>
    </>
      );
}

      export default App;
