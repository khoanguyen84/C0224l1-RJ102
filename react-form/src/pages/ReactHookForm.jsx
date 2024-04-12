import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const schema = yup.object({
    title: yup.string().required(),
    price: yup.number().required().typeError('price is a required field'),
    photo: yup.string().url().required(),
    discount: yup.boolean().required()
})
export default function ReactHookForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const handleSubmitProduct = (values) => {
        console.log(values);
    }
    return (
        <div className="container">
            <h5>Create Product</h5>
            <form onSubmit={handleSubmit(handleSubmitProduct)} className="w-50 p-2">
                <div className="form-group mb-2">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title?.message ? 'is-invalid' : ''}`}
                        {...register('title')}
                    />
                    <span className="invalid-feedback">{errors.title?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className={`form-control ${errors.price?.message ? 'is-invalid' : ''}`}
                        {...register('price')}
                    />
                    <span className="invalid-feedback">{errors.price?.message}</span>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Photo</label>
                    <input
                        type="url"
                        className={`form-control ${errors.title?.message ? 'is-invalid' : ''}`}
                        {...register('photo')}
                    />
                    <span className="invalid-feedback">{errors.photo?.message}</span>
                </div>
                <div className=" mb-3">
                    <label className="form-label">Have discount?</label>
                    <div className="form-check">
                        <input 
                            className={`form-check-input ${errors.discount?.message ? 'is-invalid' : ''}`}
                            type="radio" 
                            value={true}
                            {...register('discount')}
                        />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className={`form-check-input ${errors.discount?.message ? 'is-invalid' : ''}`}
                            type="radio" 
                            value={false}
                            {...register('discount')}
                        />
                        <label className="form-check-label">No</label>
                        <span className="invalid-feedback">{errors.discount?.message}</span>
                    </div>
                    
                </div>
                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-success me-2">Create</button>
                    <button type='button' className="btn btn-warning"
                        onClick={() => reset()}
                    >Cancel</button>
                </div>
            </form>
        </div>
    )
}