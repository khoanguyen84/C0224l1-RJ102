import LoginPage from "./login";
/**
 * consumer
 */
export default function Panel() {
    return (
        <div className={`border border-warning p-5`}>
            <h1>Panel</h1>
            <LoginPage />
        </div>
    )
}