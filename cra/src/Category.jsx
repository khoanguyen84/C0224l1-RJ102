const categoryList = [
    {
        id: 1,
        name: 'flower',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJcUg9v6Oq0BhEh-GiVRrIQPBjR-hUm8lLBYUJSNl7w&s'
    },
    {
        id: 2,
        name: 'Coffee',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxE5xNxW-mfCRrcBODpm6IBI-r9OCoxd1EMxtAaXvDWA&s'
    }
]
export default function Category(){
    return (
        <table>
            <thead>
                <tr>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoryList?.map((cat) => (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.name}</td>
                            <td>
                                <img src={cat.photo} alt="" />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}