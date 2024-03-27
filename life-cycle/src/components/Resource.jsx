import { Component } from "react";

export default class Resource extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    // componentDidUpdate() {
    //     this.fetchdata()
    // }
    // fetchdata = async () => {
    //     let response = await fetch(`https://jsonplaceholder.typicode.com/${this.props.type}`)
    //     let result = await response.json()
    //     console.log(result);
    // }
    async componentDidMount() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/${this.props.type}`)
        let result = await response.json()
        this.setState({
            data: result
        })
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            let response = await fetch(`https://jsonplaceholder.typicode.com/${this.props.type}`)
            let result = await response.json()
            this.setState({
                data: result
            })
        }
    }
    render() {
        return (
            <>
                <h1>Resource - {this.props.type}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title or Name</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data?.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title || item.name}</td>
                                    <td>{item.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}