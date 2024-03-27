import { Component } from "react";

export default class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
    componentDidMount() {
        console.log('>> Component Content did mount DOM');
    }

    componentWillUnmount() {
        console.log('>> Component Content will unmount DOM');
    }

    handleChangeValue = (event) => {
        // console.log(event);
        this.setState({
            text: event.target.value
        })
    }
    handleButtonClick = (event) => {
        console.log(event);
    }
    render(){
        console.log('>> render content component');
        return (
            <div className="container bg-success" style={{height: '800px'}}>
                <input 
                    type="text" 
                    className="form-control"
                    onInput={this.handleChangeValue}
                />
                <h1>{this.state.text || 'Content Component'}</h1>
            </div>
        )
    }
}