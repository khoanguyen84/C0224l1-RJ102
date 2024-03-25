import { Component } from "react";
import MainLayout from "../layout/MainLayout";
import News from "../components/main/News";

export default class NewsPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MainLayout>
                <News/>
            </MainLayout>
            // <div className="container">
            //     <Navbar />
            //     <div className="d-flex justify-content-between">
            //         <Sidebar />
            //         {this.props.children}
            //     </div>
            //     <Footer />
            // </div>
        )
    }
}