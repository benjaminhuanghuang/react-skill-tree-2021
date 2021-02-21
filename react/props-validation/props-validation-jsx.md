
# Props validation and default props

From [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

Class component
```
  import PropTypes from 'prop-types';

  class Greeting extends React.Component {
    const children = this.props.children;

    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
        {children}
      );
    }
  }
  // Specifies the default values for props:
  Greeting.defaultProps = {
    name: 'Stranger'
  };


  Greeting.propTypes = {
    name: PropTypes.string
    children: PropTypes.element.isRequired
  };
```


Function component
```
import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent
```