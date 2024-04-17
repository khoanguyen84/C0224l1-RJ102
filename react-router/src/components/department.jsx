import { Link, Outlet } from "react-router-dom";

export default function Department(){
    return (
        <div className="container">
            <Link className="btn btn-link me-2" to={'/department/it'}>IT Department</Link>
            <Link className="btn btn-link me-2" to={'/department/hr'}>HR Department</Link>
            <Link className="btn btn-link me-2" to={'/department/sale'}>Sale Department</Link>
            <Outlet/>
        </div>
    )
}