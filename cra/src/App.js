import React from 'react';
import './App.css';
import Component from './Component';
import Profile from './Profile';
import Job from './Job';
import Button from './Button';
import Category from './Category';

function FunctionComponent() {
  return (
    <h1>Function Component</h1>
  )
}

class ClassComponent extends React.Component {
  //overiding
  render() {
    // jsx
    return (
      <h1>Class Component</h1>
    )
  }
}

const Control = {
  Button: function () {
    return (
      <button className='btn'>Submit</button>
    )
  },
  Avatar: function () {
    return (
      <img src="https://s.alicdn.com/@sc04/kf/Hde58343443f947b9b5e64fa0c7acc332H.jpg_300x300.jpg" alt="" />
    )
  }
}
// React.createElement(type, props, children)
function App() {
  const showImage = true
  return (
    <div>
      {/* <h1>Hello world</h1> */}
      {/* <FunctionComponent />
      <ClassComponent /> */}
      {/* <Component variant='variant props' type='heading 1'> 
        My Component
      </Component> */}
      {/* props = {
        variant: variant props',
        type: 'heading 1'
      } */}
      {/* <Control.Button />
      {showImage && <Control.Avatar />}
      <Profile/>
      <Job/>*/}
      <Button type='primary' handleClick={() => console.log('Forgot password')} >Forgot Password</Button>
      <Button type='danger' handleClick={() => console.log('Register')} >Register</Button>
      {/* <Category/>  */}
    </div>
  );
}

export default App;
