import React from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';

// 这是一个 React 函数式组件
const App: React.FC<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
App.propTypes = {
  message: PropTypes.string.isRequired,
};
export default hot(App);
