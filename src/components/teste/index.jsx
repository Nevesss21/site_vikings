import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';
import './index.scss';

export default function Teste({ dados }) { 
    const [graficoLinha, setGraficoLinha] = useState(false);

    function alternarGrafico() {
        setGraficoLinha(!graficoLinha);
    }
    return (
        <div className="grafico-1">
            <button className="botao-alternar" onClick={alternarGrafico}>
                Alternar para {graficoLinha ? 'Gráfico de Barras' : 'Gráfico de Linhas'}
            </button>
            <ResponsiveContainer width="100%" height={400}>
                {graficoLinha ? (
                    <LineChart data={dados}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="name" stroke="#d3d3d3" />
                        <YAxis stroke="#d3d3d3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total_pessoas" stroke="#8884d8" strokeWidth={2} name="Total de Pessoas" />
                        <Line type="monotone" dataKey="maior" stroke="#a4de6c" strokeWidth={2} name="Maior de 18" />
                        <Line type="monotone" dataKey="menor" stroke="#d0ed57" strokeWidth={2} name="Menor de 18" />
                    </LineChart>
                ) : (
                    <BarChart data={dados}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="name" stroke="#d3d3d3" />
                        <YAxis stroke="#d3d3d3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total_pessoas" fill="#8884d8" name="Total de Pessoas" />
                        <Bar dataKey="maior" fill="#a4de6c" name="Maior de 18" />
                        <Bar dataKey="menor" fill="#d0ed57" name="Menor de 18" />
                    </BarChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}
