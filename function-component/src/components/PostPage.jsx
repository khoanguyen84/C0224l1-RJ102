import { useEffect, useState } from "react"

export default function PostPage() {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        async function fetchPostList() {
            let response = await fetch('https://dummyjson.com/posts')
            let data = await response.json()
            setPostList(data?.posts)
        }
        fetchPostList()
    }, [])
    return (
        <>
            <h5>Post List</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList?.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    {
                                        post.tags?.map((tag) => (
                                            <span className="badge bg-secondary" key={tag}>{tag}</span>
                                        ))
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}