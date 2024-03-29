/**
 * Hooks (xem hook như function)
 * Khi học 1 function
 * + Tên của function => ý nghĩa/ nhiệm vụ/ chức năng của function này
 * + Input: cái hàm này có cần input (đầu vào ko), nếu có thì bao nhiêu
 * + Output: cái hàm này, sau khi thực thi thì nó trả về cái gì
 */

/**
 * hook useState
 * Quy tắc: các hook luôn bắt đầu bởi từ "use"
 * cú pháp: [state, setState] = useState(initState) //result là 1 mảng, và cái mảng này có 2 phần tử
 * Chức năng: quản lý trang thái/ dữ liệu bên trong component
 * sử dung useState => tạo ra 1 vùng nhớ bên trong component, có biến state
 * giá trị khởi tạo của biến state là initState
 * mỗi khi thực thi hàm setState thì component sẽ được re-render
 */
import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        console.log('logic');
        setCount(count + 1)
    }
    return (
        <>
            {
                console.log('render')
            }
            <h1>{count}</h1>
            <button className="btn btn-warning"
                onClick={handleIncrement}
            >Increment</button>
        </>
    )
}