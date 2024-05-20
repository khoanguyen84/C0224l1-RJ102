import { notFound } from "next/navigation"

export default function ProductDetailPage(props) {
    const { params } = props
    if(params?.id >= 1000 ) {
        notFound()
    }
    return (
        <h1>Product Details {params?.id}</h1>
    )
}