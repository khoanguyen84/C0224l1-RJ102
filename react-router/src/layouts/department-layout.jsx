import Department from "../components/department";

export default function DepartmentLayout({ children }) {
    return (
        <div className="container">
            <Department />
            {children}
        </div>
    )
}