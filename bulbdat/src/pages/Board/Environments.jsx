import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import devices from './databaseFake.js';
import HomeBoard from './HomeBoard';

const { Meta } = Card;

export default function Environments() {
    const items = devices;

    return (
        <HomeBoard>
            <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll px-6'>
                <Breadcrumb className='my-4 text-xl'>
                    <Breadcrumb.Item>Ambientes</Breadcrumb.Item>
                </Breadcrumb>
                <Content className='border grid grid-cols-3 gap-5 p-6'>
                    {items.map((item) => (
                        <Card className='w-72 mt-4 text-center'
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                title={item.name}
                                description="This is the description"
                            />
                        </Card>
                    ))}
                </Content>
            </Layout>
        </HomeBoard>
    );
}