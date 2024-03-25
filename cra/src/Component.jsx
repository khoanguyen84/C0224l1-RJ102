import React from "react"

// function Component(props) {
//     console.log(props);
//     return (
//         <>
//             <h1>Heading 1 - {props.variant}</h1>
//             <h2>Heading 2 - {props.type}</h2>
//         </>
//     )
// }

class Component extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <>
                <h1>Children: {this.props.children}</h1>
                <h1>Heading 1 - {this.props.variant}</h1>
                <h2>Heading 2 - {this.props.type}</h2>
            </>
        )
    }
}

export default Component


// React.createElement(type, props)


/* 
    bài 1:
    Tạo 1 component, đặt tên Button
    Component nhận props có tên là type = primary | danger
    Hiển thị Button phụ thuộc type
    type = primary => button hiển thị có màu green
    type = danger => button hiển thị có màu red
*/

/* 
    bài 2:
    Tạo component, đặt tên Category
    trong component Category, có 1 danh sách các sản phẩm, mỗi sản phẩm có 3 thuộc tính: Id, Name, Photo
    Hiển thị danh sách các sản phẩm này vào trong 1 bảng
*/