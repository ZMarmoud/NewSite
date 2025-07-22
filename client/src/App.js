import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.text())
      .then(text => setData(text));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Backend says: {data}</p>
    </div>
  );
}

export default App;
