import { useContext } from "react"
import { ThemeContext } from "../context/theme-context"

export default function LoginPage() {
    const {theme, handleChangeTheme} = useContext(ThemeContext)
    return (
        <div className={`border border-suceess p-5 ${theme}`}>
            <button className='btn btn-sm btn-dark'
                onClick={handleChangeTheme}
            >Change theme</button>
            <h1>Login Page</h1>
        </div>
    )
}