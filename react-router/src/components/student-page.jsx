import { Link, Outlet, useParams } from 'react-router-dom';
export default function StudentPage() {
    const { studentId } = useParams()
    return (
        <>
            <Link to={'/student/list'} className="btn btn-success me-2">Student List</Link>
            {studentId && <Link to={`/student/${studentId}`} className="btn btn-success">Student Detail</Link>}

            <Outlet />
        </>
    )
}