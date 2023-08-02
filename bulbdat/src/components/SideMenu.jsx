import React from "react";
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider } = Layout;

export default function SideMenu() {
    const location = useLocation();

    return (
        <Sider className="h-[100vh] overflow-auto fixed left-0 top-0 bottom-0   ">
            <div className='text-white flex flex-col items-center justify-center h-1/6'>
                <Link to="/perfil" >
                    <h1>ICON</h1>
                </Link>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}
                className="flex flex-col h-4/6 justify-between">
                <Menu.Item key="/calculator">
                    <Link to="/calculator" >Calculadora</Link>
                </Menu.Item>
                <Menu.Item key="/environments">
                    <Link to="/environments">Ambientes</Link>
                </Menu.Item>
                <Menu.Item key="/rooms">
                    <Link to="/rooms">Cômodos</Link>
                </Menu.Item>
                <Menu.Item key="/devices">
                    <Link to="/devices">Dispositivos</Link>
                </Menu.Item>
            </Menu>
            <div className='text-white flex flex-col items-center h-1/6'>
                <h1>Sair</h1>
            </div>
        </Sider>
    )
}
