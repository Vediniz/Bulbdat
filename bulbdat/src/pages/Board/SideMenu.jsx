import React from "react";
import { Avatar, Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export default function SideMenu() {
    const location = useLocation();

    return (
        <Sider className="h-[100vh] overflow-auto fixed left-0 top-0 bottom-0 flex flex-col items-center py-4">
            <h1 className="text-3xl text-white h-1/6 mt-4">Bulbdat</h1>
            <div className='text-white flex flex-col items-center justify-center h-1/6'>
                <Link to="/perfil" >
                    <Avatar className="border border-white" size={64} icon={<UserOutlined />} />
                </Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}
                className="flex flex-col h-3/6 justify-between">
                <Menu.Item key="/board">
                    <Link to="/board">Home</Link>
                </Menu.Item>
                <Menu.Item key="/environments">
                    <Link to="/environments">Ambientes</Link>
                </Menu.Item>
                <Menu.Item key="/calculator">
                    <Link to="/calculator">Calculadora</Link>
                </Menu.Item>
            </Menu>
            <div className='text-white flex flex-col items-center h-1/6'>
                <h1>Sair</h1>
            </div>
        </Sider>
    )
}
