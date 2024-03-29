import { Component } from "react";

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="spinner-border text-success" role="status"></div>
                <div className="spinner-border text-danger" role="status"></div>
                <div className="spinner-border text-warning" role="status"></div>
            </div>
        )
    }
}