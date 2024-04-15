import { useParams, useSearchParams, useLocation } from "react-router-dom"
export default function NewsDetail() {
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    console.log('params >>>', params);
    console.log('location >>>', location);
    const queryParams = [];

    for (let entry of searchParams.entries()) {
        queryParams.push(entry);
    }

    console.log(queryParams[0]);
    const { slug } = useParams()
    /**
     * params = {
     *  key: value
     * }
     * params = {
     *  newid: 'du-lich'
     * }
     */
    if (slug === 'ngoai-hang-anh') {
        return (
            <div>
                <h1>Giải bóng đá - Ngoại hạng Anh</h1>
            </div>
        )
    }
    if (slug === 'du-lich') {
        return (
            <div>
                <h1>Thông tin về du lich</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Thể thao - Quần vợt</h1>
        </div>
    )
}