import React from 'react';
import { Layout } from 'antd';
import SideMenu from '../../components/SideMenu';

export default function Calculator() {
    return (
        <Layout className="min-h-screen">
            <SideMenu />

            <Layout className='w-full h-screen flex items-center justify-center bg-lightGreen'>
                <h1>Calculator</h1>
            </Layout>

        </Layout>
    );
}   