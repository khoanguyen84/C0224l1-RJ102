import { Component } from "react";

export default class Sidebar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{width: "300px", height: '700px'}} className="bg-primary">
                <h1>Sidebar</h1>
            </div>
        )
    }
}