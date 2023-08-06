import React from "react";
import HomeBoard from "./HomeBoard";
import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Button from "../../components/Button";


export default function Calculator() {
    return (
        <HomeBoard>
            <Layout className="w-full h-screen bg-lightGreen p-5">
                <Breadcrumb className="my-4 text-xl">
                    <Breadcrumb.Item>Calculadora</Breadcrumb.Item>
                </Breadcrumb>

                <Content>
                    {/* Potencia do aparelho */}
                    <div className="flex flex-col justify-center items-center border text-lg h-full">
                        <label htmlFor="potencia">Potência do aparelho</label>
                        <input type="number" name="potencia" id="potencia" />

                        {/* Tempo de uso */}
                        <label htmlFor="tempo">Tempo de uso em horas</label>
                        <input type="number" name="tempo" id="tempoHora" />

                        {/* Tempo de uso em dias */}
                        <label htmlFor="tempo">Tempo de uso em dias</label>
                        <input type="number" name="tempo" id="tempoDia" />

                        {/* Quantidade de aparelhos */}
                        <label htmlFor="quantidade">Quantidade de aparelhos</label>
                        <input type="number" name="quantidade" id="quantidade" />

                        {/* Valor do kWh */}
                        <label htmlFor="valor">Valor do kWh</label>
                        <input type="number" name="valor" id="valor" />

                        {/* Resultado por Hora */}
                        <label htmlFor="resultado">Resultado por Hora</label>

                        {/* Resultado Total */}
                        <label htmlFor="resultado">Resultado Total</label>

                        {/* Botão para calcular */}
                        <Button>Calcular</Button>
                    </div>
                </Content>
            </Layout>
        </HomeBoard>
    )
}