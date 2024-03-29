import './App.css'
import Count from './components/Count'
import FormControl from './components/FormControl'

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
  return (
    <div className='container'>
      {/* <FormControl type='text' style='danger' />
      <FormControl type='password' style='success' />
      <FormControl type='button' style='danger'>
        Login
      </FormControl> */}

      <Count />
    </div>
  )
}

export default App
