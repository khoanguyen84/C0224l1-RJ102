import { useState } from 'react'
import './App.css'
import Panel from './components/panel'

function App() {
  const [theme, setTheme] = useState('light')
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className={`w-50 border border-danger p-5 ${theme}`}>
      <Panel theme={theme} handleChangeTheme={handleChangeTheme} />
    </div>
  )
}

export default App
