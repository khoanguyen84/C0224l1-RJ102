import { FaQuestion, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()
    const handleBackToHome = () => {
        navigate(-1, { replace: true })
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <FaQuestionCircle size={60} className="text-warning" />
            <h1>Page Not Found</h1>
            {/* <Link to={'/'}>Back to Home Page</Link> */}
            <button className="btn btn-warning" onClick={handleBackToHome}>Back to Previous Page</button>
        </div>
    )
}