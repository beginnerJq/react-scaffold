import React from 'react';
type Props = {
  foo: number;
};

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}

export default MyComponent;
