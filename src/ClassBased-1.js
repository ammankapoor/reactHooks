import React from "react";

/*
 1. Class based components are used by extending React.Component
 2. We use inheritance method of oops in order to get all the capability
    of react in our component
 3. In this example we are making a small component with a state and
    a button which will increment its count.
*/

class ClassBasedComponent extends React.Component {
  /*
  constructor is the first method which will get called when a class is called
  or its obj is initialized.
  */
  constructor(props) {
    /*
    The reason for passing props to super() is to make the props accessible within the component.  
    By default, React passes the props to the constructor of the component when it is instantiated. If you don't pass props to super(), the component's constructor won't receive the props, and therefore you won't be able to access them using "this.props" inside the component.
    */
    super(props);

    /*
    Declaring the state for the component.
    */
    this.state = {
      count: 0,
    };
  }

  /*
  method used to update the state by calling setState method which will
  change state and component will re-render with new state.
  */
  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count from ClassBased: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
