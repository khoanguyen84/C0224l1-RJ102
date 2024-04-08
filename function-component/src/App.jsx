import './App.css'
import Count from './components/Count'
import FormControl from './components/FormControl'
import PlayList from './components/PlayList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseEffect from './components/UseEffect';
import PostPage from './components/PostPage';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import useNow from './hooks/use-now';
import Now from './components/Now';

/**
 * 
 * Có 2 cách để tạo ra component
 * Class Component - Statefull
 * Function Component - Stateless => render UI
 *  Hooks (function) version react 16+
 *    useEffect ~ componentDidMount, componentDidUpdate và componentWillUnmount
 *    useState ~ this.state
 * 
 *  từ version 16+ => các component sẽ được tạo bằng cách sử dung function component
 *  + function phù hợp với DEV FrontEnd
 *  + tách mã nguồn
 */

function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
      <ToastContainer position='top-center' theme='colored' />
      <div className='container'>
        {/* <FormControl type='text' style='danger' />
      <FormControl type='password' style='success' />
      <FormControl type='button' style='danger'>
        Login
      </FormControl> */}

        {/* <Count /> */}
        {/* <PlayList /> */}
        {/* <button className='btn btn-sm btn-dark'
          onClick={() => setToggle(!toggle)}
        >Toogle</button>
        {toggle && <UseEffect />} */}
        {/* <PostPage/> */}
        {/* <ProductPage/> */}
        <Now/>
      </div>
    </>

  )
}

export default App
