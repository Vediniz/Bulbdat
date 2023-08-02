import React from 'react';
import { Layout } from 'antd';
import SideMenu from '../../components/SideMenu';

import HeaderBoard from '../../components/HeaderBoard';
import CardItem from '../../components/CardItem';
import devices from './databaseFake.js'

export default function Devices() {
    const items = devices
        
    return (
        <Layout className="min-h-screen">
            <SideMenu />

            <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll'>
                <HeaderBoard title='Dispositivos'/>

                <div className='grid grid-cols-3 gap-5'>
                    {items.map((item) => (
                        <CardItem item={item.name} />
                    ))}
                </div>
            </Layout>

        </Layout>
    );
}