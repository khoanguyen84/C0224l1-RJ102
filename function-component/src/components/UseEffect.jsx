/**
 * useEffect(callback, [deps])
 * TH1: useEffect(callback)
 *   -> callback sẽ luôn được gọi khi state được cập nhật
 * TH2: useEffect(callback, [])
 *   -> callback chỉ được gọi 1 lần duy nhất khi component được mounted vào DOM
 * TH3: useEffect(callback, [deps])
 *   -> callback sẽ được thực thi khi (các) giá trị trong mảng [deps] thay đổi
 * 
 * lưu ý: Render UI trước rồi mới thực hi callback
 * Chức năng: xử lý các tình huống side-effect
 */
import { useEffect, useState } from "react"
export default function UseEffect() {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    // useEffect(() => {
    //     // callapi
    //     console.log('component did mounted');
    // }, [])

    useEffect(() => {
        // callapi
        console.log('component did mounted and component did updated');
    })

    // useEffect(() => {
    //     // callapi
    //     console.log('component did mounted and component did updated');
    // }, [name]) //dependency

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
        document.title = title
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            {console.log('Render UI')}
            <h1>Learning useEffect</h1>
            <div className="form-group">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" onInput={handleChangeTitle} />
            </div>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onInput={handleChangeName} />
            </div>
        </>
    )
}