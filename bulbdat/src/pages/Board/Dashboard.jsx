import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomeBoard from './HomeBoard';
import HigherPowerConsumption from './component_dashboard/HigherPowerConsumption';
import ConsumptionGraph from './component_dashboard/ConsumptionGraph';
import ConsumptionDay from './component_dashboard/ConsumptionDay';

export default function Dashboard() {
    return (
        <HomeBoard>
            <Layout className='w-full h-screen bg-lightGreen p-5 overflow-y-scroll px-6'>
                <Breadcrumb className='my-4 text-xl'>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>

                <Content className='border flex flex-col items-center justify-center'>
                    <div className="top flex justify-center items-center w-full h-full p-6">
                        <ConsumptionDay />

                        <HigherPowerConsumption />
                    </div>

                    <div className="down flex justify-center items-center w-full h-full">
                        <ConsumptionGraph />

                        <div className="left flex justify-around items-center w-full h-full">
                            <h1 className='text-3xl'>Something Here</h1>
                        </div>
                    </div>
                </Content>
            </Layout>
        </HomeBoard>
    );
}   