import React from 'react';
import { Layout } from 'antd';
import SideMenu from '../../components/SideMenu';

export default function Perfil() {
    return (
        <Layout className="min-h-screen">
            <SideMenu />

            <Layout className='w-full h-screen flex items-center justify-center bg-lightGreen'>
                <h1 className='text-3xl'>Perfil</h1>
            </Layout>

        </Layout>
    );
}   