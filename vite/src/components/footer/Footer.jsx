import { Component } from "react";

export default class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="bg-secondary py-3">
                <footer className="container text-white">
                    Copyright &copy; {(new Date).getFullYear()}
                </footer>
            </div>
        )
    }
}