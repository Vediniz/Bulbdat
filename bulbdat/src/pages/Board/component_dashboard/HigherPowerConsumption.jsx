import React from "react";
import { Card } from "antd";

export default function HigherPowerConsumption() {
    return (
        <Card title="Maiores gastos" className='left w-1/3 h-full'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div>
                    Ambiente com maior gasto
                </div>
                <div>
                    Comodo com maior gasto
                </div>
                <div>
                    Dispositivo com maior gasto
                </div>
            </div>
        </Card>
    )
}