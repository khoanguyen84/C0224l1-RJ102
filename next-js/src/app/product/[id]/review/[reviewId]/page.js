export default function ReviewDetailPage(props) {
    const { params } = props
    console.log(params);
    return (
        <h1>Review Id: { params?.reviewId } of Product Id: { params?.id }</h1>
    )
}