import { Component } from "react";

export default class FormControl extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { href, handleClick, children } = this.props
        if (href) {
            return (
                <a href={href}>{children}</a>
            )
        }
        return (
            <button className="btn btn-secondary" onClick={handleClick}>{children}</button>
        )
    }
}