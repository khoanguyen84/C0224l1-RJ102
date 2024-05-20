export default function ReviewPage({ params }) {
    return (
        <>
            <h1>List Review of Product with Id = {params?.id}</h1>
            <ul>
                <li>Review 1</li>
                <li>Review 2</li>
                <li>Review 3</li>
                <li>Review 4</li>
            </ul>
        </>
    )
}