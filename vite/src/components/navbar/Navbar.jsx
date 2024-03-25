import { Component } from "react";

export default class Navbar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container">
                    <a href="#" className="navbar-brand">Vite App</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}