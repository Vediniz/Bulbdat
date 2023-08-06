import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HeaderBoard from './HeaderBoard';

import devices from './databaseFake.js';
import CardItem from '../../components/CardItem';
import HomeBoard from './HomeBoard';

export default function Environments() {
    const items = devices;

    return (
        <HomeBoard>
            {/* <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll'>
                <HeaderBoard title='Ambientes' />

                <div className='grid grid-cols-3 gap-5'>
                    {items.map((item) => (
                        <CardItem item={item.name} />
                    ))}
                </div>

            </Layout> */}

            <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll px-6'>
                <Breadcrumb className='my-4 text-xl'>
                    <Breadcrumb.Item>Ambientes</Breadcrumb.Item>
                </Breadcrumb>
                <Content className='border grid grid-cols-3 gap-5 p-6'>
                    {items.map((item) => (
                        <CardItem item={item.name} />
                    ))}
                </Content>
            </Layout>
        </HomeBoard>
    );
}