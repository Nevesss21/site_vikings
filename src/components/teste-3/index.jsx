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

export default function TesteTres({ dados }) { 
    const [graficoLinha, setGraficoLinha] = useState(false);

    function alternarGrafico() {
        setGraficoLinha(!graficoLinha);
    }

    return (
        <div className="chart-container">
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
                        <Line type="monotone" dataKey="masculino" stroke="#ffc658" strokeWidth={2} name="Masculino" />
                        <Line type="monotone" dataKey="feminino" stroke="#ff8042" strokeWidth={2} name="Feminino" />
                        <Line type="monotone" dataKey="outro" stroke="#8dd1e1" strokeWidth={2} name="Outro" />
                    </LineChart>
                ) : (
                    <BarChart data={dados}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="name" stroke="#d3d3d3" />
                        <YAxis stroke="#d3d3d3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total_pessoas" fill="#8884d8" name="Total de Pessoas" />
                        <Bar dataKey="masculino" fill="#ffc658" name="Masculino" />
                        <Bar dataKey="feminino" fill="#ff8042" name="Feminino" />
                        <Bar dataKey="outro" fill="#8dd1e1" name="Outro" />
                    </BarChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}
