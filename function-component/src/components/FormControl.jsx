export default function FormControl({ type, style, children }) {
    if(type === 'button') {
        return (
            <button className={`btn btn-${style}`}>{children}</button>
        )
    }
    return (
        <input type={type} className={`form-control ${style === 'danger' ? 'text-danger' : 'text-success'}`} />
    )
}
