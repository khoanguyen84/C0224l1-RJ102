import { useParams } from "react-router-dom"

export default function StudentDetail() {
    const { studentId } = useParams()
    return (
        <>
            <h1>Student Detail - {studentId}</h1>
        </>
    )
}