import { Modal } from "bootstrap";
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
//IIFE
export default function ProductPage() {
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('smartphones')
    const [productList, setProductList] = useState([])
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        async function fetchCategoryList() {
            let res = await fetch('https://dummyjson.com/products/categories')
            let data = await res.json()
            setCategoryList(data)
        }
        fetchCategoryList()
    }, [])

    useEffect(() => {
        async function fetchProductByCategory() {
            if (selectedCategory) {
                let res = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
                let data = await res.json()
                setProductList(data?.products)
            }
        }
        fetchProductByCategory()
    }, [selectedCategory])

    const handleOpenDetailProduct = (product) => {
        const modalElement = document.getElementById('staticBackdrop')
        const detailModal = new Modal(modalElement)
        detailModal.show()
        setProductDetails(product)
    }
    const handleHideDetailProduct = () => {
        const modalElement = document.getElementById('staticBackdrop')
        const detailModal = Modal.getInstance(modalElement)
        detailModal.hide()
    }
    return (
        <>
            <div>
                <h5>Category List</h5>
                {
                    categoryList?.map((category) => (
                        <button
                            key={category}
                            className={`btn btn-sm ${category === selectedCategory ? 'btn-dark' : 'btn-success'} me-2 mb-2`}
                            onClick={() => setSelectedCategory(category)}
                        >{category}</button>
                    ))
                }
            </div>
            <div>
                <h5>Product List</h5>
                <div className="row">
                    {
                        productList?.map((product) => (
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title} - {product.brand}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">Price: {product.price}</p>
                                        <p className="card-text">Discount: {product.discountPercentage}%</p>
                                        <button className="btn btn-sm btn-warning"
                                            onClick={() => handleOpenDetailProduct(product)}
                                        >
                                            <TbListDetails className="me-2" />
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Detail Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Product Details</h5>
                            <button type="button" onClick={handleHideDetailProduct} className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {
                                    productDetails?.images?.map((image, index) => (
                                        <div key={index} className="col-md-3">
                                            <img className="w-100" src={image} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row mt-2">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Title</span>: {productDetails?.title}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Description</span>: {productDetails?.description}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Brand</span>: {productDetails?.brand}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Price</span>: {productDetails?.price}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Discount</span>: {productDetails?.discountPercentage}%
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Rating</span>: {productDetails?.rating}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Stock</span>: {productDetails?.stock}
                                    </li>
                                    <li className="list-group-item">
                                        <span className="fw-bolder">Category</span>: {productDetails?.category}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-sm btn-secondary d-flex align-items-center"
                                onClick={handleHideDetailProduct}
                            >
                                <FaTimes className="me-2" />
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}