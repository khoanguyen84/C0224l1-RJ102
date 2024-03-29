import { Component } from "react";
import Loading from "./Loading";

export default class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryList: [],
            selectedCategory: 'smartphones',
            productList: [],
            isLoading: false
        }
    }
    async componentDidMount() {
        this.fetchCategory()
        this.fetchProductByCategory()
    }

    handleChangeCategory = (e) => {
        this.setState({
            ...this.state,
            selectedCategory: e.target.value
        })
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedCategory !== this.state.selectedCategory) {
            this.setState({
                ...this.state,
                isLoading: true
            })
            let response = await fetch(`https://dummyjson.com/products/category/${this.state.selectedCategory}`)
            let data = await response.json();
            this.setState({
                ...this.state,
                productList: data?.products,
                isLoading: false
            })
        }
    }

    fetchCategory = async () => {
        let response = await fetch('https://dummyjson.com/products/categories')
        let data = await response.json()
        this.setState({
            ...this.state,
            categoryList: data
        })
    }
    fetchProductByCategory = async () => {
        let response = await fetch(`https://dummyjson.com/products/category/${this.state.selectedCategory}`)
        let data = await response.json();
        this.setState({
            ...this.state,
            productList: data.products
        })
    }
    render() {
        return (
            <div className="container">
                <div className="w-25 mb-2">
                    <label>Category</label>
                    <select className="form-select" onChange={this.handleChangeCategory}
                        defaultValue={'smartphones'}
                    >
                        {
                            this.state.categoryList?.map((category) => (
                                <option value={category}>{category}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="row">
                    {
                        this.state.isLoading ? <Loading/> : (
                            this.state?.productList?.map((product) => (
                                <div key={product.id} className="col-md-3">
                                    <div className="card" >
                                        <img src={product?.thumbnail} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product?.title}</h5>
                                            <p className="card-text">{product?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        )
    }
}