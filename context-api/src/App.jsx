import { useContext } from 'react'
import './App.css'
import Panel from './components/panel'
import { ThemeContext } from './context/theme-context'

/**
 * 1. tạo ra kho context => createContext
 * => provider
 * 2. truy cập vào kho => useContext
 * => consumer
 */

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={`w-50 border border-danger p-5 ${theme}`}>
        <Panel />
      </div>
    </>
  )
}

export default App
