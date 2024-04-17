import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StaffDetail(){
    const [staff, setStaff] = useState({})
    const {staffid} = useParams()
    useEffect(() => {
        async function fetchStaffById(){
            let res = await fetch(`https://jsonserver-vercel-api.vercel.app/student/${staffid}`)
            let data = await res.json()
            setStaff(data)
        }
        fetchStaffById()
    }, [staffid])
    return (
        <>
            <div className='row'>
                <div className="col-md-2">
                    <img src={staff?.avatarUrl} alt="" />
                </div>
                <div className="col-md-10"></div>
            </div>
        </>
    )
}