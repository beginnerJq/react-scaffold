import React from 'react';
import { hot } from 'react-hot-loader/root';
import MyComponent from './components/MyComponent';

// 这是一个 React 函数式组件
const App: React.FC<{ message: string }> = ({ message }) => (
  <>
    <MyComponent foo={111} />
    <div>{message}</div>
  </>
);
export default hot(App);
