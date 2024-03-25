import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**
 * sử dụng cách tạo component bằng class
 * tạo 1 component tên là FormControl
 * sẽ nhận vào các props: href, handClick, children
 * nếu có href thì cái component FormControl sẽ là 1 đường link
 * nếu có handleClick thì cái component FormControl sẽ là 1 button và khi click vào button sẽ thực thi sự kiện handleClick
 * Tên hiển thị phụ thuộc vào children
 */
