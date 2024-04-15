import { Link } from "react-router-dom";

export default function News() {
    return (
        <div className="bg-success">
            <h1>News Page</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to={`/news/ngoai-hang-anh/100`}>Ngoại hạng Anh</Link>
                </li>
                <li className="list-group-item">
                    <Link to={'/news/du-lich/300'}>Du lịch</Link>
                </li>
                <li className="list-group-item">
                    <Link to={'/news/quan-vot/450'}>Quần vợt</Link>
                </li>
            </ul>
        </div>
    )
}
