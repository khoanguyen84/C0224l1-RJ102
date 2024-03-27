import { Component } from "react";
import Resource from "./Resource";

const resources = ["posts", 'comments']
export default class JsonPlaceHolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
    }
    render() {
        console.log(this.state.selected);
        return (
            <div className="container">
                {
                    resources.map((item) => (
                        <button
                            key={item}
                            className={`${this.state.selected === item ? 'btn btn-warning' : 'btn btn-success'} ' me-2 `}
                            onClick={() => this.setState({ selected: item })}
                        >
                            {item}
                        </button>
                    ))
                }
                {
                    this.state.selected && <Resource type={this.state.selected} />
                }
            </div>
        )
    }
}