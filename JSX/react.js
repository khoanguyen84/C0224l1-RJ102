/**
 React.createElement(type, props, childrens)
 + type:
    1. tên thẻ (element/tag)
    2. Component
+ Props: thuộc tính (là một object), nếu không có thuộc tính thì giá trị là null
+ Children
    1. Text
    2. Element (tag) khác
 */

// const h1 = React.createElement("h1", {
//     style: {
//         color: 'red',
//         backgroundColor: 'yellow'
//     },
//     id: 'heading_1'
// }, "Heading 1")

// ReactDOM.render(h1, document.getElementById('root'))

// const handleLogin = function () {
//     alert('login')
// }
const handleLogin = () => alert('login')

const login_form = React.createElement('form', {
    className: 'form-login'
},
    React.createElement('div', { className: 'form-group' },
        React.createElement('label', null, "Username"),
        React.createElement('input', { type: 'text' })),
    React.createElement('div', { className: 'form-group' },
        React.createElement('label', null, "Password"),
        React.createElement('input', { type: 'password' })),
    React.createElement('div', { className: "form-group" },
        React.createElement('button', {
            type: 'button',
            className: 'btn',
            onClick: handleLogin
        }, "Login"),
        React.createElement('a', { href: '#' }, 'Register'))

)

ReactDOM.render(login_form, document.getElementById('root'))