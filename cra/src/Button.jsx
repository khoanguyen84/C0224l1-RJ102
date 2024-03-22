import './button.css'

function Button(props){
    // return (
    //     <button style={{ backgroundColor: `${props?.type === 'primary' ? 'green' : props?.type === 'danger' ? 'red' : ''}` }}>
    //         Button
    //     </button>
    // )
    return (
        <button className={props?.type}>
            Login
        </button>
    )
}

export default Button