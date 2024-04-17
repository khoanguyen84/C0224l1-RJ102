import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaEye } from "react-icons/fa"
import dayjs from "dayjs"

export default function StaffList() {
    const [staffList, setStaffList] = useState()
    useEffect(() => {
        async function fetchStaffList() {
            let res = await fetch('https://jsonserver-vercel-api.vercel.app/student')
            let data = await res.json()
            setStaffList(data)
        }
        fetchStaffList()
    }, [])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Avatar</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Dob</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffList?.map((staff) => (
                            <tr key={staff.id}>
                                <td>{staff.id}</td>
                                <td>
                                    <img className="rounded-circle w-25" src={staff.avatarUrl} alt="" />
                                </td>
                                <td>{staff.fullname}</td>
                                <td>{staff.email}</td>
                                <td>{staff.gender ? 'Male' : 'Female'}</td>
                                <td>{dayjs(staff.dob).format('MMM DD YYYY')}</td>
                                <td>{staff.mobile}</td>
                                <td>
                                    <Link to={`/staff/${staff.id}`}>
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