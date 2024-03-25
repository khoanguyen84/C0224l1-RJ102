import { Component } from 'react'
import './button.css'

// function Button(props){
//     // return (
//     //     <button style={{ backgroundColor: `${props?.type === 'primary' ? 'green' : props?.type === 'danger' ? 'red' : ''}` }}>
//     //         Button
//     //     </button>
//     // )
//     return (
//         <button className={props?.type}>
//             Login
//         </button>
//     )
// }

class Button extends Component {
    constructor(props) {
        super(props)
    }
    // handleClick = () => console.log('Xin anh em lần nữa')
    render() {
        console.log(this.props);
        return (
            <button className={this.props?.type}
                onClick={this.props.handleClick}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Button