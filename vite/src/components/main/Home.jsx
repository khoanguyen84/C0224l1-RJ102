import { Component } from "react";
import FormControl from "../form-control/FormControl";

export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="flex-grow-1">
                <FormControl href={'https://codegym.vn'}>Go to CodeGym page</FormControl>
                <FormControl handleClick={() => alert('hello các anh em')}>Say hi</FormControl>
            </div>
        )
    }

}