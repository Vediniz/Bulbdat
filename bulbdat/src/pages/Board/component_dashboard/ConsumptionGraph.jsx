import React from "react";
import { Progress } from "antd";

export default function ConsumptionGraph() {
    return (
        <div className="flex justify-center items-center w-full h-full gap-10">
            <div>
                <Progress type="dashboard" percent={28} />
                <h1 className="text-2xl">Consumo</h1>
            </div>
            <div>
                <Progress type="dashboard" percent={75} gapDegree={30} />
                <h1 className="text-2xl">Consumo</h1>
            </div>
        </div>
    )
}