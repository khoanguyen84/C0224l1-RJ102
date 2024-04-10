import { useFormik } from "formik"
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().min(5, "Tên phải có tối thiểu 5 ký tự").required('Bạn phải nhập Tên'),
    email: yup.string().email().required(),
    dob: yup.date().required()
})

export default function CreateStaffPage() {
    const { handleSubmit, values, handleChange, resetForm, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            dob: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    console.log(touched);
    return (
        <form onSubmit={handleSubmit} className="w-50">
            <h3 className="text-success fw-bolder py-2">Create Staff</h3>
            <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className={`form-control ${touched.name && errors?.name ? 'is-invalid' : ''}`}
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <span className="invalid-feedback">{touched.name && errors?.name}</span>
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className={`form-control ${touched.email && errors?.email ? 'is-invalid' : ''}`}
                    value={values.email}
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <span className="invalid-feedback">{touched.email && errors?.email}</span>
            </div>
            <div className="form-group mb-2">
                <label className="form-label">Date of birth</label>
                <input
                    type="date"
                    className={`form-control ${touched.dob && errors?.dob ? 'is-invalid' : ''}`}
                    value={values.dob}
                    name='dob'
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <span className="invalid-feedback">{touched.dob && errors?.dob}</span>
            </div>
            <div className="form-group mb-2">
                <button type="submit" className="btn btn-danger me-2">Create</button>
                <button type='button' className="btn btn-warning"
                    onClick={() => resetForm()}
                >Cancel</button>
            </div>
        </form>
    )
}