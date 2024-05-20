export default function DocDetailPage(props) {
    const { params: { slugs } } = props
    if(slugs?.length === 2) {
        return (
            <h1>Concept {slugs[1]} of feature {slugs[0]}</h1>
        )
    }
    if(slugs?.length === 1) {
        return (
            <h1>Feature {slugs[0]}</h1>
        )
    }
    return (
        <h1>Document Details Page</h1>
    )
}