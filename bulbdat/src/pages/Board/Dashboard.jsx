import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import SideMenu from './SideMenu';
import { Content } from 'antd/es/layout/layout';

export default function Dashboard() {
    return (
        <Layout className="min-h-screen">
            <SideMenu />

            <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll px-6'>
                <Breadcrumb className='my-4 text-xl'>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Content className='border grid grid-cols-3 gap-5 p-6'>
                    Conteudo
                </Content>
            </Layout>

        </Layout>
    );
}   