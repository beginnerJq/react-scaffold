import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>欢迎 to React</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

export default hot(App);
