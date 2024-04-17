import { Link, Outlet } from 'react-router-dom';
export default function StaffPage() {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to={'/staff/list'} className='nav-link'>Staff List</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'>Staff Detail</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}