import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"

const students = [
    {
        id: '1',
        name: 'Hoàng Giang',
        email: 'giang@gmail.com'
    },
    {
        id: '2',
        name: 'Hoàng Đạt',
        email: 'dat@gmail.com'
    },
    {
        id: '3',
        name: 'Hoàng Việt',
        email: 'viet@gmail.com'
    },
    {
        id: '4',
        name: 'Công Nhựt',
        email: 'nhut@gmail.com'
    },
]
export default function StudentList() {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>
                                    <Link to={`/student/${student.id}`}>
                                        <FaEye role="button" className="text-success" />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}