import React from "react";
import { Layout, Avatar } from "antd";
import SideMenu from "./SideMenu";

export default function HomeBoard(props) {

    return (
        <Layout className="min-h-screen">
            <Layout>
                <SideMenu />

                {props.children}
            </Layout>
        </Layout>
    )
}