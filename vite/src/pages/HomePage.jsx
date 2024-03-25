import { Component } from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../components/main/Home";

export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MainLayout>
                <Home/>
            </MainLayout>
        )
    }
}