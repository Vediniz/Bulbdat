import React from "react";
import { Card, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function ConsumptionDay() {
    return (
        <div className="flex items-center justify-center gap-8 w-full h-full">
            <Card bordered={false}>
                <Statistic
                    title="Dia menor consumo"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                        color: '#3f8600',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
            <Card bordered={false}>
                <Statistic
                    title="Dia maior consumo"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                        color: '#cf1322',
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
            </Card>
        </div>
    )
}