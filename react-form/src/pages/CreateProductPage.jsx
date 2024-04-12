/**
 * {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "...",
  "images": ["...", "...", "..."]
}
 */

import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useState } from "react";
import { v4 as uuid } from "uuid";

const categoryList = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare"
]

const brandList = [
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei"
]

const schema = yup.object({
    title: yup.string().required(),
    price: yup.number().positive().required(),
    description: yup.string().required(),
    discountPercentage: yup.number().positive().required(),
    stock: yup.number().positive().required(),
    brand: yup.string().required(),
    category: yup.string().required(),
    thumbnail: yup.string().url(),
    images: yup.array()
})

export default function CreateProductPage() {
    const [imageList, setImageList] = useState([{
        id: uuid(),
        url: ''
    }])

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })
    const handleSubmitProduct = (values) => {
        const images = imageList.map((item) => item.url)
        values = {
            ...values,
            images: images
        }
        console.log(values);
    }
    const handleAddNewImageUrl = () => {
        setImageList([
            ...imageList,
            {
                id: uuid(),
                url: ''
            }
        ])
    }

    const handleInputImageUrl = (e, id) => {
        // let newImageList = imageList.map(image => {
        //     if(image.id === id) {
        //         image.url = e.target.value
        //     }
        //     return image
        // })
        // setImageList(newImageList)

        setImageList((prev) => {
            let newImageList = prev.map((image) => {
                if(image.id === id) {
                    image.url = e.target.value
                }
                return image
            })
            return newImageList
        })
    }
    const handleRemoveImageUrl = (id) => {
        setImageList((prev) => {
            let newImageList = prev.filter((image) => image.id !== id)
            return newImageList;
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(handleSubmitProduct)} className="row">
                <h3 className="text-success">Create Product</h3>
                <div className="col-6">
                    <div className="form-group mb-2">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className={`form-control`}
                            {...register('title')}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className={`form-control`}
                            {...register('price')}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Discount</label>
                        <input
                            type="text"
                            className={`form-control`}
                            {...register('discountPercentage')}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Stock</label>
                        <input
                            type="number"
                            className={`form-control`}
                            {...register('stock')}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Brand</label>
                        <select
                            className="form-select"
                            {...register('brand')}
                        >
                            {
                                brandList?.map((brand) => (
                                    <option key={brand}>{brand}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <div className="d-flex">
                            <button type="submit" className="btn btn-success flex-grow-1">
                                <FaPlus className="me-2" />
                                Create
                            </button>
                            <button type="button" className="btn btn-secondary flex-grow-1 ms-2">
                                <FaTimes className="me-2" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group mb-2">
                        <label className="form-label">Description</label>
                        <textarea
                            className={`form-control`}
                            cols="30"
                            rows="4"
                            {...register('description')}
                        ></textarea>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Category</label>
                        <select
                            className="form-select"
                            {...register('category')}
                        >
                            {
                                categoryList?.map((category) => (
                                    <option key={category}>{category}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Thumbnail</label>
                        <input
                            type="url"
                            className={`form-control`}
                            {...register('thumbnail')}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <label className="form-label">Image(s)</label>
                            <button type="button" className="btn btn-sm btn-dark"
                                onClick={handleAddNewImageUrl}
                            >
                                <FaPlus />
                            </button>
                        </div>
                        {
                            imageList?.map((image) => (
                                <div key={image?.id} className="d-flex align-items-center justify-content-between mb-2">
                                    <input
                                        type="url"
                                        className={`form-control`}
                                        onChange={(e) => handleInputImageUrl(e, image?.id)}
                                    />
                                    <button type="button" className="btn btn-sm btn-danger ms-2"
                                        onClick={() => handleRemoveImageUrl(image?.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            ))
                        }
                        <div className="row">
                            {
                                imageList?.map((image) => (
                                    <div key={image?.id} className="col-3 mb-2">
                                        <img src={image?.url} alt="" className="w-75"/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}