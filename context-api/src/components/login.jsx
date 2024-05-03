export default function LoginPage({ theme, handleChangeTheme  }) {
    return (
        <div className={`border border-suceess p-5 ${theme}`}>
            <button className='btn btn-sm btn-dark'
                onClick={handleChangeTheme}
            >Change theme</button>
            <h1>Login Page</h1>
        </div>
    )
}