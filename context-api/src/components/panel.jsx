import LoginPage from "./login";

export default function Panel({ theme, handleChangeTheme }) {
    return (
        <div className={`border border-warning p-5 ${theme}`}>
            <h1>Panel</h1>
            <LoginPage theme={theme} handleChangeTheme={handleChangeTheme} />
        </div>
    )
}