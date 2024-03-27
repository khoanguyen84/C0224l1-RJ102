import { Component } from "react";

export default class SmartPhone extends Component {
    constructor(props){
        super(props)
        this.state = {
            smartphoneList: []
        }
    }
    async componentDidMount() {
        let response = await fetch('https://dummyjson.com/products/category/skincare')
        let result = await response.json()
        this.setState({
            smartphoneList: result?.products
        })
    }
    render(){
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.smartphoneList?.map((phone) => (
                                <tr key={phone.id}>
                                    <td>{phone.id}</td>
                                    <td>{phone.title}</td>
                                    <td>{phone.brand}</td>
                                    <td>{phone.category}</td>
                                    <td>
                                        <img className="w-25" src={phone.thumbnail} alt="" />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}