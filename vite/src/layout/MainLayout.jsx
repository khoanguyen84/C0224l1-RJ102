import { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

export default class MainLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="d-flex justify-content-between">
                    <Sidebar />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}